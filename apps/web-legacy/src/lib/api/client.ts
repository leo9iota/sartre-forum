import { treaty } from '@elysiajs/eden';
import type { App } from '@sartre/server';

export const api = treaty<App>('localhost:6969');
