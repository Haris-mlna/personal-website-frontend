import React from "react";
import { FC } from "react";
import styles from "./content.module.css";

const ContentOne: FC = () => {
  return (
    <>
      <div className={styles.container_one}>
        <h1 className={styles.title}>Welcome To Weins</h1>
        <p>{`"Cool Conversations, Hot Trends: Your Social Haven"`}</p>
        <button className={styles.intro}>{`Let's Get Started`}</button>
      </div>
    </>
  );
};

const ContentTwo: FC = () => {
  return (
    <>
      <div className={styles.container_two}>
        <h1></h1>
      </div>
    </>
  );
};

const ContentThree: FC = () => {
  return <>
    <div className={styles.container_three}>
      <h1>Content Three</h1>
    </div>
  </>;
};

export { ContentOne, ContentTwo, ContentThree };
