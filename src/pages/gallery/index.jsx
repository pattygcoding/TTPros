import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import image from '../../config/image.json';
import text from '../../config/text.json';

export const Gallery = () => {

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {text.meta.title}</title>
          <meta name="description" content={text.meta.description} />
        </Helmet>
        <Col>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">{text.gallery.title}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
        <img src={image.gallery.a} alt="" />
        <img src={image.gallery.b} alt="" />
        <img src={image.gallery.c} alt="" />
        <img src={image.gallery.d} alt="" />
        <img src={image.gallery.e} alt="" />
        <img src={image.gallery.f} alt="" />
        <img src={image.gallery.g} alt="" />
        <img src={image.gallery.h} alt="" />
        </Row>
        </Col>
      </Container>
    </HelmetProvider>
  );
};
