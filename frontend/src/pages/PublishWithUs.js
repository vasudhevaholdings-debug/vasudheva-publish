import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import publishImg from "../assets/images/publish_img.jpg";
const PublishWithUs = () => {
  return (
    <div>
      {/* ==================== HERO ==================== */}
     {/* ==================== HERO SECTION ==================== */}
<section className="hero-section">
  <div className="hero-bg-gradient"></div>
  <div className="hero-overlay"></div>

  <Container fluid className="hero-content">
    <Row className="align-items-center min-vh-85">

      {/* LEFT CONTENT */}
      <Col lg={7} xl={6} className="hero-text">

        <p className="hero-small-label">
          For Authors
        </p>

        <h1 className="hero-heading animate-fade-in">
          Publish With Dignity, <br />
          Structure and Support
        </h1>

        <p className="hero-subheadline animate-fade-in-delay-1">
          Your manuscript is more than a document. It is an intellectual
          asset. Vasudheva Publishing helps authors transform serious
          ideas, research and stories into credible, well-edited and
          meaningful publications.
        </p>

        {/* BUTTONS */}
        <div className="hero-ctas animate-fade-in-delay-2">

          <Button
            as={Link}
            to="/submit-manuscript"
            variant="primary"
            size="lg"
            className="me-3 mb-3"
          >
            Submit Your Manuscript
          </Button>

          <Button
            variant="outline-light"
            size="lg"
            className="me-3 mb-3"
          >
            Explore Publishing Pathways
          </Button>

          <Button
            variant="outline-light"
            size="lg"
            className="mb-3"
          >
            Request Author Consultation
          </Button>

        </div>
      </Col>

      {/* RIGHT IMAGE */}
      <Col
        lg={5}
        xl={6}
        className="hero-image-col d-none d-lg-block"
      >

        <div className="hero-right-image">

          <img
            src={publishImg}
            alt="Publish With Us"
            className="img-fluid hero-image"
          />

        </div>

      </Col>

    </Row>
  </Container>
</section>
      {/* ==================== WHY PUBLISH WITH US ==================== */}
      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5">Why Publish With Vasudheva Publishing?</h2>
          <Row className="g-4">
            {[
              "We Treat Authors as Knowledge Partners",
              "We Bring Structure and Editorial Rigour",
              "We Combine Quality With Market Understanding",
              "We Support Multiple Formats",
              "We Value Transparency and Trust",
              "We Connect Publishing With Research & Education"
            ].map((item, i) => (
              <Col md={6} lg={4} key={i}>
                <Card className="h-100 shadow-sm hover-lift p-4">
                  <h5 className="fw-bold">{item}</h5>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ==================== WHO CAN PUBLISH ==================== */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-5">Who Can Publish With Us?</h2>
          <Row className="g-4">
            {[
              "Writers and Storytellers", "Researchers and Scholars", "Teachers and Educators",
              "Professionals and Practitioners", "Students and Emerging Authors", "Institutions",
              "Public Thinkers", "Local Knowledge Keepers"
            ].map((item, i) => (
              <Col md={6} lg={3} key={i}>
                <Card className="h-100 shadow-sm hover-lift p-4 text-center">
                  <strong>{item}</strong>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ==================== PUBLISHING PATHWAYS & SERVICES ==================== */}
      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5">Our Publishing Pathways</h2>
          <Row className="g-4">
            {[
              "Traditional Publishing", "Assisted Publishing", "Research Publishing",
              "Institutional Publishing", "Digital-First Publishing", "Translation & Bilingual"
            ].map((item, i) => (
              <Col md={6} lg={4} key={i}>
                <Card className="h-100 shadow-sm hover-lift p-4 text-center">
                  <strong>{item}</strong>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="py-5 bg-dark text-white text-center">
        <Container>
          <h2 className="display-5 fw-bold mb-4">Ready to Begin Your Publishing Journey?</h2>
          <p className="lead mb-5">Let us help you transform your work into a structured and impactful publication.</p>
          <Button as={Link} to="/submit-manuscript" size="lg" className="me-3 hover-scale">Submit Manuscript</Button>
          <Button variant="outline-light" size="lg" className="hover-scale">Request Consultation</Button>
        </Container>
      </section>

    </div>
  );
};

export default PublishWithUs;