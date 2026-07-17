"use client";

import QueryString from "qs";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import CitySelect from "./CitySelect";
import useQuery from "@/hooks/query";
import DateRangeField from "./DateRangeField";
import { flattenObject } from "@/utils/helper";

import styles from "./SearchBox.module.css";

function SearchBox() {
  const router = useRouter();
  const { getQuery, removeAllQuery } = useQuery();

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      originId: getQuery("originId") || "",
      destinationId: getQuery("destinationId") || "",
    },
  });

  const submitHandler = (form) => {
    const query = QueryString.stringify(flattenObject(form));
    router.push(`?${query}`);
  };

  const clearHandler = () => {
    reset({
      originId: "",
      destinationId: "",
      date: undefined,
    });
    removeAllQuery();
  };

  return (
    <section className={styles.searchSection}>
      <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
        <CitySelect
          control={control}
          name="originId"
          label="مبدا"
          icon="/icons/origin.svg"
        />
        <CitySelect
          control={control}
          name="destinationId"
          label="مقصد"
          icon="/icons/destination.svg"
        />
        <DateRangeField control={control} />
        <button type="submit" className={styles.searchButton}>
          جستجو
        </button>
        <button
          type="button"
          onClick={clearHandler}
          aria-label="حذف فیلترها"
          className={styles.clearButton}
        >
          ✕
        </button>
      </form>
    </section>
  );
}

export default SearchBox;
