import Head from "next/head";

import DisconnectedPage from "@/templates/DisconnectedPage";

function Disconnected() {
  return (
    <>
      <Head>
        <title>تورینو | عدم اتصال به سرور</title>
        <meta name="description" content="Torino is a travel agency" />
      </Head>
      <DisconnectedPage />
    </>
  );
}

export default Disconnected;
