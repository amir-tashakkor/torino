import Image from "next/image";

import styles from "./PaymentPage.module.css";

function PaymentPage() {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <Image
          src="/icons/payment.svg"
          width={120}
          height={120}
          alt="payment"
        />
        <h1>درگاه پرداخت</h1>
        <p>برای تکمیل سفارش، اطلاعات کارت بانکی خود را وارد کنید.</p>
        <div className={styles.form}>
          <input placeholder="شماره کارت" disabled />
          <input placeholder="CVV2" disabled />
          <div className={styles.row}>
            <input placeholder="MM / YY" disabled />
            <input placeholder="رمز پویا" disabled />
          </div>
        </div>
        <button className={styles.button} disabled>
          پرداخت
        </button>
        <span className={styles.note}>
          این صفحه صرفاً جهت نمایش رابط کاربری طراحی شده است.
        </span>
      </div>
    </section>
  );
}

export default PaymentPage;
