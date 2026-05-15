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

const CustomPublishing = () => {
  const snapshotItems = [
    "Institutional books",
    "School magazines",
    "College journals",
    "Annual reports",
    "Impact reports",
    "Training manuals",
    "Employee handbooks",
    "Teacher manuals",
    "Student anthologies",
    "Research reports",
    "Policy papers",
    "Public awareness booklets",
    "Community documentation",
    "Founder journey books",
    "Institutional histories",
    "Digital reports",
    "Audiobook / audio explainers",
  ];

  const institutionTypes = [
    {
      title: "Schools",
      needs: [
        "School magazine",
        "Student writing anthology",
        "Teacher manual",
        "Parent handbook",
        "Activity book",
        "Reading programme booklet",
        "School history",
        "Annual report",
      ],
      cta: "Request School Publication Support",
    },
    {
      title: "Colleges and Universities",
      needs: [
        "Department journal",
        "Edited volume",
        "Conference proceedings",
        "Student research journal",
        "Faculty publication",
        "Academic newsletter",
        "Institutional report",
        "College history",
      ],
      cta: "Request Higher Education Publishing Support",
    },
    {
      title: "NGOs and Civil Society Organisations",
      needs: [
        "Impact report",
        "Case study book",
        "Field documentation",
        "Training manual",
        "Community stories",
        "Awareness booklet",
        "Policy brief",
        "Donor report",
      ],
      cta: "Request NGO Publishing Support",
    },
    {
      title: "Corporates and Businesses",
      needs: [
        "Corporate book",
        "Founder journey publication",
        "Employee handbook",
        "Training manual",
        "Culture document",
        "CSR report",
        "ESG report",
        "Customer education guide",
      ],
      cta: "Request Corporate Publishing Support",
    },
    {
      title: "Government Bodies and Public Institutions",
      needs: [
        "Citizen guide",
        "Scheme explainer",
        "Public awareness booklet",
        "Training manual",
        "District report",
        "Programme documentation",
        "Multilingual communication kit",
      ],
      cta: "Request Public Knowledge Publishing Support",
    },
    {
      title: "Libraries and Cultural Institutions",
      needs: [
        "Library newsletter",
        "Reading programme guide",
        "Local history book",
        "Heritage documentation",
        "Oral history publication",
        "Community archive booklet",
        "Festival documentation",
      ],
      cta: "Request Library / Cultural Publishing Support",
    },
  ];

  const publicationTypes = [
    {
      title: "Institutional Books",
      text: "Books documenting an institution’s journey, vision, experience, knowledge, leadership, community role or sectoral contribution.",
    },
    {
      title: "Reports",
      text: "Annual reports, impact reports, CSR reports, ESG reports, research reports, field reports, project reports and public communication reports.",
    },
    {
      title: "Manuals and Handbooks",
      text: "Training manuals, employee handbooks, teacher manuals, student handbooks, operating manuals and community guides.",
    },
    {
      title: "Magazines and Newsletters",
      text: "School magazines, college magazines, institutional newsletters, community magazines and recurring knowledge updates.",
    },
    {
      title: "Journals and Academic Publications",
      text: "Department journals, college journals, research journals, student journals, edited volumes and proceedings.",
    },
    {
      title: "Educational Publications",
      text: "Textbooks, workbooks, activity books, learning modules, teacher guides, classroom resources and assessment material.",
    },
    {
      title: "Public Awareness Publications",
      text: "Citizen guides, campaign booklets, scheme explainers, illustrated awareness material and multilingual public communication.",
    },
    {
      title: "Documentation Projects",
      text: "Founder stories, oral histories, local histories, community narratives, cultural archives and institutional memory books.",
    },
    {
      title: "Digital Publications",
      text: "E-books, interactive PDFs, digital reports, digital magazines, downloadable guides and institutional knowledge repositories.",
    },
    {
      title: "Audio and Multimedia Publications",
      text: "Audiobooks, audio explainers, podcast-linked publications, recorded stories, training audio and knowledge capsules.",
    },
  ];

  const services = [
    "Knowledge Diagnosis",
    "Content Collection",
    "Content Structuring",
    "Writing and Rewriting",
    "Editing and Proofreading",
    "Translation and Multilingual Adaptation",
    "Design and Layout",
    "Infographics and Visuals",
    "Printing and Production Coordination",
    "Digital Publishing",
    "Audio Adaptation",
    "Launch and Distribution Support",
  ];

  const packages = [
    {
      title: "School Publication Package",
      bestFor:
        "Schools creating magazines, anthologies, manuals or annual publications.",
      deliverables: [
        "School magazine",
        "Student anthology",
        "Teacher manual",
        "Reading programme booklet",
        "Parent communication guide",
        "Annual school publication",
      ],
    },
    {
      title: "Research Report Package",
      bestFor:
        "Research organisations, NGOs, colleges, consultants and policy institutions.",
      deliverables: [
        "Research report",
        "Executive summary",
        "Data visualisation",
        "Policy brief",
        "Digital report",
        "Presentation summary",
      ],
    },
    {
      title: "NGO Impact Publication Package",
      bestFor:
        "NGOs documenting fieldwork, impact and community stories.",
      deliverables: [
        "Impact report",
        "Case studies",
        "Community stories",
        "Photo documentation",
        "Donor communication document",
        "Awareness booklet",
      ],
    },
    {
      title: "Corporate Knowledge Package",
      bestFor:
        "Businesses documenting internal systems, brand stories, training and culture.",
      deliverables: [
        "Employee handbook",
        "Training manual",
        "Founder journey book",
        "Culture document",
        "CSR / ESG report",
        "Customer education guide",
      ],
    },
  ];

  const faqs = [
    {
      q: "What is custom publishing?",
      a: "Custom publishing is the creation of institution-specific publications such as books, reports, manuals, magazines, journals, guides, digital documents or audio resources.",
    },
    {
      q: "Which institutions can request custom publishing?",
      a: "Schools, colleges, libraries, NGOs, corporates, government bodies, research organisations and cultural institutions can request custom publishing.",
    },
    {
      q: "Can you create a publication from raw notes and documents?",
      a: "Yes. We can help structure, write, edit and design content from raw institutional material.",
    },
    {
      q: "Can you design school magazines and college journals?",
      a: "Yes. We can support content structure, editing, layout, cover design and print/digital preparation.",
    },
    {
      q: "Can you create impact reports for NGOs?",
      a: "Yes. We can support impact reports, case studies, field documentation and donor communication material.",
    },
    {
      q: "Can publications be bilingual?",
      a: "Yes. English, Hindi, bilingual and future Indian-language publishing pathways may be supported.",
    },
    {
      q: "Can you handle confidential documents?",
      a: "Yes. Confidentiality requirements can be discussed and documented before work begins.",
    },
    {
      q: "Can you print the publication?",
      a: "Print coordination may be included depending on scope and agreement.",
    },
    {
      q: "Can the publication also become digital or audio?",
      a: "Yes. Suitable publications may be converted into e-books, digital reports, audiobooks or audio explainers.",
    },
    {
      q: "How do we start?",
      a: "Submit the Custom Publishing Inquiry Form with your purpose, target audience, publication type and available material.",
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
                Custom Publications for Institutional Knowledge, Learning and
                Communication
              </h1>

              <p className="lead">
                Vasudheva Publishing Pvt. Ltd. helps institutions transform raw
                documents, research, reports, field experiences, training
                material, student work, organisational memory and public
                communication needs into professionally structured publications.
              </p>

              <p className="text-muted">
                Every institution carries knowledge. Some of it lives in
                reports, some in classrooms, some in field projects, some in
                leadership experience, some in community stories, and some in
                archives.
              </p>

              <div className="mt-4">
                <Button  className="me-3 mb-3">
                  Request Custom Publishing Proposal
                </Button>

                <Button
                  variant="outline-dark"
                  className="me-3 mb-3"
                >
                  Explore Publication Types
                </Button>

                <Button variant="outline-primary" className="mb-3">
                  Discuss Institutional Project
                </Button>
              </div>
            </Col>

            <Col lg={6}>
              <Card className="shadow-lg border-0 rounded-4 p-4">
                <h4 className="fw-bold text-center mb-4">
                  Custom Publishing in One View
                </h4>

                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  {snapshotItems.map((item, index) => (
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
            Custom Publishing Snapshot
          </h2>

          <Row className="g-4">
            {snapshotItems.map((item, index) => (
              <Col md={4} lg={3} key={index}>
                <Card className="h-100 border-0 shadow-sm text-center p-4">
                  <h6 className="fw-semibold mb-0">{item}</h6>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= WHAT IS CUSTOM PUBLISHING ================= */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="fw-bold text-center mb-4">
                What Is Custom Publishing?
              </h2>

              <p className="lead">
                Custom publishing means creating a publication specifically for
                the goals, audience, identity and knowledge needs of an
                institution.
              </p>

              <p>
                Unlike regular book publishing, custom publishing begins with
                an institutional purpose — to document work, train people,
                educate students, communicate impact, preserve history, support
                public awareness, build reading culture, share research and
                create reusable knowledge assets.
              </p>

              <p>
                A custom publication may be printed, digital, audio-based or
                multimedia-linked. It may be public, internal, restricted,
                institutional, educational, commercial or community-facing.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= WHY CUSTOM PUBLISHING ================= */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Why Institutions Need Custom Publishing
          </h2>

          <Row className="g-4">
            {[
              {
                title: "Scattered Documents → Structured Publication",
                text: "Raw documents become organised chapters, sections, summaries and visual layouts.",
              },
              {
                title: "Internal Knowledge → Institutional Asset",
                text: "Training material, operating practices and experience become manuals, handbooks and guides.",
              },
              {
                title: "Field Experience → Public Knowledge",
                text: "NGO and community work becomes impact reports, case studies and awareness material.",
              },
              {
                title: "Student Work → Published Confidence",
                text: "Student writing becomes anthologies, magazines, journals and learning records.",
              },
              {
                title: "Institutional Memory → Preserved History",
                text: "Founder journeys, milestones and archives become institutional histories.",
              },
              {
                title: "Research Output → Readable Report",
                text: "Data, findings and analysis become reports, white papers and policy documents.",
              },
            ].map((item, index) => (
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

      {/* ================= WHO CAN USE ================= */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Who Can Use Custom Publishing?
          </h2>

          <Row className="g-4">
            {institutionTypes.map((item, index) => (
              <Col lg={6} key={index}>
                <Card className="h-100 border-0 shadow-sm p-4">
                  <h4 className="fw-bold mb-3">{item.title}</h4>

                  <ul>
                    {item.needs.map((need, i) => (
                      <li key={i}>{need}</li>
                    ))}
                  </ul>

                  <Button variant="outline-primary" className="mt-3">
                    {item.cta}
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= PUBLICATION TYPES ================= */}
      <section className="py-5" id="publication-types">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            What We Can Create
          </h2>

          <Row className="g-4">
            {publicationTypes.map((item, index) => (
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

      {/* ================= SERVICES ================= */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Our Custom Publishing Services
          </h2>

          <Row className="g-4">
            {services.map((service, index) => (
              <Col md={6} lg={3} key={index}>
                <Card className="h-100 border-0 shadow-sm text-center p-4">
                  <h6 className="fw-semibold">{service}</h6>
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
            How Custom Publishing Works
          </h2>

          <Card className="border-0 shadow-sm p-5">
            <Row className="g-4 text-center">
              {[
                "Inquiry",
                "Need Diagnosis",
                "Knowledge Audit",
                "Scope Definition",
                "Content Collection",
                "Editorial Architecture",
                "Writing / Editing",
                "Design and Layout",
                "Institutional Review",
                "Final Approval",
                "Production / Publishing",
                "Distribution / Use",
                "Feedback and Future Edition",
              ].map((step, index) => (
                <Col md={4} lg={3} key={index}>
                  <div className="border rounded p-3 h-100">
                    <h6 className="fw-bold">{step}</h6>
                  </div>
                </Col>
              ))}
            </Row>
          </Card>
        </Container>
      </section>

      {/* ================= PACKAGES ================= */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Suggested Custom Publishing Packages
          </h2>

          <Row className="g-4">
            {packages.map((pkg, index) => (
              <Col lg={6} key={index}>
                <Card className="h-100 border-0 shadow-sm p-4">
                  <h4 className="fw-bold mb-3">{pkg.title}</h4>

                  <p>
                    <strong>Best For:</strong> {pkg.bestFor}
                  </p>

                  <h6 className="fw-bold mt-4">
                    Possible Deliverables:
                  </h6>

                  <ul>
                    {pkg.deliverables.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= INPUTS ================= */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            What We Need From Your Institution
          </h2>

          <Row className="g-4">
            {[
              "Institution profile",
              "Purpose of publication",
              "Target audience",
              "Existing documents",
              "Raw notes",
              "Reports",
              "Photographs",
              "Data tables",
              "Interviews or contact persons",
              "Brand guidelines",
              "Language preference",
              "Format preference",
              "Timeline",
              "Approval authority",
              "Budget range",
              "Confidentiality requirements",
            ].map((item, index) => (
              <Col md={6} lg={3} key={index}>
                <Card className="h-100 border-0 shadow-sm text-center p-4">
                  <h6 className="fw-semibold">{item}</h6>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= QUALITY ================= */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="border-0 shadow-sm p-5">
                <h2 className="fw-bold mb-4 text-center">
                  Quality, Confidentiality and Approval
                </h2>

                <p>
                  Custom publishing often involves sensitive institutional
                  documents, student records, community stories, field data,
                  photographs, internal systems or unpublished research.
                </p>

                <p>
                  Vasudheva Publishing should follow a disciplined approval
                  process.
                </p>

                <Row className="g-3 mt-4">
                  {[
                    "Clear scope before work begins",
                    "Responsible handling of documents",
                    "Confidentiality where required",
                    "Institutional approval before publication",
                    "Fact-checking with responsible persons",
                    "Ethical use of photographs and stories",
                    "Proper attribution",
                    "Design quality review",
                    "Final proof approval",
                  ].map((item, index) => (
                    <Col md={6} key={index}>
                      <div className="border rounded p-3">{item}</div>
                    </Col>
                  ))}
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= OWNERSHIP ================= */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="border-0 shadow-sm p-5">
                <h2 className="fw-bold mb-4 text-center">
                  Ownership, Rights and Usage
                </h2>

                <p>
                  Custom publishing projects should clearly define ownership
                  and usage rights before work begins.
                </p>

                <ul>
                  <li>Who owns the final content?</li>
                  <li>Who owns design files?</li>
                  <li>
                    Can Vasudheva Publishing display the project in portfolio?
                  </li>
                  <li>
                    Can the institution distribute or sell the publication?
                  </li>
                  <li>Can the publication be translated later?</li>
                  <li>
                    Can it be converted into digital or audio formats?
                  </li>
                  <li>
                    Who owns photographs, data and third-party material?
                  </li>
                </ul>

                <div className="alert alert-warning mt-4">
                  <strong>Important Note:</strong> Specific ownership,
                  licensing, confidentiality and usage terms should be governed
                  by written agreement.
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= FORM ================= */}
      <section
        className="py-5 bg-light"
        id="custom-publishing-form"
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="border-0 shadow p-5">
                <h2 className="fw-bold text-center mb-5">
                  Request Custom Publishing Proposal
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
                        <option>NGO</option>
                        <option>Corporate</option>
                        <option>Government Body</option>
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
                      <Form.Label className="fw-bold">
                        Publication Type Needed
                      </Form.Label>

                      <Row>
                        {[
                          "Book",
                          "Report",
                          "Manual",
                          "Handbook",
                          "Magazine",
                          "Newsletter",
                          "Journal",
                          "Educational Material",
                          "Public Awareness Booklet",
                          "Institutional History",
                          "Documentation Project",
                          "Digital Publication",
                          "Audio / Multimedia Publication",
                        ].map((item, index) => (
                          <Col md={4} key={index}>
                            <Form.Check label={item} />
                          </Col>
                        ))}
                      </Row>
                    </Col>

                    <Col xs={12}>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Purpose of Publication"
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Target Audience" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Preferred Language" />
                    </Col>

                    <Col md={6}>
                      <Form.Select>
                        <option>Preferred Format</option>
                        <option>Print</option>
                        <option>Digital</option>
                        <option>Audio</option>
                        <option>Multimedia</option>
                      </Form.Select>
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Estimated Page Range" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Expected Timeline" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Budget Range, if any" />
                    </Col>

                    <Col xs={12}>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Confidentiality Requirement"
                      />
                    </Col>

                    <Col xs={12}>
                      <Form.Control type="file" />
                    </Col>

                    <Col xs={12}>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Message"
                      />
                    </Col>

                    <Col xs={12}>
                      <Form.Check
                        label="I confirm that the information provided is accurate."
                      />

                      <Form.Check
                        label="I agree to be contacted by Vasudheva Publishing regarding this custom publishing inquiry."
                      />
                    </Col>

                    <Col xs={12}>
                      <Button size="lg">
                        Submit Custom Publishing Inquiry
                      </Button>
                    </Col>
                  </Row>
                </Form>
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
            Turn Institutional Knowledge Into a Professional Publication
          </h2>

          <p className="lead mb-5">
            Your institution may already have valuable knowledge. It may be
            hidden in documents, people, projects, classrooms, fieldwork,
            archives or memory. Vasudheva Publishing can help you transform
            that knowledge into a meaningful publication.
          </p>

          <Button size="lg" className="me-3 mb-3">
            Request Custom Publishing Proposal
          </Button>

          <Button
            variant="outline-light"
            size="lg"
            className="me-3 mb-3"
          >
            Explore Institutional Solutions
          </Button>

          <Button
            variant="outline-light"
            size="lg"
            className="me-3 mb-3"
          >
            Request Bulk Orders
          </Button>

          <Button variant="outline-light" size="lg" className="mb-3">
            Contact Us
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default CustomPublishing;