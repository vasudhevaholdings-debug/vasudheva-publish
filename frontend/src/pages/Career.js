import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Accordion,
  Badge,
} from "react-bootstrap";

const Careers = () => {
  const snapshotItems = [
    "Editorial roles",
    "Proofreading roles",
    "Translation roles",
    "Research roles",
    "Book design roles",
    "Illustration roles",
    "Digital publishing roles",
    "Audiobook roles",
    "Marketing roles",
    "Community roles",
    "Institutional relations roles",
    "Technology roles",
    "Operations roles",
    "Internships",
    "Freelance assignments",
    "Advisory and expert contributor roles",
  ];

  const valueProps = [
    {
      title: "Work With Purpose",
      text: "Contribute to books, reports, educational resources, institutional publications and knowledge products.",
    },
    {
      title: "Learn Across Disciplines",
      text: "Work at the intersection of publishing, research, education, media, technology and institutional development.",
    },
    {
      title: "Build Real Skills",
      text: "Develop skills in editing, writing, design, translation, production, digital publishing, author support and institutional communication.",
    },
    {
      title: "Contribute to a New Institution",
      text: "Join an early-stage publishing company being built with governance, ethics, systems and long-term vision.",
    },
    {
      title: "Serve Authors, Readers and Institutions",
      text: "Your work can support writers, learners, schools, colleges, libraries, NGOs, corporates and communities.",
    },
  ];

  const qualities = [
    "Love for books and ideas",
    "Strong language ability",
    "Attention to detail",
    "Research orientation",
    "Design sensitivity",
    "Respect for deadlines",
    "Ethical conduct",
    "Ability to learn",
    "Institutional discipline",
    "Digital curiosity",
    "Communication skills",
    "Respect for authors and readers",
  ];

  const careerAreas = [
    {
      title: "Editorial and Proofreading",
      roles: [
        "Editorial Assistant",
        "Copyeditor",
        "Proofreader",
        "Developmental Editor",
        "Academic Editor",
        "Children’s Book Editor",
      ],
      responsibilities: [
        "Manuscript review",
        "Copyediting",
        "Proofreading",
        "Fact checking",
        "Editorial comments",
        "Author communication support",
      ],
    },
    {
      title: "Writing and Research",
      roles: [
        "Content Writer",
        "Research Writer",
        "Publishing Research Associate",
        "Institutional Documentation Associate",
      ],
      responsibilities: [
        "Writing articles",
        "Preparing research summaries",
        "Developing reports",
        "Creating author profiles",
      ],
    },
    {
      title: "Translation and Language",
      roles: [
        "Translator",
        "Bilingual Editor",
        "Hindi Language Specialist",
        "Regional Language Contributor",
      ],
      responsibilities: [
        "English-Hindi translation",
        "Language polishing",
        "Glossary preparation",
        "Translation quality review",
      ],
    },
    {
      title: "Design and Illustration",
      roles: [
        "Book Cover Designer",
        "Layout Designer",
        "Graphic Designer",
        "Children’s Illustrator",
      ],
      responsibilities: [
        "Book covers",
        "Interior layout",
        "Infographics",
        "Magazine design",
      ],
    },
    {
      title: "Digital Publishing and Technology",
      roles: [
        "Website Coordinator",
        "CMS Manager",
        "Digital Publishing Associate",
        "Full-stack Developer",
      ],
      responsibilities: [
        "Website management",
        "Metadata management",
        "Platform testing",
        "Analytics tracking",
      ],
    },
    {
      title: "Audiobooks and Voice",
      roles: [
        "Narrator",
        "Voice Artist",
        "Audio Editor",
        "Podcast Producer",
      ],
      responsibilities: [
        "Audiobook narration",
        "Audio editing",
        "Podcast planning",
        "Audio quality review",
      ],
    },
  ];

  const internshipAreas = [
    "Editorial Internship",
    "Research Internship",
    "Content Writing Internship",
    "Translation Internship",
    "Design Internship",
    "Digital Publishing Internship",
    "Audiobook Internship",
    "Marketing Internship",
    "Community Internship",
    "Institutional Relations Internship",
    "Operations Internship",
  ];

  const freelanceAreas = [
    "Editing",
    "Proofreading",
    "Translation",
    "Cover design",
    "Illustration",
    "Book layout",
    "Research writing",
    "Audiobook narration",
    "Technology development",
  ];

  const processSteps = [
    "Application Submitted",
    "Profile Screening",
    "Portfolio / Sample Review",
    "Task or Assessment",
    "Interview / Discussion",
    "Role Fitment",
    "Offer / Engagement Terms",
    "Onboarding",
  ];

  const faqs = [
    {
      q: "Are there current job openings?",
      a: "Openings may be updated from time to time. Even when no formal opening is listed, interested candidates may submit their profile.",
    },
    {
      q: "Do you offer internships?",
      a: "Yes, internship opportunities may be offered in editorial, research, design, digital publishing, marketing, community and operations areas.",
    },
    {
      q: "Can freelancers apply?",
      a: "Yes. Freelancers can register for editing, translation, design, research, audio, marketing and technology assignments.",
    },
    {
      q: "Can I apply without publishing experience?",
      a: "Yes, for internships and entry-level roles, seriousness, language ability, learning attitude and discipline may matter more than prior experience.",
    },
    {
      q: "Can I work remotely?",
      a: "Some roles may be remote, some hybrid and some on-site depending on work type.",
    },
    {
      q: "Do I need to submit work samples?",
      a: "For editorial, writing, translation, design, illustration and audio roles, work samples are strongly recommended.",
    },
    {
      q: "Can students apply?",
      a: "Yes. Students may apply for internships or project-based learning opportunities.",
    },
    {
      q: "Can researchers and academics contribute?",
      a: "Yes. Researchers may contribute to reports, insights, reviews, academic publishing and institutional documentation.",
    },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <h1 className="display-4 fw-bold mb-4">
                Build Your Career in Publishing, Knowledge and Institutional Communication
              </h1>

              <p className="lead">
                Join Vasudheva Publishing Pvt. Ltd. in building a future-ready
                publishing and knowledge infrastructure company for authors,
                readers, institutions and communities.
              </p>

              <p className="text-muted">
                We are looking for people who care about books, language,
                editing, research, design, digital publishing, audiobooks,
                institutions, reading culture and meaningful knowledge work.
              </p>

              <div className="mt-4">
                <Button className="me-3 mb-3">
                  Explore Career Areas
                </Button>

                <Button
                  variant="outline-dark"
                  className="me-3 mb-3"
                >
                  Apply Now
                </Button>

                <Button
                  variant="outline-primary"
                  className="mb-3"
                >
                  Join as Intern / Freelancer
                </Button>
              </div>
            </Col>

            <Col lg={6}>
              <Card className="border-0 shadow-lg p-4 rounded-4">
                <h4 className="fw-bold text-center mb-4">
                  Opportunities in One View
                </h4>

                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  {snapshotItems.map((item, index) => (
                    <Badge
                      key={index}
                      bg="light"
                      text="dark"
                      className="border p-3 fs-6"
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

      {/* WHY WORK */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-4">
            Why Build Your Career With Us?
          </h2>

          <p className="lead text-center mb-5">
            Vasudheva Publishing is being developed as a publishing and
            knowledge infrastructure company within the wider Vasudheva Group
            ecosystem.
          </p>

          <Row className="g-4">
            {valueProps.map((item, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="border-0 shadow-sm h-100 p-4">
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p className="text-muted">{item.text}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* WHO WE ARE LOOKING FOR */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="fw-bold text-center mb-4">
                Who We Are Looking For
              </h2>

              <p className="lead text-center mb-5">
                We welcome people who combine skill with seriousness.
              </p>

              <div className="d-flex flex-wrap gap-3 justify-content-center">
                {qualities.map((item, index) => (
                  <Badge
                    key={index}
                    bg="light"
                    text="dark"
                    className="border p-3 fs-6"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CAREER AREAS */}
      <section className="py-5" id="career-areas">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Career Areas
          </h2>

          <Row className="g-4">
            {careerAreas.map((area, index) => (
              <Col lg={6} key={index}>
                <Card className="border-0 shadow-sm h-100 p-4">
                  <h4 className="fw-bold mb-3">{area.title}</h4>

                  <h6 className="fw-semibold">Suitable Roles</h6>
                  <ul>
                    {area.roles.map((role, i) => (
                      <li key={i}>{role}</li>
                    ))}
                  </ul>

                  <h6 className="fw-semibold mt-4">
                    Responsibilities
                  </h6>

                  <ul>
                    {area.responsibilities.map((res, i) => (
                      <li key={i}>{res}</li>
                    ))}
                  </ul>

                  <Button variant="outline-dark" className="mt-3">
                    Apply
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* INTERNSHIPS */}
      <section className="py-5 bg-light" id="internships">
        <Container>
          <h2 className="fw-bold text-center mb-4">
            Internships
          </h2>

          <p className="lead text-center mb-5">
            Vasudheva Publishing may offer internships for students and early
            professionals who want to learn publishing, editing, writing,
            research, design, digital publishing, marketing and institutional
            communication.
          </p>

          <Row className="g-4">
            {internshipAreas.map((item, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="border-0 shadow-sm text-center p-4 h-100">
                  <h5 className="fw-bold">{item}</h5>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-5">
            <Button size="lg">
              Apply for Internship
            </Button>
          </div>
        </Container>
      </section>

      {/* FREELANCE */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-4">
            Freelance and Project-Based Opportunities
          </h2>

          <p className="lead text-center mb-5">
            Vasudheva Publishing may work with freelancers and project-based
            contributors for specialised assignments.
          </p>

          <Row className="g-4">
            {freelanceAreas.map((item, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="border-0 shadow-sm text-center p-4 h-100">
                  <h5 className="fw-bold">{item}</h5>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-5">
            <Button size="lg">
              Register as Freelancer
            </Button>
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            How the Selection Process Works
          </h2>

          <Row className="g-4">
            {processSteps.map((step, index) => (
              <Col md={4} lg={3} key={index}>
                <Card className="border-0 shadow-sm text-center p-4 h-100">
                  <div className="display-6 fw-bold text-primary mb-3">
                    {index + 1}
                  </div>

                  <h6 className="fw-bold">{step}</h6>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* APPLICATION FORM */}
      <section className="py-5" id="application-form">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="border-0 shadow-lg p-5">
                <h2 className="fw-bold text-center mb-5">
                  Apply to Work With Us
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
                        <option>Current Status</option>
                        <option>Student</option>
                        <option>Graduate</option>
                        <option>Postgraduate</option>
                        <option>Working Professional</option>
                        <option>Freelancer</option>
                      </Form.Select>
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Highest Qualification" />
                    </Col>

                    <Col md={6}>
                      <Form.Select>
                        <option>Area of Interest</option>
                        <option>Editorial</option>
                        <option>Writing</option>
                        <option>Research</option>
                        <option>Translation</option>
                        <option>Design</option>
                        <option>Technology</option>
                        <option>Audiobooks</option>
                        <option>Marketing</option>
                        <option>Operations</option>
                      </Form.Select>
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Experience Level" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="LinkedIn / Portfolio Link" />
                    </Col>

                    <Col md={6}>
                      <Form.Select>
                        <option>Preferred Engagement Type</option>
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Internship</option>
                        <option>Freelance</option>
                        <option>Remote</option>
                        <option>Hybrid</option>
                      </Form.Select>
                    </Col>

                    <Col md={6}>
                      <Form.Label>Upload CV</Form.Label>
                      <Form.Control type="file" />
                    </Col>

                    <Col md={6}>
                      <Form.Label>
                        Upload Portfolio / Work Samples
                      </Form.Label>
                      <Form.Control type="file" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Expected Availability" />
                    </Col>

                    <Col xs={12}>
                      <Form.Control
                        as="textarea"
                        rows={6}
                        placeholder="Message"
                      />
                    </Col>

                    <Col xs={12}>
                      <Form.Check
                        label="I confirm that the information provided is accurate."
                      />

                      <Form.Check
                        label="I agree to be contacted by Vasudheva Publishing regarding career opportunities."
                      />
                    </Col>

                    <Col xs={12}>
                      <Button size="lg">
                        Submit Application
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Frequently Asked Questions
          </h2>

          <Accordion>
            {faqs.map((faq, index) => (
              <Accordion.Item
                eventKey={index.toString()}
                key={index}
              >
                <Accordion.Header>{faq.q}</Accordion.Header>

                <Accordion.Body>{faq.a}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="py-5 bg-dark text-white text-center">
        <Container>
          <h2 className="display-5 fw-bold mb-4">
            Build Knowledge Work With Us
          </h2>

          <p className="lead mb-5">
            If you want to work at the intersection of books, language,
            research, design, technology, institutions, readers and public
            knowledge, Vasudheva Publishing invites you to share your profile.
          </p>

          <Button size="lg" className="me-3 mb-3">
            Apply Now
          </Button>

          <Button
            variant="outline-light"
            size="lg"
            className="me-3 mb-3"
          >
            Register as Freelancer
          </Button>

          <Button
            variant="outline-light"
            size="lg"
            className="mb-3"
          >
            Apply for Internship
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Careers;