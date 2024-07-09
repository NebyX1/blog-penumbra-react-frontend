import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from '../styles/postcard.module.css';

const JournalCard = ({ journal }) => {
  return (
    <Card className={`mb-4 ${styles.cardShadow} ${styles.transparentBackground}`}>
      <Card.Img variant="top" src={journal.image} className={styles.customBgImage} />
      <Card.Body>
        <Card.Title className={styles.customTextViolet}>
          {journal.title}
        </Card.Title>
        <Card.Text className={`${styles.customTextViolet} mb-1`}>
          <strong>Número:</strong> {journal.number}
        </Card.Text>
        <Card.Text className={`${styles.customTextViolet} mb-1`}>
          <strong>Año:</strong> {journal.year}
        </Card.Text>
        <Card.Text className={`${styles.customTextViolet} mb-4`}>
          <strong>Fecha:</strong> {new Date(journal.date).toLocaleDateString()}
        </Card.Text>
        <Button variant="outline-secondary" href={journal.url} target="_blank" className={styles.customButton}>
          Descargar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default JournalCard;
