import Image from "next/image";
import { DatePicker } from "zaman";
import { Controller } from "react-hook-form";

import styles from "./DateRangeField.module.css";

function DateRangeField({ control, name = "date" }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange } }) => (
        <div className={styles.wrapper}>
          <Image
            width={20}
            height={20}
            quality={100}
            src="/icons/calendar.svg"
            alt="calendar"
            className={styles.icon}
          />

          <DatePicker
            range
            round="x2"
            accentColor="#28a745"
            position="left"
            inputClass={styles.input}
            inputAttributes={{ placeholder: "تاریـخ" }}
            onChange={(e) =>
              onChange({
                startDate: e.from,
                endDate: e.to,
              })
            }
          />
        </div>
      )}
    />
  );
}

export default DateRangeField;
