import { I18nContext } from '@/app/i18n/context';
import type { FC, PropsWithChildren } from 'react';

type LanguageProps = {
  lng: string;
};
export const I18nProvider: FC<PropsWithChildren<LanguageProps>> = ({ children, lng }) => {


  return <I18nContext.Provider value={lng}>{children}</I18nContext.Provider>;
};
