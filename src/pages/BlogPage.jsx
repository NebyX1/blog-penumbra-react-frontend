import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import PostCard from '../components/PostCard';
import { useFetchPosts } from '../api/useFetchPosts';
import ReactPaginate from 'react-paginate';
import styles from '../styles/blogpage.module.css';

const BlogPage = () => {
  const { data: posts, isLoading, error } = useFetchPosts();
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching posts</div>;
  }

  // Obtener categorías únicas
  const categories = ['all', ...new Set(posts.map(post => post.category))];

  // Filtrar posts según la categoría seleccionada
  const filteredPosts = selectedCategory === 'all' ? posts : posts.filter(post => post.category === selectedCategory);

  const postsPerPage = 3;
  const offset = currentPage * postsPerPage;
  const currentPosts = filteredPosts.slice(offset, offset + postsPerPage);
  const pageCount = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(0); // Resetear a la primera página cuando se cambia la categoría
  };

  return (
    <>
      <div className={`${styles['position-relative']} ${styles['cover-background']}`} style={{ backgroundImage: 'url(/src/images/blog-bg.webp)' }}>
        <div className={styles.overlay}>
          <h1 className={styles['header-text']}>
            OPINIONES SIN COMPROMISOS
          </h1>
        </div>
      </div>
      <Container>
        <Row className="my-4">
          <Col md={4} className="offset-md-4">
            <Form.Select value={selectedCategory} onChange={handleCategoryChange}>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'Todas las Categorías' : category}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
        <Row className="g-4 py-4">
          {currentPosts.map((post) => (
            <Col key={post.id} xs={12} md={6} lg={4}>
              <PostCard post={post} />
            </Col>
          ))}
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <ReactPaginate
              previousLabel={'Anterior'}
              nextLabel={'Siguiente'}
              breakClassName={styles['page-item']}
              breakLinkClassName={styles['page-link']}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={styles['pagination']}
              pageClassName={styles['page-item']}
              pageLinkClassName={styles['page-link']}
              previousClassName={styles['page-item']}
              previousLinkClassName={styles['page-link']}
              nextClassName={styles['page-item']}
              nextLinkClassName={styles['page-link']}
              activeClassName={styles['active']}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BlogPage;
