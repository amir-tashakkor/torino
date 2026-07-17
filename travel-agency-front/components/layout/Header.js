import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { QueryClient } from "@tanstack/react-query";
import { useRef, useState, useEffect } from "react";

import Modal from "@/modal/Modal";
import AuthPage from "@/templates/AuthPage";
import { deleteCookie } from "@/utils/cookie";
import { toPersianNumber } from "@/utils/format";
import UserDropDown from "@/module/UserDropDown";
import { useGetUserData } from "@/services/queries";

import styles from "./Header.module.css";

function Header() {
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const router = useRouter();

  const menuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const { data } = useGetUserData();
  const user = data?.data;
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const logout = async () => {
    deleteCookie();
    QueryClient.clear();
    closeMenu();
    await router.replace("/");
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      setShowMenu(false);
    }
    function handler(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [mobileMenuOpen]);

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <button
            className={styles.hamburger}
            aria-label="باز کردن منو"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <span className={mobileMenuOpen ? styles.hamburgerLineTop : ""} />
            <span className={mobileMenuOpen ? styles.hamburgerLineMid : ""} />
            <span
              className={mobileMenuOpen ? styles.hamburgerLineBottom : ""}
            />
          </button>
          <div className={styles.logo}>
            <Image
              width={100}
              height={80}
              quality={100}
              src="/images/torino.png"
              alt="Torino"
            />
          </div>
          <nav className={styles.nav}>
            <Link href="/" className={styles.main}>
              صفحه اصلی
            </Link>
            <Link href="#">خدمات گردشگری</Link>
            <Link href="#">درباره ما</Link>
            <Link href="#">تماس با ما</Link>
          </nav>
          {mobileMenuOpen && (
            <div
              className={styles.mobileMenuOverlay}
              onClick={(e) => {
                if (e.target === e.currentTarget) closeMobileMenu();
              }}
            >
              <nav className={styles.mobileNav} ref={mobileMenuRef}>
                {user && (
                  <>
                    <div className={styles.mobileUserInfo}>
                      <Image
                        width={24}
                        height={24}
                        src="/icons/profile.svg"
                        alt="profile"
                      />
                      <span>{toPersianNumber(user.mobile)}</span>
                    </div>
                    <Link href="/profile" onClick={closeMobileMenu}>
                      پروفایل
                    </Link>
                    <Link href="/profile/my-tours" onClick={closeMobileMenu}>
                      تورهای من
                    </Link>
                    <Link
                      href="/profile/transactions"
                      onClick={closeMobileMenu}
                    >
                      تراکنش‌ها
                    </Link>
                    <button
                      type="button"
                      className={styles.logoutButton}
                      onClick={() => {
                        logout();
                        closeMobileMenu();
                      }}
                    >
                      خروج از حساب
                    </button>
                  </>
                )}
                <Link
                  href="/"
                  className={styles.main}
                  onClick={closeMobileMenu}
                >
                  صفحه اصلی
                </Link>
                <Link href="#" onClick={closeMobileMenu}>
                  خدمات گردشگری
                </Link>
                <Link href="#" onClick={closeMobileMenu}>
                  درباره ما
                </Link>
                <Link href="#" onClick={closeMobileMenu}>
                  تماس با ما
                </Link>
              </nav>
            </div>
          )}
          <div className={styles.user}>
            {!user ? (
              <>
                <button className={styles.button} onClick={() => setOpen(true)}>
                  <div className={styles.desktop}>
                    <Image
                      width={24}
                      height={24}
                      quality={100}
                      src="/icons/loginProfile.svg"
                      alt="user"
                    />
                    ورود | ثبت نام
                  </div>
                  <div className={styles.mobile}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.6799 14.62L14.2399 12.06L11.6799 9.5"
                        stroke="#28A745"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 12.0601H14.17"
                        stroke="#28A745"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20"
                        stroke="#28A745"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              </>
            ) : (
              <div className={styles.userWrapper} ref={menuRef}>
                <button
                  className={styles.userButton}
                  onClick={() => {
                    if (isMobile) {
                      setMobileMenuOpen(true);
                      return;
                    }
                    setShowMenu((prev) => !prev);
                  }}
                >
                  <Image
                    width={24}
                    height={24}
                    quality={100}
                    src="/icons/loginProfile.svg"
                    alt="profile"
                  />
                  <span>
                    {user?.firstName
                      ? `${user?.firstName} ${user?.lastName}`
                      : toPersianNumber(user?.mobile)}
                  </span>
                  <Image
                    width={24}
                    height={24}
                    quality={100}
                    src="/icons/arrow-down.svg"
                    alt="arrow"
                    className={showMenu ? styles.rotate : ""}
                  />
                </button>
                {showMenu && !isMobile && (
                  <UserDropDown closeMenu={() => setShowMenu(false)} />
                )}
              </div>
            )}
          </div>
        </div>
      </header>
      <Modal open={open} onClose={() => setOpen(false)}>
        <AuthPage setOpen={setOpen} />
      </Modal>
    </>
  );
}

export default Header;
