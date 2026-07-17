import Image from "next/image";

import styles from "./FinalContent.module.css";

function FinalContent() {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <div>
          <Image
            src="/icons/price.svg"
            width={121}
            height={109}
            quality={100}
            alt="price"
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>بصرفه ترین قیمت</h2>
          <p className={styles.text}>
            بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.
          </p>
        </div>
      </div>
      <div className={styles.contents}>
        <div>
          <Image
            src="/icons/support.svg"
            width={121}
            height={109}
            quality={100}
            alt="support"
          />{" "}
        </div>
        <div className={styles.content}>
          <h2>پشتیبانی</h2>
          <p>پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.</p>
        </div>
      </div>
      <div className={styles.contents}>
        <div>
          <Image
            src="/icons/satisfy.svg"
            width={121}
            height={109}
            quality={100}
            alt="satisfy"
          />{" "}
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>رضایت کاربران</h2>
          <p className={styles.text}>
            رضایت بیش از 10هزار کاربر از تور های ما.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FinalContent;
