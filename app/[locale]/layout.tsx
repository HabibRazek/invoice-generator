import { Inter } from "next/font/google";
import "../globals.css";
import dynamic from 'next/dynamic';
import { Providers } from "../providers";
import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale
} from 'next-intl/server';
import {ReactNode} from 'react';
import {locales} from '@/config';


const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  params: {locale: string};
};


export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params: { locale }
}: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale,
      site_name: 'Invoice Maker'
    }
  };
}



export default async function RootLayout({
  children,
  params: { locale }

}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };

}>) {

  const CrispWithNoSSR = dynamic(
    () => import('../../components/crisp'),
  )


  unstable_setRequestLocale(locale);

  const messages = await getMessages();


  return (
    <html lang={locale}>

      <body className={inter.className}>
        <Providers>
          <CrispWithNoSSR />
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
