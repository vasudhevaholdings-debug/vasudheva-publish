import { Container, Row, Col, Button, Card, Form, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import CollabImg from "../assets/images/collab_img.jpeg";
const PartnerPage = () => {
  return (
    <div>
      {/* ==================== HERO ==================== */}
<section className="position-relative">

  {/* HERO IMAGE - Half Page Height */}
  <div
    className="hero-wrapper"
    style={{
      width: "100%",
      height: "50vh",           // ← Takes half the viewport height
      minHeight: "380px",       // Prevents too small on mobile
      overflow: "hidden",
    }}
  >
    <img
      src={CollabImg}
      alt="Partner With Us"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center top",
      }}
    />
  </div>

  {/* HERO CONTENT - Below the Image */}
  <Container className="py-5 text-center">

    <p className="text-uppercase text-muted fw-semibold mb-3">
      Partnerships • Collaboration • Knowledge Ecosystem
    </p>

    <p
      className="lead mx-auto mb-4"
      style={{ maxWidth: "950px" }}
    >
      Vasudheva Publishing welcomes meaningful partnerships with authors,
      editors, translators, designers, printers, bookstores, distributors,
      libraries, institutions, media teams, technology partners and
      ecosystem builders.
    </p>

    {/* BUTTONS */}
    <div className="d-flex flex-wrap justify-content-center gap-3">
      <Button
        variant="primary"
        size="lg"
        className="hover-scale px-4 py-3"
      >
        Submit Partnership Inquiry
      </Button>

      <Button
        variant="outline-dark"
        size="lg"
        className="hover-scale px-4 py-3"
      >
        Explore Partnership Areas
      </Button>

      <Button
        variant="outline-dark"
        size="lg"
        className="hover-scale px-4 py-3"
      >
        Start a Conversation
      </Button>
    </div>

  </Container>
</section>
      {/* ==================== WHY PARTNER WITH US ==================== */}
      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5 animate-on-scroll">Why Partner With Vasudheva Publishing?</h2>
          <p className="text-center lead mx-auto mb-5" style={{ maxWidth: "800px" }}>
            We are building a long-term knowledge ecosystem — not just publishing books. 
            Partners who join us become part of a mission to strengthen authorship, reading culture, 
            language inclusion and institutional knowledge.
          </p>

          <Row className="g-4">
            {[
              "Ecosystem-Oriented Collaboration",
              "Multi-Domain Publishing Opportunities",
              "Integration with Vasudheva Group",
              "Long-Term Knowledge Infrastructure Vision",
              "Ethical & Professional Partnership Culture",
              "Opportunity to Shape a New Publishing Institution"
            ].map((item, i) => (
              <Col md={6} lg={4} key={i}>
                <Card className="h-100 shadow-sm border-0 hover-lift p-4">
                  <Card.Body>
                    <h5 className="fw-bold">{item}</h5>
                    <p className="small text-muted mt-3">
                      We build durable relationships where every partner contributes meaningfully to knowledge creation and impact.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ==================== PARTNERSHIP CATEGORIES ==================== */}
      <section id="partnership-categories" className="py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-5">Who Can Partner With Us?</h2>
          <Row className="g-4">
            {[
              { title: "Authors & Knowledge Creators", desc: "Writers, researchers, educators, storytellers and institutions" },
              { title: "Editors & Reviewers", desc: "Developmental editors, copyeditors, proofreaders & subject experts" },
              { title: "Translators & Language Experts", desc: "Hindi, English, bilingual & regional language translators" },
              { title: "Designers & Illustrators", desc: "Book designers, cover artists & visual storytellers" },
              { title: "Printers & Production Partners", desc: "Offset, digital & print-on-demand partners" },
              { title: "Bookstores & Distributors", desc: "Retail, wholesale & institutional distributors" },
              { title: "Libraries & Reading Communities", desc: "Public, school & community libraries" },
              { title: "Educational Institutions", desc: "Schools, colleges & universities" },
              { title: "NGOs & Development Organisations", desc: "Impact reporting & knowledge documentation" },
              { title: "Research Organisations", desc: "Think tanks & policy research groups" },
              { title: "Media & Communication Partners", desc: "Podcasters, journalists & content creators" },
              { title: "Technology Partners", desc: "Digital platforms, AI tools & publishing tech" }
            ].map((partner, i) => (
              <Col md={6} lg={4} key={i}>
                <Card className="h-100 shadow-sm hover-lift p-4">
                  <h5 className="fw-bold">{partner.title}</h5>
                  <p className="text-muted small">{partner.desc}</p>
                  <Button variant="link" className="p-0 mt-3">Learn More →</Button>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ==================== PARTNERSHIP MODELS ==================== */}
      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5">Partnership Models</h2>
          <Row className="g-4">
            {[
              "Project-Based Partnership",
              "Retainer-Based Partnership",
              "Revenue-Sharing Partnership",
              "Institutional Collaboration",
              "Strategic Alliance",
              "Knowledge Fellowship / Community Partnership"
            ].map((model, i) => (
              <Col md={6} lg={4} key={i}>
                <Card className="h-100 shadow-sm hover-lift p-4">
                  <h5>{model}</h5>
                  <p className="small text-muted">Flexible engagement tailored to your expertise and goals.</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ==================== PARTNERSHIP PROCESS ==================== */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-5">Our Partnership Process</h2>
          <div className="text-center mb-5">
            Inquiry → Profile Review → Alignment Discussion → Scope Definition → Agreement → Collaboration → Review → Long-Term Relationship
          </div>
        </Container>
      </section>

      {/* ==================== INQUIRY FORM ==================== */}
      <section id="partnership-form" className="py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5">Submit Partnership Inquiry</h2>
          <Card className="shadow-sm mx-auto" style={{ maxWidth: "900px" }}>
            <Card.Body className="p-5">
              <Form>
                <Row>
                  <Col md={6}><Form.Group className="mb-3"><Form.Label>Full Name *</Form.Label><Form.Control /></Form.Group></Col>
                  <Col md={6}><Form.Group className="mb-3"><Form.Label>Organisation / Institution</Form.Label><Form.Control /></Form.Group></Col>
                </Row>
                <Row>
                  <Col md={6}><Form.Group className="mb-3"><Form.Label>Email *</Form.Label><Form.Control type="email" /></Form.Group></Col>
                  <Col md={6}><Form.Group className="mb-3"><Form.Label>Phone</Form.Label><Form.Control /></Form.Group></Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label>Partner Type</Form.Label>
                  <Form.Select>
                    <option>Author / Knowledge Creator</option>
                    <option>Editor / Reviewer</option>
                    <option>Translator / Language Expert</option>
                    <option>Designer / Illustrator</option>
                    <option>Printer / Production Partner</option>
                    <option>Bookstore / Distributor</option>
                    <option>Technology Partner</option>
                    <option>Other</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>How do you want to collaborate?</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Describe your interest and expertise..." />
                </Form.Group>

                <Button type="submit" variant="primary" size="lg" className="w-100">
                  Submit Partnership Inquiry
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-5">Frequently Asked Questions</h2>
          <Accordion className="mx-auto" style={{ maxWidth: "850px" }}>
            {[
              { q: "Who can partner with Vasudheva Publishing?", a: "Authors, editors, translators, designers, printers, distributors, institutions, media professionals, technology companies and more." },
              { q: "Do you work with freelance editors and designers?", a: "Yes. We welcome skilled freelance professionals." },
              { q: "Can bookstores and distributors collaborate?", a: "Yes. We actively seek retail and institutional distribution partners." },
              { q: "Do you collaborate with technology companies?", a: "Yes. We are building digital infrastructure and welcome tech partnerships." }
            ].map((faq, i) => (
              <Accordion.Item eventKey={i.toString()} key={i} className="mb-3 border-0 rounded-3 shadow-sm">
                <Accordion.Header>{faq.q}</Accordion.Header>
                <Accordion.Body>{faq.a}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="py-5 bg-dark text-white text-center">
        <Container>
          <h2 className="display-5 fw-bold mb-4">Let Us Build the Publishing Ecosystem Together</h2>
          <p className="lead mb-5">If you are committed to knowledge, quality publishing and long-term impact, we invite you to collaborate with us.</p>
          <div>
            <Button size="lg" as={Link} to="#partnership-form" className="me-3 hover-scale">Submit Partnership Inquiry</Button>
            <Button size="lg" variant="outline-light" className="hover-scale">Start a Collaboration Conversation</Button>
          </div>
        </Container>
      </section>

      
    </div>
  );
};

export default PartnerPage;