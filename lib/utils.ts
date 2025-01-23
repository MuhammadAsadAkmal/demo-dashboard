import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import i18n from '../i18n';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export async function preloadTranslations(lng: string, ns: string = 'translation') {
  const i18next = await i18n();
  await i18next.loadNamespaces(ns);
  return i18next.getFixedT(lng, ns);
}