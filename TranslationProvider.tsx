'use client';

import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import initI18next from './i18n';

interface Props {
  children: ReactNode;
}

import { useEffect, useState } from 'react';

export default function TranslationProvider({ children }: Props) {
  const [i18n, setI18n] = useState<any>(null);

  useEffect(() => {
    initI18next().then((i18nInstance) => {
      setI18n(i18nInstance);
    });
  }, []);

  if (!i18n) {
    return null; // or a loading spinner
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
