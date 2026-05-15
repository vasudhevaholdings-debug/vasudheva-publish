import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Accordion,
  Badge,
  Table,
} from "react-bootstrap";

const BulkOrders = () => {
  const snapshotItems = [
    "School library books",
    "College library collections",
    "Children’s book sets",
    "Teacher resource sets",
    "Student reading kits",
    "Professional reading kits",
    "Research report bundles",
    "Institutional editions",
    "NGO awareness booklets",
    "Corporate learning sets",
    "Public campaign materials",
    "Audiobook / digital access bundles",
    "Custom curated collections",
  ];

  const institutions = [
    {
      title: "Schools",
      text: "For libraries, classrooms, student reading programmes, teacher resources, children’s books and annual reading campaigns.",
    },
    {
      title: "Colleges and Universities",
      text: "For libraries, departments, academic programmes, student reading lists, journals, research publications and event distributions.",
    },
    {
      title: "Libraries",
      text: "For collection development, children’s sections, community reading spaces, book clubs and thematic shelves.",
    },
    {
      title: "NGOs and Civil Society Organisations",
      text: "For awareness campaigns, field education, community learning, training material and donor-supported reading initiatives.",
    },
    {
      title: "Corporates and Businesses",
      text: "For employee learning, leadership development, CSR initiatives, customer education and professional reading kits.",
    },
    {
      title: "Government Bodies and Public Institutions",
      text: "For public awareness, citizen communication, educational programmes, training, community outreach and libraries.",
    },
    {
      title: "Research Organisations and Think Tanks",
      text: "For reports, working papers, policy publications, conference kits and stakeholder circulation.",
    },
    {
      title: "Community Organisations",
      text: "For local libraries, youth groups, reading rooms, cultural programmes and community knowledge initiatives.",
    },
  ];

  const orderCategories = [
    {
      title: "Books",
      items: [
        "Fiction",
        "Non-fiction",
        "Poetry",
        "Biography",
        "Children’s books",
        "Educational books",
        "Professional books",
        "Cultural books",
        "Philosophy and spirituality books",
      ],
    },
    {
      title: "Educational Resources",
      items: [
        "Textbooks",
        "Workbooks",
        "Teacher manuals",
        "Learning modules",
        "Student handbooks",
        "Activity books",
        "Reading guides",
      ],
    },
    {
      title: "Research and Institutional Publications",
      items: [
        "Research reports",
        "White papers",
        "Policy papers",
        "Impact reports",
        "Field studies",
        "Institutional reports",
        "Conference proceedings",
        "Academic journals",
      ],
    },
    {
      title: "Children’s Reading Sets",
      items: [
        "Storybooks",
        "Illustrated books",
        "Activity books",
        "Moral stories",
        "Language development books",
        "Nature and curiosity books",
        "Audio story bundles",
      ],
    },
    {
      title: "Digital and Audio Bundles",
      items: [
        "E-book access",
        "Digital report access",
        "Audiobook access",
        "Audio learning resources",
        "Institutional digital library access",
        "Podcast-linked knowledge products",
      ],
    },
    {
      title: "Custom Institutional Editions",
      items: [
        "Special cover editions",
        "Co-branded editions",
        "Institutional copies",
        "Event editions",
        "Training editions",
        "Library editions",
        "Reading programme editions",
      ],
    },
  ];

  const useCases = [
    {
      title: "School Library Development",
      need:
        "A school wants to strengthen its library and reading culture.",
      solution:
        "Age-wise children’s books + student reading lists + teacher support books + storytelling resources.",
      outcome:
        "Students get access to curated books and structured reading programmes.",
    },
    {
      title: "College Department Reading List",
      need:
        "A college department wants books and reports for students and faculty.",
      solution:
        "Academic books + research reports + essay collections + journals + discussion guides.",
      outcome:
        "The department builds a serious academic reading ecosystem.",
    },
    {
      title: "NGO Awareness Campaign",
      need:
        "An NGO needs readable material for community outreach.",
      solution:
        "Awareness booklets + illustrated guides + field education material + multilingual editions.",
      outcome:
        "Knowledge reaches communities in accessible formats.",
    },
    {
      title: "Corporate Learning Kit",
      need:
        "A company wants to support employee learning and leadership development.",
      solution:
        "Professional books + management resources + institutional manuals + reading club starter kit.",
      outcome:
        "Books become part of organisational learning culture.",
    },
    {
      title: "Public Library Collection",
      need:
        "A library wants to upgrade its collection.",
      solution:
        "Curated books by reader type, age group, language, subject and community need.",
      outcome:
        "The library becomes more relevant and actively used.",
    },
  ];

  const curatedCollections = [
    "Children’s Reading Collection",
    "School Library Starter Collection",
    "College Knowledge Collection",
    "Teacher Resource Collection",
    "Research and Policy Collection",
    "Professional Development Collection",
    "Hindi and Bilingual Reading Collection",
    "Public Awareness Collection",
    "Community Library Collection",
    "Leadership and Management Collection",
  ];

  const processSteps = [
    "Inquiry",
    "Requirement Mapping",
    "Catalogue / Collection Suggestion",
    "Quantity and Format Finalisation",
    "Quotation",
    "Payment / Purchase Order",
    "Packing and Dispatch",
    "Delivery Confirmation",
    "Support and Feedback",
  ];

  const faqs = [
    {
      q: "Who can place a bulk order?",
      a: "Schools, colleges, libraries, NGOs, corporates, government bodies, research organisations and community institutions can place bulk orders.",
    },
    {
      q: "Is there a minimum quantity?",
      a: "Minimum quantity may depend on title, format and availability. Developers may display a minimum quantity after internal policy finalisation.",
    },
    {
      q: "Do you provide discounts on bulk orders?",
      a: "Institutional or bulk pricing may apply depending on quantity, title, format and order value.",
    },
    {
      q: "Can you help us choose books?",
      a: "Yes. Institutions can request curated collections based on reader type, age group, language, subject and purpose.",
    },
    {
      q: "Can books be customised for institutions?",
      a: "Certain editions may be customised or co-branded depending on feasibility, rights and order size.",
    },
    {
      q: "Can we order digital or audiobook access in bulk?",
      a: "Yes, digital or audio access may be considered where rights and platform systems allow.",
    },
    {
      q: "Can you deliver to multiple locations?",
      a: "Multiple-location delivery may be possible depending on order size and logistics.",
    },
    {
      q: "Do you provide invoices?",
      a: "Yes, invoices can be issued according to applicable billing details and tax requirements.",
    },
    {
      q: "What if books are damaged in delivery?",
      a: "Damaged or missing copy support should be handled according to shipping and replacement policy.",
    },
    {
      q: "Can bulk orders be linked with reading programmes?",
      a: "Yes. Bulk orders can be combined with reading programmes, book clubs, author talks or library development.",
    },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              {/* <span className="text-uppercase text-primary fw-semibold">
                For Institutions
              </span> */}

              <h1 className="display-4 fw-bold mt-3 mb-4">
                Bulk Books and Knowledge Resources for Institutions
              </h1>

              <p className="lead">
                Vasudheva Publishing Pvt. Ltd. supports schools, colleges,
                universities, libraries, NGOs, corporates, government bodies,
                training centres and community organisations with bulk books,
                curated collections, institutional copies and reading programme
                resources.
              </p>

              <p className="text-muted">
                Whether you are building a school library, developing a college
                reading circle, creating a children’s reading programme,
                supporting NGO field education, designing a corporate learning
                kit, or supplying books for a public campaign, we help
                institutions identify, order and use books meaningfully.
              </p>

              <div className="mt-4">
                <Button  className="me-3 mb-3">
                  Request Bulk Order Quote
                </Button>

                <Button
                  variant="outline-dark"
                  
                  className="me-3 mb-3"
                >
                  Build a Curated Collection
                </Button>

                <Button variant="outline-primary"  className="mb-3">
                  Discuss Institutional Requirement
                </Button>
              </div>
            </Col>

            <Col lg={6}>
              <Card className="border-0 shadow-lg p-4 rounded-4">
                <h4 className="fw-bold text-center mb-4">
                  Bulk Orders in One View
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

      {/* SNAPSHOT */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Bulk Orders Snapshot
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

      {/* WHY BULK ORDERS */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="fw-bold text-center mb-4">
                Why Bulk Orders Are More Than Procurement
              </h2>

              <p className="lead">
                A bulk order is not simply a large purchase.
              </p>

              <p>
                For institutions, it can become a tool for reading culture,
                learning design, training, public communication and
                institutional development.
              </p>

              <p>
                A school may use bulk books to build reading habits. A college
                may use books for academic enrichment. A library may use curated
                collections to activate readership. An NGO may use booklets for
                community awareness. A company may use books for employee
                learning. A public body may use knowledge material for citizen
                outreach.
              </p>

              <p>
                Bulk ordering should therefore be connected with purpose.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* WHO CAN PLACE */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Who Can Place Bulk Orders?
          </h2>

          <Row className="g-4">
            {institutions.map((item, index) => (
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

      {/* WHAT CAN BE ORDERED */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            What Can Institutions Order?
          </h2>

          <Row className="g-4">
            {orderCategories.map((category, index) => (
              <Col lg={6} key={index}>
                <Card className="h-100 border-0 shadow-sm p-4">
                  <h4 className="fw-bold mb-3">{category.title}</h4>

                  <ul>
                    {category.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* USE CASES */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Institutional Use Cases
          </h2>

          <Row className="g-4">
            {useCases.map((useCase, index) => (
              <Col lg={6} key={index}>
                <Card className="h-100 border-0 shadow-sm p-4">
                  <h4 className="fw-bold mb-3">{useCase.title}</h4>

                  <p>
                    <strong>Need:</strong> {useCase.need}
                  </p>

                  <p>
                    <strong>Bulk Order Solution:</strong>{" "}
                    {useCase.solution}
                  </p>

                  <p>
                    <strong>Outcome:</strong> {useCase.outcome}
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CURATED COLLECTIONS */}
      <section
        className="py-5 bg-light"
        id="curated-collections"
      >
        <Container>
          <h2 className="fw-bold text-center mb-4">
            Curated Collections for Institutions
          </h2>

          <p className="text-center lead mb-5">
            Vasudheva Publishing can help institutions build curated collections
            based on purpose, audience, age group, language, budget and
            institutional goals.
          </p>

          <Row className="g-4">
            {curatedCollections.map((item, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="border-0 shadow-sm text-center p-4 h-100">
                  <h5 className="fw-bold">{item}</h5>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-5">
            <Button size="lg">
              Request Curated Collection
            </Button>
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            How Bulk Orders Work
          </h2>

          <Row className="g-4 mb-5">
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

          <Card className="border-0 shadow-sm p-4">
            <h4 className="fw-bold mb-4">Stage Details</h4>

            <p><strong>9.1 Inquiry:</strong> Institution submits requirement through the bulk order form.</p>

            <p><strong>9.2 Requirement Mapping:</strong> We identify institution type, purpose, reader profile, budget, quantity, language and format.</p>

            <p><strong>9.3 Catalogue / Collection Suggestion:</strong> We suggest available titles, curated sets or custom institutional options.</p>

            <p><strong>9.4 Quantity and Format Finalisation:</strong> Institution confirms titles, quantities, formats and delivery requirements.</p>

            <p><strong>9.5 Quotation:</strong> A formal quote is shared with price, discount, taxes, shipping and timelines.</p>

            <p><strong>9.6 Payment / Purchase Order:</strong> Order is processed after payment confirmation or purchase order approval, depending on agreed terms.</p>

            <p><strong>9.7 Packing and Dispatch:</strong> Books or materials are packed and dispatched.</p>

            <p><strong>9.8 Delivery Confirmation:</strong> Institution confirms delivery and reports issues, if any.</p>

            <p><strong>9.9 Support and Feedback:</strong> Support is provided for invoice, damaged copies, missing items or future orders.</p>
          </Card>
        </Container>
      </section>

      {/* PRICING */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-4">
            Pricing, Discounts and Quotations
          </h2>

          <p className="lead text-center mb-5">
            Bulk order pricing may depend on title availability, quantity,
            format, print cost, shipping location, institutional purpose and
            customisation requirements.
          </p>

          <Row className="g-4 mb-5">
            {[
              "Number of titles",
              "Number of copies",
              "Print or digital format",
              "Existing stock or print-on-demand",
              "Shipping location",
              "Urgency",
              "Custom cover or edition",
              "Institutional discount",
              "Packaging requirement",
              "GST / taxes",
              "Special handling",
            ].map((item, index) => (
              <Col md={4} lg={3} key={index}>
                <Card className="border-0 shadow-sm text-center p-3 h-100">
                  <h6 className="fw-semibold">{item}</h6>
                </Card>
              </Col>
            ))}
          </Row>

          <Card className="border-0 shadow-sm p-4">
            <h4 className="fw-bold mb-4">
              Suggested Discount Slab Display
            </h4>

            <Table bordered responsive>
              <thead>
                <tr>
                  <th>Quantity</th>
                  <th>Indicative Pricing Logic</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>10–49 copies</td>
                  <td>Institutional inquiry discount may apply</td>
                </tr>

                <tr>
                  <td>50–99 copies</td>
                  <td>Bulk order discount may apply</td>
                </tr>

                <tr>
                  <td>100–499 copies</td>
                  <td>Special institutional pricing may apply</td>
                </tr>

                <tr>
                  <td>500+ copies</td>
                  <td>Custom quotation required</td>
                </tr>
              </tbody>
            </Table>

            <p className="text-muted mt-3">
              Developer Note: Actual discount slabs should be finalised
              internally before publication.
            </p>
          </Card>
        </Container>
      </section>

      {/* DELIVERY */}
      <section className="py-5">
        <Container>
          <Row className="g-5">
            <Col lg={6}>
              <Card className="border-0 shadow-sm p-4 h-100">
                <h3 className="fw-bold mb-4">
                  Delivery and Shipping Support
                </h3>

                <p>
                  Bulk order delivery should be handled carefully because
                  institutions may require timely delivery, invoice records and
                  proof of dispatch.
                </p>

                <h5 className="fw-bold mt-4">
                  Delivery Details to Collect
                </h5>

                <ul>
                  <li>Delivery address</li>
                  <li>Contact person</li>
                  <li>Phone number</li>
                  <li>Institution name</li>
                  <li>GST details, if applicable</li>
                  <li>Preferred delivery date</li>
                  <li>Special packaging requirements</li>
                  <li>Multiple delivery locations, if any</li>
                </ul>
              </Card>
            </Col>

            <Col lg={6}>
              <Card className="border-0 shadow-sm p-4 h-100">
                <h3 className="fw-bold mb-4">
                  Shipping Support Areas
                </h3>

                <ul>
                  <li>Courier coordination</li>
                  <li>Bulk dispatch</li>
                  <li>Institutional delivery</li>
                  <li>Tracking information</li>
                  <li>Damaged copy support</li>
                  <li>Missing copy support</li>
                  <li>Replacement process</li>
                  <li>Delivery confirmation</li>
                </ul>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* PAYMENT */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="g-5">
            <Col lg={6}>
              <Card className="border-0 shadow-sm p-4 h-100">
                <h3 className="fw-bold mb-4">
                  Payment and Documentation
                </h3>

                <p>
                  Institutional orders may require formal documentation.
                </p>

                <h5 className="fw-bold mt-4">
                  Documents That May Be Used
                </h5>

                <ul>
                  <li>Quotation</li>
                  <li>Proforma invoice</li>
                  <li>Tax invoice</li>
                  <li>Purchase order</li>
                  <li>Payment receipt</li>
                  <li>Delivery challan</li>
                  <li>Dispatch note</li>
                  <li>Institutional confirmation letter</li>
                </ul>
              </Card>
            </Col>

            <Col lg={6}>
              <Card className="border-0 shadow-sm p-4 h-100">
                <h3 className="fw-bold mb-4">
                  Payment Modes
                </h3>

                <ul>
                  <li>Bank transfer</li>
                  <li>UPI</li>
                  <li>Payment gateway</li>
                  <li>Cheque, if accepted</li>
                  <li>
                    Institutional purchase order process, if agreed
                  </li>
                </ul>

                <p className="text-muted mt-4">
                  Developer Note: Only active and approved payment modes should
                  be shown on final website.
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FORM */}
      <section
        className="py-5"
        id="bulk-order-form"
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="border-0 shadow-lg p-5">
                <h2 className="fw-bold text-center mb-5">
                  Request Bulk Order Quote
                </h2>

                <Form>
                  <h4 className="fw-bold mb-4">
                    Institution Details
                  </h4>

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
                        <option>Government Body</option>
                        <option>Research Organisation</option>
                        <option>Community Organisation</option>
                      </Form.Select>
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="City / State / Country" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Website" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="GST Number, if applicable" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Billing Address" />
                    </Col>

                    <Col xs={12}>
                      <Form.Control placeholder="Delivery Address" />
                    </Col>

                    <h4 className="fw-bold mt-5">
                      Contact Person
                    </h4>

                    <Col md={6}>
                      <Form.Control placeholder="Full Name" />
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

                    <Col md={6}>
                      <Form.Select>
                        <option>Preferred Contact Mode</option>
                        <option>Email</option>
                        <option>Phone</option>
                        <option>WhatsApp</option>
                      </Form.Select>
                    </Col>

                    <h4 className="fw-bold mt-5">
                      Order Requirement
                    </h4>

                    <Col md={6}>
                      <Form.Control placeholder="Purpose of Order" />
                    </Col>

                    <Col md={6}>
                      <Form.Select>
                        <option>Required Category</option>
                        <option>Children’s Books</option>
                        <option>School Books</option>
                        <option>College / Academic Books</option>
                        <option>Research Reports</option>
                        <option>Professional Books</option>
                        <option>Hindi / Bilingual Books</option>
                        <option>Library Collection</option>
                        <option>Teacher Resources</option>
                        <option>Institutional Publications</option>
                        <option>Audiobooks / Digital Access</option>
                        <option>Custom Collection</option>
                        <option>Not Sure</option>
                      </Form.Select>
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Reader Type" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Language Preference" />
                    </Col>

                    <Col md={6}>
                      <Form.Select>
                        <option>Preferred Format</option>
                        <option>Print</option>
                        <option>Digital</option>
                        <option>Audio</option>
                        <option>Multimedia</option>
                        <option>Not Sure</option>
                      </Form.Select>
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Expected Quantity" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Expected Delivery Timeline" />
                    </Col>

                    <Col md={6}>
                      <Form.Control placeholder="Budget Range, if any" />
                    </Col>

                    <Col md={6}>
                      <Form.Label>
                        Upload Book List, if available
                      </Form.Label>
                      <Form.Control type="file" />
                    </Col>

                    <Col md={6}>
                      <Form.Label>
                        Upload Purchase Requirement
                      </Form.Label>
                      <Form.Control type="file" />
                    </Col>

                    <Col md={6}>
                      <Form.Label>
                        Upload Institutional Note
                      </Form.Label>
                      <Form.Control type="file" />
                    </Col>

                    <Col md={6}>
                      <Form.Label>
                        Upload PO Draft, if applicable
                      </Form.Label>
                      <Form.Control type="file" />
                    </Col>

                    <Col xs={12}>
                      <Form.Control
                        as="textarea"
                        rows={6}
                        placeholder="Please describe your requirement in detail."
                      />
                    </Col>

                    <Col xs={12}>
                      <Form.Check
                        label="I confirm that the information provided is accurate."
                      />

                      <Form.Check
                        label="I agree to be contacted by Vasudheva Publishing regarding bulk order inquiry."
                      />
                    </Col>

                    <Col xs={12}>
                      <Button size="lg">
                        Request Bulk Order Quote
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
            Build Reading Access at Scale
          </h2>

          <p className="lead mb-5">
            Bulk orders can help institutions create libraries, classrooms,
            reading programmes, learning kits, public awareness campaigns and
            community knowledge access. Vasudheva Publishing invites
            institutions to order books not only as products, but as tools of
            learning, culture and institutional development.
          </p>

          <Button size="lg" className="me-3 mb-3">
            Request Bulk Order Quote
          </Button>

          <Button
            variant="outline-light"
            size="lg"
            className="me-3 mb-3"
          >
            Build a Curated Collection
          </Button>

          <Button variant="outline-light" size="lg" className="mb-3">
            Explore Institutional Solutions
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default BulkOrders;