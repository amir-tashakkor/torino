import { DatePicker } from "zaman";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

import { useGetUserData } from "@/services/queries";
import ProfileLayout from "@/templates/ProfileLayout";
import { dateFormatter } from "@/utils/format";
import ProfileSection from "@/module/ProfileSection";

import styles from "./ProfilePage.module.css";
import Loading from "@/module/Loading";

const sections = [
  {
    title: "اطلاعات حساب کاربری",
    schema: {
      email: { label: "ایمیل" },
      mobile: { label: "شماره موبایل", disabled: true, type: "number" },
    },
  },
  {
    title: "اطلاعات شخصی",
    schema: {
      firstName: { label: "نام" },
      lastName: { label: "نام خانوادگی" },
      nationalCode: { label: "کد ملی", type: "number" },
      gender: {
        label: "جنسیت",
        enum: { male: "مرد", female: "زن" },
        customElem: (register) => (
          <>
            <select {...register("gender")}>
              <option value="">انتخاب کنید</option>
              <option value="male">مرد</option>
              <option value="female">زن</option>
            </select>
          </>
        ),
      },
      birthDate: {
        label: "تاریخ تولد",
        type: "date",
        customElem: (register, control) => (
          <Controller
            control={control}
            name="birthDate"
            render={({ field: { value, onChange } }) => (
              <DatePicker
                value={value}
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
              />
            )}
          />
        ),
      },
    },
  },
  {
    title: "اطلاعات بانکی",
    schema: {
      "payment.shaba_code": {
        label: "شماره شبا",
        type: "number",
      },
      "payment.debitCard_code": { label: "شماره کارت", type: "number" },
      "payment.accountIdentifier": { label: "شماره حساب", type: "number" },
    },
  },
];

function ProfilePage() {
  const { data, isPending } = useGetUserData();

  const { register, handleSubmit, reset, watch, control } = useForm();

  useEffect(() => {
    if (!data) return;

    reset({
      firstName: data.data.firstName || "",
      lastName: data.data.lastName || "",
      mobile: data.data.mobile || "",
      email: data.data.email || "",
      nationalCode: data.data.nationalCode || "",
      birthDate: data.data.birthDate || "",
      gender: data.data.gender || "",
      payment: {
        shaba_code: data.data?.payment?.shaba_code || "",
        debitCard_code: data.data?.payment?.debitCard_code || "",
        accountIdentifier: data.data?.payment?.accountIdentifier || "",
      },
    });
  }, [data, reset]);

  if (isPending) return <Loading />;

  return (
    <ProfileLayout>
      <form id="profile-form">
        {sections.map((item, index) => (
          <ProfileSection
            key={index}
            handleSubmit={handleSubmit}
            register={register}
            watch={watch}
            title={item.title}
            schema={item.schema}
            control={control}
          />
        ))}
      </form>
    </ProfileLayout>
  );
}

export default ProfilePage;
