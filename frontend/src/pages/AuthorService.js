import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const AuthorServicesPage = () => {
  return (
    <section className="premium-section py-5 bg-white">
      <Container>

        {/* Hero */}
        <div className="text-center mb-5 about-hero">
          <h2 className="section-heading mb-3">
            Professional Publishing Services for Authors
          </h2>
          <p className="lead mx-auto" style={{ maxWidth: '900px' }}>
            From manuscript evaluation to editing, design, translation, marketing and
            rights support, we help authors prepare their work for serious
            publication.
          </p>
        </div>

        {/* Manuscript Evaluation */}
        <Row className="justify-content-center about-section">
          <Col lg={10}>
            <h3 className="about-heading">Manuscript Evaluation</h3>
            <p className="about-text">
              A professional review of your manuscript’s structure, clarity, originality,
              reader relevance, genre fit, strengths, weaknesses and publication
              readiness.
            </p>

            <Button as={Link} to="/contact" variant="dark" className="mb-4">
              Request Manuscript Evaluation
            </Button>
          </Col>
        </Row>

        {/* Services List */}
        <Row className="justify-content-center about-section">
          <Col lg={10}>

            <p className="about-text"><strong>Developmental Editing</strong><br />
              Deep editorial support for improving structure, argument, narrative flow,
              chapter organisation, concept clarity and reader experience.
            </p>

            <p className="about-text"><strong>Copyediting</strong><br />
              Line-level editing to improve grammar, sentence flow, consistency,
              clarity, tone and readability.
            </p>

            <p className="about-text"><strong>Proofreading</strong><br />
              Final language and formatting check before publication.
            </p>

            <p className="about-text"><strong>Translation and Language Services</strong><br />
              Translation, bilingual adaptation, language polishing, contextualisation
              and reader-specific adaptation.
            </p>

            <p className="about-text"><strong>Book Design and Layout</strong><br />
              Interior layout, typography, formatting, print preparation, e-book
              conversion and visual presentation.
            </p>

            <p className="about-text"><strong>Cover Design</strong><br />
              Conceptual and professional cover design aligned with genre, audience,
              positioning and brand identity.
            </p>

            <p className="about-text"><strong>Author Branding</strong><br />
              Support for author profile, bio, launch communication, social media
              positioning, interviews and long-term identity building.
            </p>

            <p className="about-text"><strong>Book Marketing</strong><br />
              Launch planning, digital campaigns, reader targeting, institutional
              outreach, author events, content strategy and promotional assets.
            </p>

            <p className="about-text"><strong>Audiobook and Podcast Production</strong><br />
              Narration, recording, editing, sound design and distribution support for
              audio formats.
            </p>

            <p className="about-text"><strong>Rights and IP Support</strong><br />
              Guidance on copyright, licensing, translation rights, adaptation rights,
              institutional rights and future monetisation.
            </p>

          </Col>
        </Row>

        {/* Final CTA */}
        <div className="text-center mt-5">
          <Button as={Link} to="/contact" variant="dark" size="lg">
            Request Author Service Consultation
          </Button>
        </div>

      </Container>
    </section>
  );
};

export default AuthorServicesPage;