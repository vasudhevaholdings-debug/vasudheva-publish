import {Container,Row,Col,Button,Card,Form,Accordion,Badge,} from "react-bootstrap";


const ReaderCommunity = () => {
  const communitySnapshot = [
    "Book clubs",
    "Reading circles",
    "Author talks",
    "Reader reflections",
    "Book reviews",
    "Children’s storytelling",
    "Student reading groups",
    "Teacher reading circles",
    "Professional reading clubs",
    "Research reading groups",
    "Library partnerships",
    "Institutional reading programmes",
    "Community documentation projects",
  ];

  const whoCanJoin = [
    {
      title: "General Readers",
      text: "For readers interested in literature, non-fiction, public thought, philosophy, culture, biography, society and lifelong learning.",
    },
    {
      title: "Children and Young Readers",
      text: "For children who can participate in storytelling, guided reading, creative writing, reading challenges and child-friendly book clubs.",
    },
    {
      title: "School Students",
      text: "For students who want to build reading habit, vocabulary, imagination, comprehension, public speaking and confidence.",
    },
    {
      title: "College Students",
      text: "For students interested in academic reading, research discussions, essay writing, public thought and intellectual exploration.",
    },
    {
      title: "Teachers and Educators",
      text: "For educators who want to use books for classroom enrichment, reading programmes, teacher circles and pedagogy discussions.",
    },
    {
      title: "Parents and Families",
      text: "For families who want to build reading culture at home through children’s books, storytelling and family reading routines.",
    },
    {
      title: "Researchers and Scholars",
      text: "For readers interested in research reports, academic books, policy papers, field studies and knowledge dialogues.",
    },
    {
      title: "Professionals and Entrepreneurs",
      text: "For professionals who want structured reading for leadership, decision-making, management, entrepreneurship and lifelong learning.",
    },
    {
      title: "Libraries and Institutions",
      text: "For schools, colleges, libraries, NGOs, corporates and community organisations that want to develop reading programmes.",
    },
    {
      title: "Authors and Contributors",
      text: "For authors who want to interact with readers, receive feedback, conduct sessions and participate in literary conversations.",
    },
  ];

  const programmes = [
    {
      title: "Book Clubs",
      content:
        "Book clubs create disciplined spaces for readers to engage with selected books and ideas.",
      activities: [
        "Monthly book discussion",
        "Guided reading plan",
        "Discussion questions",
        "Reader reflections",
        "Author interaction",
        "Book review writing",
      ],
      cta: "Join a Book Club",
    },
    {
      title: "Reading Circles",
      content:
        "Reading circles are smaller and more focused groups for reading essays, poems, chapters, reports or short texts together.",
      activities: [
        "Short text reading",
        "Group discussion",
        "Reflection writing",
        "Concept explanation",
        "Peer learning",
      ],
      cta: "Join a Reading Circle",
    },
    {
      title: "Author Talks",
      content:
        "Author talks bring readers closer to the mind behind the book.",
      activities: [
        "Book launch conversations",
        "Author interviews",
        "Reader Q&A",
        "Writing journey sessions",
        "Online author talks",
      ],
      cta: "Attend an Author Talk",
    },
    {
      title: "Reader Reflection Forum",
      content:
        "Readers can submit reflections on books, essays, reports, author talks or reading experiences.",
      activities: [
        "Book reflections",
        "Learning insights",
        "Questions raised",
        "Teaching reflections",
        "Institutional application ideas",
      ],
      cta: "Submit Reading Reflection",
    },
    {
      title: "Book Review Programme",
      content:
        "Readers may submit thoughtful reviews of Vasudheva Publishing titles and selected important books.",
      activities: [
        "Honest reviews",
        "Reader recommendations",
        "Critical analysis",
        "Community discussion",
      ],
      cta: "Submit Book Review",
    },
    {
      title: "Children’s Storytelling Sessions",
      content:
        "Storytelling sessions help children build imagination, listening, vocabulary, moral understanding and curiosity.",
      activities: [
        "Indian stories",
        "Nature stories",
        "Moral stories",
        "Animal stories",
        "Festival stories",
      ],
      cta: "Join Children’s Storytelling",
    },
  ];

  const impactAreas = [
    "Reading Culture",
    "Student Confidence",
    "Teacher Enrichment",
    "Author-Reader Connection",
    "Library Activation",
    "Family Reading",
    "Public Dialogue",
    "Knowledge Preservation",
  ];

  const faqs = [
    {
      q: "Who can join the Reader Community?",
      a: "Readers, students, teachers, parents, researchers, professionals, authors, libraries and institutions can join.",
    },
    {
      q: "Will events be online or offline?",
      a: "Events may be online, offline or hybrid depending on programme type and location.",
    },
    {
      q: "Can children join?",
      a: "Yes. Children may join child-friendly programmes with appropriate supervision and consent.",
    },
    {
      q: "Can schools and colleges start book clubs with Vasudheva Publishing?",
      a: "Yes. Institutions can request school, college or library reading programmes.",
    },
    {
      q: "Can I submit a book review?",
      a: "Yes. Readers may submit original reviews, subject to moderation.",
    },
    {
      q: "Can I attend author talks?",
      a: "Yes. Author talks may be open, registered, paid or invitation-based depending on the event.",
    },
    {
      q: "Can my reflection be published?",
      a: "Selected reflections may be edited and published with credit after review.",
    },
    {
      q: "Do I need to buy books to join?",
      a: "Not necessarily. Some programmes may be open, while others may be linked to specific titles.",
    },
  ];

  return (
    <div>

      {/* ================= HERO ================= */}
      <section className="py-5 bg-light overflow-hidden position-relative">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              {/* <span className="text-uppercase text-primary fw-semibold">
                For Readers
              </span> */}

              <h1 className="display-4 fw-bold mt-3 mb-4">
                Join a Community Built Around Books, Ideas and Meaningful
                Reading
              </h1>

              <p className="lead">
                Vasudheva Publishing invites readers, students, teachers,
                parents, researchers, professionals, libraries and institutions
                to participate in book clubs, reading circles, author talks,
                workshops, storytelling sessions and knowledge dialogues.
              </p>

              <p className="text-muted">
                A book becomes more powerful when it is read, discussed,
                questioned, remembered and applied. Our Reader Community is
                designed to connect readers with books, authors, ideas,
                institutions and other readers.
              </p>

              <div className="mt-4">
                <Button className="me-3 mb-3" size="lg">
                  Join Reader Community
                </Button>

                <Button
                  variant="outline-dark"
                  className="me-3 mb-3"
                  size="lg"
                >
                  Explore Book Clubs
                </Button>

                <Button variant="outline-primary" className="mb-3" size="lg">
                  Submit Reading Reflection
                </Button>
              </div>
            </Col>

            <Col lg={6}>
              <Card className="shadow-lg border-0 rounded-4 p-4">
                <h4 className="fw-bold mb-4 text-center">
                  Reader Community Ecosystem
                </h4>

                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  {communitySnapshot.map((item, index) => (
                    <Badge
                      key={index}
                      bg="light"
                      text="dark"
                      className="p-3 border fs-6"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= SNAPSHOT ================= */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Reader Community in One View
          </h2>

          <Row className="g-4">
            {communitySnapshot.map((item, i) => (
              <Col md={4} lg={3} key={i}>
                <Card className="h-100 shadow-sm border-0 text-center p-4">
                  <h6 className="fw-semibold mb-0">{item}</h6>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= WHY COMMUNITY ================= */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="fw-bold mb-4 text-center">
                Why Reading Needs Community
              </h2>

              <p className="lead">
                Reading is often personal, but it becomes more powerful when it
                becomes shared.
              </p>

              <p>
                A reader may understand a book alone. But a community can
                discuss it, question it, interpret it, apply it and keep it
                alive.
              </p>

              <p>
                A reading community helps build reading habits, improve
                comprehension, support children’s literacy, encourage student
                confidence, connect authors with readers, strengthen libraries,
                create public dialogue and support lifelong learning.
              </p>

              <p>
                Vasudheva Publishing is part of a broader ecosystem that
                connects publishing with education, media, strategic innovation
                and institutional knowledge.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Our Philosophy: Readers Are Participants, Not Consumers
          </h2>

          <Row className="g-4">
            {[
              "Learners",
              "Interpreters",
              "Reviewers",
              "Questioners",
              "Teachers",
              "Students",
              "Professionals",
              "Community Members",
              "Knowledge Carriers",
            ].map((item, index) => (
              <Col md={4} lg={3} key={index}>
                <Card className="h-100 border-0 shadow-sm text-center p-4">
                  <h5 className="fw-bold">{item}</h5>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= WHO CAN JOIN ================= */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Who Can Join the Reader Community?
          </h2>

          <Row className="g-4">
            {whoCanJoin.map((item, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="h-100 border-0 shadow-sm p-4">
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p className="text-muted">{item.text}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= PROGRAMMES ================= */}
      <section className="py-5" id="book-clubs">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Reader Community Programmes
          </h2>

          <Row className="g-4">
            {programmes.map((program, index) => (
              <Col lg={6} key={index}>
                <Card className="h-100 shadow-sm border-0 p-4">
                  <h4 className="fw-bold mb-3">{program.title}</h4>

                  <p className="text-muted">{program.content}</p>

                  <ul>
                    {program.activities.map((activity, i) => (
                      <li key={i}>{activity}</li>
                    ))}
                  </ul>

                  <Button variant="outline-primary" className="mt-3">
                    {program.cta}
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= EVENTS ================= */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Upcoming Community Events
          </h2>

          <Row className="g-4">
            {[1, 2, 3].map((event, index) => (
              <Col lg={4} key={index}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body>
                    <Badge bg="primary" className="mb-3">
                      Author Talk
                    </Badge>

                    <h5 className="fw-bold">
                      Building Reading Culture in Modern India
                    </h5>

                    <p className="small text-muted">
                      Online • Students • Teachers • General Readers
                    </p>

                    <p>
                      A community dialogue exploring how books, schools,
                      libraries and families can strengthen reading culture.
                    </p>

                    <Button variant="outline-dark">
                      Register Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= MEMBERSHIP ================= */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Reader Community Membership
          </h2>

          <Row className="g-4">
            {[
              "Book club access",
              "Author talk updates",
              "Reading recommendations",
              "Early event invitations",
              "Reading challenge participation",
              "Community discussion access",
              "Children’s reading programme updates",
              "Special reader campaigns",
            ].map((feature, index) => (
              <Col md={6} lg={3} key={index}>
                <Card className="h-100 border-0 shadow-sm text-center p-4">
                  <h6 className="fw-semibold">{feature}</h6>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= JOIN FORM ================= */}
      <section className="py-5 bg-light" id="join-form">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="shadow border-0 p-5">
                <h2 className="fw-bold mb-4 text-center">
                  Join the Reader Community
                </h2>

                <Form>
                  <Row className="g-4">
                    <Col md={6}>
                      <Form.Control placeholder="Full Name" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Email Address" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Phone Number" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="City / State / Country" />
                    </Col>

                    <Col md={6}>
                      <Form.Select>
                        <option>Reader Type</option>
                        <option>General Reader</option>
                        <option>Student</option>
                        <option>Teacher</option>
                        <option>Researcher</option>
                        <option>Professional</option>
                      </Form.Select>
                    </Col>

                    <Col md={6}>
                      <Form.Select>
                        <option>Preferred Format</option>
                        <option>Online</option>
                        <option>Offline</option>
                        <option>Hybrid</option>
                      </Form.Select>
                    </Col>

                    <Col xs={12}>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Tell us about your reading interests..."
                      />
                    </Col>

                    <Col xs={12}>
                      <Form.Check
                        label="I agree to receive updates from Vasudheva Publishing regarding reader community programmes."
                      />

                      <Form.Check
                        label="I agree to follow community guidelines."
                      />
                    </Col>

                    <Col xs={12}>
                      <Button size="lg">
                        Join Reader Community
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= REFLECTION FORM ================= */}
      <section className="py-5" id="reflection-form">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="border-0 shadow-sm p-5">
                <h2 className="fw-bold mb-4 text-center">
                  Submit a Reading Reflection
                </h2>

                <Form>
                  <Row className="g-4">
                    <Col md={6}>
                      <Form.Control placeholder="Full Name" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Email Address" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Book / Article / Event Title" />
                    </Col>

                    <Col md={6}>
                      <Form.Select>
                        <option>Type of Reflection</option>
                        <option>Book Reflection</option>
                        <option>Book Review</option>
                        <option>Student Reflection</option>
                        <option>Research Reflection</option>
                      </Form.Select>
                    </Col>

                    <Col xs={12}>
                      <Form.Control placeholder="Reflection Title" />
                    </Col>

                    <Col xs={12}>
                      <Form.Control
                        as="textarea"
                        rows={6}
                        placeholder="Write your reflection..."
                      />
                    </Col>

                    <Col xs={12}>
                      <Form.Check
                        label="I confirm that this reflection is my original writing."
                      />

                      <Form.Check
                        label="I agree that Vasudheva Publishing may review, edit or publish it with credit."
                      />
                    </Col>

                    <Col xs={12}>
                      <Button variant="dark" size="lg">
                        Submit Reflection
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            What We Aim to Build Through Reader Community
          </h2>

          <Row className="g-4">
            {impactAreas.map((impact, index) => (
              <Col md={6} lg={3} key={index}>
                <Card className="h-100 border-0 shadow-sm text-center p-4">
                  <h5 className="fw-bold">{impact}</h5>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Frequently Asked Questions
          </h2>

          <Accordion>
            {faqs.map((faq, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{faq.q}</Accordion.Header>

                <Accordion.Body>{faq.a}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-5 bg-dark text-white text-center">
        <Container>
          <h2 className="display-5 fw-bold mb-4">
            Read With Us. Reflect With Us. Grow With Us.
          </h2>

          <p className="lead mb-5">
            If you believe books should create conversations, readers should
            meet authors, children should hear stories, students should discuss
            ideas and institutions should support serious reading, join the
            Vasudheva Publishing Reader Community.
          </p>

          <Button size="lg" className="me-3 mb-3">
            Join Reader Community
          </Button>

          <Button
            variant="outline-light"
            size="lg"
            className="me-3 mb-3"
          >
            Explore Books
          </Button>

          <Button variant="outline-light" size="lg" className="mb-3">
            Explore Audiobooks
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default ReaderCommunity;