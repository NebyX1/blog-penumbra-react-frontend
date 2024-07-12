import React from "react";
import { Container } from "react-bootstrap";
import Snippet from "../components/common/Snippet";
import styles from "../styles/home.module.css";
import InstagramFeed from "../components/social/InstagramFeed";
import LatestPosts from "../components/social/LatestPosts";

const Home = () => {
  const pageTitle = "Home";
  const description = "Somos Penumbra, el blog/revista que busca generar polémica y perturbaciones a la corrección política";
  const image = "https://i.ibb.co/px4B2CP/home-head.webp";
  const url = "https://www.penumbra.press";

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
