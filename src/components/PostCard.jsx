import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../styles/postcard.module.css';

const PostCard = ({ post }) => {
  return (
    <Card className={`mb-4 shadow-sm ${styles.customBorder}`}>
      <Row>
        <Col md={6}>
          <div
            className={`${styles.customBgImage} rounded-lg`}
            style={{
              backgroundImage: `url(${post.image})`,
              backgroundSize: 'cover',
            }}
          ></div>
        </Col>
        <Col md={6} className="p-4">
          <Card.Body>
            <Card.Title className={styles.customTextViolet}>
              <Link to={`/blog/${post.slug}`} className={styles.hoverUnderline}>
                {post.title}
              </Link>
            </Card.Title>
            <Card.Text className={`${styles.customTextViolet} mb-1`}>
              <strong>Autor:</strong> {post.author}
            </Card.Text>
            <Card.Text className={`${styles.customTextViolet} mb-1`}>
              <strong>Fecha:</strong> {new Date(post.date).toLocaleDateString()}
            </Card.Text>
            <Card.Text className={`${styles.customTextViolet} mb-2`}>
              <strong>Categorías:</strong> {post.category ? post.category : 'No categories'}
            </Card.Text>
            <Card.Text className={`${styles.customTextViolet} mb-4`}>{post.summary}</Card.Text>
            <Link to={`/blog/${post.slug}`}>
              <Button variant="outline-secondary" className={styles.customButton}>
                LEER EL ARTÍCULO
              </Button>
            </Link>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default PostCard;

