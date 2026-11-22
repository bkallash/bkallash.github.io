import en from './en';
import ar from './ar';

export type Lang = 'en' | 'ar';

export const copy = { en, ar };

// '/work' -> '/ar/work' for Arabic; English lives at the root.
export const href = (lang: Lang, path: string) => (lang === 'ar' ? '/ar' : '') + path;
