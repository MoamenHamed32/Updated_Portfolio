import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="banner d-flex justify-content-center align-items-center">
        <h2 className="section_title">PORTFOLIO</h2>
      </div>
      <div className="row w-100 mx-auto">
        <div className="col-lg-4 card">
          <a href="https://iti-angular-portfolio.vercel.app/" target="_blank">
            <div className="overlay">View Project</div>
          </a>
          <figure>
            <img src="/imgs/projects/angular-portfolio.png" alt="" />
          </figure>
        </div>
        <div className="col-lg-4 card">
          <a
            href="https://angular-final-project-iota.vercel.app/"
            target="_blank"
          >
            <div className="overlay">View Project</div>
          </a>
          <figure>
            <img src="/imgs/projects/angular-movie-app.png" alt="" />
          </figure>
        </div>
        <div className="col-lg-4 card">
          <a href="https://iti-final-project.vercel.app/" target="_blank">
            <div className="overlay">View Project</div>
          </a>
          <figure>
            <img src="/imgs/projects/technoMatic.png" alt="" />
          </figure>
        </div>
      </div>
      <div className="row w-100 mx-auto">
        <div className="col-lg-4 card">
          <a href="https://e-book-store-green.vercel.app/" target="_blank">
            <div className="overlay">View Project</div>
          </a>
          <figure>
            <img src="/imgs/projects/bookShelter.png" alt="" />
          </figure>
        </div>
        <div className="col-lg-4 card">
          <a href="https://iti-css-3-finsweet.vercel.app/" target="_blank">
            <div className="overlay">View Project</div>
          </a>
          <figure>
            <img src="/imgs/projects/finsweet.png" alt="" />
          </figure>
        </div>
        <div className="col-lg-4 card">
          <a href="https://iti-css-3-look-scout.vercel.app/" target="_blank">
            <div className="overlay">View Project</div>
          </a>
          <figure>
            <img src="/imgs/projects/lookscout.png" alt="" />
          </figure>
        </div>
      </div>
      <div className="more_coming">
        <h2>And many more to come!</h2>
      </div>
    </section>
  );
}
