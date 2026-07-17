import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

import styles from "./ProfileLayout.module.css";

function ProfileLayout({ children }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <section className={styles.container}>
      <aside className={styles.sidebar}>
        <Link
          href="/profile"
          className={`${styles.item} ${
            router.pathname === "/profile" ? styles.active : ""
          }`}
        >
          <div className={styles.itemWrapper}>
            <Image
              src="/icons/profile.svg"
              width={20}
              height={20}
              quality={100}
              alt="profile"
            />
            <span>پروفایل</span>
          </div>
        </Link>
        <Link
          href="/profile/my-tours"
          className={`${styles.item} ${
            router.pathname === "/profile/my-tours" ? styles.active : ""
          }`}
        >
          <div className={styles.itemWrapper}>
            <Image
              src="/icons/sun-fog.svg"
              width={20}
              height={20}
              quality={100}
              alt="sun"
            />
            <span>تور های من</span>
          </div>
        </Link>
        <Link
          href="/profile/transactions"
          className={`${styles.item} ${
            router.pathname === "/profile/transactions" ? styles.active : ""
          }`}
        >
          <div className={styles.itemWrapper}>
            <Image
              src="/icons/convert-card.svg"
              width={20}
              height={20}
              quality={100}
              alt="convert"
            />
            <span>تراکنش ها</span>
          </div>
        </Link>
      </aside>
      <section className={styles.content}>{children}</section>
    </section>
  );
}

export default ProfileLayout;
