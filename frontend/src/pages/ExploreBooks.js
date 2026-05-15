import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Accordion,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const ExploreBooksPage = () => {
  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <section className="py-5 bg-light position-relative overflow-hidden">
        <div className="hero-bg-overlay"></div>

        <Container className="position-relative">
          <Row className="align-items-center g-5">
            {/* LEFT */}
            <Col lg={6}>
              {/* <p className="text-uppercase fw-semibold text-primary mb-3">
                For Readers
              </p> */}

              <h1 className="fw-bold display-4 mb-4 animate-fade-in">
                Explore Books That Educate, Inspire and Evolve With You
              </h1>

              <p className="lead mb-4 animate-fade-in-delay-1">
                Discover books, reports, children’s content, educational
                resources, research publications, audiobooks, e-books and
                institutional knowledge products from Vasudheva Publishing.
              </p>

              <p className="text-muted fs-5 mb-4 animate-fade-in-delay-2">
                Whether you are a student, teacher, parent, researcher,
                professional, child, institution, library or general reader,
                this page helps you discover meaningful publications according
                to your interest, purpose, language, format and reading stage.
              </p>

              <div className="d-flex flex-wrap gap-3 animate-fade-in-delay-3">
                <Button
                  as={Link}
                  to="/books"
                  size="lg"
                  className="hover-scale"
                >
                  Browse Catalogue
                </Button>

                <Button
                  variant="outline-dark"
                  size="lg"
                  className="hover-scale"
                >
                  Find Books for Me
                </Button>

                <Button
                  variant="outline-dark"
                  size="lg"
                  className="hover-scale"
                >
                  Explore Reader Pathways
                </Button>
              </div>
            </Col>

            {/* RIGHT */}
            <Col lg={6}>
              <Card className="border-0 shadow-lg p-4 rounded-4">
                <h4 className="fw-bold mb-4">
                  Reader Discovery Interface
                </h4>

                <Form.Control
                  type="text"
                  placeholder="Search books, authors, subjects..."
                  className="mb-4 py-3"
                />

                <div className="mb-4">
                  <h6 className="fw-bold mb-3">Categories</h6>

                  <div className="d-flex flex-wrap gap-2">
                    {[
                      "Fiction",
                      "Research",
                      "Children",
                      "Poetry",
                      "Education",
                      "Audiobooks",
                    ].map((item, i) => (
                      <Badge bg="dark" key={i} className="px-3 py-2">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold mb-3">Reader Pathways</h6>

                  <div className="d-flex flex-wrap gap-2">
                    {[
                      "Students",
                      "Teachers",
                      "Researchers",
                      "Parents",
                      "Professionals",
                    ].map((item, i) => (
                      <Badge bg="secondary" key={i} className="px-3 py-2">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h6 className="fw-bold mb-3">Formats</h6>

                  <div className="d-flex flex-wrap gap-2">
                    {[
                      "Print",
                      "E-book",
                      "Audiobook",
                      "Digital Report",
                    ].map((item, i) => (
                      <Badge bg="primary" key={i} className="px-3 py-2">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= SNAPSHOT ================= */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Explore Books in One View
          </h2>

          <Row className="g-4">
            {[
              "Search by title, author, subject or keyword.",
              "Browse by category.",
              "Browse by reader type.",
              "Browse by format.",
              "Browse by language.",
              "Browse by knowledge domain.",
              "Request a reading recommendation.",
              "Join book clubs and reader communities.",
              "Request institutional or library copies.",
            ].map((item, i) => (
              <Col md={6} lg={4} key={i}>
                <Card className="h-100 shadow-sm border-0 hover-lift p-4">
                  <p className="mb-0 fw-medium">{item}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= WHY EXPLORE ================= */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Why Explore Books With Us?
          </h2>

          <p className="lead text-center mx-auto mb-5" style={{ maxWidth: "900px" }}>
            At Vasudheva Publishing, books are not treated merely as
            products. They are knowledge assets.
          </p>

          <Row className="g-4">
            {[
              {
                title: "Meaningful Discovery",
                text: "Find publications organised by real reader needs, not only by catalogue listing.",
              },
              {
                title: "Multi-Format Access",
                text: "Explore print books, e-books, audiobooks, reports, journals and digital knowledge products.",
              },
              {
                title: "Reader Pathways",
                text: "Discover books based on who you are: child, student, teacher, researcher or professional.",
              },
              {
                title: "Language Inclusion",
                text: "Explore English, Hindi, bilingual and future Indian-language pathways.",
              },
              {
                title: "Institutional Use",
                text: "Schools, colleges and organisations can identify books for libraries and classrooms.",
              },
              {
                title: "Community Connection",
                text: "Books can connect with reading circles, author talks and public knowledge discussions.",
              },
            ].map((item, i) => (
              <Col md={6} lg={4} key={i}>
                <Card className="h-100 border-0 shadow-sm p-4 hover-lift">
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p className="text-muted">{item.text}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= SEARCH & FILTER ================= */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Find the Right Book
          </h2>

          <Form.Control
            type="text"
            placeholder="Search by title, author, subject, category, language, reader type or keyword"
            className="py-3 shadow-sm mb-5"
          />

          <Row className="g-4">
            {[
              {
                title: "Category Filter",
                items: [
                  "Fiction",
                  "Non-Fiction",
                  "Poetry",
                  "Children’s Books",
                  "Research Reports",
                  "Academic Books",
                ],
              },
              {
                title: "Reader Type Filter",
                items: [
                  "Children",
                  "Students",
                  "Teachers",
                  "Researchers",
                  "Professionals",
                  "Libraries",
                ],
              },
              {
                title: "Format Filter",
                items: [
                  "Print Book",
                  "E-book",
                  "Audiobook",
                  "Journal",
                  "Workbook",
                ],
              },
              {
                title: "Language Filter",
                items: [
                  "English",
                  "Hindi",
                  "Bilingual",
                  "Indian Languages",
                ],
              },
            ].map((filter, i) => (
              <Col md={6} lg={3} key={i}>
                <Card className="h-100 border-0 shadow-sm p-4">
                  <h5 className="fw-bold mb-3">{filter.title}</h5>

                  <div className="d-flex flex-wrap gap-2">
                    {filter.items.map((item, idx) => (
                      <Badge bg="light" text="dark" key={idx} className="px-3 py-2 border">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= FEATURED BOOKS ================= */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Featured Books and Knowledge Products
          </h2>

          <Row className="g-4">
            {[1, 2, 3].map((_, i) => (
              <Col lg={4} md={6} key={i}>
                <Card className="border-0 shadow-sm h-100 hover-lift">
                  <div
                    style={{
                      height: "250px",
                      background: "#e5e7eb",
                    }}
                  ></div>

                  <Card.Body>
                    <h4 className="fw-bold">
                      Building Knowledge Systems
                    </h4>

                    <p className="text-muted small">
                      Research, Publishing and Learning in a Changing Society
                    </p>

                    <p>
                      A foundational publication exploring how ideas move
                      from research and writing to publication, learning,
                      public discourse and institutional use.
                    </p>

                    <div className="mb-3">
                      <Badge bg="dark" className="me-2">
                        Education
                      </Badge>

                      <Badge bg="secondary">
                        Researchers
                      </Badge>
                    </div>

                    <div className="d-flex gap-2 flex-wrap">
                      <Button size="sm">View Details</Button>

                      <Button variant="outline-dark" size="sm">
                        Buy / Request Copy
                      </Button>

                      <Button variant="outline-secondary" size="sm">
                        Wishlist
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= READER TYPES ================= */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Explore Books by Reader Type
          </h2>

          <Row className="g-4">
            {[
              "For Children",
              "For School Students",
              "For College Students",
              "For Teachers and Educators",
              "For Parents and Families",
              "For Researchers and Scholars",
              "For Professionals",
              "For General Readers",
              "For Institutions and Libraries",
            ].map((item, i) => (
              <Col lg={4} md={6} key={i}>
                <Card className="h-100 shadow-sm border-0 hover-lift p-4">
                  <h5 className="fw-bold mb-3">{item}</h5>

                  <p className="text-muted">
                    Discover meaningful books, educational resources,
                    reports and curated reading pathways.
                  </p>

                  <Button variant="outline-dark" size="sm">
                    Explore
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= CATEGORY ================= */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Explore by Category
          </h2>

          <Row className="g-4">
            {[
              "Fiction",
              "Non-Fiction",
              "Poetry",
              "Children’s Books",
              "Education",
              "Research Reports",
              "Academic Books",
              "Business and Economics",
              "Society and Culture",
              "Philosophy and Spirituality",
              "Digital and Audio",
            ].map((item, i) => (
              <Col lg={3} md={6} key={i}>
                <Card className="text-center h-100 shadow-sm border-0 hover-lift p-4">
                  <h5 className="fw-bold">{item}</h5>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= KNOWLEDGE DOMAIN ================= */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Explore by Knowledge Domain
          </h2>

          <Row className="g-4">
            {[
              "Education and Learning",
              "Children and Young Readers",
              "Literature and Language",
              "Society and Culture",
              "Business and Economics",
              "Research and Policy",
              "Philosophy and Spirituality",
              "Technology and Future",
              "Institutional Knowledge",
              "Public Thought",
              "Indian Knowledge Traditions",
              "Local and Community Knowledge",
            ].map((item, i) => (
              <Col md={6} lg={3} key={i}>
                <Card className="h-100 border-0 shadow-sm hover-lift p-4 text-center">
                  <strong>{item}</strong>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= FORMAT ================= */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Choose the Format That Fits You
          </h2>

          <Row className="g-4">
            {[
              "Print Books",
              "E-books",
              "Audiobooks",
              "Digital Reports",
              "Journals and Magazines",
              "Institutional Editions",
            ].map((item, i) => (
              <Col lg={4} md={6} key={i}>
                <Card className="h-100 shadow-sm border-0 hover-lift p-4">
                  <h5 className="fw-bold mb-3">{item}</h5>

                  <p className="text-muted">
                    Explore publications in formats designed for
                    accessibility, portability and institutional use.
                  </p>

                  <Button variant="outline-dark" size="sm">
                    Explore
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= PATHWAYS ================= */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Recommended Reading Pathways
          </h2>

          <Row className="g-4">
            {[
              "Start Reading",
              "Read With Children",
              "Read for School",
              "Read for Research",
              "Read for Work",
              "Read for Society",
              "Read in Hindi / Bilingual",
              "Read With a Community",
            ].map((item, i) => (
              <Col md={6} lg={3} key={i}>
                <Card className="h-100 shadow-sm border-0 hover-lift p-4 text-center">
                  <h5 className="fw-bold">{item}</h5>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= RECOMMENDATION FORM ================= */}
      <section className="py-5 bg-light" id="recommendation-form">
        <Container>
          <h2 className="fw-bold text-center mb-4">
            Not Sure What to Read? Request a Recommendation
          </h2>

          <p className="text-center mb-5">
            Tell us about your reading interest, language preference and
            purpose.
          </p>

          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="border-0 shadow-sm p-4">
                <Form>
                  <Row className="g-4">
                    <Col md={6}>
                      <Form.Control placeholder="Full Name" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Email Address" />
                    </Col>

                    <Col md={6}>
                      <Form.Select>
                        <option>Reader Type</option>
                      </Form.Select>
                    </Col>

                    <Col md={6}>
                      <Form.Select>
                        <option>Preferred Format</option>
                      </Form.Select>
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Reading Interest" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Purpose of Reading" />
                    </Col>

                    <Col xs={12}>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Message"
                      />
                    </Col>

                    <Col xs={12}>
                      <Button size="lg">
                        Request Reading Recommendation
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= COMMUNITY ================= */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <h2 className="fw-bold mb-4">
                Read With a Community
              </h2>

              <p className="lead">
                Books become more meaningful when they create discussion.
              </p>

              <p className="text-muted">
                Vasudheva Publishing aims to connect readers with book
                clubs, author talks, reading circles, workshops and
                knowledge dialogues.
              </p>

              <div className="d-flex flex-wrap gap-2 mt-4">
                {[
                  "Book Clubs",
                  "Author Talks",
                  "Reading Circles",
                  "Student Reading Groups",
                  "Research Discussions",
                ].map((item, i) => (
                  <Badge bg="dark" key={i} className="px-3 py-2">
                    {item}
                  </Badge>
                ))}
              </div>

              <Button className="mt-4" size="lg">
                Join Reader Community
              </Button>
            </Col>

            <Col lg={6}>
              <Card className="shadow-lg border-0 rounded-4 p-5 text-center">
                <h4 className="fw-bold mb-3">
                  Reader Community Network
                </h4>

                <p className="text-muted">
                  Reading circles, discussions, storytelling sessions,
                  knowledge clubs and guided reading pathways.
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Frequently Asked Questions
          </h2>

          <Accordion>
            {[
              {
                q: "What can I explore on this page?",
                a: "You can explore books, reports, educational content, children’s books, e-books, audiobooks and institutional publications.",
              },
              {
                q: "Can I search by reader type?",
                a: "Yes. Readers can explore by children, students, teachers, parents, researchers, professionals and institutions.",
              },
              {
                q: "Will books be available in Hindi?",
                a: "Yes. Vasudheva Publishing supports English, Hindi, bilingual and future Indian-language pathways.",
              },
              {
                q: "Can I request a recommendation?",
                a: "Yes. Readers can request reading recommendations based on interest, language and purpose.",
              },
            ].map((faq, i) => (
              <Accordion.Item eventKey={String(i)} key={i}>
                <Accordion.Header>{faq.q}</Accordion.Header>

                <Accordion.Body>{faq.a}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-5 bg-dark text-white text-center">
        <Container>
          <h2 className="display-5 fw-bold mb-4">
            Begin Your Reading Journey
          </h2>

          <p className="lead mb-5">
            Explore books and knowledge products created with purpose,
            care and responsibility.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Button size="lg">Browse Catalogue</Button>

            <Button variant="outline-light" size="lg">
              Request Recommendation
            </Button>

            <Button variant="outline-light" size="lg">
              Join Reader Community
            </Button>

            <Button variant="outline-light" size="lg">
              Explore Audiobooks
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ExploreBooksPage;