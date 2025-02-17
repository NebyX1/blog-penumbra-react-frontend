import React, { useState } from "react";
import { Container, Row, Col, Form, Alert, Spinner } from "react-bootstrap";
import PostCard from "../components/PostCard";
import { useFetchPosts } from "../api/useFetchPosts";
import ReactPaginate from "react-paginate";
import Snippet from "../components/common/Snippet";
import styles from "../styles/blogpage.module.css";

const BlogPage = () => {
  const { data: posts, isLoading, error } = useFetchPosts();
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");

  if (isLoading) {
    return  <div className="text-center mt-5">
    <Spinner animation="border" variant="primary" />
  </div>;
  }

  if (error) {
    return <Alert variant="danger" className="text-center mt-5">
    Hemos tenido un error al cargar los posts...
  </Alert>;
  }

  // Obtener categorías únicas
  const categories = ["all", ...new Set(posts.map((post) => post.category))];

  // Filtrar posts según la categoría seleccionada
  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

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

  const pageTitle = "Blog";
  const description = "Nuestra República y su prensa caerán o se elevarán juntas.";
  const image = "https://i.ibb.co/3dcF2YC/blog-head.webp";
  const url = "https://www.penumbra.press/blog";

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
          <h1 className={styles["header-text"]}>Opiniones sin compromisos</h1>
        </div>
      </div>
      <section className="bg-dark p-5">
        <Container>
          <Row className="my-4">
            <Col md={4} className="offset-md-4">
              <Form.Select
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "Todas las Categorías" : category}
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
                previousLabel={"Anterior"}
                nextLabel={"Siguiente"}
                breakClassName={styles["page-item"]}
                breakLinkClassName={styles["page-link"]}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={styles["pagination"]}
                pageClassName={styles["page-item"]}
                pageLinkClassName={styles["page-link"]}
                previousClassName={styles["page-item"]}
                previousLinkClassName={styles["page-link"]}
                nextClassName={styles["page-item"]}
                nextLinkClassName={styles["page-link"]}
                activeClassName={styles["active"]}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogPage;
