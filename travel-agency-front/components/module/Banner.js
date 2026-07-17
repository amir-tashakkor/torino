import Image from "next/image";

import styles from "./Banner.module.css";

function Banner() {
  return (
    <div className={styles.container}>
      <Image src="/images/banner.png" width={1000} height={800} alt="banner" />
    </div>
  );
}

export default Banner;
