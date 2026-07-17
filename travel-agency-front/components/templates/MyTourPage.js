import Image from "next/image";

import Loading from "@/module/Loading";
import ProfileLayout from "@/templates/ProfileLayout";
import {
  cityName,
  dateFormatter,
  getTourNumber,
  priceFormat,
  toPersianNumber,
  vehicleName,
} from "@/utils/format";

import styles from "./MyTourPage.module.css";

function MyToursPage({ tours, isPending }) {
  if (isPending) return <Loading />;

  return (
    <ProfileLayout>
      <section className={styles.container}>
        {tours?.data?.length ? (
          tours?.data.map((tour, index) => (
            <article key={index} className={styles.tour}>
              <div className={styles.title}>
                <div className={styles.firstChild}>
                  <Image
                    src="/icons/sun-fog.svg"
                    width={24}
                    height={24}
                    quality={100}
                    alt="sun"
                  />
                  <h3>{tour.title}</h3>
                </div>
                <div className={styles.lastChild}>
                  <div>
                    <Image
                      width={24}
                      height={24}
                      quality={100}
                      src={`/icons/${tour.fleetVehicle}.svg`}
                      alt={tour.fleetVehicle}
                    />
                    <p>سفر با {vehicleName(tour.fleetVehicle)}</p>
                  </div>
                  <div>
                    <p
                      className={
                        tour.status === "completed"
                          ? styles.completed
                          : styles.inProgress
                      }
                    >
                      {tour.status === "completed"
                        ? "به اتمام رسیده"
                        : "در حال برگزاری"}
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.time}>
                <div className={styles.firstChild}>
                  <p>
                    {cityName(tour.origin.name)} به{" "}
                    {cityName(tour.destination.name)}{" "}
                  </p>
                  <span>• {dateFormatter(tour.startDate)}</span>
                </div>
                <div>
                  <p>تاریخ برگشت</p>
                  <span>• {dateFormatter(tour.endDate)}</span>
                </div>
              </div>
              <div className={styles.line}></div>
              <div className={styles.details}>
                <span>شماره تور {toPersianNumber(getTourNumber(tour.id))}</span>
                <span>
                  {" "}
                  مبلغ پرداخت شده {toPersianNumber(priceFormat(tour.price))}
                </span>
              </div>
            </article>
          ))
        ) : (
          <div className={styles.empty}>
            <p>هنوز توی هیج توری شرکت نکردی!!</p>
            <Image
              src="/images/empty-cart-img.webp"
              height={300}
              width={300}
              quality={100}
              alt="empty"
            />
          </div>
        )}
      </section>
    </ProfileLayout>
  );
}

export default MyToursPage;
