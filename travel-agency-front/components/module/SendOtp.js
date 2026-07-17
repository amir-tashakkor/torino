import { useEffect } from "react";
import toast from "react-hot-toast";

import { useSendOtp } from "@/services/mutations";

import styles from "./SendOtp.module.css";
import LoadingButton from "./LoadingButton";
// import ButtonLoading from "./LoadingButton";

function SendOtp({ setStep, setMobile, mobile }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const { mutate, isPending } = useSendOtp();

  const submitHandler = (event) => {
    event.preventDefault();
    if (isPending) return;

    if (mobile.length === 0) {
      toast.error("شماره موبایل را وارد کنید.");
      return;
    }

    if (!mobile.startsWith("09")) {
      toast.error("شماره موبایل باید با 09 شروع شود.");
      return;
    }

    if (mobile.length !== 11) {
      toast.error("شماره موبایل باید 11 رقم باشد.");
      return;
    }

    if (!/^09\d{9}$/.test(mobile)) {
      toast.error("شماره موبایل معتبر نیست.");
      return;
    }

    mutate(
      { mobile },
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message);
          setStep(2);
          console.log(data);
        },
        onError: (error) => {
          toast.error(error);
        },
      },
    );
  };

  return (
    <form onSubmit={submitHandler}>
      <h2 className={styles.title}>ورود به تورینو</h2>
      <p className={styles.phone}>شماره موبایل خود را وارد کنید</p>
      <input
        className={styles.input}
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        maxLength={11}
        placeholder="۴۲۵۳***۰۹۱۲"
        value={mobile}
        onChange={(e) => {
          const value = e.target.value.replace(/\D/g, "");
          setMobile(value);
        }}
      />
      <LoadingButton
        className={styles.button}
        type="submit"
        loading={isPending}
      >
        ارسال کد تایید
      </LoadingButton>
    </form>
  );
}

export default SendOtp;
