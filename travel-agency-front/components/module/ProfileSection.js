import React from "react";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

import LoadingButton from "./LoadingButton";
// import ButtonLoading from "./LoadingButton";
import { toPersianNumber } from "@/utils/format";
import { useUpdateUser } from "@/services/mutations";

import styles from "./ProfileSection.module.css";

function ProfileSection({
  title,
  schema = {},
  register,
  watch,
  handleSubmit,
  control,
}) {
  const [editMode, setEditMode] = useState(false);
  const { mutate, isPending } = useUpdateUser();

  const submitHandler = (form) => {
    mutate(form, {
      onSuccess: () => {
        toast.success("اطلاعات با موفقیت ذخیره شد.");
        setEditMode(false);
      },
      onError: () => {
        toast.error("خطایی رخ داده است.");
      },
    });
  };
  const editModeHandler = (mode = true) => setEditMode(mode);

  const renderSection = (key, config) => {
    if (!editMode)
      return (
        <React.Fragment key={key}>
          <h4>{config.label}</h4>
          <p>
            {!watch(key)
              ? "-"
              : config.type == "number"
                ? toPersianNumber(watch(key))
                : config.type == "date"
                  ? new Date(watch(key)).toLocaleDateString("fa-IR")
                  : (config.enum && config.enum[watch(key)]) || watch(key)}
          </p>
        </React.Fragment>
      );
    return (
      <div key={key}>
        {config.customElem ? (
          config.customElem(register, control)
        ) : (
          <input
            {...register(key)}
            disabled={!!config.disabled}
            placeholder={config.label}
          />
        )}
      </div>
    );
  };

  return (
    <section className={styles.container}>
      <div className={styles.head}>
        <h2>{title}</h2>
        {!editMode ? (
          <button className={styles.editButton} onClick={editModeHandler}>
            <Image
              width={16}
              height={16}
              quality={100}
              src="/icons/edit-2.svg"
              alt="edit"
            />
            <span>ویرایش اطلاعات</span>
          </button>
        ) : (
          ""
        )}
      </div>
      <div className={editMode ? styles.editDetail : styles.gridDetail}>
        {Object.entries(schema).map(([key, config]) =>
          renderSection(key, config),
        )}
      </div>
      {editMode ? (
        <div className={styles.actions}>
          <LoadingButton
            type="submit"
            className={styles.submitAction}
            onClick={handleSubmit(submitHandler)}
            form="profile-form"
            loading={isPending}
          >
            تایید
          </LoadingButton>
          <button
            onClick={() => setEditMode(false)}
            className={styles.cancelAction}
          >
            انصراف
          </button>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default ProfileSection;
