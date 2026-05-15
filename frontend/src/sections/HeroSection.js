import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeroImage from '../Logos/hero_publish.png';   // ← Correct Import

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg-gradient" />
      <div className="hero-bg-image" />
      <div className="hero-overlay" />

      <Container fluid className="hero-content">
        <Row className="align-items-center min-vh-85">
          
          {/* Left Side - Text Content */}
          <Col lg={7} xl={6} className="hero-text">
            <p className="hero-small-label">Integrated Publishing & Knowledge Infrastructure</p>
            
            <h1 className="hero-heading  animate-fade-in">
              Publishing Knowledge.<br />
              Empowering Authors.<br />
              Enabling Readers.
            </h1>

            <p className="hero-subheadline">
              Vasudheva Publishing Pvt. Ltd. is a research-led, author-sensitive, 
              reader-centric and technology-enabled publishing institution committed 
              to transforming ideas into books, reports, journals, digital content, 
              audiobooks, learning resources and knowledge products for India and the world.
            </p>

            <div className="hero-ctas">
              <Button as={Link} to="/for-authors" variant="primary" size="lg" className="me-3 mb-3">
                Publish With Us
              </Button>
              <Button as={Link} to="/books" variant="outline-light" size="lg" className="me-3 mb-3">
                Explore Books
              </Button>
              <Button as={Link} to="/partner" variant="outline-light" size="lg" className="me-3 mb-3">
                Partner With Us
              </Button>
            </div>
          </Col>

          {/* Right Side - Image */}
          <Col lg={5} xl={6} className="hero-image-col d-none d-lg-block">
            <div className="hero-right-image">
              <img 
                src={HeroImage} 
                alt="Vasudheva Publishing" 
                className="img-fluid hero-image" 
              />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;