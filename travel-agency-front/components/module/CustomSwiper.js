import Image from "next/image";
import { useRef, useState } from "react";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { toPersianNumber } from "@/utils/format";

import styles from "./CustomSwiper.module.css";

export default function CustomSwiper() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className={styles.container}>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className={styles.swiper}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 1)}
      >
        <SwiperSlide>
          <Image src="/images/why-1.png" fill alt="why" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/why-2.png" fill alt="why" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/why-3.png" fill alt="why" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/why-4.png" fill alt="why" />
        </SwiperSlide>
      </Swiper>
      <div className={styles.controls}>
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className={styles.arrow}
        >
          <Image
            src="/images/arrow-right.svg"
            width={28}
            height={28}
            alt="previous"
          />
        </button>
        <span className={styles.counter}>
          {toPersianNumber(activeIndex)} / {toPersianNumber("4")}
        </span>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className={styles.arrow}
        >
          <Image
            src="/images/arrow-left.svg"
            width={28}
            height={28}
            alt="next"
          />
        </button>
      </div>
    </div>
  );
}
