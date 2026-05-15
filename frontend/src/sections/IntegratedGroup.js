import { Container, Row, Col, Card } from 'react-bootstrap';

const GroupIntegration = () => {
  const entities = [
    {
      title: "Vasudheva Strategic Innovations",
      desc: "Creates research, analysis, frameworks and institutional knowledge."
    },
    {
      title: "Vasudheva Eduinnovation",
      desc: "Converts knowledge into learning systems, curricula and educational experiences."
    },
    {
      title: "Vasudheva Media",
      desc: "Amplifies ideas through audio, video, digital and public communication formats."
    },
    {
      title: "Vasudheva Publishing",
      desc: "Transforms ideas into durable, distributable and monetisable knowledge products."
    }
  ];

  return (
    <section className="premium-section py-5 bg-white animate-on-scroll">
      <Container>
        <h2 className="section-heading text-center mb-4 animate-fade-in">
          Integrated With the Vasudheva Group
        </h2>

        {/* Intro */}
        <p className="lead text-center mx-auto mb-5" style={{ maxWidth: '900px' }}>
          Publishing becomes more powerful when it is connected with research,
          education and media.
        </p>

        {/* Group Entities */}
        <Row className="g-4 mb-5">
          {entities.map((item, index) => (
            <Col md={6} lg={3} key={index}>
              <Card
                className="h-100 border-0"
                style={{ borderRadius: '12px', backgroundColor: '#f8fafc' }}
              >
                <Card.Body>
                  <h6 className="fw-bold mb-2">{item.title}</h6>
                  <p className="small text-muted mb-0">{item.desc}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Closing Statement */}
        <p className="text-center mx-auto fw-semibold" style={{ maxWidth: '800px' }}>
          Together, the group creates a complete knowledge ecosystem.
        </p>
      </Container>
    </section>
  );
};

export default GroupIntegration;