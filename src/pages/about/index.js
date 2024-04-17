import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import image from '../../config/image.json';
import text from '../../config/text.json';

export const About = () => {

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {text.meta.title}</title>
          <meta name="description" content={text.meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">{text.about.title}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
        <img src={image.about.display} alt="" />
          <Col lg="5">

            <h3 className="color_sec py-4">{text.about.name_left}</h3>
            <p>{text.about.description_left}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
                <h3 className="color_sec py-4">{text.about.name_right}</h3>
              <p>{text.about.description_right}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
