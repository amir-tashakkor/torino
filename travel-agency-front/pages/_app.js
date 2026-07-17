import TanstackQueryProvider from "@/provider/TanstackQueryProvider";

import Layout from "@/layout/Layout";

import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <TanstackQueryProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TanstackQueryProvider>
  );
}

export default MyApp;
