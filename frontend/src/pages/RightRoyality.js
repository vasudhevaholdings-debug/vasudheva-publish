import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Accordion,
  Form,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const RoyaltiesRights = () => {
  return (
    <div>

      {/* ================= IMPORTANT LEGAL NOTE ================= */}
      <section className="py-5 bg-light border-bottom">
        <Container>
          <Card className="border-warning shadow-sm p-4">
            <h2 className="fw-bold mb-3">Important Legal Note</h2>

            <p>
              This page provides general publishing-oriented information for authors.
              It is not a substitute for independent legal advice.
            </p>

            <p>
              Specific rights, royalty rates, payment cycles, territories,
              duration, formats, licensing terms, deductions, reporting systems
              and responsibilities will be governed by the written agreement
              between the author and Vasudheva Publishing Pvt. Ltd.
            </p>

            <p className="mb-0">
              Authors are encouraged to read all agreements carefully and seek
              independent legal advice where required.
            </p>
          </Card>
        </Container>
      </section>

      {/* ================= HERO ================= */}
      <section className="py-5 position-relative overflow-hidden bg-light">
        <div className="hero-bg-overlay"></div>

        <Container className="position-relative">
          <Row className="align-items-center g-5">

            {/* LEFT */}
            <Col lg={6}>
              <div className="text-uppercase fw-semibold text-muted mb-3">
                For Authors
              </div>

              <h1 className="display-4 fw-bold animate-fade-in">
                Understand Your Rights. Know Your Royalties. Publish With Clarity.
              </h1>

              <p className="lead mt-4 animate-fade-in-delay-1">
                Vasudheva Publishing Pvt. Ltd. believes that author relationships
                should be built on clarity, dignity, written understanding and
                responsible handling of intellectual property.
              </p>

              <p className="text-muted fs-5">
                A manuscript is not merely text. It is an intellectual asset.
                Before publication, authors should understand copyright,
                publishing rights, formats, territories, duration, licensing,
                royalties, reporting and future uses of their work.
              </p>

              <div className="d-flex flex-wrap gap-3 mt-4 animate-fade-in-delay-2">
                <Button className="hover-scale">
                  Request Rights Discussion
                </Button>

                <Button
                  as={Link}
                  to="/submit-manuscript"
                  variant="outline-dark"
                  className="hover-scale"
                >
                  Submit Manuscript
                </Button>

                <Button variant="outline-dark" className="hover-scale">
                  Read Author Submission Policy
                </Button>
              </div>
            </Col>

            {/* RIGHT */}
            <Col lg={6}>
              <Card className="shadow-lg border-0 rounded-4 p-4 hover-lift">
                <h4 className="fw-bold mb-4">
                  Rights & Royalties Dashboard
                </h4>

                {[
                  "Copyright Ownership",
                  "Publishing Rights",
                  "Print / E-book / Audio Rights",
                  "Royalty Structures",
                  "Territory & Duration",
                  "Licensing & Distribution",
                  "Transparency & Reporting",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-3 rounded bg-light border mb-3"
                  >
                    {item}
                  </div>
                ))}

                <div className="bg-dark text-white p-3 rounded text-center">
                  Agreements • Royalties • Rights Clarity
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
            Rights & Royalties in One View
          </h2>

          <Row className="g-4">
            {[
              "Copyright usually begins with the creator of an original work.",
              "Submitting a manuscript does not automatically transfer copyright.",
              "Publishing rights are granted through written agreement.",
              "Different formats require different rights.",
              "Royalties depend on agreement terms and revenue model.",
              "Print, e-book, audiobook, translation and institutional licensing may have different royalty logic.",
              "Rights retained by the author should be clearly stated.",
              "Royalty statements should be clear, periodic and agreement-based.",
            ].map((item, i) => (
              <Col md={6} lg={3} key={i}>
                <Card className="h-100 p-4 shadow-sm border-0 hover-lift">
                  {item}
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold mb-4">
            Our Philosophy: Clarity Before Commitment
          </h2>

          <p>
            Publishing depends on trust.
          </p>

          <p>
            Authors trust publishers with manuscripts. Publishers trust authors
            with originality. Readers trust both with knowledge. Institutions
            trust publications with credibility.
          </p>

          <p>
            Vasudheva Publishing believes that rights and royalties should not
            remain vague or hidden. Authors should understand what they are
            agreeing to before entering a publishing relationship.
          </p>

          <Row className="g-4 mt-4">
            {[
              "Clear written agreements",
              "Respect for author ownership",
              "Format-wise rights clarity",
              "Transparent royalty logic",
              "Responsible licensing",
              "Proper attribution",
              "Ethical use of intellectual property",
              "Confidential handling of manuscripts",
              "Future-facing author reporting systems",
            ].map((item, i) => (
              <Col md={6} lg={4} key={i}>
                <Card className="p-4 h-100 shadow-sm border-0 hover-lift">
                  <strong>{item}</strong>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= COPYRIGHT ================= */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold mb-4">
            Understanding Copyright
          </h2>

          <p>
            Copyright is the legal protection given to original creative and
            intellectual works. In India, copyright law is governed by the
            Copyright Act, 1957.
          </p>

          <p>
            The Act covers eligible works such as literary, dramatic, musical
            and artistic works, among others.
          </p>

          <p>
            For authors, copyright is important because it relates to ownership,
            reproduction, publication, translation, adaptation, performance,
            communication to the public and other uses of the work.
          </p>

          <Card className="p-4 bg-dark text-white border-0 mt-4">
            <h5 className="fw-bold">Key Statement</h5>

            <p className="mb-0">
              Submitting a manuscript to Vasudheva Publishing for review does
              not automatically transfer copyright.
            </p>
          </Card>
        </Container>
      </section>

      {/* ================= COPYRIGHT VS RIGHTS ================= */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold mb-5">
            Copyright and Publishing Rights Are Not the Same Thing
          </h2>

          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100 p-4 shadow-sm border-0">
                <h4 className="fw-bold mb-3">Copyright</h4>

                <p>
                  Copyright is the broader ownership of the original work.
                </p>

                <ul>
                  <li>Ownership of original intellectual work</li>
                  <li>Protection under copyright law</li>
                  <li>Author begins as copyright owner</li>
                </ul>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="h-100 p-4 shadow-sm border-0">
                <h4 className="fw-bold mb-3">Publishing Rights</h4>

                <p>
                  Publishing rights are permissions granted to a publisher to
                  publish, distribute, sell, translate or adapt the work.
                </p>

                <ul>
                  <li>Print publication rights</li>
                  <li>E-book rights</li>
                  <li>Audiobook rights</li>
                  <li>Translation rights</li>
                </ul>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= TYPES OF RIGHTS ================= */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Types of Rights in Publishing
          </h2>

          <Row className="g-4">

            {[
              {
                title: "Print Rights",
                text: "Permission to publish and distribute the work in printed book form."
              },
              {
                title: "Digital / E-book Rights",
                text: "Permission to publish and distribute the work digitally."
              },
              {
                title: "Audiobook Rights",
                text: "Permission to produce and distribute audio editions."
              },
              {
                title: "Translation Rights",
                text: "Permission to translate the work into another language."
              },
              {
                title: "Adaptation Rights",
                text: "Permission to adapt the work into courses, workshops or media."
              },
              {
                title: "Institutional Rights",
                text: "Permission to distribute or license the work to institutions."
              },
              {
                title: "Territory Rights",
                text: "Defines where the publisher may distribute the work."
              },
              {
                title: "Duration Rights",
                text: "Defines how long rights are granted."
              },
            ].map((item, i) => (
              <Col md={6} lg={3} key={i}>
                <Card className="h-100 p-4 shadow-sm border-0 hover-lift">
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.text}</p>
                </Card>
              </Col>
            ))}

          </Row>
        </Container>
      </section>

      {/* ================= RIGHTS TABLE ================= */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold mb-5">
            Rights Granted and Rights Retained
          </h2>

          <Table bordered responsive className="shadow-sm">
            <thead className="table-dark">
              <tr>
                <th>Rights Granted to Publisher</th>
                <th>Rights Retained by Author</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Print publication rights</td>
                <td>Adaptation rights</td>
              </tr>

              <tr>
                <td>E-book distribution rights</td>
                <td>International rights</td>
              </tr>

              <tr>
                <td>Institutional licensing rights</td>
                <td>Translation rights</td>
              </tr>

              <tr>
                <td>Territory-specific publishing rights</td>
                <td>Audiobook rights</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </section>

      {/* ================= ROYALTIES ================= */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold mb-4">
            Understanding Royalties
          </h2>

          <p>
            Royalty is the author’s share of revenue from the sale, licensing
            or commercial use of the published work, where such royalty is
            agreed in writing.
          </p>

          <p>
            Royalty may apply to print book sales, e-book sales, audiobook
            sales, institutional licensing, translation licensing, digital
            subscriptions and bulk sales.
          </p>

          <p>
            Royalty is not automatic in every publishing model. Some models may
            be service-based, assisted publishing, work-for-hire or
            institutionally funded.
          </p>
        </Container>
      </section>

      {/* ================= ROYALTY CALCULATION ================= */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            What Affects Royalty Calculation?
          </h2>

          <Row className="g-4">
            {[
              "Publishing model",
              "MRP",
              "Net receipts",
              "Discounts",
              "Returns",
              "Printing cost",
              "Platform commission",
              "Taxes",
              "Licensing structure",
              "Territory",
            ].map((item, i) => (
              <Col md={4} lg={3} key={i}>
                <Card className="p-4 text-center border-0 shadow-sm hover-lift">
                  {item}
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Frequently Asked Questions
          </h2>

          <Accordion>

            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Does submitting a manuscript transfer my copyright?
              </Accordion.Header>

              <Accordion.Body>
                No. Submission for review does not automatically transfer copyright.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Can I retain some rights?
              </Accordion.Header>

              <Accordion.Body>
                Yes. Rights retained by the author should be clearly stated in the agreement.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Are royalties the same for every author?
              </Accordion.Header>

              <Accordion.Body>
                No. Royalties depend on publishing model, format, agreement and cost structure.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Can print and audiobook royalties differ?
              </Accordion.Header>

              <Accordion.Body>
                Yes. Different formats may have different royalty structures.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Should I seek legal advice before signing?
              </Accordion.Header>

              <Accordion.Body>
                For significant publishing or licensing agreements, independent legal advice is advisable.
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>
        </Container>
      </section>

      {/* ================= RIGHTS FORM ================= */}
      <section className="py-5 bg-light" id="rights-discussion-form">
        <Container>
          <h2 className="fw-bold text-center mb-4">
            Request a Rights or Royalty Discussion
          </h2>

          <p className="text-center text-muted mb-5">
            If you are an author seeking clarity on publishing rights,
            royalty models or agreement terms, you may request a discussion.
          </p>

          <Card className="shadow-sm border-0 p-4">

            <Row className="g-4">

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Author Type</Form.Label>

                  <Form.Select>
                    <option>Writer</option>
                    <option>Researcher</option>
                    <option>Translator</option>
                    <option>Institution Representative</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label>Message</Form.Label>

                  <Form.Control as="textarea" rows={5} />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label>Upload Document</Form.Label>

                  <Form.Control type="file" />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Check
                  type="checkbox"
                  label="I understand this discussion does not replace independent legal advice."
                />
              </Col>

              <Col md={12}>
                <Button size="lg">
                  Submit Rights Inquiry
                </Button>
              </Col>

            </Row>

          </Card>
        </Container>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-5 bg-dark text-white text-center">
        <Container>
          <h2 className="display-5 fw-bold mb-4">
            Publish With Clarity and Confidence
          </h2>

          <p className="lead mb-5">
            A strong publishing relationship begins with clear understanding.
            Understand your copyright, rights granted, royalty basis and future
            licensing possibilities before publication.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3">

            <Button className="hover-scale">
              Request Rights Discussion
            </Button>

            <Button
              as={Link}
              to="/submit-manuscript"
              variant="outline-light"
              className="hover-scale"
            >
              Submit Manuscript
            </Button>

            <Button variant="outline-light" className="hover-scale">
              Explore Author Services
            </Button>

            <Button variant="outline-light" className="hover-scale">
              Read Legal Policies
            </Button>

          </div>
        </Container>
      </section>

    </div>
  );
};

export default RoyaltiesRights;