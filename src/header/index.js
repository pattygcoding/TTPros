import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import Themetoggle from "../components/themetoggle";
import text from '../config/text.json';

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link  className="navbar-brand nav_ac" to="/">
            {text.meta.logo}
          </Link>
          <div className="d-flex align-items-center">
          <Themetoggle />
          <button className="menu__button  nav_ac" onClick={handleToggle}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
          
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                  <Link  onClick={handleToggle} to="/" className="my-3">{text.menu.home}</Link>
                  </li>
                  <li className="menu_item">
                    <Link  onClick={handleToggle} to="/tailgate-packages" className="my-3">{text.menu.tailgate_packages}</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/request-package" className="my-3">{text.menu.request_package}</Link>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/gallery" className="my-3">{text.menu.gallery}</Link>
                  </li>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/about" className="my-3">{text.menu.about_us}</Link>
                  </li>

                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
            <a href={text.links.facebook}>{text.menu.facebook}</a>
            </div>
            <p className="copyright m-0">{text.watermark}</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
      
    </>
  );
};

export default Headermain;
