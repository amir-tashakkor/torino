import Image from "next/image";

import { toPersianNumber } from "@/utils/format";

import styles from "./ContactBanner.module.css";

function ContactBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.ad}>
        <div className={styles.adTitle}>
          <h3>
            خرید تلفنی از <span>تورینو</span>
          </h3>
          <h4>به هرکجا که میخواهید!</h4>
        </div>
        <div className={styles.addPicture}>
          <Image
            width={308}
            height={225}
            quality={100}
            src="/images/professional-cartoon-man.png"
            alt="professional-cartoon-man"
          />
        </div>
      </div>
      <div className={styles.call}>
        <div className={styles.callTitle}>
          <p>{toPersianNumber("021-1840")}</p>
          <Image
            width={24}
            height={24}
            quality={100}
            src="/images/call.svg"
            alt="call"
          />
        </div>
        <button>اطلاعات بیشتر</button>
      </div>
    </div>
  );
}

export default ContactBanner;
