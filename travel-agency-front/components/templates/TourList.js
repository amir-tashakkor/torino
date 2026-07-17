import TourCard from "@/module/TourCard";

import styles from "./TourList.module.css";

function TourList({ toursData }) {
  if (!toursData?.length) {
    return <p className={styles.empty}>نتیجه‌ای یافت نشد</p>;
  }

  return (
    <div className={styles.main}>
      <h1>همه‌ تـــورهــا</h1>
      <main className={styles.container}>
        {toursData.map((tour) => (
          <TourCard key={tour.id} {...tour} />
        ))}
      </main>
    </div>
  );
}

export default TourList;
