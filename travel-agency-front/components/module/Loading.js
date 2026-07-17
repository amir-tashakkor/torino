import Image from "next/image";
import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.overlay}>
      <div className={styles.loader}>
        <div className={styles.orbit}>
          <div className={styles.plane}>✈️</div>
        </div>
        <div className={styles.earth}>
          <Image
            src="/icons/earth.svg"
            width={100}
            height={100}
            quality={100}
            alt="earth"
          />
        </div>
        <p>در حال بارگذاری...</p>
      </div>
    </div>
  );
}

export default Loading;
