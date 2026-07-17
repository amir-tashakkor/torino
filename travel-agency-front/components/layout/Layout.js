import { Toaster } from "react-hot-toast";

import Footer from "./Footer";
import Header from "./Header";

import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          success: {
            style: {
              background: "#28A745",
              color: "#fff",
            },
          },
          error: {
            style: {
              background: "#dc3545",
              color: "#fff",
            },
          },
        }}
      />
    </>
  );
}

export default Layout;
