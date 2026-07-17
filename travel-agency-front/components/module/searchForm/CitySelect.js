"use client";

import Image from "next/image";
import { Controller } from "react-hook-form";
import { useEffect, useRef, useState } from "react";

import { CITIES } from "./constants";

import styles from "./CitySelect.module.css";

function CitySelect({ control, name, label, icon }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const outsideClick = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const escapeHandler = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", outsideClick);
    document.addEventListener("keydown", escapeHandler);

    return () => {
      document.removeEventListener("mousedown", outsideClick);
      document.removeEventListener("keydown", escapeHandler);
    };
  }, [isOpen]);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => {
        const selectedCity = CITIES.find((city) => city.id === value);

        return (
          <div ref={containerRef} className={styles.container}>
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className={styles.button}
            >
              <div className={styles.content}>
                <Image
                  width={20}
                  height={20}
                  quality={100}
                  src={icon}
                  alt={label}
                  className={styles.icon}
                />
                <span className={styles.text}>
                  {selectedCity?.name || label}
                </span>
              </div>
              <Image
                width={20}
                height={20}
                quality={100}
                src="/icons/arrow-down.svg"
                alt="arrow"
                className={`${styles.arrow} ${isOpen ? styles.rotate : ""}`}
              />
            </button>
            {isOpen && (
              <ul className={styles.list}>
                {CITIES.map((city) => (
                  <li
                    key={city.id}
                    onClick={() => {
                      onChange(city.id);
                      setIsOpen(false);
                    }}
                    className={`${styles.item} ${
                      city.id === value ? styles.active : ""
                    }`}
                  >
                    {city.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      }}
    />
  );
}

export default CitySelect;
