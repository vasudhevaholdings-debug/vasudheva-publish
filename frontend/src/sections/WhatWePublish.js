import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const WhatWePublish = () => {
  const categories = [
    {
      title: "Books",
      desc: "Fiction, non-fiction, essays, novels, poetry, plays, biographies, philosophy, society, culture, business, economics and public thought."
    },
    {
      title: "Research Reports",
      desc: "Evidence-based reports, field studies, institutional reports, industry analysis, policy papers and knowledge documentation."
    },
    {
      title: "Academic Texts",
      desc: "Textbooks, workbooks, monographs, scholarly manuscripts, study material, learning modules and reference books."
    },
    {
      title: "Children’s Books",
      desc: "Stories, illustrated books, moral education, activity books, early learning resources and child-centred knowledge products."
    },
    {
      title: "Magazines & Journals",
      desc: "Periodicals, journals, newsletters, review publications and theme-based knowledge magazines."
    },
    {
      title: "Audiobooks & Podcasts",
      desc: "Narrated books, author conversations, knowledge podcasts and audio learning resources."
    },
    {
      title: "Digital Courses & Learning Products",
      desc: "Book-linked courses, reading journeys, structured learning modules and certification-based knowledge products."
    },
    {
      title: "Cultural & Philosophical Works",
      desc: "Texts related to Indian knowledge systems, local histories, ecology, spirituality, civilisational thought and social transformation."
    }
  ];

  return (
    <section className="premium-section py-5 bg-white animate-on-scroll">
      <Container>
        <h2 className="section-heading text-center mb-4 animate-fade-in">
          What We Publish
        </h2>

        {/* Intro */}
        <p className="lead text-center mx-auto mb-5" style={{ maxWidth: '900px' }}>
          Vasudheva Publishing works across academic and non-academic knowledge.
        </p>

        {/* Categories */}
        <Row className="g-4">
          {categories.map((item, index) => (
            <Col md={6} lg={4} key={index}>
              <Card
                className="identity-card h-100 border-0"
                style={{ borderRadius: '12px', backgroundColor: '#f8fafc' }}
              >
                <Card.Body>
                  <h5 className="mb-3 fw-bold">{item.title}</h5>
                  <p className="text-muted small">{item.desc}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* CTA */}
        <div className="text-center mt-5">
          <Button variant="dark" size="lg" style={{ padding: '10px 28px', borderRadius: '30px' }}>
            Explore Publications
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default WhatWePublish;