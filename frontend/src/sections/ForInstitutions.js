import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ForInstitutions = () => {
  const solutions = [
    {
      title: "Bulk Book Supply",
      desc: "Large-scale procurement and distribution of books for institutions and programmes."
    },
    {
      title: "Custom Publishing",
      desc: "Creation of tailored books, reports and knowledge products for institutional needs."
    },
    {
      title: "Curriculum Content",
      desc: "Development of structured educational material, textbooks and learning modules."
    },
    {
      title: "Research & Reports",
      desc: "Publication of research studies, policy papers and institutional documentation."
    },
    {
      title: "Library Development",
      desc: "Support for building and curating institutional libraries and reading systems."
    },
    {
      title: "Reading Programmes",
      desc: "Design of reading initiatives, learning journeys and engagement programmes."
    },
    {
      title: "Knowledge Documentation",
      desc: "Capturing organisational knowledge, field insights and institutional memory."
    },
    {
      title: "Public Communication",
      desc: "Development of communication material for outreach, impact and awareness."
    }
  ];

  return (
    <section className="premium-section py-5 bg-light">
      <Container>
        <h2 className="section-heading text-center mb-4 animate-fade-in">
          For Institutions
        </h2>

        {/* Intro */}
        <p className="lead text-center mx-auto mb-4" style={{ maxWidth: '900px' }}>
          We work with schools, colleges, universities, libraries, NGOs,
          government bodies, corporates, research organisations and cultural
          institutions to create, publish, distribute and preserve knowledge.
        </p>

        {/* Solutions Title */}
        <h4 className="text-center mb-4 animate-fade-in">Institutional Solutions</h4>

        {/* Cards */}
        <Row className="g-4 mb-5">
          {solutions.map((item, index) => (
            <Col md={6} lg={3} key={index}>
              <Card
                className="h-100 border-0"
                style={{
                  borderRadius: '12px',
                  backgroundColor: '#ffffff'
                }}
              >
                <Card.Body>
                  <h6 className="fw-bold mb-2">{item.title}</h6>
                  <p className="small text-muted mb-0">{item.desc}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* CTA */}
        <div className="text-center">
          <Button
            as={Link}
            to="/partner"
            variant="primary"
            size="lg"
            style={{ borderRadius: '30px', padding: '10px 26px' }}
          >
            Request Institutional Partnership
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ForInstitutions;