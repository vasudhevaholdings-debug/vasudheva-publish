import { Container, Row, Col } from 'react-bootstrap';

const WhyWeExist = () => {
  return (
    <section className="premium-section py-5 bg-white ">
      <Container>
        <h2 className="section-heading text-center mb-4 animate-fade-in">
          Why Vasudheva Publishing Exists
        </h2>

        {/* Intro Paragraph */}
        <Row className="justify-content-center">
          <Col lg={10}>
            <p className=" text-left mx-auto mb-2" style={{ maxWidth: '900px' }}>
              Publishing is not only about producing books. It is about how society
              creates, preserves, distributes and uses knowledge.
            </p>

            <p className=" text-left mx-auto mb-2" style={{ maxWidth: '900px' }}>
              Authors need dignity, guidance, transparent systems and fair opportunity.
              Readers need access, affordability, quality and meaningful discovery.
              Institutions need credible content, documentation, curriculum material,
              research publications and communication support.
            </p>

            <p className=" text-left mx-auto" style={{ maxWidth: '900px' }}>
              Vasudheva Publishing exists to build a more ethical, inclusive,
              multilingual and technology-enabled publishing ecosystem where ideas
              can move from manuscripts to meaningful social impact.
            </p>
          </Col>
        </Row>

        {/* Problem Cards Title */}
        <h4 className="text-center mt-5 mb-4">Key Challenges We Address</h4>

        {/* Problem Cards */}
        <Row className="g-4">
          {[
            {
              title: "Authors face opacity",
              desc: "Contracts, royalties, editing, marketing and rights are often difficult to understand."
            },
            {
              title: "Readers face access gaps",
              desc: "Good knowledge is not always affordable, discoverable, multilingual or accessible."
            },
            {
              title: "Institutions need credible content",
              desc: "Schools, colleges, libraries, NGOs, businesses and governments need structured knowledge products."
            },
            {
              title: "Languages remain unequal",
              desc: "Many Indian languages and local knowledge traditions remain underrepresented."
            },
            {
              title: "Knowledge is fragmented",
              desc: "Research, education, media and publishing often work separately instead of functioning as one ecosystem."
            }
          ].map((item, index) => (
            <Col md={6} lg={4} key={index}>
              <div className="identity-card p-4 h-100" style={{ backgroundColor: '#f8fafc', borderRadius: '12px' }}>
                <h6 className="mb-2 fw-bold">{item.title}</h6>
                <p className="mb-0 text-muted">{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyWeExist;