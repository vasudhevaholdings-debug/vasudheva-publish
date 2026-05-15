import { Container, Row, Col } from 'react-bootstrap';


const PhilosophyPage = () => {
  return (
    <section className="premium-section py-5 " style={{ backgroundColor: '#ebcfb9' }}>
      <Container>

        {/* Hero */}
        <div className="text-center about-hero mb-5">
          <h2 className="section-heading mb-3">
            Publishing as Civilisational Infrastructure
          </h2>
          <p className="lead mx-auto" style={{ maxWidth: '900px' }}>
            Books are not merely products. They are vessels of memory,
            imagination, learning, dialogue and social transformation.
          </p>
        </div>

        {/* Knowledge as Public Good */}
        <Row className="justify-content-center about-section">
          <Col lg={10}>
            <h3 className="about-heading">Knowledge as a Public-Civilisational Good</h3>
            <p className="about-text">
              Knowledge creates both private and public value.
            </p>
            <p className="about-text">
              A book may generate income for an author and a publisher, but it may
              also educate children, preserve language, improve governance,
              strengthen culture, inspire entrepreneurship, support public debate or
              shape future generations.
            </p>
            <p className="about-text">
              For Vasudheva Publishing, knowledge is not only a commodity. It is a
              civilisational resource.
            </p>
            <p className="about-text">
              Our work is guided by the belief that publishing must balance intellectual
              quality, commercial sustainability, cultural responsibility and social
              usefulness.
            </p>
          </Col>
        </Row>

        {/* Author Dignity */}
        <Row className="justify-content-center about-section">
          <Col lg={10}>
            <h3 className="about-heading">Author Dignity</h3>
            <p className="about-text">
              Authors are not content suppliers. They are creators of intellectual value.
            </p>

            <ul className="about-list">
              <li>respectful communication,</li>
              <li>professional editorial support,</li>
              <li>transparent contracts,</li>
              <li>clear royalty systems,</li>
              <li>IP awareness,</li>
              <li>branding support,</li>
              <li>marketing participation,</li>
              <li>and long-term growth opportunities.</li>
            </ul>

            <p className="about-text">
              Our author philosophy is simple: build the author, not only the book.
            </p>
          </Col>
        </Row>

        {/* Reader Empowerment */}
        <Row className="justify-content-center about-section">
          <Col lg={10}>
            <h3 className="about-heading">Reader Empowerment</h3>
            <p className="about-text">
              Readers are learners, citizens, professionals, children, parents,
              researchers and members of society.
            </p>

            <p className="about-text">
              A responsible publishing institution must ask:
            </p>

            <ul className="about-list">
              <li>What do readers need?</li>
              <li>What language do they understand?</li>
              <li>What price can they afford?</li>
              <li>What format helps them learn?</li>
              <li>What design improves comprehension?</li>
              <li>What community helps them continue reading?</li>
            </ul>

            <p className="about-text">
              Our reader philosophy is simple: make knowledge accessible,
              meaningful and usable.
            </p>
          </Col>
        </Row>

        {/* Language Inclusion */}
        <Row className="justify-content-center about-section">
          <Col lg={10}>
            <h3 className="about-heading">Language Inclusion</h3>
            <p className="about-text">
              India thinks in many languages.
            </p>
            <p className="about-text">
              A publishing system that ignores language diversity excludes large parts
              of society from knowledge participation.
            </p>
            <p className="about-text">
              Vasudheva Publishing is committed to building pathways for English,
              Hindi, bilingual and Indian-language publishing. We also aim to support
              translation, adaptation, contextualisation and local knowledge
              documentation.
            </p>
            <p className="about-text">
              Language is not only a medium of communication. It is a world of
              memory, culture and thought.
            </p>
          </Col>
        </Row>

        {/* Technology With Ethics */}
        <Row className="justify-content-center">
          <Col lg={10}>
            <h3 className="about-heading">Technology With Ethics</h3>
            <p className="about-text">
              Technology can make publishing faster, cheaper, wider and more
              transparent. But technology must serve knowledge, not reduce it.
            </p>

            <p className="about-text">
              We believe in using digital tools for:
            </p>

            <ul className="about-list">
              <li>manuscript workflow,</li>
              <li>digital reading,</li>
              <li>audiobook access,</li>
              <li>metadata,</li>
              <li>recommendations,</li>
              <li>author dashboards,</li>
              <li>royalty transparency,</li>
              <li>translation,</li>
              <li>archival,</li>
              <li>and future AI-supported publishing systems.</li>
            </ul>

            <p className="about-text">
              But originality, attribution, privacy, fairness and editorial responsibility
              must remain central.
            </p>
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default PhilosophyPage;