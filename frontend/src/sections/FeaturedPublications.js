import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FeaturedPublications = () => {
  return (
    <section className="premium-section py-4 bg-light">
      <Container>
        <h2 className="section-heading text-center mb-4 animate-fade-in">
          Featured Publications
        </h2>

        {/* Intro */}
        <p className="lead text-center mx-auto mb-5" style={{ maxWidth: '900px' }}>
          Discover our latest books, reports, journals, learning resources and
          editorial selections.
        </p>

        {/* CTA */}
        <div className="text-center">
          <Button
            as={Link}
            to="/books"
            variant="dark"
            size="lg"
            style={{ borderRadius: '30px', padding: '10px 26px' }}
            className="animate-fade-in"
          >
            View Full Catalogue
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedPublications;