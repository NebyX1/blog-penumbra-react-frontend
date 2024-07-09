import React from 'react';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { useFetchPosts } from '../../api/useFetchPosts';
import PostCard from '../../components/PostCard';


const LatestPosts = () => {
  const { data: posts, isLoading, error } = useFetchPosts();

  if (isLoading) {
    return (
      <div className="text-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="text-center">
        Hemos tenido un error al cargar los posts...
      </Alert>
    );
  }

  const latestPosts = posts.slice(0, 3);

  return (
    <section className={`py-5`}>
      <Container>
              <Row className="g-4">
          {latestPosts.map((post) => (
            <Col key={post.id} xs={12} md={6} lg={4}>
              <PostCard post={post} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default LatestPosts;
