import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const InsightsPreview = () => {
  return (
    <section className="premium-section py-5 bg-white animate-on-scroll">
      <Container>
        <h2 className="section-heading text-center mb-4 animate-fade-in">
          Insights from the Knowledge Economy
        </h2>

        {/* Intro */}
        <p className="lead text-center mx-auto mb-5" style={{ maxWidth: '900px' }}>
          Read our reflections on publishing, authorship, reading culture, Indian
          languages, education, research, digital platforms and the future of
          knowledge.
        </p>

        {/* CTA */}
        <div className="text-center">
          <Button
            as={Link}
            to="/insights"
            variant="outline-dark"
            size="lg"
            style={{ borderRadius: '30px', padding: '10px 26px' }}
          >
            Read Insights
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default InsightsPreview;