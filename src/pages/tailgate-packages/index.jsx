import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import text from '../../config/text.json';
import { Link } from "react-router-dom";

export const TailgatePackages = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {text.meta.title} </title>{" "}
          <meta name="description" content={text.meta.description} />
        </Helmet>
        <Col>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">{text.packages.packages_title}</h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
        <Col>
        <Link to="/contact">
        <div class="cub">
           <div class="imgtext">
             <h2>{text.packages.cub.name}</h2>
             <p>{text.packages.cub.description}</p>
               <Link to="/request-package">
                <div id="button_h" className="ac_btn btn">
                  {text.packages.select_games}
                  <div className="ring one"></div>
                  <div className="ring two"></div>
                  <div className="ring three"></div>
                </div>
              </Link>
           </div>
         </div>
         </Link>
         </Col>
         <Col>
         <Link to="/contact">
        <div class="vip">
           <div class="imgtext">
             <h2>{text.packages.vip.name}</h2>
             <p>{text.packages.vip.description}</p>
             <Link to="/request-package">
                <div id="button_h" className="ac_btn btn">
                  {text.packages.select_games}
                  <div className="ring one"></div>
                  <div className="ring two"></div>
                  <div className="ring three"></div>
                </div>
              </Link>
           </div>
         </div>
         </Link>
         </Col>
         </Row>
         </Col>
      </Container>
    </HelmetProvider>
  );
};
