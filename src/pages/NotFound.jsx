import React from "react";
import { Link } from "react-router-dom";
import Snippet from "../components/common/Snippet";
import styles from "../styles/journal.module.css";

const NotFound = () => {
  return (
    <>
      <Snippet pageName="Página No Encontrada"/>
      <div
        className={`${styles["position-relative"]} ${styles["cover-background"]}`}
        style={{ backgroundImage: "url(https://i.ibb.co/w7WXjDL/404-head.webp)" }}
      >
        <div className={styles.overlay}>
          <h1 className={styles["header-text"]}>Parece que te has perdido...</h1>
        </div>
      </div>
      <div className="bg-dark p-5 text-center">
        <h1 className="text-light display-1">Página no encontrada</h1>
        <Link to="/" className="btn btn-dark mt-3">Home</Link>
      </div>
    </>
  );
};

export default NotFound;
