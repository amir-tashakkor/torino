"use client";

import Head from "next/head";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import CheckoutPage from "@/templates/CheckoutPage";
import { useCheckout, useUpdateUser } from "@/services/mutations";
import { useGetUserBasket, useGetUserData } from "@/services/queries";

function Checkout() {
  const router = useRouter();

  const { data: basketData } = useGetUserBasket();
  const { data: userData } = useGetUserData();

  const { mutate: updateUser } = useUpdateUser();
  const { mutate: checkout, isPending } = useCheckout();

  const checkoutHandler = (form) => {
    if (isPending) return;

    const checkoutData = {
      fullName: `${form.firstName} ${form.lastName}`,
      nationalCode: form.nationalCode,
      gender: form.gender,
      birthDate: form.birthDate,
    };

    const profileChanged =
      form.firstName !== (userData?.data?.firstName || "") ||
      form.lastName !== (userData?.data?.lastName || "") ||
      form.nationalCode !== (userData?.data?.nationalCode || "") ||
      form.gender !== (userData?.data?.gender || "") ||
      form.birthDate !== (userData?.data?.birthDate || "");

    const checkoutRequest = () => {
      checkout(checkoutData, {
        onSuccess: () => {
          toast.success("در حال انتقال به درگاه پرداخت...");
          setTimeout(() => {
            router.replace("/payment?status=success");
          }, 1500);
        },
        onError: () => {
          toast.error("ثبت سفارش انجام نشد.");
        },
      });
    };

    if (!profileChanged) {
      checkoutRequest();
      return;
    }

    updateUser(form, {
      onSuccess: () => {
        checkoutRequest();
      },
      onError: () => {
        toast.error("ذخیره اطلاعات پروفایل انجام نشد.");
      },
    });
  };

  return (
    <>
      <Head>
        <title>تورینو | ثبت و خرید نهائی</title>
        <meta name="description" content="Torino is a travel agency" />
      </Head>
      <CheckoutPage
        userData={userData?.data}
        tourData={basketData?.data}
        checkoutHandler={checkoutHandler}
        isPending={isPending}
      />
    </>
  );
}

export default Checkout;
