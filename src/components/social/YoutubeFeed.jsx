import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from '../../styles/youtubefeed.module.css';

const YoutubeFeed = () => {
  return (
    <section className={styles.youtubeSection}>
      <Container className="text-center py-5">
        <Row>
          <Col>
            <h2 className="display-4 text-primary mb-4">Visita Nuestro Canal de YouTube</h2>
            <p className="lead text-secondary mb-5">
              ¡Explora nuestros últimos podcasts, suscríbete y mantente al día con nuestras actualizaciones!
            </p>
            <Button 
              href="https://www.youtube.com/channel/UCgU_KPMHVjEItMC5VzgJuZw" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-lg"
              variant="primary"
            >
              Ir al Canal de YouTube
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default YoutubeFeed;