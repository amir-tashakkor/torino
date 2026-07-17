import Image from "next/image";

import ReserveButton from "@/module/ReserveButton";
import {
  vehicleName,
  cityName,
  dateFormatter,
  toPersianNumber,
  priceFormat,
} from "@/utils/format";

import styles from "./TourDetailsPage.module.css";

function TourDetailsPage({ tour }) {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.imageBox}>
            <Image
              width={397}
              height={265}
              quality={100}
              src={tour.image}
              alt={tour.title}
              className={styles.image}
            />
          </div>
          <div className={styles.info}>
            <h1 className={styles.title}>{tour.title}</h1>
            <p>۵ روز و ۴ شب</p>
            <div className={styles.options}>
              <div>
                <Image
                  src="/icons/user-tick.svg"
                  width={24}
                  height={24}
                  quality={100}
                  alt="tick"
                />
                <span>تورلیدر از مبدا</span>
              </div>
              <div>
                <Image
                  src="/icons/map.svg"
                  width={24}
                  height={24}
                  quality={100}
                  alt="map"
                />
                <span>برنامه سفر</span>
              </div>
              <div>
                <Image
                  src="/icons/medal-star.svg"
                  width={24}
                  height={24}
                  quality={100}
                  alt="medal"
                />
                <span>تضمین کیفیت</span>
              </div>
            </div>
            <div className={styles.priceRow}>
              <div className={styles.priceBox}>
                <span className={styles.price}>{priceFormat(tour.price)}</span>
                <span className={styles.toman}>تومان</span>
              </div>
              <div className={styles.reserveButton}>
                <ReserveButton id={tour.id} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.item}>
            <div>
              <Image
                width={20}
                height={20}
                quality={100}
                src="/icons/routing-2.svg"
                alt="routing"
              />
              <span>مبدا</span>
            </div>
            <p>{cityName(tour.origin.name)}</p>
          </div>
          <div className={styles.item}>
            <div>
              <Image
                width={20}
                height={20}
                quality={100}
                src="/icons/calendar.svg"
                alt="calendar"
              />
              <span>تاریخ رفت</span>
            </div>
            <p>{dateFormatter(tour.startDate)}</p>
          </div>
          <div className={styles.item}>
            <div>
              <Image
                width={20}
                height={20}
                quality={100}
                src="/icons/calendar-2.svg"
                alt="calendar"
              />
              <span>تاریخ برگشت</span>
            </div>
            <p>{dateFormatter(tour.endDate)}</p>
          </div>
          <div className={styles.item}>
            <div>
              <Image
                src={`/icons/${tour.fleetVehicle}.svg`}
                width={20}
                height={20}
                quality={100}
                alt={tour.fleetVehicle}
              />
              <span>وسیله نقلیه</span>
            </div>
            <p>{vehicleName(tour.fleetVehicle)}</p>
          </div>
          <div className={styles.item}>
            <div>
              <Image
                width={20}
                height={20}
                quality={100}
                src="/icons/profile-2user.svg"
                alt="profile"
              />
              <span>ظرفیت</span>
            </div>
            <p>
              {toPersianNumber(tour.availableSeats)}
              <span className={styles.gray}>
                {" "}
                از {toPersianNumber(tour.capacity)} نفر
              </span>
            </p>
          </div>
          <div className={styles.item}>
            <div>
              <Image
                width={20}
                height={20}
                quality={100}
                src="/icons/security.svg"
                alt="security"
              />
              <span>بیمه</span>
            </div>
            <p className={tour.insurance ? styles.success : styles.danger}>
              {tour.insurance ? "بیمه ۵۰ هزار دیناری" : "ندارد"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TourDetailsPage;
