import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
} from "react-bootstrap";

// IMPORT IMAGE HERE
import founderImage from "../assets/images/shashank_photo.jpeg";

const leadershipAreas = [
  {
    title: "Publishing Leadership",
    desc: "Transforms publishing philosophy into operational systems including catalogue development, format strategy and publication planning.",
  },
  {
    title: "Editorial Leadership",
    desc: "Ensures manuscripts, reports and publications maintain clarity, quality, structure and intellectual credibility.",
  },
  {
    title: "Author Relations",
    desc: "Builds respectful author engagement systems with guidance, communication and long-term author development.",
  },
  {
    title: "Institutional Publishing",
    desc: "Works with schools, colleges, NGOs, libraries and institutions to convert knowledge into structured publications.",
  },
  {
    title: "Digital Publishing",
    desc: "Develops platforms, dashboards, digital libraries and technology systems for future-ready publishing.",
  },
  {
    title: "Rights & Royalties",
    desc: "Coordinates contracts, copyright, licensing, royalties and publishing policy systems.",
  },
];

const principles = [
  "Knowledge Before Noise",
  "Author Dignity",
  "Reader Access",
  "Editorial Integrity",
  "Institutional Trust",
  "Language Inclusion",
  "Technology With Ethics",
  "Governance Discipline",
];

const quotes = [
  "We exist because knowledge should not remain scattered.",
  "We exist because authors deserve dignity and structure.",
  "We exist because readers need access, not just availability.",
  "We exist because publishing should be a system, not a transaction.",
];

