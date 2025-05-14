import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/FooterStyle.css";
import { useEffect, useState } from "react";

export default function Footer() {
  // Scroll To Top State
  const [isVisible, setIsVisible] = useState(false);
  const scrollTop = () => {
    window.scrollTo({ top: 0, bahavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });

  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <h5>Location</h5>
              <p>5505 Waterford District</p>
              <p>Dr, Miami, FL 33126</p>
              <p>United States</p>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <h5>Working Hours</h5>
              <p>Mon-Fri: 9:00AM - 10:00PM</p>
              <p>Saturday: 10:00AM - 8:30PM</p>
              <p>Sunday: 12:00PM - 5:00PM</p>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <h5>Order Now</h5>
              <p>Quaerat neque purus ipsum</p>
              <p>
                <Link to="tel:9998887777" className="calling">
                  999-888-7777
                </Link>
              </p>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <h5>Follow Us</h5>
              <p>Quaerat neque purus ipsum</p>
              <ul className="list-unstyled text-center mt-2">
                <li>
                  <Link to="/">
                    <i className="bi bi-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="bi bi-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="bi bi-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="bi bi-youtube"></i>
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>

          <Row className="copy_right">
            <Col>
              <div>
                <ul className="list-unstyled text-center mb-0">
                  <li>
                    <Link to="/">
                      © 2025 <span>FOODAPP</span>. All Rights Reserved.
                    </Link>
                  </li>
                  <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Terms of Use</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Scroll To Top  */}

      {isVisible && (
        <div className="scroll_top" onClick={scrollTop}>
          <i className="bi bi-arrow-up"></i>
        </div>
      )}
    </>
  );
}
