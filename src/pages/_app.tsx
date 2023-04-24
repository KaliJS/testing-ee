import { FC } from 'react';
import Head from 'next/head';
import { Router } from 'next/router';
import type { NextComponentType, NextPageContext } from 'next';
import type { AppProps } from 'next/app';
import { wrapper } from 'store';
import { Provider } from 'react-redux';
import NProgress from 'nprogress';
import { CacheProvider } from '@emotion/react';
import type { EmotionCache } from '@emotion/cache';

// import { Toaster } from 'react-hot-toast';

import Layout from 'core/layouts';
import ThemeComponent from 'core/theme/themeComponent';
import WindowWrapper from 'core/window-wrapper';

// import ReactHotToast from 'src/@core/styles/libs/react-hot-toast';

import { createEmotionCache } from 'core/utils/create-emotion-cache';

import 'styles/globals.css';

type ExtendedNextPage<P = any, IP = P> = NextComponentType<NextPageContext, IP, P> & {
  getLayout?: (page: React.ReactElement) => React.ReactElement;
};

type ExtendedAppProps = AppProps & {
  Component: ExtendedNextPage;
  emotionCache: EmotionCache;
};

const clientSideEmotionCache = createEmotionCache();

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

const App: FC<ExtendedAppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Expent</title>
          <meta name="description" content="Expent" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        </Head>

        <ThemeComponent>
          <WindowWrapper>{getLayout(<Component {...pageProps} />)}</WindowWrapper>
        </ThemeComponent>
      </CacheProvider>
    </Provider>
  );
};

export default App;
