import Link from "next/link";
import Image from "next/image";

import { priceFormat } from "@/utils/format";

import styles from "./TourCard.module.css";

function TourCard(props) {
  const { id, image, title, price, options } = props;

  return (
    <section className={styles.card}>
      <div className={styles.imageBox}>
        <Image
          className={styles.image}
          src={image}
          width={276}
          height={159}
          quality={100}
          alt={title}
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.options}>{options}</p>
        <div className={styles.footer}>
          <Link href={`/tours/${id}`} className={styles.button}>
            رزرو
          </Link>
          <p className={styles.price}>
            <span>{priceFormat(price)}</span>
            <span> تومان</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default TourCard;
