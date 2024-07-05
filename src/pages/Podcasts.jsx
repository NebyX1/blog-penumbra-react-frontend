import React from "react";
import Snippet from "../components/common/Snippet";
import styles from "../styles/podcasts.module.css";
import YoutubeFeed from "../components/social/YoutubeFeed";

const Podcasts = () => {
  return (
    <>
      <Snippet pageName="Podcasts" />
      <div
        className={`${styles["position-relative"]} ${styles["cover-background"]}`}
        style={{ backgroundImage: "url(/src/assets/img/podcasts-head.webp)" }}
      >
        <div className={styles.overlay}>
          <h1 className={styles["header-text"]}>Nada que escuchar...</h1>
        </div>
      </div>
      <div className="bg-dark p-5 text-center">
       <YoutubeFeed />
      </div>
    </>
  );
};

export default Podcasts;
