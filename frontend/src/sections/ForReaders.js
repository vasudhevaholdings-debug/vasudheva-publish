import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ForReaders = () => {
  return (
    <section className="premium-section py-5 bg-white">
      <Container>
        <h2 className="section-heading text-center mb-4 animate-fade-in">
          For Readers
        </h2>

        {/* Reader Philosophy */}
        <p className="lead text-center mx-auto mb-3" style={{ maxWidth: '900px' }}>
          Readers are not passive consumers. They are learners, citizens,
          professionals, parents, children, researchers, creators and future builders.
        </p>

        {/* Value Proposition */}
        <p className="text-center mx-auto mb-5" style={{ maxWidth: '900px', color: '#4b5563' }}>
          Vasudheva Publishing helps readers discover meaningful books,
          research, stories, essays, audio content and learning material designed
          for serious reading, lifelong learning and social understanding.
        </p>

        {/* CTA */}
        <div className="text-center">
          <Button
            as={Link}
            to="/books"
            variant="dark"
            size="lg"
            className="me-3"
            style={{ borderRadius: '30px', padding: '10px 24px' }}
          >
            Explore Books
          </Button>

          <Button
            as={Link}
            to="/community"
            variant="outline-dark"
            size="lg"
            style={{ borderRadius: '30px', padding: '10px 24px' }}
          >
            Join Reader Community
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ForReaders;