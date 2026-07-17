import Head from "next/head";

import NotFoundPage from "@/templates/NotFoundPage";

function NotFound() {
  return (
    <>
      <Head>
        <title>تورینو | صفحه 404</title>
        <meta name="description" content="Torino is a travel agency" />
      </Head>
      <NotFoundPage />
    </>
  );
}

export default NotFound;
