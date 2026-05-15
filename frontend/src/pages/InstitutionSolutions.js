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

const InstitutionalSolutions = () => {
  const solutionsSnapshot = [
    "Custom Publishing",
    "Bulk Book Supply",
    "Library Development",
    "Reading Programmes",
    "Research Reports",
    "Institutional Documentation",
    "School Magazines",
    "College Journals",
    "Training Manuals",
    "Curriculum Content",
    "Impact Reports",
    "Policy Papers",
    "Public Communication Material",
    "Digital Publishing",
    "Audiobooks for Institutions",
    "Translation and Multilingual Publishing",
  ];

  const institutions = [
    {
      title: "Schools",
      content:
        "Schools need books, magazines, workbooks, reading programmes, teacher resources, student publications and library support.",
      solutions: [
        "School magazines",
        "Student writing anthologies",
        "Children’s books",
        "Workbooks",
        "Teacher manuals",
        "Reading programmes",
        "Library development",
        "Parent communication booklets",
      ],
      cta: "Explore School Solutions",
    },
    {
      title: "Colleges and Universities",
      content:
        "Higher education institutions need journals, reports, edited volumes, departmental magazines, research publications and conference proceedings.",
      solutions: [
        "College journals",
        "Department magazines",
        "Conference proceedings",
        "Edited volumes",
        "Student research publications",
        "Faculty monographs",
        "Academic newsletters",
      ],
      cta: "Explore Higher Education Solutions",
    },
    {
      title: "Libraries",
      content:
        "Libraries need curated collections, reader engagement, catalogues, reading lists, book clubs and community reading programmes.",
      solutions: [
        "Library collection planning",
        "Book lists",
        "Reading calendars",
        "Book clubs",
        "Library newsletters",
        "Children’s reading corners",
        "Digital library access",
      ],
      cta: "Explore Library Solutions",
    },
    {
      title: "NGOs and Civil Society Organisations",
      content:
        "NGOs create valuable field knowledge, impact data, case studies, stories and training material.",
      solutions: [
        "Impact reports",
        "Case study books",
        "Field documentation",
        "Training manuals",
        "Awareness booklets",
        "Community stories",
        "Policy briefs",
      ],
      cta: "Explore NGO Solutions",
    },
    {
      title: "Corporates and Businesses",
      content:
        "Businesses need internal manuals, brand stories, training material, industry reports and employee communication.",
      solutions: [
        "Corporate books",
        "Founder journey books",
        "Training manuals",
        "Employee handbooks",
        "CSR reports",
        "ESG reports",
        "Industry white papers",
      ],
      cta: "Explore Corporate Solutions",
    },
    {
      title: "Government Bodies and Public Institutions",
      content:
        "Public bodies need citizen-friendly, multilingual and accessible communication material.",
      solutions: [
        "Citizen guides",
        "Scheme explainers",
        "Policy communication documents",
        "Training manuals",
        "Public awareness booklets",
        "Community outreach material",
      ],
      cta: "Explore Public Knowledge Solutions",
    },
  ];

  const coreSolutions = [
    {
      title: "Custom Publishing",
      purpose:
        "To create publications designed specifically for the institution’s purpose, audience and communication need.",
      outputs: [
        "Books",
        "Reports",
        "Manuals",
        "Magazines",
        "Newsletters",
        "Training material",
        "Digital publications",
      ],
      cta: "Explore Custom Publishing",
    },
    {
      title: "Bulk Book Supply",
      purpose:
        "To help institutions procure books for libraries, classrooms and reading programmes.",
      outputs: [
        "School book sets",
        "Library collections",
        "Children’s book bundles",
        "Professional reading kits",
        "Institutional copies",
      ],
      cta: "Request Bulk Orders",
    },
    {
      title: "Library Development",
      purpose:
        "To help institutions convert libraries into active reading spaces.",
      outputs: [
        "Collection planning",
        "Age-wise reading lists",
        "Book club framework",
        "Reader engagement calendar",
      ],
      cta: "Discuss Library Development",
    },
    {
      title: "Reading Programmes",
      purpose:
        "To build active reading culture in schools, colleges and organisations.",
      outputs: [
        "School Reading Week",
        "College Reading Circle",
        "Children’s Storytelling Day",
        "Author Interaction Series",
      ],
      cta: "Design Reading Programme",
    },
    {
      title: "Research and Report Publishing",
      purpose:
        "To convert research and data into readable and credible publications.",
      outputs: [
        "Research reports",
        "Policy papers",
        "White papers",
        "Impact reports",
        "Executive summaries",
      ],
      cta: "Publish Institutional Research",
    },
    {
      title: "Educational Content Development",
      purpose:
        "To create structured learning content for students and teachers.",
      outputs: [
        "Textbooks",
        "Workbooks",
        "Teacher manuals",
        "Assessment material",
        "Student handbooks",
      ],
      cta: "Develop Educational Content",
    },
    {
      title: "Institutional Documentation",
      purpose:
        "To preserve institutional memory, impact, history and learning.",
      outputs: [
        "Institutional history",
        "Founder journey",
        "Case studies",
        "Community stories",
        "Archival publications",
      ],
      cta: "Start Documentation Project",
    },
    {
      title: "Translation and Multilingual Publishing",
      purpose:
        "To help institutions communicate across English, Hindi and bilingual formats.",
      outputs: [
        "English-Hindi reports",
        "Bilingual manuals",
        "Translated educational material",
      ],
      cta: "Request Translation Support",
    },
    {
      title: "Digital and Audio Publishing",
      purpose:
        "To create digital, audio and multimedia knowledge resources.",
      outputs: [
        "E-books",
        "Digital reports",
        "Audiobooks",
        "Knowledge podcasts",
        "Interactive PDFs",
      ],
      cta: "Explore Digital and Audio Solutions",
    },
  ];

  const packages = [
    {
      title: "School Knowledge and Reading Package",
      bestFor:
        "Schools seeking library improvement, student publications and reading culture.",
      includes: [
        "School magazine",
        "Reading programme design",
        "Children’s book list",
        "Student writing anthology",
        "Teacher reading guide",
      ],
    },
    {
      title: "College Academic Publishing Package",
      bestFor:
        "Colleges and departments building academic output.",
      includes: [
        "Department journal",
        "Conference proceedings",
        "Student research publication",
        "Faculty essay volume",
      ],
    },
    {
      title: "NGO Impact Documentation Package",
      bestFor:
        "NGOs documenting projects and impact.",
      includes: [
        "Impact report",
        "Case studies",
        "Community stories",
        "Policy brief",
      ],
    },
    {
      title: "Corporate Knowledge Package",
      bestFor:
        "Businesses documenting systems, culture and training.",
      includes: [
        "Training manual",
        "Employee handbook",
        "Founder journey book",
        "CSR / ESG report",
      ],
    },
    {
      title: "Library Activation Package",
      bestFor:
        "Libraries seeking active reader engagement.",
      includes: [
        "Book collection plan",
        "Reading lists",
        "Book club framework",
        "Library newsletter",
      ],
    },
    {
      title: "Public Knowledge Communication Package",
      bestFor:
        "Government bodies and public institutions.",
      includes: [
        "Citizen guide",
        "Scheme explainer",
        "Training manual",
        "Multilingual communication kit",
      ],
    },
  ];

  const processSteps = [
    "Inquiry",
    "Need Diagnosis",
    "Solution Mapping",
    "Scope and Proposal",
    "Agreement",
    "Content Collection",
    "Editorial Development",
    "Design and Production",
    "Review and Approval",
    "Delivery / Publishing",
    "Use, Feedback and Evolution",
  ];

  const faqs = [
    {
      q: "Which institutions can work with Vasudheva Publishing?",
      a: "Schools, colleges, universities, libraries, NGOs, corporates, government bodies, research organisations and cultural institutions can work with us.",
    },
    {
      q: "Can you create school magazines?",
      a: "Yes. We can support content structure, student sections, editing, design and production.",
    },
    {
      q: "Can NGOs publish impact reports?",
      a: "Yes. We can help develop impact reports, case studies, field documentation and donor communication.",
    },
    {
      q: "Do you support digital publications?",
      a: "Yes. Institutional outputs may be created as e-books, digital reports, interactive PDFs or audio resources.",
    },
    {
      q: "Can institutional material remain confidential?",
      a: "Yes. Confidentiality requirements can be discussed and documented before work begins.",
    },
    {
      q: "Can one institution use multiple solutions?",
      a: "Yes. A school, college, NGO or corporate may combine publishing, documentation, library, reading and digital services.",
    },
  ];

  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              {/* <span className="text-uppercase text-primary fw-semibold">
                For Institutions
              </span> */}

              <h1 className="display-4 fw-bold mt-3 mb-4">
                Publishing and Knowledge Solutions for Institutions
              </h1>

              <p className="lead">
                Vasudheva Publishing Pvt. Ltd. helps schools, colleges,
                universities, libraries, NGOs, corporates, government bodies
                and research organisations transform knowledge, documents,
                learning material and institutional experience into structured
                publications and usable knowledge assets.
              </p>

              <p className="text-muted">
                Institutions create knowledge every day through teaching,
                research, fieldwork, governance, training, public communication,
                community work, internal processes and organisational memory.
                We help identify, structure, edit, design, publish, distribute
                and preserve that knowledge.
              </p>

              <div className="mt-4">
                <Button className="me-3 mb-3" size="lg" >
                  Request Institutional Solution
                </Button>

                <Button
                  variant="outline-dark"
                  className="me-3 mb-3"
                  size="lg"
                >
                  Explore Solution Areas
                </Button>

                <Button variant="outline-primary" className=" mb-3"size="lg">
                  Discuss a Knowledge Project
                </Button>
              </div>
            </Col>

            <Col lg={6}>
              <Card className="shadow-lg border-0 rounded-4 p-4">
                <h4 className="fw-bold text-center mb-4">
                  Institutional Solutions in One View
                </h4>

                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  {solutionsSnapshot.map((item, index) => (
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
            Institutional Solutions in One View
          </h2>

          <Row className="g-4">
            {solutionsSnapshot.map((item, index) => (
              <Col md={4} lg={3} key={index}>
                <Card className="border-0 shadow-sm text-center p-4 h-100">
                  <h6 className="fw-semibold">{item}</h6>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= WHY INSTITUTIONS NEED SOLUTIONS ================= */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="fw-bold text-center mb-4">
                Why Institutions Need Structured Publishing and Knowledge
                Solutions
              </h2>

              <p className="lead">
                Institutions do not only consume knowledge; they produce it.
              </p>

              <p>
                A school produces learning culture. A college produces academic
                thought. An NGO produces field knowledge. A company produces
                operational knowledge. A government body produces public
                knowledge.
              </p>

              <p>
                But much of this knowledge remains scattered across files,
                hidden in presentations, undocumented in people’s memory,
                untranslated, unpublished and underused.
              </p>

              <p>
                Vasudheva Publishing exists to help institutions convert this
                scattered knowledge into structured, credible, readable and
                useful publications.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="fw-bold text-center mb-5">
                Our Philosophy: Institutions Are Knowledge Producers
              </h2>

              <p>
                Institutions shape society through knowledge. They teach,
                train, document, guide, govern, research, communicate and
                preserve.
              </p>

              <p>
                Therefore, institutional publishing should not be treated as
                casual printing. It should be treated as a knowledge-system
                activity.
              </p>

              <Card className="border-0 shadow-sm p-4 mt-4">
                <div className="text-center">
                  <h5>Institutional Experience</h5>
                  <h5>↓</h5>
                  <h5>Knowledge Identification</h5>
                  <h5>↓</h5>
                  <h5>Documentation</h5>
                  <h5>↓</h5>
                  <h5>Editorial Structuring</h5>
                  <h5>↓</h5>
                  <h5>Design and Publication</h5>
                  <h5>↓</h5>
                  <h5>Distribution and Use</h5>
                  <h5>↓</h5>
                  <h5>Reading, Training or Communication</h5>
                  <h5>↓</h5>
                  <h5>Feedback and Evolution</h5>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= WHO WE SERVE ================= */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Institutions We Serve
          </h2>

          <Row className="g-4">
            {institutions.map((institution, index) => (
              <Col lg={6} key={index}>
                <Card className="h-100 border-0 shadow-sm p-4">
                  <h4 className="fw-bold mb-3">{institution.title}</h4>

                  <p className="text-muted">{institution.content}</p>

                  <ul>
                    {institution.solutions.map((solution, i) => (
                      <li key={i}>{solution}</li>
                    ))}
                  </ul>

                  <Button variant="outline-primary" className="mt-3">
                    {institution.cta}
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= CORE SOLUTIONS ================= */}
      <section className="py-5" id="solutions">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Core Institutional Solution Areas
          </h2>

          <Row className="g-4">
            {coreSolutions.map((solution, index) => (
              <Col lg={6} key={index}>
                <Card className="h-100 border-0 shadow-sm p-4">
                  <h4 className="fw-bold mb-3">{solution.title}</h4>

                  <p>
                    <strong>Purpose:</strong> {solution.purpose}
                  </p>

                  <h6 className="fw-bold mt-4">Outputs</h6>

                  <ul>
                    {solution.outputs.map((output, i) => (
                      <li key={i}>{output}</li>
                    ))}
                  </ul>

                  <Button variant="outline-dark" className="mt-3">
                    {solution.cta}
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= PACKAGES ================= */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Suggested Institutional Solution Packages
          </h2>

          <Row className="g-4">
            {packages.map((pkg, index) => (
              <Col lg={4} key={index}>
                <Card className="h-100 border-0 shadow-sm p-4">
                  <h4 className="fw-bold mb-3">{pkg.title}</h4>

                  <p>
                    <strong>Best For:</strong> {pkg.bestFor}
                  </p>

                  <h6 className="fw-bold mt-4">Includes</h6>

                  <ul>
                    {pkg.includes.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            How Institutional Solutions Work
          </h2>

          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="border-0 shadow-sm p-5">
                <div className="text-center">
                  {processSteps.map((step, index) => (
                    <div key={index}>
                      <h5 className="fw-bold">{step}</h5>

                      {index !== processSteps.length - 1 && (
                        <div className="my-2 fs-3">↓</div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Institutional Use Cases
          </h2>

          <Row className="g-4">
            {[
              {
                title: "School Use Case",
                problem:
                  "The school wants to improve reading culture and showcase student creativity.",
                solution:
                  "Student anthology + school magazine + library reading plan + storytelling sessions.",
                outcome:
                  "Students write, read, present and participate in a stronger school knowledge culture.",
              },
              {
                title: "College Use Case",
                problem:
                  "A department has papers and seminar outputs but no formal publication.",
                solution:
                  "Edited volume + conference proceedings + journal layout + digital publication.",
                outcome:
                  "Faculty and student work becomes structured academic output.",
              },
              {
                title: "NGO Use Case",
                problem:
                  "An NGO has strong field impact but scattered documentation.",
                solution:
                  "Impact report + case study book + community stories + donor-ready communication.",
                outcome:
                  "Field experience becomes credible public and institutional knowledge.",
              },
            ].map((item, index) => (
              <Col lg={4} key={index}>
                <Card className="h-100 border-0 shadow-sm p-4">
                  <h4 className="fw-bold mb-3">{item.title}</h4>

                  <p>
                    <strong>Problem:</strong> {item.problem}
                  </p>

                  <p>
                    <strong>Solution:</strong> {item.solution}
                  </p>

                  <p>
                    <strong>Outcome:</strong> {item.outcome}
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= FORM ================= */}
      <section className="py-5" id="institutional-form">
        <Container>
          <Row className="justify-content-center">
            <Col lg={9}>
              <Card className="shadow border-0 p-5">
                <h2 className="fw-bold text-center mb-4">
                  Request Institutional Solution
                </h2>

                <Form>
                  <Row className="g-4">
                    <Col md={6}>
                      <Form.Control placeholder="Institution / Organisation Name" />
                    </Col>

                    <Col md={6}>
                      <Form.Select>
                        <option>Institution Type</option>
                        <option>School</option>
                        <option>College</option>
                        <option>University</option>
                        <option>Library</option>
                        <option>NGO</option>
                        <option>Corporate</option>
                      </Form.Select>
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="City / State / Country" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Website" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Contact Person" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Designation" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Email Address" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Phone Number" />
                    </Col>

                    <Col xs={12}>
                      <h5 className="fw-bold mb-3">
                        Solution Required
                      </h5>

                      <Row>
                        {[
                          "Custom Publishing",
                          "Bulk Book Supply",
                          "Library Development",
                          "Reading Programme",
                          "Research Report",
                          "Institutional Documentation",
                          "Digital Publishing",
                          "Audiobook / Audio Resource",
                        ].map((item, index) => (
                          <Col md={6} key={index}>
                            <Form.Check label={item} />
                          </Col>
                        ))}
                      </Row>
                    </Col>

                    <Col xs={12}>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Brief Description of Requirement"
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Target Audience" />
                    </Col>

                    <Col md={6}>
                      <Form.Select>
                        <option>Expected Format</option>
                        <option>Print</option>
                        <option>Digital</option>
                        <option>Audio</option>
                        <option>Multimedia</option>
                      </Form.Select>
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Expected Quantity" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Timeline" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Budget Range" />
                    </Col>

                    <Col md={6}>
                      <Form.Control type="file" />
                    </Col>

                    <Col xs={12}>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Additional Message"
                      />
                    </Col>

                    <Col xs={12}>
                      <Form.Check
                        label="I confirm that the information provided is accurate."
                      />

                      <Form.Check
                        label="I agree to be contacted by Vasudheva Publishing regarding this institutional inquiry."
                      />
                    </Col>

                    <Col xs={12}>
                      <Button size="lg">
                        Submit Institutional Inquiry
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= QUALITY ================= */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="border-0 shadow-sm p-5">
                <h2 className="fw-bold mb-4">
                  Quality, Confidentiality and Institutional Approval
                </h2>

                <p>
                  Institutional projects often involve sensitive documents,
                  student material, field data, photographs, internal records,
                  research findings or community stories.
                </p>

                <p>
                  Vasudheva Publishing aims to handle such material with care.
                </p>

                <Row className="g-4 mt-3">
                  {[
                    "Clear scope of work",
                    "Defined deliverables",
                    "Responsible document handling",
                    "Confidentiality where required",
                    "Approval before publication",
                    "Proper attribution",
                    "Respect for institutional ownership",
                    "Ethical representation of communities",
                    "Quality review before final delivery",
                  ].map((item, index) => (
                    <Col md={4} key={index}>
                      <Card className="border-0 bg-light text-center p-3 h-100">
                        <h6 className="fw-semibold">{item}</h6>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card>
            </Col>
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
            Convert Institutional Knowledge Into Lasting Value
          </h2>

          <p className="lead mb-5">
            If your institution has documents, ideas, reports, research,
            learning material, stories, archives, student work, training
            content or public communication needs, Vasudheva Publishing can
            help convert them into structured, credible and usable knowledge
            products.
          </p>

          <Button size="lg" className="me-3 mb-3">
            Request Institutional Solution
          </Button>

          <Button
            variant="outline-light"
            size="lg"
            className="me-3 mb-3"
          >
            Explore Bulk Orders
          </Button>

          <Button
            variant="outline-light"
            size="lg"
            className="me-3 mb-3"
          >
            Explore Custom Publishing
          </Button>

          <Button variant="outline-light" size="lg">
            Contact Us
          </Button>
        </Container>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-5 bg-light border-top">
        <Container>
          <Row>
            <Col lg={8}>
              <h4 className="fw-bold">
                Vasudheva Publishing Pvt. Ltd.
              </h4>

              <p className="fw-semibold">
                Publishing Knowledge. Empowering Authors. Enabling Readers.
              </p>

              <p className="text-muted">
                A publishing and knowledge infrastructure company supporting
                institutions through custom publishing, bulk books, library
                development, reading programmes, reports, manuals, digital
                content, translation and knowledge documentation.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default InstitutionalSolutions;