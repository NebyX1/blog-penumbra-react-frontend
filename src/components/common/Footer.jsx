import React from "react";
import { Container, Nav } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import styles from "../../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className="pt-4">
        <div className={styles["social-icons"]}>
          <a
            href="https://www.facebook.com/people/Penumbra-Blog/61561278842759/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={32} className={styles["text-blue"]} />
          </a>
          <a
            href="https://www.instagram.com/penumbra_x_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={32} className={styles["text-pink"]} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCgU_KPMHVjEItMC5VzgJuZw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={32} className={styles["text-red"]} />
          </a>
        </div>
      </Container>
      <div className={`${styles.copyright}`}>
        <p className="mb-0">
          © <span>{new Date().getFullYear()}</span> Copyright:
          <LinkContainer to="/">
            <Nav.Link className={styles["text-purple"]}>Penumbra</Nav.Link>
          </LinkContainer>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
