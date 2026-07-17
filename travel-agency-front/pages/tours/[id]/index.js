import Head from "next/head";

import { serverFetch } from "@/services/http";
import TourDetailsPage from "@/templates/TourDetailsPage";

function TourDetails({ tour }) {
  return (
    <div>
      <Head>
        <title>تورینو | جزئیات تور</title>
        <meta name="description" content="Torino is a travel agency" />
      </Head>
      <TourDetailsPage tour={tour} />
    </div>
  );
}

export default TourDetails;

export async function getServerSideProps({ params }) {
  const tourData = await serverFetch(`/tour/${params?.id}`, null, {
    cache: "no-store",
  });
  return {
    props: { tour: tourData },
  };
}
