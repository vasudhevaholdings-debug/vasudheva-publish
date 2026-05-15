import { Container, Row, Col, Button, Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AboutImage from "../assets/images/about_img.jpeg";


const AboutPage = () => {
  return (
    <div>

      {/* ================= HERO SECTION ================= */}
      <section className="hero-section">
        <div className="hero-bg-gradient" />
        <div className="hero-bg-image" />
        <div className="hero-overlay" />

        <Container fluid className="hero-content">
          <Row className="align-items-center min-vh-85">

            {/* LEFT CONTENT */}
            <Col lg={7} xl={6} className="hero-text">

              <p className="hero-small-label">
                About Vasudheva Publishing
              </p>

              <h1 className="hero-heading animate-fade-in">
                An Integrated Publishing <br />
                and Knowledge <br />
                Infrastructure Company
              </h1>

              <p className="hero-subheadline">
                Vasudheva Publishing Pvt. Ltd. is a research-led,
                multilingual, author-sensitive and technology-enabled
                publishing institution committed to transforming ideas,
                research, stories and institutional knowledge into meaningful
                books, reports, journals, audiobooks and knowledge products.
              </p>

              <div className="hero-ctas">
                <Button
                  as={Link}
                  to="/publish-with-us"
                  variant="primary"
                  size="lg"
                  className="me-3 mb-3"
                >
                  Publish With Us
                </Button>

                <Button
                  as={Link}
                  to="/books"
                  variant="outline-light"
                  size="lg"
                  className="me-3 mb-3"
                >
                  Explore Books
                </Button>

                <Button
                  as={Link}
                  to="/partner"
                  variant="outline-light"
                  size="lg"
                  className="mb-3"
                >
                  Partner With Us
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
                  src={AboutImage}
                  alt="Vasudheva Publishing"
                  className="img-fluid hero-image"
                />
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-5">
        <Container>

          <h2 className="section-title text-center mb-5">
            Who We Are
          </h2>

          <Row className="justify-content-center">
            <Col lg={10}>

              <p className="lead text-center">
                Vasudheva Publishing Pvt. Ltd. is the publishing and
                knowledge-productisation company of the Vasudheva Group.
                We work at the intersection of writing, research,
                education, media, technology and social communication.
              </p>

              <p className="text-center">
                We are building a complete publishing ecosystem that
                supports the full journey of knowledge — from idea to impact.
              </p>

            </Col>
          </Row>

        </Container>
      </section>

      {/* ================= WHY WE EXIST ================= */}
      <section className="py-5 bg-light">
        <Container>

          <h2 className="section-title text-center mb-5">
            Why We Exist
          </h2>

          <Row className="g-4">

            {[
              "Authors Need Better Support",
              "Readers Need Better Access",
              "Institutions Need Structured Knowledge Products",
              "Language Diversity Needs Serious Attention",
              "Knowledge Systems Are Fragmented",
            ].map((item, index) => (
              <Col md={6} lg={4} key={index}>

                <Card className="custom-card h-100 border-0 shadow-sm">
                  <Card.Body>
                    <h5 className="fw-bold">{item}</h5>
                  </Card.Body>
                </Card>

              </Col>
            ))}

          </Row>

        </Container>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-5">
        <Container>

          <Row className="g-5">

            <Col md={6}>
              <div className="content-box">

                <h3 className="fw-bold mb-4">
                  Our Vision
                </h3>

                <p className="lead">
                  To build a trusted, ethical, multilingual and
                  technology-enabled publishing ecosystem that strengthens
                  knowledge creation, author dignity, reader access and
                  social development.
                </p>

              </div>
            </Col>

            <Col md={6}>
              <div className="content-box">

                <h3 className="fw-bold mb-4">
                  Our Mission
                </h3>

                <ul className="custom-list">
                  <li>Empower authors with dignity and support</li>
                  <li>Enable readers with meaningful access</li>
                  <li>Support institutions with credible knowledge products</li>
                  <li>Promote language inclusion and cultural diversity</li>
                  <li>Build transparent and ethical publishing systems</li>
                </ul>

              </div>
            </Col>

          </Row>

        </Container>
      </section>

      {/* ================= DIFFERENCE SECTION ================= */}
      <section className="py-5 bg-light">
        <Container>

          <h2 className="section-title text-center mb-5">
            How We Are Different
          </h2>

          <div className="table-responsive">

            <Table bordered hover className="custom-table shadow-sm">

              <thead>
                <tr>
                  <th>Conventional Publishing</th>
                  <th>Vasudheva Publishing</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Book-focused</td>
                  <td>Knowledge-system focused</td>
                </tr>

                <tr>
                  <td>Author as supplier</td>
                  <td>Author as partner</td>
                </tr>

                <tr>
                  <td>Reader as customer</td>
                  <td>Reader as participant</td>
                </tr>

                <tr>
                  <td>Print-first approach</td>
                  <td>Multi-format publishing</td>
                </tr>

                <tr>
                  <td>Transactional relationship</td>
                  <td>Long-term ecosystem partnership</td>
                </tr>
              </tbody>

            </Table>

          </div>

        </Container>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="final-cta-section">

        <Container className="text-center text-white">

          <h2 className="display-5 fw-bold mb-4">
            Start Your Publishing Journey With Us
          </h2>

          <p className="lead mb-5">
            We help transform ideas into structured,
            credible and meaningful publications.
          </p>

          <div>

            <Button
              as={Link}
              to="/publish-with-us"
              size="lg"
              className="me-3 mb-3"
            >
              Publish With Us
            </Button>

            <Button
              as={Link}
              to="/submit-manuscript"
              variant="outline-light"
              size="lg"
              className="me-3 mb-3"
            >
              Submit Manuscript
            </Button>

            <Button
              as={Link}
              to="/contact"
              variant="outline-light"
              size="lg"
              className="mb-3"
            >
              Contact Us
            </Button>

          </div>

        </Container>

      </section>

    </div>
  );
};

export default AboutPage;