import React from "react";
import { Link } from "react-router-dom";
import Snippet from "../components/common/Snippet";
import styles from "../styles/journal.module.css";

const NotFound = () => {
  const pageTitle = "Página No Encontrada";
  const description = "El gato le dijo a Alicia que da lo mismo el camino a tomar si no sabes a dónde ir.";
  const image = "https://i.ibb.co/w7WXjDL/404-head.webp";
  const url = "https://www.penumbra.press/404";

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
