import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styles from '../../styles/navbar.module.css';
import PenumbraLogo from '../../assets/PunmbraLogo.png';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className={styles.bgColorNavbar}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={PenumbraLogo} alt="Penumbra" height="60" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle style={{ backgroundColor: '#527' }}  aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="m-auto">
            <LinkContainer to="/">
              <Nav.Link className={styles.navLink}>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className={styles.navLink}>Sobre Nosotros</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
              <Nav.Link className={styles.navLink}>Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/journal">
              <Nav.Link className={styles.navLink}>Revista</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/podcasts">
              <Nav.Link className={styles.navLink}>Podcasts</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className={styles.navLink}>Contacto</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
