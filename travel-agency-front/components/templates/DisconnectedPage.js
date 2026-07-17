import Image from "next/image";

import styles from "./DisconnectedPage.module.css";

function DisconnectedPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>اتصال با سرور برقرار نیست!</h1>
        <p>لطفا بعدا دوباره امتحان کنید.</p>
      </div>
      <div className={styles.image}>
        <Image
          src="/images/ErrorLampRobot.png"
          width={550}
          height={550}
          quality={100}
          alt="ErrorLampRobot"
        />
      </div>
    </div>
  );
}

export default DisconnectedPage;
