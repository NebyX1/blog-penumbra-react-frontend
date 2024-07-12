import React from "react";
import Snippet from "../components/common/Snippet";
import styles from "../styles/podcasts.module.css";
import YoutubeFeed from "../components/social/YoutubeFeed";

const Podcasts = () => {
  const pageTitle = "Podcasts";
  const description = "Notas, entrevistas, polémica, lo tenemos todo para perturbar el orden natural de las cosas, queremos molestar.";
  const image = "https://i.ibb.co/rbM0HdM/podcasts-head.webp";
  const url = "https://www.penumbra.press/podcasts";

  return (
    <>
      <Snippet
        title={pageTitle}
        description={description}
        image={image}
        url={url}
      />
      <div
        className={`${styles["position-relative"]} ${styles["cover-background"]}`}
        style={{ backgroundImage: `url(${image})` }}
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
