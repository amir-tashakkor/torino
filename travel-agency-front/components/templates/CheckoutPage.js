import Image from "next/image";
import { useEffect } from "react";
import { DatePicker } from "zaman";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";

import LoadingButton from "@/module/LoadingButton";
// import ButtonLoading from "@/module/LoadingButton";
import { dateFormatter, priceFormat, toPersianNumber } from "@/utils/format";

import styles from "./CheckoutPage.module.css";

function CheckoutPage({ userData, tourData, checkoutHandler, isPending }) {
  const fullName =
    `${userData?.firstName || ""} ${userData?.lastName || ""}`.trim();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm();

  useEffect(() => {
    if (!userData) return;

    reset({
      fullName:
        `${userData?.firstName || ""} ${userData?.lastName || ""}`.trim(),
      nationalCode: userData?.nationalCode || "",
      gender: userData?.gender || "",
      birthDate: userData?.birthDate || "",
    });
  }, [userData, reset]);

  return (
    <section className={styles.container}>
      <form className={styles.wrapper} onSubmit={handleSubmit(checkoutHandler)}>
        <div className={styles.formBox}>
          <div className={styles.title}>
            <Image
              src="/icons/profile.svg"
              width={24}
              height={24}
              quality={100}
              alt="profile"
            />
            <h2>مشخصات مسافر</h2>
          </div>
          <div className={styles.fields}>
            <div className={styles.field}>
              <input
                type="text"
                placeholder="نام و نام‌خانوادگی"
                {...register("fullName", {
                  required: "نام و نام‌خانوادگی الزامی است",
                })}
              />
              {errors.fullName && (
                <span className={styles.error}>{errors.fullName.message}</span>
              )}
            </div>
            <div className={styles.field}>
              <input
                type="text"
                placeholder="کد ملی"
                maxLength={10}
                {...register("nationalCode", {
                  required: "کد ملی الزامی است",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "کد ملی معتبر نیست",
                  },
                })}
              />
              {errors.nationalCode && (
                <span className={styles.error}>
                  {errors.nationalCode.message}
                </span>
              )}
            </div>
            <div className={styles.field}>
              <Controller
                control={control}
                name="birthDate"
                rules={{
                  required: "تاریخ تولد الزامی است",
                }}
                render={({ field: { value, onChange } }) => (
                  <DatePicker
                    onChange={(date) => onChange(date.value)}
                    inputClass={styles.dateInput}
                    round="x2"
                    accentColor="#28A745"
                    position="center"
                    inputAttributes={{
                      placeholder: value
                        ? dateFormatter(value)
                        : "تاریخ تولد را انتخاب کنید",
                    }}
                    defaultValue={value}
                  />
                )}
              />
              {errors.birthDate && (
                <span className={styles.error}>{errors.birthDate.message}</span>
              )}
            </div>
            <div className={styles.field}>
              <select
                {...register("gender", {
                  required: "جنسیت را انتخاب کنید",
                })}
              >
                <option value="">انتخاب کنید</option>
                <option value="male">مرد</option>
                <option value="female">زن</option>
              </select>
              {errors.gender && (
                <span className={styles.error}>{errors.gender.message}</span>
              )}
            </div>
          </div>
        </div>
        <div className={styles.summary}>
          <div className={styles.tourInfo}>
            <h4>{tourData?.title}</h4>
            <p>۵ روز و ۴ شب</p>
          </div>
          <div className={styles.dashed}></div>
          <div className={styles.priceBox}>
            <span>قیمت نهایی</span>
            <strong>
              {toPersianNumber(priceFormat(tourData?.price))} تومان
            </strong>
          </div>
          <LoadingButton
            type="submit"
            className={styles.button}
            loading={isPending}
          >
            پرداخت و تکمیل خرید
          </LoadingButton>
        </div>
      </form>
    </section>
  );
}

export default CheckoutPage;
