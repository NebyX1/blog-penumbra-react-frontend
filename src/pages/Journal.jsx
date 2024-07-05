import React from "react";
import Snippet from "../components/common/Snippet";
import styles from "../styles/journal.module.css";

const Journal = () => {
  return (
    <>
      <Snippet pageName="Revista"/>
      <div
        className={`${styles["position-relative"]} ${styles["cover-background"]}`}
        style={{ backgroundImage: "url(/src/assets/img/journal-head.webp)" }}
      >
        <div className={styles.overlay}>
          <h1 className={styles["header-text"]}>Miran, pero no ven...</h1>
        </div>
      </div>
      <div className="bg-dark p-5 text-center">
        <h1 className="text-light display-1">Próximamente... tal vez...</h1>
      </div>      
    </>
  );
};

export default Journal;
