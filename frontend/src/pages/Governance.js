import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Accordion,
} from "react-bootstrap";

const GovernancePage = () => {
  const governancePrinciples = [
    {
      title: "Author Dignity",
      text: "Authors must be treated as knowledge creators with clarity in rights, royalties and publishing pathways.",
    },
    {
      title: "Reader Trust",
      text: "Readers deserve transparent pricing, accurate descriptions and responsible digital access.",
    },
    {
      title: "Editorial Integrity",
      text: "Every publication should go through review, editing, quality assurance and ethical checks.",
    },
    {
      title: "Rights & IP Stewardship",
      text: "Copyright, licensing and intellectual property should be documented and protected responsibly.",
    },
    {
      title: "Technology Governance",
      text: "Technology should improve transparency, accountability and secure publishing systems.",
    },
    {
      title: "Community Governance",
      text: "Reader communities and public participation should remain respectful, moderated and inclusive.",
    },
  ];

  const governanceStatements = [
    "Good publishing requires good governance.",
    "Author dignity begins with process clarity.",
    "Reader trust depends on accuracy, access and accountability.",
    "Rights and royalties must be documented, not assumed.",
    "Technology should increase transparency, not create opacity.",
    "Community participation requires dignity, moderation and respect.",
  ];

  const policies = [
    "Terms and Conditions",
    "Privacy Policy",
    "Copyright Policy",
    "Author Submission Policy",
    "Royalty Policy",
    "Refund and Cancellation Policy",
    "Shipping and Delivery Policy",
    "Digital Access Policy",
    "Content Ethics Policy",
    "Community Guidelines",
    "Institutional Confidentiality Policy",
    "Partner Engagement Policy",
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="py-5 bg-dark text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              {/* <small className="text-uppercase text-warning fw-bold">
                Governance
              </small> */}

              <h1 className="display-4 fw-bold mt-3">
                Governance for a Trusted Publishing Ecosystem
              </h1>

              <p className="lead mt-4">
                Vasudheva Publishing Pvt. Ltd. is committed to building
                publishing systems that protect author dignity, reader trust,
                institutional confidentiality, editorial quality, rights clarity,
                responsible technology and long-term knowledge value.
              </p>

              <p>
                Publishing is not only a creative or commercial activity. It
                involves manuscripts, intellectual property, contracts,
                royalties, research, data, institutional documents, children’s
                content, digital access, community participation and public
                knowledge.
              </p>

              <div className="d-flex gap-3 mt-4 flex-wrap">
                <Button variant="warning">
                  Explore Governance Framework
                </Button>

                <Button variant="outline-light">
                  Read Legal Policies
                </Button>

                <Button variant="light">Contact Us</Button>
              </div>
            </Col>

            <Col lg={6} className="text-center mt-5 mt-lg-0">
              <img
                src="/images/governance-wheel.png"
                alt="Governance"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* GOVERNANCE SNAPSHOT */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Governance in One View
          </h2>

          <Row>
            {[
              "Author dignity must be protected",
              "Reader trust must be respected",
              "Editorial quality must be reviewed",
              "Rights and royalties must be clear",
              "Institutional documents must be handled responsibly",
              "Technology must be used ethically",
              "Data must be protected",
              "Publishing decisions must align with purpose and law",
            ].map((item, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body>
                    <h6 className="fw-bold">{item}</h6>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* WHY GOVERNANCE MATTERS */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <h2 className="fw-bold mb-4">
                Why Governance Matters in Publishing
              </h2>

              <p>
                A publishing institution handles sensitive and valuable forms of
                knowledge. Authors submit unpublished manuscripts. Institutions
                share confidential documents. Readers trust publishers with
                purchases and data. Researchers contribute evidence and
                analysis.
              </p>

              <p>
                Without governance, publishing can become opaque, careless or
                exploitative. Governance ensures publishing remains ethical,
                transparent, legally compliant, financially responsible and
                technologically accountable.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* GOVERNANCE PRINCIPLES */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Our Governance Principles
          </h2>

          <Row>
            {governancePrinciples.map((item, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body>
                    <h4 className="fw-bold">{item.title}</h4>
                    <p className="text-muted mt-3">{item.text}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* GOVERNANCE FRAMEWORK */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Governance Framework
          </h2>

          <Row className="g-4">
            {[
              "Strategic Governance",
              "Editorial Governance",
              "Legal & Rights Governance",
              "Financial & Royalty Governance",
              "Institutional Governance",
              "Technology & Data Governance",
              "Community Governance",
            ].map((item, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="border-0 shadow-sm h-100">
                  <Card.Body>
                    <h5 className="fw-bold">{item}</h5>
                    <p className="text-muted mt-3">
                      Structured systems to ensure accountability, transparency
                      and publishing quality.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* GOVERNANCE POLICIES */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Core Governance Policies
          </h2>

          <Row>
            {policies.map((policy, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <Card className="border-0 shadow-sm h-100">
                  <Card.Body>
                    <h5 className="fw-bold">{policy}</h5>

                    <Button
                      variant="dark"
                      className="mt-3 rounded-pill px-4"
                    >
                      Learn More →
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* WORKFLOW */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Governance Workflows
          </h2>

          <Row>
            <Col lg={6} className="mb-4">
              <Card className="shadow-sm border-0 h-100">
                <Card.Body>
                  <h4 className="fw-bold">
                    Manuscript Governance Workflow
                  </h4>

                  <p className="mt-3">
                    Submission → Editorial Review → Rights Check →
                    Agreement → Editing → Approval → Publication
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6} className="mb-4">
              <Card className="shadow-sm border-0 h-100">
                <Card.Body>
                  <h4 className="fw-bold">
                    Institutional Project Workflow
                  </h4>

                  <p className="mt-3">
                    Inquiry → Scope Definition → Confidentiality Review →
                    Development → Institutional Approval → Delivery
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ / ACCORDION */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Governance FAQs
          </h2>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                How does Vasudheva Publishing protect author rights?
              </Accordion.Header>

              <Accordion.Body>
                We use agreement-based publishing systems with clarity in
                rights, royalties, approvals and intellectual property handling.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                How are institutional documents handled?
              </Accordion.Header>

              <Accordion.Body>
                Institutional documents are handled with confidentiality,
                restricted access and approval-based publishing workflows.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Does the company support digital privacy?
              </Accordion.Header>

              <Accordion.Body>
                Yes. We aim to implement privacy-focused systems including
                secure storage, role-based access and responsible analytics.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>

      {/* GOVERNANCE STATEMENTS */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Core Governance Statements
          </h2>

          <Row>
            {governanceStatements.map((quote, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className="border-0 bg-dark text-white h-100 shadow">
                  <Card.Body className="d-flex align-items-center">
                    <blockquote className="mb-0 fw-semibold">
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
      <section className="py-5 bg-dark text-white text-center">
        <Container>
          <h2 className="fw-bold mb-4">
            Governed for Trust. Built for Knowledge.
          </h2>

          <p className="lead mx-auto" style={{ maxWidth: "850px" }}>
            Vasudheva Publishing is committed to creating a publishing
            ecosystem where authors, readers, institutions, partners and
            communities can engage with confidence.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
            <Button variant="warning">Read Legal Policies</Button>

            <Button variant="outline-light">
              Publish With Us
            </Button>

            <Button variant="light">Partner With Us</Button>

            <Button variant="secondary">Contact Us</Button>
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="py-5 bg-black text-white">
        <Container>
          <Row>
            <Col lg={8}>
              <h4 className="fw-bold">
                Vasudheva Publishing Pvt. Ltd.
              </h4>

              <p className="mt-3">
                Publishing Knowledge. Empowering Authors. Enabling Readers.
              </p>

              <p className="text-secondary">
                A publishing and knowledge infrastructure company governed
                by principles of author dignity, reader trust, editorial
                integrity, rights clarity, institutional confidentiality, data
                protection, ethical technology and responsible community
                participation.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default GovernancePage;