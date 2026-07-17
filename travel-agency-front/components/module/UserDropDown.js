import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";

import { deleteCookie } from "../../utils/cookie";

import styles from "./UserDropDown.module.css";

function UserDropDown({ closeMenu }) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const logoutHandler = async () => {
    deleteCookie();
    queryClient.clear();
    closeMenu();
    await router.replace("/");
  };

  return (
    <div className={styles.dropdown}>
      <Link href="/profile" className={styles.item} onClick={closeMenu}>
        <Image
          width={20}
          height={20}
          quality={100}
          src="/images/profileMain.svg"
          alt="profile"
        />
        <span>اطلاعات حساب کاربری</span>
      </Link>
      <button className={styles.logout} onClick={logoutHandler}>
        <Image
          width={20}
          height={20}
          quality={100}
          src="/images/logout.svg"
          alt="logout"
        />
        <span>خروج از حساب کاربری</span>
      </button>
    </div>
  );
}

export default UserDropDown;
