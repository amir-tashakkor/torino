import Head from "next/head";

import MyToursPage from "@/templates/MyTourPage";
import { useGetUserTours } from "@/services/queries";

function Tours() {
  const { data: tours, isPending } = useGetUserTours();
  return (
    <>
      <Head>
        <title>تورینو | تورهای من</title>
        <meta name="description" content="Torino is a travel agency" />
      </Head>
      <MyToursPage tours={tours} isPending={isPending} />
    </>
  );
}

export default Tours;
