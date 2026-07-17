import Head from "next/head";

import TransactionsPage from "@/templates/TransactionsPage";
import { useGetUserTransactions } from "@/services/queries";

function Transactions() {
  const { data: transactions, isPending } = useGetUserTransactions();
  return (
    <>
      <Head>
        <title>تورینو | تراکنش‌ها</title>
        <meta name="description" content="Torino is a travel agency" />
      </Head>
      <TransactionsPage transactions={transactions} isPending={isPending} />
    </>
  );
}

export default Transactions;
