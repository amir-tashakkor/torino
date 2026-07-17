import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const vehicleName = (vehicle) => {
  switch (vehicle) {
    case "airplane":
      return "هواپیما";
    case "bus":
      return "اتوبوس";
    case "ship":
      return "کشتی";
    case "train":
      return "قطار";
    default:
      return vehicle;
  }
};

const priceFormat = (price) => {
  return (price * 1800).toLocaleString("fa-IR");
};

const cityName = (city) => {
  switch (city) {
    case "Tehran":
      return "تهران";
    case "Sananndaj":
      return "سنندج";
    case "Isfahan":
      return "اصفهان";
    case "Sulaymaniyah":
      return "سلیمانیه";
    case "Hewler":
      return "هولر";
    case "Mazandaran":
      return "مازندران";
    case "Gilan":
      return "گیلان";
    case "Italy":
      return "ایتالیا";
    case "Madrid":
      return "مادرید";
    default:
      return city;
  }
};

const transactionsStatus = (status) => {
  switch (status) {
    case "Purchase":
      return "ثبت نام در تور گردشگری";
    default:
      return "ثبت نام در تور گردشگری";
  }
};

const dateFormatter = (date) => {
  return new DateObject({
    date,
    calendar: persian,
    locale: persian_fa,
  }).format("DD MMMM YYYY");
};

const toPersianNumber = (value) => {
  if (value === null || value === undefined) return "";

  return value.toString().replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]);
};

const formatIranDate = (dateString) => {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat("fa-IR", {
    calendar: "persian",
    timeZone: "Asia/Tehran",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
};

const getTourNumber = (id) => {
  let hash = 0;
  for (let i = 0; i < id?.length; i++) {
    hash = (hash * 31 + id?.charCodeAt(i)) >>> 0;
  }

  return String((hash % 900000) + 100000);
};

export {
  vehicleName,
  cityName,
  dateFormatter,
  toPersianNumber,
  priceFormat,
  formatIranDate,
  getTourNumber,
  transactionsStatus,
};
