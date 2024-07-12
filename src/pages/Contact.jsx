import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Snippet from "../components/common/Snippet";
import styles from "../styles/contact.module.css";

const Contact = () => {
  const pageTitle = "Contacto";
  const description = "Nadie debería estar solo en su vejez, pensó. Pero es inevitable.";
  const image = "https://i.ibb.co/3SZ0McH/contact-head.webp";
  const url = "https://www.penumbra.press/contact";

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
          <h1 className={styles["header-text"]}>Habrá respuesta... tal vez...</h1>
        </div>
      </div>
      <div className={`bg-dark ${styles["text-violet-800"]} py-5`}>
        <Container className="p-2">
          <Row className="text-center">
            <Col>
              <h2 className="display-6 font-light p-5">
                ¿Querés enviar un artículo o simplemente descargar tu ira con nosotros?
              </h2>
            </Col>
          </Row>
          <Row className="d-flex flex-column flex-md-row text-center text-md-left justify-content-between">
            <Col md={4} className={`mb-4 mb-md-0 pb-4 pb-md-0 ${styles["border-violet-800"]} border-end-md border-bottom`}>
              <h2 className="h5 font-light mb-2">LLÁMANOS:</h2>
              <p className="h2 font-bold">(+598) 95975766</p>
            </Col>
            <Col md={4} className={`mb-4 mb-md-0 pb-4 pb-md-0 ${styles["border-violet-800"]} border-end-md border-bottom`}>
              <h2 className="h5 font-light mb-2">ENVÍANOS UN MAIL:</h2>
              <p className="h2 font-bold">info@penumbra.press</p>
            </Col>
            <Col md={4} className="d-flex align-items-center justify-content-center">
              <Button
                href="mailto:info@penumbra.press"
                variant="outline-secondary"
                className={`border ${styles["border-violet-800"]} py-2 px-6 font-light ${styles["hover-bg-violet-800"]} ${styles["hover-text-white"]}`}
              >
                ENVIAR MAIL
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;
