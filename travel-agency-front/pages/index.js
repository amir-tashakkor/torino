import Head from "next/head";

import { serverFetch } from "@/services/http";

import WhyTorino from "@/module/WhyTorino";
import FinalContent from "@/module/FinalContent";
import ContactBanner from "@/module/ContactBanner";
import TourList from "@/templates/TourList";
import HomePage from "@/templates/HomePage";

function Home({ toursData }) {
  return (
    <>
      <Head>
        <title>تورینو | صفحه اصلی</title>
        <meta name="description" content="Torino is a travel agency" />
      </Head>
      <HomePage />
      <TourList toursData={toursData} />
      <ContactBanner />
      <WhyTorino />
      <FinalContent />
    </>
  );
}

export default Home;

export async function getServerSideProps(params) {
  const data = await serverFetch("/tour", params.query, {
    cache: "no-store",
  });

  return {
    props: {
      toursData: data,
    },
  };
}
