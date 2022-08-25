import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Images from "../assets";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={Images.logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#">
                <img src={Images.navIcon1} />
              </a>
              <a href="#">
                <img src={Images.navIcon2} />
              </a>
              <a href="#">
                <img src={Images.navIcon3} />
              </a>
            </div>
            <p>copyright 2022, All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
