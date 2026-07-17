import React from "react";
import Image from "next/image";

import Loading from "@/module/Loading";
import ProfileLayout from "@/templates/ProfileLayout";
import {
  formatIranDate,
  priceFormat,
  getTourNumber,
  toPersianNumber,
  transactionsStatus,
} from "@/utils/format";

import styles from "./TransactionsPage.module.css";

function TransactionsPage({ transactions, isPending }) {
  if (isPending) return <Loading />;

  return (
    <ProfileLayout>
      {transactions?.data?.length ? (
        <div className={styles.container}>
          <span className={styles.tableHeader}>تاریخ و ساعت</span>
          <span className={styles.tableHeader}>مبلغ(تومان)</span>
          <span className={styles.tableHeader}>نوع تراکنش</span>
          <span className={styles.tableHeader}>شماره سفارش</span>

          {transactions?.data.map((item) => (
            <React.Fragment key={item.id}>
              <span>{formatIranDate(item.createdAt)}</span>
              <span>{toPersianNumber(priceFormat(item.amount))}</span>
              <span>{transactionsStatus(item.type)}</span>
              <span>{` سفارش ${toPersianNumber(getTourNumber(item.id))} `}</span>
            </React.Fragment>
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <p>هنوز هیچ تراکنشی نداشتی!!</p>
          <Image
            src="/images/empty-cart-img.webp"
            height={300}
            width={300}
            quality={100}
            alt="empty"
          />
        </div>
      )}
    </ProfileLayout>
  );
}

export default TransactionsPage;
