import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section className="premium-section py-5 bg-dark text-white animate-fade-in">
      <Container>

        {/* Message */}
        <p className="lead text-center mx-auto mb-3" style={{ maxWidth: '900px', color: '#cbd5e1' }}>
          Have a manuscript, idea, research, story or institutional knowledge
          project?
        </p>

        <p className="text-center mx-auto mb-4" style={{ maxWidth: '900px', color: '#94a3b8' }}>
          Let us help you transform it into a meaningful publication.
        </p>

        {/* CTA */}
        <div className="text-center">
          <Button
            as={Link}
            to="/contact"
            variant="light"
            size="lg"
            style={{ borderRadius: '30px', padding: '10px 26px' }}
          >
            Start a Publishing Conversation
          </Button>
        </div>

      </Container>
    </section>
  );
};

export default FinalCTA;