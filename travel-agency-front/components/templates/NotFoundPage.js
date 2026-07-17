import Link from "next/link";
import Image from "next/image";

import styles from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>صفحه مورد نظر یافت نشد!</h1>
        <Link href="/">
          <p className={styles.text}>رفتن به صفحه اصلی</p>
        </Link>
      </div>
      <div className={styles.image}>
        <Image
          src="/images/ErrorTV.png"
          width={550}
          height={550}
          quality={100}
          alt="ErrorTV"
        />
      </div>
    </div>
  );
}

export default NotFoundPage;
