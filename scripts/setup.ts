// Setup script that can run without dependencies installed
// Uses Bun's built-in APIs first, then imports typed shell after dependencies are installed

async function runCommand(cmd: string, cwd?: string): Promise<void> {
    const proc = Bun.spawn(cmd.split(' '), {
        cwd: cwd || process.cwd(),
        stdout: 'inherit',
        stderr: 'inherit',
    });
    const exitCode = await proc.exited;
    if (exitCode !== 0) {
        throw new Error(`Command failed with exit code ${exitCode}: ${cmd}`);
    }
}

async function fileExists(path: string): Promise<boolean> {
    try {
        return await Bun.file(path).exists();
    } catch {
        return false;
    }
}

(async () => {
    try {
        console.log('Setting up sartre development environment...');

        console.log('Creating .env file...');
        if (await fileExists('.env')) {
            console.log('.env already exists');
        } else if (await fileExists('.env.example')) {
            await runCommand('cp .env.example .env');
            console.log('.env created from .env.example');
        } else {
            console.log('No .env.example found, you may need to create .env manually');
        }

        console.log('Installing root dependencies...');
        await runCommand('bun install');

        console.log('Installing frontend dependencies...');
        await runCommand('bun install', 'frontend');

        // Now we can import the typed shell API since dependencies are installed
        const { $ } = await import('bun');

        console.log('Stopping existing containers...');
        await $`docker compose down`;

        console.log('Starting database container...');
        await $`docker compose up -d postgres-db`;

        console.log('Waiting for database to be fully ready...');
        await new Promise((resolve) => setTimeout(resolve, 6969));

        console.log('Pushing database schema...');
        try {
            await $`bunx drizzle-kit push`;
        } catch (error) {
            console.error('Failed to push schema:', error);
            throw error;
        }

        console.log('Setup complete!\n');
        console.log('Development URLs:');
        console.log('Frontend:   http://localhost:3001');
        console.log('Backend:    http://localhost:3000');
        console.log('API Docs:   http://localhost:3000/docs\n');
        console.log('Start development with the following command:');
        console.log('$ bun start');
    } catch (error) {
        console.error('Setup failed:', error);
        process.exit(1);
    }
})();
