import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import text from '../../config/text.json';
import image from '../../config/image.json';

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {text.meta.title}</title>
          <meta name="description" content={text.meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 slides"
          >

            <div class="imgtext">
               <Link to="/tailgate-packages">
                <div id="button_h" className="ac_btn btn">
                  {text.home.view_packages}
                  <div className="ring one"></div>
                  <div className="ring two"></div>
                  <div className="ring three"></div>
                </div>
              </Link>
               <Link to="/request-package">
                <div id="button_h" className="ac_btn btn">
                  {text.home.request_package}
                  <div className="ring one"></div>
                  <div className="ring two"></div>
                  <div className="ring three"></div>
                </div>
              </Link>
               <Link to="/gallery">
                <div id="button_h" className="ac_btn btn">
                  {text.home.gallery}
                  <div className="ring one"></div>
                  <div className="ring two"></div>
                  <div className="ring three"></div>
                </div>
              </Link>
           </div>
          </div>

          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{text.home.title}</h2>
                <p className="mb-1x">{text.home.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
