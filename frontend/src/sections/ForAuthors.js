import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ForAuthors = () => {
  return (
    <section className="premium-section py-5 bg-dark text-white animate-fade-in">
      <Container>
        <h2 className="section-heading text-center mb-4 text-white">
          For Authors
        </h2>

        {/* Intro */}
        <p className="lead text-center mx-auto mb-3" style={{ maxWidth: '900px', color: '#cbd5e1' }}>
          Your manuscript is not just a document. It is an intellectual asset that
          deserves care, structure, design, protection and responsible circulation.
        </p>

        <p className="text-center mx-auto mb-5" style={{ maxWidth: '900px', color: '#94a3b8' }}>
          At Vasudheva Publishing, we treat authors as knowledge partners. We
          support writers, researchers, teachers, professionals, creators and
          institutions through structured publishing pathways.
        </p>

        {/* Author Journey */}
        <div className="text-center mb-5">
          <p className="fw-semibold mb-2">Author Journey</p>
          <p style={{ letterSpacing: '0.5px', color: '#e2e8f0' }}>
            Submit → Screen → Review → Edit → Design → Publish → Market → Earn → Evolve
          </p>
        </div>

        {/* Support Section */}
        <Row className="justify-content-center mb-5">
          <Col lg={10}>
            <div
              className="p-4"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: '12px'
              }}
            >
              <h6 className="mb-3 text-white">Author Support Includes</h6>
              <p className="mb-0" style={{ color: '#cbd5e1' }}>
                Manuscript evaluation, developmental editing, copyediting,
                proofreading, translation, cover design, book layout, author
                branding, marketing support, audiobook production, rights
                management and royalty transparency.
              </p>
            </div>
          </Col>
        </Row>

        {/* CTA */}
        <div className="text-center">
          <Button
            as={Link}
            to="/submit-manuscript"
            variant="light"
            size="lg"
            className="me-3"
            style={{ borderRadius: '30px', padding: '10px 24px' }}
          >
            Submit Your Manuscript
          </Button>

          <Button
            as={Link}
            to="/author-services"
            variant="outline-light"
            size="lg"
            style={{ borderRadius: '30px', padding: '10px 24px' }}
          >
            Explore Author Services
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ForAuthors;