import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

import { DefaultSeo } from 'next-seo';
import SEO from "../../next-seo.config";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionProvider session={session}>
      <DefaultSeo {...SEO} />
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
}
