import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Images from "../assets";
const Contact = () => {
  const formInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialValues);
  const [buttonText, setButtonText] = useState("send");
  const [status, setStatus] = useState({});

  const formHandleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormDetails({ ...formDetails, [name]: value });
    };
    const handleSubmit = async(e) => {
        e.preventDefault();
        setButtonText('sending...');
        let response = await fetch
    }
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={Images.contactImg} alt="contact us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="firstName"
                    defaultValue={formInitialValues.firstName}
                    onChange={formHandleChange}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  {" "}
                  <input
                    type="text"
                    name="lastName"
                    placeholder="lastName"
                    defaultValue={formInitialValues.lastName}
                    onChange={formHandleChange}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  {" "}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    defaultValue={formInitialValues.email}
                    onChange={formHandleChange}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  {" "}
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    defaultValue={formInitialValues.phone}
                    onChange={formHandleChange}
                  />
                </Col>
                <Col>
                  <textarea
                    rows={6}
                    placeholder="Message"
                    defaultValue={formInitialValues.message}
                    onChange={formHandleChange}
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.message === false ? "warning" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
