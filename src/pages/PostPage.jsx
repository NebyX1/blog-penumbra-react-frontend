import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFetchPostBySlug } from '../api/useFetchPostBySlug';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from '../styles/postpage.module.css';

const PostPage = () => {
  const { slug } = useParams();
  const { data: post, isLoading, error } = useFetchPostBySlug(slug);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching post</div>;
  }

  const { author, title, content, date, image } = post;
  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <Container className="bg-white py-5">
      <Row className="pt-5">
        <Col>
          <Link to="/blog">
            <Button variant="outline-primary" className="mb-4">
              VOLVER
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="mb-4 shadow-sm">
            <Row>
              <Col md={4}>
                <Card.Img variant="top" src={image} alt={title} />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title className="text-primary">{author}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{formattedDate}</Card.Subtitle>
                  <Card.Text>{title}</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={10}>
          <article className="p-4 bg-white shadow-sm">
            <h1 className="text-center text-dark mb-4">{title}</h1>
            <ReactMarkdown remarkPlugins={[remarkGfm]} className={styles.content}>
              {content}
            </ReactMarkdown>
          </article>
        </Col>
      </Row>
    </Container>
  );
};

export default PostPage;
