import React from "react";
import { Container } from "react-bootstrap";
import Snippet from "../components/common/Snippet";
import styles from "../styles/home.module.css";
import InstagramFeed from "../components/social/InstagramFeed";
import LatestPosts from "../components/social/LatestPosts";

const Home = () => {
  return (
    <>
      <Snippet pageName="Home" />
      <div
        className={`${styles["position-relative"]} ${styles["cover-background"]}`}
        style={{ backgroundImage: "url(/src/assets/img/home-head.webp)" }}
      >
        <div className={styles.overlay}>
          <h1 className={styles["header-text"]}>Bienvenidos a Penumbra</h1>
        </div>
      </div>
      <section className="bg-dark text-center p-5">
      <h1 className="text-light">Últimos Posts</h1>
        <LatestPosts />
      </section>
      <section className="bg-dark text-center p-5">
        <h1 className="text-light">Algo para mirar...</h1>
        <Container className="mt-5 d-flex justify-content-center">
          <InstagramFeed />
        </Container>
      </section>
    </>
  );
};

export default Home;
