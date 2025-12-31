import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// combines class names with tailwind-merge for proper tailwind css class merging
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
