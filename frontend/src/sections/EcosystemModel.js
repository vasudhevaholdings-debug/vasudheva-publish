import { Container, Row, Col, Card } from 'react-bootstrap';

const EcosystemModel = () => {
  const ecosystemItems = [
    {
      title: "Author Development",
      desc: "We support authors, researchers, educators, professionals and storytellers through editorial guidance, manuscript development, rights awareness, publishing pathways and long-term author identity building."
    },
    {
      title: "Publishing & Production",
      desc: "We publish books, academic texts, reports, journals, magazines, children’s books, digital publications, audiobooks, podcasts and multimedia knowledge products."
    },
    {
      title: "Distribution & Access",
      desc: "We aim to distribute knowledge through print, digital, audio, institutional, community and platform-based channels."
    },
    {
      title: "Reader Engagement",
      desc: "We build reading communities, guided reading experiences, book clubs, learning journeys and digital access models."
    },
    {
      title: "Institutional Solutions",
      desc: "We work with schools, colleges, libraries, NGOs, companies, governments and cultural institutions to create and distribute credible knowledge."
    },
    {
      title: "Digital Publishing Platform",
      desc: "We are building systems for manuscript submission, author dashboards, digital libraries, royalty transparency, metadata, analytics and future AI-enabled publishing tools."
    }
  ];

  return (
    <section className="premium-section py-5 bg-light">
      <Container>
        <h2 className="section-heading text-center mb-4 animate-fade-in">
          Our Publishing Ecosystem
        </h2>

        {/* Lifecycle */}
        <p className="lead text-center mx-auto mb-3" style={{ maxWidth: '900px' }}>
          We work across the complete knowledge lifecycle:
        </p>

        <p className="text-center fw-semibold mb-4" style={{ letterSpacing: '0.5px' }}>
          Idea → Research → Writing → Editing → Design → Publishing → Distribution → Reading → Feedback → Evolution
        </p>

        {/* Ecosystem Description */}
        <p className="text-center mx-auto mb-5" style={{ maxWidth: '900px' }}>
          Our publishing ecosystem combines editorial discipline, design quality,
          digital infrastructure, multilingual reach, author support, reader engagement
          and institutional partnerships.
        </p>

        {/* Ecosystem Cards */}
        <Row className="g-4">
          {ecosystemItems.map((item, index) => (
            <Col md={6} lg={4} key={index}>
              <Card
                className="identity-card h-100 border-0"
                style={{ borderRadius: '12px', backgroundColor: '#ffffff' }}
              >
                <Card.Body>
                  <h5 className="mb-3 fw-bold">{item.title}</h5>
                  <p className="text-muted small">{item.desc}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default EcosystemModel;