export default function LeadershipPage() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="py-5 bg-dark text-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <small className="text-uppercase text-warning fw-bold">
                Leadership
              </small>

              <h1 className="display-4 fw-bold mt-3">
                Leadership for a Knowledge-First Publishing Institution
              </h1>

              <p className="lead mt-4">
                Vasudheva Publishing Pvt. Ltd. is led with the belief that
                publishing requires more than commercial management. It
                requires intellectual seriousness, editorial judgement,
                institutional governance, author sensitivity, reader
                understanding, technological foresight and social
                responsibility.
              </p>

              <p>
                Our leadership approach connects publishing with research,
                education, media, technology, institutions, language diversity
                and long-term knowledge creation.
              </p>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <Button variant="warning">Meet the Leadership</Button>

                <Button variant="outline-light">
                  Explore Governance
                </Button>

                <Button variant="light">Contact Us</Button>
              </div>
            </Col>

            <Col lg={6} className="mt-5 mt-lg-0">
              <div className="bg-secondary rounded-4 p-5 text-center shadow">
                <h3>Leadership Constellation</h3>

                <p className="mb-0">
                  Founder • Editorial • Technology • Governance •
                  Institutions • Reader Communities
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SNAPSHOT */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold mb-4">Leadership Snapshot</h2>

          <Row className="g-4">
            {[
              "Knowledge-first and governance-led",
              "Author-sensitive publishing systems",
              "Reader-focused knowledge access",
              "Institution-oriented publishing strategy",
              "Technology-enabled publishing infrastructure",
              "Long-term knowledge ecosystem vision",
            ].map((item, index) => (
              <Col md={4} key={index}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body>
                    <p className="mb-0">{item}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* LEADERSHIP PHILOSOPHY */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={10}>
              <h2 className="fw-bold mb-4">Our Leadership Philosophy</h2>

              <p>
                Leadership at Vasudheva Publishing is not only about
                administration. It is about stewardship.
              </p>

              <p>
                A publishing institution handles authors’ manuscripts,
                readers’ trust, institutional knowledge, cultural memory,
                educational systems and intellectual property.
              </p>

              <p>
                Therefore leadership must remain ethical, disciplined,
                future-ready and socially responsible.
              </p>

              <div className="mt-4">
                <ul className="fs-5">
                  <li>Respect authors as knowledge creators</li>
                  <li>Serve readers as learners and participants</li>
                  <li>Support institutions as knowledge producers</li>
                  <li>Protect knowledge through ethical governance</li>
                  <li>Build future-ready publishing systems</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* GROUP ECOSYSTEM */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold mb-4">
            Leadership Within the Vasudheva Group Ecosystem
          </h2>

          <p>
            Vasudheva Publishing is part of the broader Vasudheva Group
            ecosystem, where publishing is integrated with research,
            education, media and technology.
          </p>

          <div className="bg-white shadow-sm rounded-4 p-4 mt-4">
            <h5 className="fw-bold text-center">
              Research → Publishing → Education → Media → Public
              Engagement
            </h5>
          </div>
        </Container>
      </section>

      {/* FOUNDER SECTION */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold mb-5">Founder and Chief Architect</h2>

          <Row className="align-items-center">
            {/* IMAGE COLUMN */}
            <Col lg={4}>
              <div className="text-center">

                {/* IMAGE ADDED HERE */}
                <Image
                  src={founderImage}
                  alt="Shashank Singh"
                  fluid
                  rounded
                  className="shadow-lg"
                  style={{
                    width: "100%",
                    maxWidth: "320px",
                    height: "420px",
                    objectFit: "cover",
                  }}
                />

              </div>
            </Col>

            {/* CONTENT COLUMN */}
            <Col lg={8} className="mt-4 mt-lg-0">
              <h3 className="fw-bold">Shashank Singh</h3>

              <h5 className="text-muted">
                Founder, Chief Architect & Lead Strategist
              </h5>

              <p className="mt-4">
                Shashank Singh is the principal founder and strategic
                architect of the Vasudheva Group. His work is grounded in
                economics, management, institutional design, research,
                education, media and knowledge infrastructure.
              </p>

              <p>
                Within Vasudheva Publishing, his role is to guide the
                publishing philosophy, strategic positioning, institutional
                model and long-term digital publishing ecosystem.
              </p>

              <blockquote className="border-start border-4 ps-3 fst-italic mt-4">
                “Publishing is not merely the production of books. It is the
                organisation of knowledge for authors, readers,
                institutions and society.”
              </blockquote>

              <Button variant="dark" className="mt-3">
                Read Founder’s Note
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* LEADERSHIP AREAS */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold mb-5">Leadership Areas</h2>

          <Row className="g-4">
            {leadershipAreas.map((item, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body>
                    <h5 className="fw-bold">{item.title}</h5>

                    <p>{item.desc}</p>

                    <Button variant="outline-dark">
                      Learn More →
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* PRINCIPLES */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold mb-5">Leadership Principles</h2>

          <Row className="g-4">
            {principles.map((item, index) => (
              <Col md={3} sm={6} key={index}>
                <Card className="text-center h-100 shadow-sm border-0">
                  <Card.Body>
                    <h6 className="fw-bold">{item}</h6>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* GOVERNANCE MODEL */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold mb-4">Leadership Governance Model</h2>

          <div className="bg-white rounded-4 shadow-sm p-4">
            <p className="text-center fs-5 mb-0">
              Strategic Direction ↓ Publishing Priorities ↓ Editorial
              Review ↓ Rights & Royalties ↓ Production ↓ Distribution ↓
              Reader Engagement ↓ Feedback ↓ Evolution
            </p>
          </div>
        </Container>
      </section>

      {/* PULL QUOTES */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold mb-5 text-center">
            Core Leadership Statements
          </h2>

          <Row className="g-4">
            {quotes.map((quote, index) => (
              <Col md={6} key={index}>
                <Card className="h-100 border-0 bg-dark text-light shadow">
                  <Card.Body className="p-4">
                    <blockquote className="fs-5 fst-italic mb-0">
                      “{quote}”
                    </blockquote>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="py-5 bg-dark text-light">
        <Container className="text-center">
          <h2 className="fw-bold mb-4">
            Led by Purpose, Built for Knowledge
          </h2>

          <p className="lead mx-auto" style={{ maxWidth: "850px" }}>
            Vasudheva Publishing is being built by leadership committed to
            author dignity, reader access, institutional trust, editorial
            quality, language inclusion, ethical technology and long-term
            knowledge value.
          </p>

          <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
            <Button variant="warning">Publish With Us</Button>

            <Button variant="outline-light">
              Partner With Us
            </Button>

            <Button variant="light">Explore Governance</Button>

            <Button variant="secondary">Contact Us</Button>
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="py-4 bg-black text-light">
        <Container className="text-center">
          <h5 className="fw-bold">
            Vasudheva Publishing Pvt. Ltd.
          </h5>

          <p className="mb-1">
            Publishing Knowledge. Empowering Authors. Enabling Readers.
          </p>

          <small className="text-secondary">
            A publishing and knowledge infrastructure company led by a
            governance-led, author-sensitive and future-ready leadership
            approach.
          </small>
        </Container>
      </footer>
    </div>
  );
}