import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="publishing-footer bg-dark text-light py-5">
      <Container fluid className="px-4 px-lg-5">
        
        <Row className="g-5">

          {/* Column 1 — Company */}
          <Col md={6} lg={2}>
            <h5 className="fw-bold mb-3 text-white">Company</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/about" className="footer-link">About Us</Link></li>
              <li className="mb-2"><Link to="/philosophy" className="footer-link">Philosophy</Link></li>
              <li className="mb-2"><Link to="/why-exist" className="footer-link">Why We Exist</Link></li>
              <li className="mb-2"><Link to="/leadership" className="footer-link">Leadership</Link></li>
              <li className="mb-2"><Link to="/governance" className="footer-link">Governance</Link></li>
            </ul>
          </Col>

          {/* Column 2 — For Authors */}
          <Col md={6} lg={2}>
            <h5 className="fw-bold mb-3 text-white">For Authors</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/publish-with-us" className="footer-link">Publish With Us</Link></li>
              <li className="mb-2"><Link to="/submit-manuscript" className="footer-link">Submit Manuscript</Link></li>
              <li className="mb-2"><Link to="/author-services" className="footer-link">Author Services</Link></li>
              <li className="mb-2"><Link to="/rights-royalties" className="footer-link">Royalties & Rights</Link></li>
              
            </ul>
          </Col>

          {/* Column 3 — For Readers */}
          <Col md={6} lg={2}>
            <h5 className="fw-bold mb-3 text-white">For Readers</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/explore-books" className="footer-link">Explore Books</Link></li>
              <li className="mb-2"><Link to="/for-readers" className="footer-link">Reader Community</Link></li>
              <li className="mb-2"><Link to="/audio-books" className="footer-link">Audiobooks</Link></li>
            </ul>
          </Col>

          {/* Column 4 — For Institutions */}
          <Col md={6} lg={2}>
            <h5 className="fw-bold mb-3 text-white">For Institutions</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/institutional-solutions" className="footer-link">Institutional Solutions</Link></li>
              <li className="mb-2"><Link to="/bulk-orders" className="footer-link">Bulk Orders</Link></li>
              <li className="mb-2"><Link to="/custom-publishing" className="footer-link">Custom Publishing</Link></li>
            </ul>
          </Col>

          {/* Column 5 — Contact & More */}
          <Col md={6} lg={2}>
            <h5 className="fw-bold mb-3 text-white">Contact & More</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/contact" className="footer-link">Contact Us</Link></li>
              <li className="mb-2"><Link to="/insights" className="footer-link">Insights</Link></li>
              <li className="mb-2"><Link to="/partner" className="footer-link">Partner With Us</Link></li>
              <li className="mb-2"><Link to="/career" className="footer-link">Careers</Link></li>
            </ul>
          </Col>

        </Row>

        <hr className="my-5 border-secondary" />

        {/* Bottom Bar */}
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="small mb-0">
              © 2026 Vasudheva Publishing Private Limited. All Rights Reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="small mb-0" style={{ letterSpacing: '2px', opacity: 0.75 }}>
              Publishing Knowledge. Empowering Authors. Enabling Readers.
            </p>
          </Col>
        </Row>

      </Container>
    </footer>
  );
};

export default Footer;