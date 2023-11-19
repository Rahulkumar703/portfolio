import screenfull from "screenfull"

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function PascalToSpaceSeprated(input: string) {
  return input.replace(/([a-z])([A-Z])/g, '$1 $2');
}


export const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export const enterFullScreen = () => {
  if (screenfull.isEnabled)
    screenfull.request();
}