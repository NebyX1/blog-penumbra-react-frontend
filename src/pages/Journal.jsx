import React, { useState } from "react";
import { Container, Row, Col, Alert, Spinner } from "react-bootstrap";
import JournalCard from "../components/JournalsCard";
import { useFetchJournals } from "../api/useFetchJournals";
import ReactPaginate from "react-paginate";
import Snippet from "../components/common/Snippet";
import styles from "../styles/journal.module.css";

const Journal = () => {
  const { data: journals, isLoading, error } = useFetchJournals();
  const [currentPage, setCurrentPage] = useState(0);

  if (isLoading) {
    return <div className="text-center mt-5">
      <Spinner animation="border" variant="primary" />
    </div>;
  }

  if (error) {
    return <Alert variant="danger" className="text-center mt-5">
      Hemos tenido un error al cargar las revistas...
    </Alert>;
  }

  const journalsPerPage = 3;
  const offset = currentPage * journalsPerPage;
  const currentJournals = journals.slice(offset, offset + journalsPerPage);
  const pageCount = Math.ceil(journals.length / journalsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const pageTitle = "Revista";
  const description = "No hay nada mágico en los libros en sí, la magia está en lo que dicen los libros.";
  const image = "https://i.ibb.co/zNj95Q8/journal-head.webp";
  const url = "https://www.penumbra.press/journal";

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
          <h1 className={styles["header-text"]}>Miran, pero no ven...</h1>
        </div>
      </div>
      <section className="bg-dark p-5">
        <Container>
          <Row className="g-4 py-4">
            {currentJournals.map((journal) => (
              <Col key={journal.id} xs={12} md={6} lg={4}>
                <JournalCard journal={journal} />
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

export default Journal;

