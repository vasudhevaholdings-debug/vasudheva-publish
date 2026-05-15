import { Container, Row, Col, Button, Card } from "react-bootstrap";
import InsightImg from "../assets/images/Insight_img.jpeg";

const InsightsPage = () => {
  return (
    <div>

      {/* ==================== HERO ==================== */}
<section className="position-relative">

  {/* FULL WIDTH HERO IMAGE */}
  <div
    className="hero-full-image-wrapper"
    style={{
      width: "100%",
      height: "80vh", // decreased height
      
    }}
  >
    <img
      src={InsightImg}
      alt="Insights Hero"
      className="hero-full-image"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "top",
      }}
    />
  </div>

  {/* HERO CONTENT */}
  <Container className="py-4 text-center">

    <p className="text-uppercase text-muted fw-semibold mb-3">
      Insights • Publishing • Knowledge • Society
    </p>

    {/* <h1 className="fw-bold display-3 mb-4 animate-fade-in">
      Thinking About Publishing, Knowledge, Reading and Society
    </h1> */}

    <p
      className="lead mx-auto mb-3 animate-fade-in-delay-1"
      style={{ maxWidth: "950px" }}
    >
      Explore essays, articles, reports, publishing notes, research reflections
      and thought-leadership pieces on authorship, reading culture,
      Indian languages, education, research, technology, institutions
      and the future of knowledge.
    </p>

    {/* BUTTONS BELOW IMAGE */}
    <div className="d-flex flex-wrap justify-content-center gap-3 animate-fade-in-delay-2">

      <Button
        variant="primary"
        size="lg"
        className="hover-scale px-4"
      >
        Read Latest Insights
      </Button>

      <Button
        variant="outline-dark"
        size="lg"
        className="hover-scale px-4"
      >
        Explore Categories
      </Button>

      <Button
        variant="outline-dark"
        size="lg"
        className="hover-scale px-4"
      >
        Suggest a Topic
      </Button>

    </div>

  </Container>
</section>
      {/* ==================== WHY INSIGHTS MATTER ==================== */}
      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5 animate-on-scroll">
            Why Insights Matter
          </h2>

          <Row className="justify-content-center">
            <Col lg={10}>
              <p className="lead text-center mb-4">
                Publishing is not only a commercial activity. It is a knowledge system.
                To build a serious publishing institution, we must continuously study the changing
                relationship between authors, readers, institutions, languages, technology, and society.
              </p>

              <p className="text-center">
                Through this Insights section, we aim to educate authors, guide readers,
                support institutions, study publishing trends, promote reading culture,
                and build public thought leadership.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== FEATURED INSIGHTS ==================== */}
      <section className="py-5 bg-light">
        <Container>

          <h2 className="text-center fw-bold mb-5">
            Featured Insights
          </h2>

          <Row className="g-4">
            {[
              {
                category: "Publishing Ecosystem",
                title:
                  "Publishing Is Not Only About Books: It Is About Knowledge Infrastructure",
                excerpt:
                  "A serious publishing institution must support the complete journey of knowledge — from idea and research to writing, editing, design, distribution, reading, learning and social impact."
              },
              {
                category: "Author Economy",
                title:
                  "Why Authors Need More Than Printing: The Case for Author Development",
                excerpt:
                  "Authors need editorial guidance, rights awareness, transparent communication, marketing support and long-term identity building."
              },
              {
                category: "Reading Culture",
                title:
                  "How Reading Builds Individuals, Institutions and Society",
                excerpt:
                  "Reading is not simply a personal habit. It shapes language, imagination, decision-making, citizenship, and social memory."
              }
            ].map((insight, i) => (
              <Col lg={4} key={i}>
                <Card className="h-100 shadow-sm border-0 hover-lift">
                  <Card.Body className="d-flex flex-column">

                    <small className="text-primary">
                      {insight.category}
                    </small>

                    <h5 className="mt-3 mb-3">
                      {insight.title}
                    </h5>

                    <p className="flex-grow-1">
                      {insight.excerpt}
                    </p>

                    <Button
                      variant="link"
                      className="p-0 text-start"
                    >
                      Read More →
                    </Button>

                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

        </Container>
      </section>

      {/* ==================== EXPLORE BY CATEGORY ==================== */}
      <section id="categories" className="py-5">
        <Container>

          <h2 className="text-center fw-bold mb-5">
            Explore by Category
          </h2>

          <Row className="g-4">
            {[
              {
                title: "Publishing Industry",
                desc: "Industry trends, business models, value chain & future shifts"
              },
              {
                title: "Author Economy",
                desc: "Guidance for writers on manuscripts, rights, royalties & branding"
              },
              {
                title: "Reading Culture",
                desc: "Building reading habits in individuals, families & institutions"
              },
              {
                title: "Knowledge Economy",
                desc: "Knowledge as capital, institutional memory & knowledge infrastructure"
              },
              {
                title: "Indian Languages and Translation",
                desc: "Multilingual publishing, Hindi, regional languages & translation"
              },
              {
                title: "Education and Publishing",
                desc: "Curriculum, textbooks, teacher manuals & learning resources"
              },
              {
                title: "Technology in Publishing",
                desc: "AI, digital formats, audiobooks, metadata & future tech"
              },
              {
                title: "Research and Society",
                desc: "Research communication, policy papers & public knowledge"
              },
              {
                title: "Institutional Knowledge",
                desc: "Documentation, reports & publishing for institutions"
              },
              {
                title: "Book Reviews",
                desc: "Reviews, reading notes & recommended reading lists"
              }
            ].map((cat, i) => (
              <Col md={6} lg={4} key={i}>
                <Card className="h-100 shadow-sm hover-lift p-4">
                  <h5 className="fw-bold">
                    {cat.title}
                  </h5>

                  <p className="text-muted small">
                    {cat.desc}
                  </p>

                  <Button
                    variant="link"
                    className="p-0 mt-3"
                  >
                    Explore →
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>

        </Container>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="py-5 bg-dark text-white text-center">
        <Container>

          <h2 className="display-5 fw-bold mb-4">
            Think With Us About the Future of Knowledge
          </h2>

          <p className="lead mb-5">
            We invite authors, readers, institutions and thinkers to engage
            with our insights and help build a thoughtful knowledge ecosystem.
          </p>

          <div>

            <Button
              size="lg"
              className="me-3 hover-scale"
            >
              Read Latest Insights
            </Button>

            <Button
              size="lg"
              variant="outline-light"
              className="me-3 hover-scale"
            >
              Suggest a Topic
            </Button>

            <Button
              size="lg"
              variant="outline-light"
              className="hover-scale"
            >
              Publish With Us
            </Button>

          </div>

        </Container>
      </section>

    </div>
  );
};

export default InsightsPage;