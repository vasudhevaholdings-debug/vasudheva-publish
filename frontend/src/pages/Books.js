import { Container, Row, Col, Button, Card, Form, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import BookImage from "../assets/images/book_self.png";

const BooksPage = () => {
  return (
    <div>
      {/* ==================== HERO SECTION ==================== */}
<section className="hero-section">
  
  {/* Background Layers */}
  <div className="hero-bg-gradient"></div>
  <div className="hero-overlay"></div>

  <Container fluid className="hero-content">
    <Row className="align-items-center min-vh-85">

      {/* LEFT CONTENT */}
      <Col lg={6} className="hero-text">

        <p className="hero-small-label">
          For Readers
        </p>

        <h1 className="hero-heading animate-fade-in">
          Books, Reports, Journals and Knowledge Products for Serious Readers
        </h1>

        <p className="hero-subheadline animate-fade-in-delay-1">
          Explore publications from Vasudheva Publishing across books,
          research reports, academic content, children’s learning,
          institutional publications, audiobooks, digital knowledge
          products and future multilingual editions.
        </p>

        <p className="hero-description animate-fade-in-delay-2">
          Our catalogue is designed for readers, learners, authors,
          institutions and communities who seek meaningful, structured
          and credible knowledge.
        </p>

        {/* CTA BUTTONS */}
        <div className="hero-ctas animate-fade-in-delay-3">

          <Button
            as={Link}
            to="/books/catalogue"
            variant="primary"
            size="lg"
            className="me-3 mb-3"
          >
            Browse Catalogue
          </Button>

          <Button
            variant="outline-light"
            size="lg"
            className="me-3 mb-3"
          >
            Explore Categories
          </Button>

          <Button
            variant="outline-light"
            size="lg"
            className="mb-3"
          >
            Request Institutional Copy
          </Button>

        </div>
      </Col>

      {/* RIGHT IMAGE */}
      <Col lg={6} className="hero-image-col d-none d-lg-block">

        <div className="hero-right-image">

          <img
            src={BookImage}
            alt="Books and Knowledge"
            className="img-fluid hero-image"
          />

        </div>

      </Col>

    </Row>
  </Container>
</section>

      {/* CATALOGUE INTRO */}
      <section className="py-5">
        <Container>
          <h2 className="mb-4 text-center fw-bold animate-on-scroll">
            A Catalogue Built Around Knowledge, Not Just Titles
          </h2>

          <p className="text-center lead mx-auto" style={{ maxWidth: "800px" }}>
            At Vasudheva Publishing, every publication is treated as part of a
            wider knowledge ecosystem. A book is not merely a product placed
            for sale. It may become a learning resource, a community discussion,
            an audiobook, a course, an institutional tool, a translation, a
            research reference or a long-term cultural document.
          </p>
        </Container>
      </section>

      {/* SEARCH */}
      <section className="py-4 bg-light">
        <Container>
          <h4 className="mb-3">Find the Right Publication</h4>
          <Form.Control
            type="text"
            placeholder="Search by title, author, subject, category, language or keyword"
            className="shadow-sm py-3"
          />
        </Container>
      </section>

      {/* FEATURED */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5 fw-bold">Featured Publications</h2>

          <Row className="g-4">
            {[1, 2, 3].map((_, i) => (
              <Col md={6} lg={4} key={i}>
                <Card className="h-100 shadow-sm border-0 hover-lift transition-all">
                  <Card.Body>
                    <h5>Building Knowledge Systems</h5>
                    <p className="small text-muted">
                      Research, Publishing and Learning in a Changing Society
                    </p>
                    <p className="small">
                      A foundational publication exploring how ideas move from
                      research and writing to publication, learning, public
                      discourse and institutional use.
                    </p>

                    <Button size="sm" className="me-2">View Details</Button>
                    <Button size="sm" variant="outline-dark">Request Copy</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CATEGORIES */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5 fw-bold">Explore by Publication Category</h2>

          <Row className="g-4">
            {[
              "Books",
              "Fiction",
              "Non-Fiction",
              "Research Reports",
              "Academic and Educational Content",
              "Children’s Books",
              "Journals and Periodicals",
              "Audiobooks and Podcasts",
              "Digital Publications",
              "Institutional Publications",
            ].map((item, i) => (
              <Col md={6} lg={4} key={i}>
                <Card className="p-4 text-center h-100 shadow-sm border-0 hover-lift transition-all">
                  <h5 className="fw-bold">{item}</h5>
                  <Button variant="link" className="mt-2">Explore →</Button>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* READER TYPE */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5 fw-bold">Explore by Reader Type</h2>

          <Row className="g-3">
            {[
              "Students",
              "Teachers",
              "Researchers",
              "Professionals",
              "Children and Parents",
              "General Readers",
              "Institutions",
            ].map((item, i) => (
              <Col md={6} lg={3} key={i}>
                <Card className="p-3 text-center shadow-sm border-0 hover-lift transition-all">
                  {item}
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* DOMAIN */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5 fw-bold">Explore by Knowledge Domain</h2>

          <Row className="g-3">
            {[
              "Society and Culture",
              "Education and Learning",
              "Business and Economics",
              "Philosophy and Spirituality",
              "Literature and Language",
              "Children and Young Readers",
              "Research and Policy",
              "Technology and Future",
            ].map((item, i) => (
              <Col md={6} lg={3} key={i}>
                <Card className="p-3 text-center shadow-sm border-0 hover-lift transition-all">
                  {item}
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* FORMATS */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5 fw-bold">Available Publication Formats</h2>

          <Row className="g-3">
            {[
              "Print Books",
              "E-books",
              "Audiobooks",
              "Digital Reports",
              "Journals and Magazines",
              "Course-Linked Books",
              "Institutional Editions",
              "Multimedia Knowledge Products",
            ].map((item, i) => (
              <Col md={6} lg={3} key={i}>
                <Card className="p-3 text-center shadow-sm border-0 hover-lift transition-all">
                  {item}
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* INSTITUTIONAL */}
      <section className="py-5 bg-light text-center">
        <Container>
          <h2 className="mb-3 fw-bold">
            For Institutions, Libraries and Bulk Orders
          </h2>

          <p className="mb-4 mx-auto" style={{ maxWidth: "700px" }}>
            We work with schools, colleges, universities, NGOs, government
            bodies, libraries, corporates and research organisations for bulk
            supply, custom editions, library curation and institutional publishing projects.
          </p>

          <Button as={Link} to="/institutions" className="me-3 hover-scale" size="lg">
            Request Institutional Copy
          </Button>
          <Button variant="outline-dark" size="lg" className="hover-scale">
            Discuss Bulk Order
          </Button>
        </Container>
      </section>

      {/* COMING SOON */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5 fw-bold">Coming Soon</h2>

          <Row className="g-4">
            {[1, 2, 3].map((_, i) => (
              <Col md={6} lg={4} key={i}>
                <Card className="p-4 text-center shadow-sm border-0 hover-lift transition-all">
                  <h5>Upcoming Publication</h5>
                  <p className="small text-muted">Expected Release</p>
                  <Button size="sm" className="mt-2">Notify Me</Button>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* FAQ with Accordion */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5 fw-bold">Frequently Asked Questions</h2>

          <Accordion 
            defaultActiveKey="0" 
            className="mx-auto" 
            style={{ maxWidth: "850px" }}
          >
            <Accordion.Item eventKey="0" className="mb-3 border-0 rounded-3 shadow-sm">
              <Accordion.Header>Can I buy books directly from this website?</Accordion.Header>
              <Accordion.Body>Yes. The catalogue is designed to support direct purchase.</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className="mb-3 border-0 rounded-3 shadow-sm">
              <Accordion.Header>Do you offer e-books?</Accordion.Header>
              <Accordion.Body>Yes. Selected titles may be available in digital formats.</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className="mb-3 border-0 rounded-3 shadow-sm">
              <Accordion.Header>Can institutions request bulk copies?</Accordion.Header>
              <Accordion.Body>Yes. Institutions can request bulk copies.</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="py-5 bg-dark text-white text-center">
        <Container>
          <h2 className="mb-3 fw-bold display-5">
            Discover Knowledge That Educates, Inspires and Evolves
          </h2>

          <p className="mb-4 lead">
            Explore books, reports, journals, children’s content,
            audiobooks and digital publications.
          </p>

          <Button size="lg" className="me-3 hover-scale">Browse Catalogue</Button>
          <Button size="lg" variant="outline-light" className="me-3 hover-scale">
            Request Institutional Copy
          </Button>
          <Button size="lg" variant="outline-light" className="hover-scale">
            Suggest a Book or Topic
          </Button>
        </Container>
      </section>

    
    </div>
  );
};

export default BooksPage;