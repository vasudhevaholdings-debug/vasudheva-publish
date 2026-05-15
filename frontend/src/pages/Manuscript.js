import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const ManuscriptSubmission = () => {

  // ================= STATE =================
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    authorBio: "",
    website: "",
    title: "",
    subtitle: "",
    genre: "",
    language: "",
    wordCount: "",
    audience: "",
    manuscriptStatus: "",
    synopsis: "",
    whyImportant: "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // ================= HANDLE CHANGE =================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ================= HANDLE SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/manuscript",
        formData
      );

      console.log(response.data);

      setSuccess(true);

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        authorBio: "",
        website: "",
        title: "",
        subtitle: "",
        genre: "",
        language: "",
        wordCount: "",
        audience: "",
        manuscriptStatus: "",
        synopsis: "",
        whyImportant: "",
      });

    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="premium-section py-5"
      style={{ backgroundColor: "#ebcfb9" }}
    >
      <Container>

        {/* HERO */}
        <div className="text-center mb-5 manuscript-hero">
          <h2 className="section-heading mb-3">
            Submit Your Manuscript
          </h2>

          <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
            Share your manuscript, book proposal, research document
            or knowledge project with our editorial team.
          </p>
        </div>

        {/* SUCCESS MESSAGE */}
        {success && (
          <Alert variant="success" className="text-center">
            Manuscript submitted successfully!
          </Alert>
        )}

        {/* BEFORE YOU SUBMIT */}
        <Row className="justify-content-center manuscript-section">
          <Col lg={10}>
            <h4>Before You Submit</h4>

            <ul className="manuscript-list">
              <li>the work is original,</li>
              <li>you own or control the rights,</li>
              <li>the manuscript is sufficiently prepared for review,</li>
              <li>you have included a clear synopsis,</li>
              <li>
                you understand that submission does not guarantee publication.
              </li>
            </ul>
          </Col>
        </Row>

        {/* FORM INTRO */}
        <Row className="justify-content-center manuscript-section">
          <Col lg={10}>
            <p className="manuscript-text">
              Use this form to submit your manuscript or publishing proposal.
              Our team will review the submission and respond according to
              internal editorial timelines.
            </p>
          </Col>
        </Row>

        {/* FORM */}
        <Row className="justify-content-center manuscript-section">
          <Col lg={10}>

            <Form className="manuscript-form" onSubmit={handleSubmit}>

              {/* AUTHOR DETAILS */}
              <h5>Author Details</h5>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Control
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                  />
                </Col>

                <Col md={6}>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Control
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                  />
                </Col>

                <Col md={6}>
                  <Form.Control
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City / State / Country"
                  />
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="authorBio"
                  value={formData.authorBio}
                  onChange={handleChange}
                  placeholder="Author Bio"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Control
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="Website / LinkedIn / Social Links"
                />
              </Form.Group>

              {/* MANUSCRIPT DETAILS */}
              <h5>Manuscript Details</h5>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Control
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Title"
                  />
                </Col>

                <Col md={6}>
                  <Form.Control
                    name="subtitle"
                    value={formData.subtitle}
                    onChange={handleChange}
                    placeholder="Subtitle"
                  />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={4}>
                  <Form.Control
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                    placeholder="Genre / Category"
                  />
                </Col>

                <Col md={4}>
                  <Form.Control
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    placeholder="Language"
                  />
                </Col>

                <Col md={4}>
                  <Form.Control
                    name="wordCount"
                    value={formData.wordCount}
                    onChange={handleChange}
                    placeholder="Word Count"
                  />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Control
                    name="audience"
                    value={formData.audience}
                    onChange={handleChange}
                    placeholder="Target Audience"
                  />
                </Col>

                <Col md={6}>
                  <Form.Control
                    name="manuscriptStatus"
                    value={formData.manuscriptStatus}
                    onChange={handleChange}
                    placeholder="Current status of manuscript"
                  />
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="synopsis"
                  value={formData.synopsis}
                  onChange={handleChange}
                  placeholder="Short Synopsis"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="whyImportant"
                  value={formData.whyImportant}
                  onChange={handleChange}
                  placeholder="Why this work matters"
                />
              </Form.Group>

              {/* DECLARATION */}
              <div className="manuscript-declaration mb-4">

                <Form.Check
                  type="checkbox"
                  label="I declare that this is my original work or that I have the necessary rights to submit it."
                />

                <Form.Check
                  type="checkbox"
                  label="I understand that submission does not guarantee acceptance or publication."
                />

                <Form.Check
                  type="checkbox"
                  label="I consent to review by Vasudheva Publishing Pvt. Ltd."
                />
              </div>

              {/* SUBMIT BUTTON */}
              <div className="text-center">
                <Button
                  type="submit"
                  variant="dark"
                  size="lg"
                  className="manuscript-submit"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit Manuscript"}
                </Button>
              </div>

            </Form>
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default ManuscriptSubmission;