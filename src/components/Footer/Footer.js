import "../../css/styles.css";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { themeChange } from "theme-change";

function Footer(props) {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  });

  const { home, about, contact } = props;
  return (
    <>
      <div className="px-6 pt-10 pb-6">
        <hr className="border-base-100" />
      </div>
      <footer className="px-10 pb-5 footer footer-center text-base-100 gap-y-2">
        <div className="grid grid-flow-col gap-4 text-center ">
          <a className="link link-hover" href={home}>
            Home
          </a>
          <a className="link link-hover" href={about}>
            About the Project
          </a>
          <a className="link link-hover" href={contact}>
            Contact
          </a>
          <a
            className="link link-hover"
            target="_blank"
            href="https://github.com/FIT3164Group1/Project"
            rel="noreferrer"
          >
            Project Repository
          </a>
        </div>
        <div className="m-4 dropdown">
          <div tabIndex="0" className="m-1 btn btn-ghost">
            CHANGE THEME
          </div>
          <div className="h-32 mt-16 overflow-y-auto shadow-2xl top-px dropdown-content w-52 rounded-b-box text-base-content">
            <ul className="p-4 menu compact bg-base-100">
              <li>
                <a tabIndex="0" data-set-theme="light" data-act-class="active">
                  🌝 light
                </a>
              </li>
              <li>
                <a tabIndex="0" data-set-theme="dark" data-act-class="active">
                  🌚 dark
                </a>
              </li>
              <li>
                <a tabIndex="0" data-set-theme="black" data-act-class="active">
                  🏴 black
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p>Copyright © 2021 - All rights reserved by the development team.</p>
          <a
            className="text-center link link-hover"
            href="https://coopercorbett.com"
            target="_blank"
            rel="noreferrer"
          >
            Cooper Corbett
          </a>
          <p className="text-center">Qile Wan</p>
          <p className="text-center">Andrew Cao</p>
          <p className="text-center">Lewis Ha</p>
        </div>
      </footer>
    </>
  );
}

Footer.propTypes = {
  home: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
};

export default Footer;
