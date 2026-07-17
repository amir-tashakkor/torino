import { useEffect } from "react";
import toast from "react-hot-toast";
import ReactOtpInput from "./ReactOtpInput";
import { useQueryClient } from "@tanstack/react-query";

import LoadingButton from "./LoadingButton";
// import ButtonLoading from "./LoadingButton";
import { toPersianNumber } from "@/utils/format";
import { useCheckOtp } from "@/services/mutations";

import styles from "./CheckOtp.module.css";

function CheckOtp({ mobile, code, setCode, error, setError, setOpen }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const queryClient = useQueryClient();
  const { mutate, isPending } = useCheckOtp();

  const submitHandler = (event) => {
    event.preventDefault();
    if (isPending) return;

    mutate(
      { mobile, code },
      {
        onSuccess: (data) => {
          setError(false);
          queryClient.invalidateQueries({
            queryKey: ["user"],
          });
          setOpen(false);
          toast.success("به تورینو خوش آمدید");
        },
        onError: (error) => {
          toast.error("کد وارد شده صحیح نیست!");
          console.log(error.message);
          setError(true);
        },
      },
    );
  };

  return (
    <form onSubmit={submitHandler}>
      <h2 className={styles.title}>ورود به حساب کاربری</h2>
      <p className={styles.phone}>
        کد ارسال شده به شماره &quot;{toPersianNumber(mobile)}&quot; را وارد
        کنید.
      </p>
      <ReactOtpInput code={code} setCode={setCode} error={error} />
      <LoadingButton
        className={styles.button}
        type="submit"
        loading={isPending}
      >
        ورود
      </LoadingButton>
    </form>
  );
}

export default CheckOtp;
