import { createAuthClient } from 'better-auth/react';

// Create and export the auth client
// Use window.location.origin to work with Vite's proxy in development
export const authClient = createAuthClient({
    baseURL: typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000'
});

// For now, just export the available methods
export const signIn = authClient.signIn;
export const signUp = authClient.signUp;
export const signOut = authClient.signOut;
