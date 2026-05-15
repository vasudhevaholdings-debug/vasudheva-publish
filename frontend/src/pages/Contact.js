import { Container, Row, Col, Button, Card, Form, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContactImg from "../assets/images/contactimg .jpeg";
const ContactPage = () => {
  return (
    <div>
      {/* ==================== HERO ==================== */}
      {/* ==================== HERO ==================== */}
<section className="position-relative bg-white">

  {/* FULL WIDTH HERO IMAGE */}
  <div
    className="hero-full-image-wrapper"
    style={{
      width: "100%",
      height: "80vh",
      overflow: "hidden",
    }}
  >
    <img
      src={ContactImg} // import your image
      alt="Contact Hero"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center top",
        
      }}
    />
  </div>

  {/* HERO CONTENT BELOW IMAGE */}
  <Container className="py-3 text-center">

    <p className="text-uppercase text-muted fw-semibold mb-3">
      Contact • Publishing • Collaboration • Support
    </p>

    {/* <h1 className="fw-bold display-4 mb-4 animate-fade-in">
      Start a Publishing Conversation With Us
    </h1> */}

    <p
      className="lead mx-auto mb-3 animate-fade-in-delay-1"
      style={{ maxWidth: "950px" }}
    >
      Whether you are an author with a manuscript, a reader looking for
      publications, an institution with a knowledge project, or a partner
      interested in collaboration — we welcome meaningful conversations.
    </p>

    <p
      className="mx-auto mb-3 text-muted animate-fade-in-delay-2"
      style={{ maxWidth: "850px" }}
    >
      Share your requirement and we will route your inquiry to the right team.
    </p>

    {/* BUTTONS BELOW IMAGE */}
    <div className="d-flex flex-wrap justify-content-center gap-3 animate-fade-in-delay-3">

      <Button
        as={Link}
        to="#contact-form"
        variant="primary"
        size="lg"
        className="hover-scale px-4"
      >
        Submit an Inquiry
      </Button>

      <Button
        variant="outline-dark"
        size="lg"
        className="hover-scale px-4"
      >
        Publish With Us
      </Button>

      <Button
        variant="outline-dark"
        size="lg"
        className="hover-scale px-4"
      >
        Partner With Us
      </Button>

    </div>

  </Container>
</section>

      {/* ==================== HOW CAN WE HELP YOU ==================== */}
      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5">How Can We Help You?</h2>
          <p className="text-center lead mx-auto" style={{ maxWidth: "800px" }}>
            Please choose the inquiry type that best matches your requirement so we can respond faster and more effectively.
          </p>
        </Container>
      </section>

      {/* ==================== INQUIRY TYPES ==================== */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="g-4">
            {[
              {
                title: "For Authors",
                desc: "Manuscript submission, book publishing, editing support, rights & royalties",
                link: "#contact-form"
              },
              {
                title: "For Readers",
                desc: "Book availability, orders, recommendations, e-books & audiobooks",
                link: "#contact-form"
              },
              {
                title: "For Institutions",
                desc: "Bulk supply, custom publishing, curriculum, library development",
                link: "#contact-form"
              },
              {
                title: "For Partners",
                desc: "Editorial, translation, design, printing, distribution & technology partnership",
                link: "#contact-form"
              },
              {
                title: "Rights & Licensing",
                desc: "Translation rights, audiobook rights, institutional licensing & permissions",
                link: "#contact-form"
              },
              {
                title: "Media Inquiry",
                desc: "Interviews, book launches, podcasts, press coverage",
                link: "#contact-form"
              },
              {
                title: "Book Orders",
                desc: "Purchase, bulk orders, institutional copies & shipping",
                link: "#contact-form"
              },
              {
                title: "General Inquiry",
                desc: "Anything else — our team will route it correctly",
                link: "#contact-form"
              }
            ].map((item, i) => (
              <Col md={6} lg={4} key={i}>
                <Card className="h-100 shadow-sm hover-lift p-4">
                  <Card.Body className="d-flex flex-column">
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="text-muted flex-grow-1">{item.desc}</p>
                    <Button variant="link" className="p-0 text-start mt-auto">Submit Inquiry →</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ==================== MAIN CONTACT FORM ==================== */}
      <section id="contact-form" className="py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5">Submit Your Inquiry</h2>
          <Card className="shadow-sm mx-auto" style={{ maxWidth: "950px" }}>
            <Card.Body className="p-5">
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name *</Form.Label>
                      <Form.Control placeholder="Enter your full name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address *</Form.Label>
                      <Form.Control type="email" placeholder="your@email.com" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control placeholder="+91 XXXXX XXXXX" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>City / State / Country</Form.Label>
                      <Form.Control placeholder="e.g. Delhi, India" />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label>Inquiry Type *</Form.Label>
                  <Form.Select>
                    <option>Author Inquiry</option>
                    <option>Reader Inquiry</option>
                    <option>Institutional Inquiry</option>
                    <option>Partnership Inquiry</option>
                    <option>Rights and Licensing Inquiry</option>
                    <option>Media Inquiry</option>
                    <option>Book Order Inquiry</option>
                    <option>General Inquiry</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control placeholder="Brief subject of your inquiry" />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Message / Requirement *</Form.Label>
                  <Form.Control as="textarea" rows={6} placeholder="Please describe your requirement in detail..." />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Attachment (Manuscript / Proposal / Portfolio etc.)</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>

                <Button type="submit" variant="primary" size="lg" className="w-100">
                  Submit Inquiry
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* ==================== QUICK CONTACT ROUTES ==================== */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-5">Quick Contact Routes</h2>
          <Row className="g-4 text-center">
            <Col md={3}>
              <Card className="h-100 shadow-sm hover-lift">
                <Card.Body>
                  <h5>Authors</h5>
                  <p className="small text-muted">Manuscripts, publishing & rights</p>
                  <Button variant="outline-primary" size="sm">Publish With Us</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="h-100 shadow-sm hover-lift">
                <Card.Body>
                  <h5>Institutions</h5>
                  <p className="small text-muted">Bulk orders & custom publishing</p>
                  <Button variant="outline-primary" size="sm">Institutional Solutions</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="h-100 shadow-sm hover-lift">
                <Card.Body>
                  <h5>Partners</h5>
                  <p className="small text-muted">Collaboration opportunities</p>
                  <Button variant="outline-primary" size="sm">Partner With Us</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="h-100 shadow-sm hover-lift">
                <Card.Body>
                  <h5>Readers</h5>
                  <p className="small text-muted">Orders & recommendations</p>
                  <Button variant="outline-primary" size="sm">Explore Books</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== COMPANY INFORMATION ==================== */}
      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5">Company Information</h2>
          <Card className="text-center shadow-sm p-5 mx-auto" style={{ maxWidth: "700px" }}>
            <h4>Vasudheva Publishing Pvt. Ltd.</h4>
            <p className="lead">Publishing Knowledge. Empowering Authors. Enabling Readers.</p>
            <p>Varanasi, Uttar Pradesh, India</p>
            <p><strong>Email:</strong> connect@vasudheva.com</p>
            <p><strong>Website:</strong> www.vasudheva.org</p>
          </Card>
        </Container>
      </section>

      {/* ==================== WHAT HAPPENS AFTER ==================== */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-5">What Happens After You Contact Us?</h2>
          <div className="text-center lead">
            Inquiry Submitted → Internal Review → Team Routing → Follow-up → Discussion → Next Steps
          </div>
        </Container>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5">Frequently Asked Questions</h2>
          <Accordion className="mx-auto" style={{ maxWidth: "850px" }}>
            {[
              { q: "Can I submit my manuscript through this form?", a: "Yes. You can submit your manuscript here or use the dedicated 'Publish With Us' page." },
              { q: "Do you respond to every inquiry?", a: "We review all serious inquiries. Response time depends on volume and relevance." },
              { q: "Can institutions request bulk book supply?", a: "Yes. Please select Institutional Inquiry and mention your requirements." },
              { q: "Can editors, translators and designers apply as partners?", a: "Yes. Please choose Partnership Inquiry and attach your portfolio." }
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
          <h2 className="display-5 fw-bold mb-4">Let Us Build a Meaningful Publishing Conversation</h2>
          <p className="lead mb-5">We look forward to hearing from you.</p>
          <Button as={Link} to="#contact-form" size="lg" className="me-3 hover-scale">Submit Inquiry</Button>
          <Button variant="outline-light" size="lg" className="hover-scale">Publish With Us</Button>
        </Container>
      </section>

      {/* ==================== STYLES & ANIMATIONS ==================== */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeInUp 1s ease forwards; }
        .animate-fade-in-delay-1 { animation-delay: 0.3s; }
        .animate-fade-in-delay-2 { animation-delay: 0.6s; }
        .animate-fade-in-delay-3 { animation-delay: 0.9s; }

        .hover-scale:hover { transform: scale(1.05); transition: all 0.3s ease; }
        .hover-lift:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12) !important;
          transition: all 0.4s ease;
        }
        .hero-bg-overlay {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(135deg, rgba(108,99,255,0.1), rgba(0,123,255,0.08));
        }
      `}</style>
    </div>
  );
};

export default ContactPage;