"use client";

// Default
import React from "react";
import { FC } from "react";
import { useState } from "react";

// Styles
import styles from "./site-nav.module.css";

// Icons
import { HiMenuAlt3 } from "react-icons/hi";

const SiteNav = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.top}>
          <div className={styles.top_lt}>
            <h1 className={styles.logo}>Weins</h1>
          </div>
          <div className={styles.top_rt}>
            <button className={styles.menu}>
              <HiMenuAlt3 className={styles.menu_icons} />
            </button>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottom_lt}></div>
          <div className={styles.bottom_rt}>
            <ul>
              <li>
                Email :<a href="">example@gmail.com</a>
              </li>
              <li>
                Phone :<a href="">+6200000000000</a>
              </li>
              <li>
                insta :<a href="">example.insta</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Menu */}
      {isMenuClicked ? <div className={styles.main_menu}>Main Menu</div> : ""}
    </>
  );
};

export default SiteNav;
