import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container d-flex flex-column align-items-center justigy-content-center gap-4">
        <a
          className="back_top text-decoration-none d-flex flex-column align-items-center gap-3"
          href="#"
        >
          <img className="" src="/imgs/double-arrow.svg" alt="" />
          <h3>BACK TO TOP</h3>
        </a>
        <ul className="social_links list-unstyled d-flex gap-5">
          <li>
            <a
              className="text-light fs-1"
              href="https://www.linkedin.com/in/moamen-hamed-538874259/"
              target="_blank"
            >
              <i className="bx bxl-linkedin-square"></i>
            </a>
          </li>
          <li>
            <a
              className="text-light fs-1"
              href="mailto:moamen.hamed33322@gmail.com?"
            >
              <i className="bx bxl-gmail"></i>
            </a>
          </li>
          <li>
            <a
              className="text-light fs-1"
              href="https://github.com/MoamenHamed32"
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
          </li>
        </ul>
        <h3 className="copy_rights">
          &copy;2023 <img src="/imgs/logo-white.svg" alt="" />
          <span>Moamen Hamed</span>
          All Rights Reserved.
        </h3>
      </div>
    </footer>
  );
}
