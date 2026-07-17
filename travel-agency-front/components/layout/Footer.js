import Image from "next/image";

import styles from "./Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <div>
            <h3>تورینو</h3>
            <Link href="#">درباره ما</Link>
            <Link href="#">تماس با ما</Link>
            <Link href="#">چرا تورینو</Link>
            <Link href="#">بیمه مسافرتی</Link>
          </div>
          <div>
            <h3>خدمات مشتریان</h3>
            <Link href="#">پشتیبانی آنلاین</Link>
            <Link href="#">راهنمای خرید</Link>
            <Link href="#">راهنمای استرداد</Link>
            <Link href="#">پرسش و پاسخ</Link>
          </div>
        </div>
        <div className={styles.moreLinks}>
          <div className={styles.brands}>
            <Image
              src="/images/torino.png"
              width={146}
              height={44}
              quality={100}
              alt="torino"
            />
            <p>تلفن پشتیبانی : ۸۵۷۴-۰۲۱</p>
            <div className={styles.licenses}>
              <Image
                src="/images/logo5.png"
                width={80}
                height={80}
                quality={100}
                alt="logo"
              />
              <Image
                src="/images/logo1.png"
                width={80}
                height={80}
                quality={100}
                alt="logo"
              />
              <Image
                src="/images/logo2.png"
                width={80}
                height={80}
                quality={100}
                alt="logo"
              />
              <Image
                src="/images/logo3.png"
                width={80}
                height={80}
                quality={100}
                alt="logo"
              />
              <Image
                src="/images/logo4.png"
                width={80}
                height={80}
                quality={100}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        کلیه حقوق این وب سایت متعلق به تورینو می‌باشد.
      </div>
    </footer>
  );
}

export default Footer;
