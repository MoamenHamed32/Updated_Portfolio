import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero overflow-hidden">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-6 col-md-6">
            <div className="left_section h-100 d-flex flex-column justify-content-around">
              <img src="/imgs/logo-black.svg" alt="" className="logo" />
              <div className="my_info">
                <h3>HI, I'M</h3>
                <h1 className="fw-semibold">Moamen Hamed</h1>
                <h4 className="fw-semibold">Front-End Developer</h4>
              </div>
              <div className="social_links">
                <ul className="d-flex list-unstyled gap-4">
                  <li>
                    <a href="https://github.com/MoamenHamed32" target="_blank">
                      <i className="bx bxl-github text-black fs-1"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/moamen-hamed-538874259/"
                      target="_blank"
                    >
                      <i className="bx bxl-linkedin text-primary fs-1"></i>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:moamen.hamed33322@gmail.com?">
                      <i className="bx bxl-gmail text-danger fs-1"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="right-section h-100 pt-4 d-flex flex-column align-items-center justify-content-between">
              <div></div>
              <figure className="my_photo m-0">
                <img src="/imgs/my_photo.png" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
