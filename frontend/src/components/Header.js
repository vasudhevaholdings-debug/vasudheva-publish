import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from "../Logos/publishing_logo.jpeg";   

const Header = () => {
  return (
    <Navbar 
      expand="lg" 
      sticky="top" 
      bg="dark"                    // ← Yeh important hai
      variant="dark"               // Dark text ke liye
      className="publishing-navbar shadow-sm"
      style={{ 
        backgroundColor: '#0f172a',   // Solid dark blue-black color
        transition: 'all 0.3s ease' 
      }}
    >
      <Container fluid className="d-flex align-items-center justify-content-between px-4">

        {/* Logo + Brand */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={Logo}
            alt="Vasudheva Publishing"
            className="header-logo me-3"
            height="55"
            width="65"
          />
          <div className="brand-block">
            <div className="brand-name">VASUDHEVA</div>
            <div className="brand-entity">PUBLISHING PVT. LTD.</div>
          </div>
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="main-navbar" />

        {/* Navbar Collapse */}
        <Navbar.Collapse id="main-navbar" className="justify-content-between">

          {/* Center Navigation */}
          <Nav className="mx-auto text-center header-nav">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/publish-with-us">Publish With Us</Nav.Link>
            <Nav.Link as={Link} to="/books">Books</Nav.Link>
            <Nav.Link as={Link} to="/for-institutions">For Institutions</Nav.Link>
            <Nav.Link as={Link} to="/insights">Insights</Nav.Link>
            <Nav.Link as={Link} to="/partner">Partner</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>

          {/* Right Side CTA Buttons */}
          <div className="d-flex gap-3">
            <Button 
              as={Link} 
              to="/submit-manuscript" 
              variant="outline-light"
              className="cta-outline"
            >
              Submit Manuscript
            </Button>
            <Button 
              as={Link} 
              to="/contact" 
              variant="primary"
              className="cta-button"
            >
              Explore Books
            </Button>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;