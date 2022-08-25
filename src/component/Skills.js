import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Images from "../assets/index";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                As you already know my name is hanie rastifar and I have been
                learning and working in web development area for about 9 months.
                So far I have worked on Html5, Css3,JavaScript,React js,....
                Currenty I am looking for a web development position using react library
                
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className={"skill-slider"}
              >
                <div className="item">
                  <img src={Images.meter1} alt="image" />
                  <h5>web Development1</h5>
                </div>
                <div className="item">
                  <img src={Images.meter2} alt="image" />
                  <h5>web Development2</h5>
                </div>
                <div className="item">
                  <img src={Images.meter3} alt="image" />
                  <h5>web Development3</h5>
                </div>
                <div className="item">
                  <img src={Images.meter3} alt="image" />
                  <h5>web Development4</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        src={Images.colorSharp}
        alt="image"
        className="background-image-left"
      />
    </section>
  );
};

export default Skills;
