/** Prefix for root-relative assets when the site is served from a subpath (GitHub Pages). */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const withBase = (path: string) => `${BASE_PATH}${path}`;
