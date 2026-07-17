import PaymentPage from "@/templates/PaymentPage";
import Head from "next/head";

function Payment() {
  return (
    <div>
      <Head>
        <title>تورینو | پرداخت</title>
        <meta name="description" content="Torino is a travel agency" />
      </Head>
      <PaymentPage />
    </div>
  );
}

export default Payment;
