"use client";

// Default
import React from "react";
import { FC } from "react";
import { useState } from "react";

// Styles
import styles from "./slider.module.css";

interface SliderProps {
  props: Array<{
    name: string;
    content: React.ReactNode;
  }>;
}

const Slider: FC<SliderProps> = ({ props }) => {

  const [isController, setIsController] = useState(0);

  const handleSlider = (int: number) => {
    const slider = document?.getElementById("slider") as HTMLElement;

    setIsController(int);
    slider.style.transform = `translateX(${int * -100}%)`;
    console.log(int * -100);
  };

  return (
    <>
      <div className={styles.slider_container}>
        <div className={styles.controller}>
          {props.map((item, index) => (
            <button
              key={index}
              className={isController === index ? styles.button_active : styles.button}
              onClick={() => {
                handleSlider(index);
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className={styles.parent_slider} id="slider">
          {props.map((item, index) => (
            <div key={index} className={styles.slider}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};


export default Slider;
