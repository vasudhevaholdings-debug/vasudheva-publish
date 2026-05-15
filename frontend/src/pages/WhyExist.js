import { Container, Row, Col, Card, Button, Table, Accordion } from "react-bootstrap";

const WhyWeExistPage = () => {
  return (
    <div style={{ backgroundColor: "#f8f5f1", color: "#1a1a1a" }}>

      {/* HERO SECTION */}
      <section className="py-5 border-bottom">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              {/* <p className="text-uppercase fw-semibold text-muted">
                Why We Exist
              </p> */}

              <h1 className="display-4 fw-bold mb-4">
                Because Knowledge Should Not Remain Scattered, Silent or Inaccessible
              </h1>

              <p className="lead mb-4">
                Vasudheva Publishing Pvt. Ltd. exists to build a more ethical,
                inclusive, multilingual, author-sensitive and technology-enabled
                publishing ecosystem where ideas, manuscripts, research, stories
                and institutional knowledge can become meaningful publications.
              </p>

              <p className="mb-4">
                We exist because authors need dignity, readers need access,
                institutions need structured knowledge, Indian languages need
                stronger platforms, and society needs publishing systems that
                connect knowledge with learning, memory, imagination, public
                dialogue and long-term development.
              </p>

              <div className="d-flex gap-3 flex-wrap">
                <Button variant="dark">Publish With Us</Button>
                <Button variant="outline-dark">Explore Our Philosophy</Button>
                <Button variant="secondary">Partner With Us</Button>
              </div>
            </Col>

            <Col lg={6}>
              <div className="p-5 bg-white shadow-sm rounded-4 text-center mt-5 mt-lg-0">
                <h5 className="fw-bold mb-4">Knowledge Flow</h5>

                <div className="d-flex flex-column gap-3">
                  <div className="p-3 border rounded">Scattered Knowledge</div>
                  <div>↓</div>
                  <div className="p-3 border rounded">Structured Publishing</div>
                  <div>↓</div>
                  <div className="p-3 border rounded">Reader Access</div>
                  <div>↓</div>
                  <div className="p-3 border rounded">Institutional Use</div>
                  <div>↓</div>
                  <div className="p-3 border rounded">Social Value</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* EXISTENCE SNAPSHOT */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold mb-5 text-center">
            Why We Exist in One View
          </h2>

          <Row className="g-4">
            {[
              "We exist because authors need support.",
              "We exist because readers need access.",
              "We exist because institutions need knowledge systems.",
              "We exist because Indian languages need stronger publishing pathways.",
              "We exist because research, education, media and publishing must be integrated.",
              "We exist because books should become learning, dialogue and social value.",
              "We exist because publishing should be ethical, transparent and future-ready."
            ].map((item, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="h-100 border-0 shadow-sm rounded-4">
                  <Card.Body>
                    <p className="mb-0">{item}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* FUNDAMENTAL PROBLEM */}
      <section className="py-5 bg-white">
        <Container>
          <h2 className="fw-bold mb-4">
            The Fundamental Problem: Knowledge Is Being Created, But Not Always Published Well
          </h2>

          <p>
            Across India and the world, knowledge is being created every day.
            Teachers create learning material. Researchers create studies.
            Writers create stories. Institutions create reports. Communities
            preserve memory.
          </p>

          <p>
            But much of this knowledge remains unstructured, unpublished,
            poorly edited, untranslated, under-read and under-used.
          </p>

          <p className="fw-semibold">
            The problem is not the absence of knowledge. The problem is the
            weakness of systems that convert knowledge into accessible,
            credible and useful publications.
          </p>
        </Container>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold mb-4">
            Why Conventional Publishing Is Not Enough
          </h2>

          <Table bordered responsive className="bg-white">
            <thead>
              <tr>
                <th>Conventional Publishing Gap</th>
                <th>Vasudheva Publishing Response</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Manuscript treated as product</td>
                <td>Manuscript treated as intellectual asset</td>
              </tr>

              <tr>
                <td>Author treated as supplier</td>
                <td>Author treated as knowledge partner</td>
              </tr>

              <tr>
                <td>Reader treated as buyer</td>
                <td>Reader treated as learner and participant</td>
              </tr>

              <tr>
                <td>Publishing ends at sale</td>
                <td>Publishing continues into learning and evolution</td>
              </tr>

              <tr>
                <td>Print-focused</td>
                <td>Print + digital + audio + multimedia</td>
              </tr>

              <tr>
                <td>Weak transparency</td>
                <td>Rights and royalty clarity</td>
              </tr>

              <tr>
                <td>Limited language inclusion</td>
                <td>English, Hindi, bilingual and Indian-language pathways</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </section>

      {/* AUTHORS */}
      <section className="py-5 bg-white">
        <Container>
          <h2 className="fw-bold mb-4">
            We Exist Because Authors Need Dignity, Structure and Support
          </h2>

          <Row className="g-4">
            {[
              "Manuscript evaluation",
              "Developmental editing",
              "Copyediting and proofreading",
              "Translation support",
              "Book design",
              "Publishing guidance",
              "Rights awareness",
              "Royalty clarity",
              "Marketing support",
              "Audiobook possibilities",
            ].map((item, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="h-100 border-0 shadow-sm rounded-4">
                  <Card.Body>
                    <p className="mb-0">{item}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="mt-5 p-4 bg-light rounded-4">
            <h5 className="fw-bold">
              We exist to help authors move from idea to manuscript,
              manuscript to publication, and publication to long-term
              intellectual presence.
            </h5>
          </div>
        </Container>
      </section>

      {/* READERS */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold mb-4">
            We Exist Because Readers Need Access, Meaning and Discovery
          </h2>

          <Row className="g-4">
            {[
              "Curated book discovery",
              "Reader-friendly categories",
              "Print, digital and audio formats",
              "Children’s books",
              "Reading pathways",
              "Book clubs",
              "Reader communities",
              "Audiobooks and podcasts",
            ].map((item, index) => (
              <Col md={6} lg={3} key={index}>
                <Card className="border-0 shadow-sm rounded-4 h-100">
                  <Card.Body>
                    <p>{item}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* LANGUAGE */}
      <section className="py-5 bg-white">
        <Container>
          <h2 className="fw-bold mb-4">
            We Exist Because Language Is Access
          </h2>

          <p>
            India is a multilingual civilisation. Knowledge lives in English,
            Hindi, regional languages, dialects, oral traditions and community
            memory.
          </p>

          <p>
            A publishing system that ignores language diversity creates
            knowledge inequality.
          </p>

          <Row className="g-4 mt-4">
            {[
              "English publishing",
              "Hindi publishing",
              "Bilingual publishing",
              "Translation",
              "Indian-language pathways",
              "Local knowledge documentation",
            ].map((item, index) => (
              <Col md={4} key={index}>
                <Card className="border-0 shadow-sm rounded-4">
                  <Card.Body>{item}</Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* DIGITAL TRUST */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold mb-4">
            We Exist Because Digital Publishing Needs Trust
          </h2>

          <p>
            The future of publishing will be shaped by digital platforms,
            metadata, digital libraries, audiobooks and AI-assisted systems.
          </p>

          <p>
            But digital publishing without ethics can create plagiarism,
            opaque royalties and loss of author dignity.
          </p>

          <Row className="g-4 mt-4">
            {[
              "Author dashboard",
              "Reader dashboard",
              "Digital library",
              "Royalty transparency",
              "Metadata systems",
              "Digital rights management",
              "Audiobook platform",
              "Ethical AI-assisted publishing",
            ].map((item, index) => (
              <Col md={6} lg={3} key={index}>
                <Card className="border-0 shadow-sm rounded-4 h-100">
                  <Card.Body>{item}</Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* PULL QUOTES */}
      <section className="py-5 bg-dark text-white">
        <Container>
          <h2 className="fw-bold mb-5 text-center">
            Core Statements
          </h2>

          <Row className="g-4">
            {[
              "We exist because knowledge should not remain scattered.",
              "We exist because authors deserve dignity and structure.",
              "We exist because readers need access, not just availability.",
              "We exist because institutions produce knowledge that must be preserved.",
              "We exist because Indian languages are knowledge worlds.",
              "We exist because publishing should be a system, not a transaction.",
            ].map((quote, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="bg-secondary text-white border-0 h-100 rounded-4">
                  <Card.Body>
                    <h5>“{quote}”</h5>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Frequently Asked Questions
          </h2>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Why does Vasudheva Publishing exist?
              </Accordion.Header>

              <Accordion.Body>
                Vasudheva Publishing exists to build an ethical,
                multilingual, author-sensitive and technology-enabled
                publishing ecosystem.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                What problem does the company solve?
              </Accordion.Header>

              <Accordion.Body>
                We address the gap between knowledge creation and
                meaningful publication by helping authors, institutions
                and readers access structured publishing systems.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Does the company support Indian languages?
              </Accordion.Header>

              <Accordion.Body>
                Yes. We support English, Hindi, bilingual and future
                Indian-language publishing pathways.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="py-5 text-center bg-white border-top">
        <Container>
          <h2 className="fw-bold mb-4">
            Join Us in Building a More Meaningful Publishing Ecosystem
          </h2>

          <p className="lead mx-auto mb-4" style={{ maxWidth: "900px" }}>
            If you are an author, reader, institution or partner who believes
            in the power of books, research, education and public thought,
            Vasudheva Publishing invites you to participate in this mission.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Button variant="dark">Publish With Us</Button>
            <Button variant="outline-dark">Explore Books</Button>
            <Button variant="secondary">Partner With Us</Button>
            <Button variant="outline-secondary">Contact Us</Button>
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="py-4 bg-dark text-white text-center">
        <Container>
          <h5>Vasudheva Publishing Pvt. Ltd.</h5>

          <p className="mb-2">
            Publishing Knowledge. Empowering Authors. Enabling Readers.
          </p>

          <small>
            A publishing and knowledge infrastructure company created to
            support authors, empower readers, serve institutions and build
            ethical, transparent and future-ready publishing systems.
          </small>
        </Container>
      </footer>

    </div>
  );
};

export default WhyWeExistPage;