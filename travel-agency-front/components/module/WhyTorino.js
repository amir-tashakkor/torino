"use client";

import CustomSwiper from "@/module/CustomSwiper";

import styles from "./WhyTorino.module.css";

function WhyTorino() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <div className={styles.icon}>
            <p className={styles.question}>؟</p>
          </div>
          <h2>
            چرا <span>تورینو</span>؟
          </h2>
        </div>
        <h3>تور طبیعت گردی و تاریخی</h3>
        <p>
          اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
          طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
          طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
          آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی
          را خریداری کنید.
        </p>
      </div>
      <div>
        <CustomSwiper />
      </div>
    </section>
  );
}

export default WhyTorino;
