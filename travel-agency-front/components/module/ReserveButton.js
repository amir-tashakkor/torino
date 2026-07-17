import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import LoadingButton from "./LoadingButton";
// import ButtonLoading from "./LoadingButton";
import { useAddToBasket } from "@/services/mutations";

import styles from "./ReserveButton.module.css";

function ReserveButton({ id }) {
  const { mutate, isPending } = useAddToBasket();

  const router = useRouter();

  const cartHandler = () => {
    if (isPending) return;

    mutate(id, {
      onSuccess: (data) => {
        toast.success(data?.data?.message);
        router.push("/checkout");
      },
      onError: (error) => {
        toast.error("برای ثبت تور لطفا لاگین کنید");
      },
    });
  };

  return (
    <LoadingButton
      onClick={cartHandler}
      className={styles.reserveButton}
      loading={isPending}
    >
      رزرو و خرید
    </LoadingButton>
  );
}

export default ReserveButton;
