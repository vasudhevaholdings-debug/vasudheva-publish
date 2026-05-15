import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Accordion,
  Badge,
  ListGroup,
} from "react-bootstrap";

const AudiobooksPage = () => {
  const audiobookSnapshot = [
    "Narrated books",
    "Children’s audio stories",
    "Audio essays",
    "Author-read editions",
    "Knowledge podcasts",
    "Research explainers",
    "Educational audio",
    "Spiritual and reflective listening",
    "Hindi and bilingual audio",
    "Institutional audio resources",
  ];

  const whyAudioMatters = [
    {
      title: "Access Beyond the Page",
      text: "Audio helps readers engage with books even when they cannot sit with a printed copy.",
    },
    {
      title: "Support for Busy Readers",
      text: "Professionals, students and commuters can listen while moving through daily life.",
    },
    {
      title: "Children’s Storytelling",
      text: "Voice, rhythm and narration can make children’s books more engaging and memorable.",
    },
    {
      title: "Language and Pronunciation",
      text: "Audiobooks can help listeners experience Hindi, English, bilingual and Indian-language content with proper rhythm and pronunciation.",
    },
    {
      title: "Inclusion",
      text: "Audio can support visually challenged readers, elderly readers and people who prefer listening over reading.",
    },
    {
      title: "Author Presence",
      text: "Author-read editions and interviews can bring readers closer to the author’s voice, intention and personality.",
    },
    {
      title: "Institutional Use",
      text: "Schools, libraries, NGOs, training centres and community groups can use audio content for learning and outreach.",
    },
  ];

  const whoBenefits = [
    {
      title: "General Readers",
      text: "For readers who enjoy listening to literature, essays, biography, philosophy, culture and public thought.",
    },
    {
      title: "Children and Families",
      text: "For children’s stories, bedtime listening, family storytelling and early language development.",
    },
    {
      title: "Students",
      text: "For study support, revision, concept listening, supplementary learning and habit-building.",
    },
    {
      title: "Teachers",
      text: "For classroom storytelling, language teaching, listening activities and reading enrichment.",
    },
    {
      title: "Professionals",
      text: "For leadership, business, economics, management, productivity and lifelong learning during busy schedules.",
    },
    {
      title: "Researchers and Scholars",
      text: "For research summaries, report explainers, public knowledge audio and academic conversations.",
    },
    {
      title: "Elderly Readers",
      text: "For readers who may prefer listening due to comfort, eyesight or habit.",
    },
    {
      title: "Visually Challenged Readers",
      text: "For inclusive access to books and knowledge products.",
    },
    {
      title: "Institutions and Libraries",
      text: "For schools, colleges, libraries, NGOs, community centres and training programmes.",
    },
  ];

  const categories = [
    {
      title: "Fiction Audiobooks",
      text: "Narrated stories, novels, short fiction, literary fiction and dramatic readings.",
    },
    {
      title: "Poetry in Voice",
      text: "Poetry collections, author readings, lyrical recitations and reflective poetic audio.",
    },
    {
      title: "Children’s Audio Stories",
      text: "Stories for children with engaging narration, sound design and age-appropriate language.",
    },
    {
      title: "Non-Fiction Audiobooks",
      text: "Books on society, education, economics, culture, biography, philosophy, spirituality and public thought.",
    },
    {
      title: "Educational Audio",
      text: "Learning resources, concept explainers, teacher material, student listening modules and revision audio.",
    },
    {
      title: "Research and Report Audio",
      text: "Audio summaries of reports, policy papers, white papers and institutional knowledge documents.",
    },
    {
      title: "Author Conversations",
      text: "Interviews, book discussions, writing journeys and author-led reflections.",
    },
    {
      title: "Spiritual and Reflective Audio",
      text: "Works suited for slow listening, reflection, ethics, philosophy and inner development.",
    },
    {
      title: "Hindi and Bilingual Audio",
      text: "Hindi, English-Hindi and future Indian-language audio publications.",
    },
    {
      title: "Institutional Audio Resources",
      text: "Training audio, public awareness audio, library listening programmes and community learning material.",
    },
  ];

  const playerFeatures = {
    core: [
      "Play / Pause",
      "Forward / Rewind",
      "Chapter navigation",
      "Progress bar",
      "Playback speed",
      "Volume control",
      "Save progress",
      "Bookmark",
      "Download option, if allowed",
      "Transcript option, if available",
    ],
    advanced: [
      "Sleep timer",
      "Notes while listening",
      "Highlight transcript",
      "Share quote or clip",
      "Continue listening across devices",
    ],
  };

  const accessModels = [
    "Free preview",
    "Single audiobook purchase",
    "Bundled print + audio access",
    "E-book + audio bundle",
    "Subscription access",
    "Institutional license",
    "Library access",
    "Educational programme access",
    "Promotional listening campaign",
  ];

  const faqs = [
    {
      q: "What will be available on the Audiobooks page?",
      a: "Audiobooks, children’s audio stories, audio essays, author conversations, educational audio and knowledge podcasts may be listed here.",
    },
    {
      q: "Will audiobooks be available in Hindi?",
      a: "Yes. Hindi, English, bilingual and future Indian-language audio pathways may be developed.",
    },
    {
      q: "Can children use audiobooks?",
      a: "Yes. Children’s audio stories may be designed with age-appropriate narration and content.",
    },
    {
      q: "Can I listen before buying?",
      a: "The platform may provide short previews where rights and platform design allow.",
    },
    {
      q: "Can schools and libraries use audiobooks?",
      a: "Yes. Institutions may request access for reading programmes, libraries, classrooms and community learning.",
    },
    {
      q: "Can authors request audiobook adaptation?",
      a: "Yes. Authors may suggest their books for audio adaptation, subject to rights, suitability and production feasibility.",
    },
    {
      q: "Can I download audiobooks?",
      a: "Download access will depend on the digital access model and rights policy.",
    },
    {
      q: "Are audiobooks refundable?",
      a: "Digital audio products may have specific refund rules depending on access and usage.",
    },
    {
      q: "Will there be a mobile app?",
      a: "A mobile app or reader dashboard may be considered in the future digital platform roadmap.",
    },
    {
      q: "Can audiobooks be used in training or public programmes?",
      a: "Yes, but institutional or commercial use may require separate licensing.",
    },
  ];

  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="py-5 bg-light overflow-hidden">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              {/* <span className="text-uppercase text-primary fw-semibold">
                For Readers
              </span> */}

              <h1 className="display-4 fw-bold mt-3 mb-4">
                Listen to Books. Carry Knowledge Everywhere.
              </h1>

              <p className="lead">
                Vasudheva Publishing is building an audiobook and audio
                knowledge ecosystem for readers who want to listen, learn,
                reflect and engage with books through voice.
              </p>

              <p className="text-muted">
                Audiobooks make reading possible while travelling, resting,
                walking, working, learning or supporting children. Through
                narrated books, audio essays, children’s stories, author
                conversations and knowledge podcasts, Vasudheva Publishing aims
                to make ideas more accessible, intimate and inclusive.
              </p>

              <div className="mt-4">
                <Button className="me-3 mb-3" size="lg">
                  Explore Audiobooks
                </Button>

                <Button
                  variant="outline-dark"
                  className="me-3 mb-3"
                  size="lg"
                >
                  Join Audio Updates
                </Button>

                <Button variant="outline-primary" size="lg" className="mb-3">
                  Suggest a Book for Audio
                </Button>
              </div>
            </Col>

            <Col lg={6}>
              <Card className="shadow-lg border-0 rounded-4 p-4">
                <h4 className="fw-bold text-center mb-4">
                  Audiobooks in One View
                </h4>

                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  {audiobookSnapshot.map((item, index) => (
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
            Audiobooks in One View
          </h2>

          <Row className="g-4">
            {audiobookSnapshot.map((item, index) => (
              <Col md={4} lg={3} key={index}>
                <Card className="h-100 border-0 shadow-sm text-center p-4">
                  <h6 className="fw-semibold mb-0">{item}</h6>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= WHY AUDIOBOOKS MATTER ================= */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="fw-bold text-center mb-4">
                Why Audiobooks Matter
              </h2>

              <p className="lead">
                Reading is no longer limited to the printed page.
              </p>

              <p>
                Many readers want to listen while travelling, commuting,
                exercising, resting or working. Children often respond deeply
                to storytelling through voice.
              </p>

              <p>
                Professionals may prefer listening during busy schedules.
                Visually challenged readers and oral learners may find audio
                formats especially valuable.
              </p>

              <p>
                Audiobooks help expand access to knowledge by making books
                available through listening.
              </p>
            </Col>
          </Row>

          <Row className="g-4 mt-4">
            {whyAudioMatters.map((item, index) => (
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

      {/* ================= PHILOSOPHY ================= */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="fw-bold text-center mb-5">
                Our Philosophy: Audio as Knowledge Access
              </h2>

              <p>
                At Vasudheva Publishing, audio is not treated as a secondary
                format. It is a distinct knowledge experience.
              </p>

              <p>
                A printed book gives the reader space to pause and underline.
              </p>

              <p>
                An audiobook gives the listener voice, pace and emotional
                presence.
              </p>

              <p>A podcast creates conversation.</p>

              <p>An audio essay creates reflection.</p>

              <p>A children’s audio story creates imagination.</p>

              <p>
                Audio publishing allows knowledge to travel differently.
              </p>

              <p>
                For Vasudheva Publishing, audiobooks support the broader group
                vision of integrating publishing, media, education and digital
                systems into one knowledge ecosystem.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= WHO BENEFITS ================= */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Who Can Benefit From Audiobooks?
          </h2>

          <Row className="g-4">
            {whoBenefits.map((item, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="h-100 shadow-sm border-0 p-4">
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p className="text-muted">{item.text}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Explore Audiobook Categories
          </h2>

          <Row className="g-4">
            {categories.map((category, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="h-100 border-0 shadow-sm p-4">
                  <h5 className="fw-bold mb-3">{category.title}</h5>
                  <p className="text-muted">{category.text}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= FEATURED AUDIOBOOKS ================= */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Featured Audiobooks
          </h2>

          <Row className="justify-content-center">
            <Col lg={5}>
              <Card className="h-100 border-0 shadow-lg">
                <div
                  className="bg-secondary"
                  style={{ height: "250px" }}
                ></div>

                <Card.Body className="p-4">
                  <Badge bg="primary" className="mb-3">
                    Children’s Audio Stories
                  </Badge>

                  <h4 className="fw-bold">
                    Stories for Thoughtful Children
                  </h4>

                  <p className="mb-1">
                    <strong>Author:</strong> Vasudheva Publishing Editorial Team
                  </p>

                  <p className="mb-1">
                    <strong>Narrator:</strong> To be announced
                  </p>

                  <p className="mb-1">
                    <strong>Language:</strong> Hindi / English / Bilingual
                  </p>

                  <p className="mt-3 text-muted">
                    A planned audio collection of thoughtful stories designed
                    to support imagination, language development and family
                    listening.
                  </p>

                  <div className="mt-4">
                    <Button className="me-2 mb-2">
                      Join Audio Updates
                    </Button>

                    <Button
                      variant="outline-dark"
                      className="me-2 mb-2"
                    >
                      Listen Preview
                    </Button>

                    <Button variant="outline-primary" className="mb-2">
                      Add to Library
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= HOW LISTENING WORKS ================= */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            How to Listen
          </h2>

          <Row className="g-4">
            {[
              {
                phase: "Phase 1: Audio Updates and Previews",
                items: [
                  "Audiobook announcements",
                  "Short audio previews",
                  "Author conversation clips",
                  "Children’s storytelling previews",
                  "Podcast-style episodes",
                ],
              },
              {
                phase: "Phase 2: Audio Catalogue",
                items: [
                  "Audiobook listing",
                  "Audio detail pages",
                  "Duration and language filters",
                  "Narrator information",
                  "Preview player",
                  "Purchase or access request",
                ],
              },
              {
                phase: "Phase 3: Reader Audio Library",
                items: [
                  "Reader login",
                  "My audio library",
                  "Continue listening",
                  "Saved titles",
                  "Listening history",
                  "Downloads, where allowed",
                ],
              },
              {
                phase: "Phase 4: Full Audio Platform",
                items: [
                  "Streaming player",
                  "Chapter navigation",
                  "Bookmarks",
                  "Speed control",
                  "Subscriptions",
                  "Institutional access",
                ],
              },
            ].map((phase, index) => (
              <Col lg={6} key={index}>
                <Card className="h-100 shadow-sm border-0 p-4">
                  <h4 className="fw-bold mb-4">{phase.phase}</h4>

                  <ListGroup variant="flush">
                    {phase.items.map((item, i) => (
                      <ListGroup.Item key={i}>
                        {item}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= AUDIO PLAYER ================= */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Recommended Audio Player Features
          </h2>

          <Row className="g-4">
            <Col lg={6}>
              <Card className="h-100 border-0 shadow-sm p-4">
                <h4 className="fw-bold mb-4">Core Features</h4>

                <ul>
                  {playerFeatures.core.map((item, index) => (
                    <li key={index} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </Col>

            <Col lg={6}>
              <Card className="h-100 border-0 shadow-sm p-4">
                <h4 className="fw-bold mb-4">Advanced Features</h4>

                <ul>
                  {playerFeatures.advanced.map((item, index) => (
                    <li key={index} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= CHILDREN AUDIO ================= */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="fw-bold text-center mb-4">
                Children’s Audio Stories
              </h2>

              <p className="lead">
                Children often encounter knowledge first through listening.
              </p>

              <p>
                Stories told with voice, rhythm and warmth can build
                imagination, vocabulary, attention and emotional connection.
              </p>

              <Row className="g-4 mt-3">
                <Col lg={6}>
                  <Card className="h-100 border-0 shadow-sm p-4">
                    <h5 className="fw-bold mb-3">
                      Children’s Audio Formats
                    </h5>

                    <ul>
                      <li>Bedtime stories</li>
                      <li>Moral stories</li>
                      <li>Festival stories</li>
                      <li>Nature stories</li>
                      <li>Animal stories</li>
                      <li>Historical stories</li>
                      <li>Local stories</li>
                      <li>Language-learning stories</li>
                    </ul>
                  </Card>
                </Col>

                <Col lg={6}>
                  <Card className="h-100 border-0 shadow-sm p-4">
                    <h5 className="fw-bold mb-3">
                      Safety and Quality Considerations
                    </h5>

                    <ul>
                      <li>Age-appropriate content</li>
                      <li>Gentle narration</li>
                      <li>Clear language</li>
                      <li>No harmful messaging</li>
                      <li>Parent / teacher guidance</li>
                      <li>Short duration for young listeners</li>
                    </ul>
                  </Card>
                </Col>
              </Row>

              <div className="text-center mt-5">
                <Button size="lg">
                  Explore Children’s Audio
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= EDUCATIONAL AUDIO ================= */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="fw-bold text-center mb-4">
                Educational Audio
              </h2>

              <p>
                Audio can support learning when used carefully. It can help
                students revise concepts, teachers enrich classrooms and
                institutions provide supplementary learning.
              </p>

              <Row className="g-4 mt-4">
                {[
                  "Concept explainers",
                  "Chapter summaries",
                  "Revision audio",
                  "Language practice",
                  "Teacher guidance",
                  "Story-based learning",
                  "Exam preparation support",
                  "General knowledge capsules",
                  "Listening comprehension",
                ].map((item, index) => (
                  <Col md={4} key={index}>
                    <Card className="border-0 shadow-sm text-center p-4 h-100">
                      <h6 className="fw-semibold mb-0">{item}</h6>
                    </Card>
                  </Col>
                ))}
              </Row>

              <div className="text-center mt-5">
                <Button size="lg">
                  Explore Educational Audio
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= INSTITUTIONAL AUDIO ================= */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Audiobooks for Schools, Libraries and Institutions
          </h2>

          <Row className="justify-content-center">
            <Col lg={10}>
              <p className="text-center lead">
                Institutions can use audio knowledge products for learning,
                inclusion, outreach and reading culture.
              </p>

              <Row className="g-4 mt-4">
                {[
                  "School listening sessions",
                  "Library audio corners",
                  "Children’s storytelling days",
                  "Teacher training audio",
                  "NGO awareness audio",
                  "Community radio-style learning",
                  "Corporate learning audio",
                  "Public awareness campaigns",
                  "Digital library audio access",
                ].map((item, index) => (
                  <Col md={4} key={index}>
                    <Card className="border-0 shadow-sm text-center p-4 h-100">
                      <h6 className="fw-semibold">{item}</h6>
                    </Card>
                  </Col>
                ))}
              </Row>

              <div className="text-center mt-5">
                <Button className="me-3 mb-3" size="lg">
                  Request Institutional Audio Access
                </Button>

                <Button
                  variant="outline-dark"
                  size="lg"
                  className="mb-3"
                >
                  Start Audio Reading Programme
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= AUTHOR READ EDITIONS ================= */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="fw-bold text-center mb-4">
                Author-Read Editions
              </h2>

              <p>
                Some works become more powerful when read by the author.
              </p>

              <p>
                Author-read editions can preserve tone, intention, rhythm and
                emotional authenticity.
              </p>

              <Row className="g-4 mt-4">
                {[
                  "Poetry",
                  "Memoir",
                  "Essays",
                  "Spiritual reflections",
                  "Personal stories",
                  "Public thought",
                  "Author lectures",
                  "Children’s storytelling",
                ].map((item, index) => (
                  <Col md={3} key={index}>
                    <Card className="border-0 shadow-sm text-center p-4 h-100">
                      <h6 className="fw-semibold">{item}</h6>
                    </Card>
                  </Col>
                ))}
              </Row>

              <div className="text-center mt-5">
                <Button size="lg">
                  Suggest Author-Read Edition
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= AUDIO PRODUCTS ================= */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Audiobooks, Audio Essays and Podcasts
          </h2>

          <Row className="g-4">
            {[
              "Full audiobook",
              "Short audiobook",
              "Audio essay",
              "Chapter-wise audio",
              "Author conversation",
              "Book discussion podcast",
              "Research explainer",
              "Children’s story episode",
              "Learning capsule",
              "Institutional audio bulletin",
            ].map((item, index) => (
              <Col md={4} lg={3} key={index}>
                <Card className="border-0 shadow-sm text-center p-4 h-100">
                  <h6 className="fw-semibold">{item}</h6>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= ACCESS MODELS ================= */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Possible Access Models
          </h2>

          <Row className="g-4">
            {accessModels.map((item, index) => (
              <Col md={4} lg={3} key={index}>
                <Card className="border-0 shadow-sm text-center p-4 h-100">
                  <h6 className="fw-semibold">{item}</h6>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= RIGHTS ================= */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="border-0 shadow-sm p-5 bg-light">
                <h2 className="fw-bold mb-4">
                  Audio Rights and Responsible Use
                </h2>

                <p>
                  Audiobooks require clear rights. A book cannot automatically
                  become an audiobook unless audio rights are available or
                  granted.
                </p>

                <p>Audio publishing may involve:</p>

                <ul>
                  <li>author permission</li>
                  <li>audiobook rights</li>
                  <li>narrator agreements</li>
                  <li>music and sound permissions</li>
                  <li>platform distribution rights</li>
                  <li>institutional licensing</li>
                  <li>digital access rules</li>
                  <li>anti-piracy measures</li>
                </ul>

                <p>
                  Readers and institutions must not copy, redistribute, upload
                  or commercially use audiobooks without permission.
                </p>

                <Button variant="dark">
                  Read Digital Access Policy
                </Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= RECOMMENDATION FORM ================= */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="shadow border-0 p-5">
                <h2 className="fw-bold text-center mb-4">
                  Not Sure What to Listen To?
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
                      <Form.Select>
                        <option>Reader Type</option>
                        <option>Student</option>
                        <option>Teacher</option>
                        <option>Professional</option>
                        <option>Researcher</option>
                      </Form.Select>
                    </Col>

                    <Col md={6}>
                      <Form.Select>
                        <option>Age Group</option>
                        <option>Children</option>
                        <option>Teen</option>
                        <option>Adult</option>
                      </Form.Select>
                    </Col>

                    <Col md={6}>
                      <Form.Select>
                        <option>Language Preference</option>
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Bilingual</option>
                      </Form.Select>
                    </Col>

                    <Col md={6}>
                      <Form.Select>
                        <option>Preferred Audio Category</option>
                        <option>Fiction</option>
                        <option>Poetry</option>
                        <option>Children’s Stories</option>
                        <option>Education</option>
                      </Form.Select>
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Listening Purpose" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Preferred Duration" />
                    </Col>

                    <Col xs={12}>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Message"
                      />
                    </Col>

                    <Col xs={12}>
                      <Button size="lg">
                        Request Audio Recommendation
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= SUGGEST AUDIO ================= */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="border-0 shadow-sm p-5">
                <h2 className="fw-bold text-center mb-4">
                  Suggest a Book for Audiobook Adaptation
                </h2>

                <p className="text-center text-muted mb-5">
                  Readers, authors and institutions may suggest books or
                  knowledge products that should be converted into audio.
                </p>

                <Form>
                  <Row className="g-4">
                    <Col md={6}>
                      <Form.Control placeholder="Your Name" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Email" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Book / Manuscript Title" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Author Name" />
                    </Col>

                    <Col xs={12}>
                      <Form.Control
                        placeholder="Why should this become an audiobook?"
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Suggested Language" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Suggested Audience" />
                    </Col>

                    <Col xs={12}>
                      <Form.Check
                        label="Are you the author / rights holder?"
                      />
                    </Col>

                    <Col xs={12}>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Message"
                      />
                    </Col>

                    <Col xs={12}>
                      <Button variant="dark" size="lg">
                        Submit Audio Suggestion
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= PLATFORM VISION ================= */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Future Audiobook Platform Vision
          </h2>

          <Row className="g-4">
            {[
              "Audio catalogue",
              "Reader audio library",
              "Continue listening",
              "Saved titles",
              "Audiobook subscriptions",
              "Institutional audio access",
              "Children’s listening section",
              "Podcast library",
              "Author conversation archive",
              "Audio analytics",
              "Narrator profiles",
              "Transcript support",
            ].map((item, index) => (
              <Col md={4} lg={3} key={index}>
                <Card className="border-0 shadow-sm text-center p-4 h-100">
                  <h6 className="fw-semibold">{item}</h6>
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
            Listen, Learn and Carry Books With You
          </h2>

          <p className="lead mb-5">
            Audiobooks allow knowledge to travel through voice. Whether you
            are a child, student, teacher, professional, researcher, parent,
            library or institution, Vasudheva Publishing invites you to
            explore the future of listening-based knowledge.
          </p>

          <Button size="lg" className="me-3 mb-3">
            Explore Audiobooks
          </Button>

          <Button
            variant="outline-light"
            size="lg"
            className="me-3 mb-3"
          >
            Request Audio Recommendation
          </Button>

          <Button
            variant="outline-light"
            size="lg"
            className="me-3 mb-3"
          >
            Suggest a Book for Audio
          </Button>

          <Button variant="outline-light" size="lg" className="mb-3">
            Join Reader Community
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
                A publishing and knowledge infrastructure company developing
                audiobooks, children’s audio stories, audio essays, author
                conversations, educational audio, research explainers and
                digital listening experiences.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default AudiobooksPage;