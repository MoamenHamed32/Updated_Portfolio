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
          <a href="https://smartstudent.live" target="_blank">
            <div className="overlay">View Project</div>
          </a>
          <figure>
            <img src="/imgs/projects/smart.png" alt="" />
          </figure>
        </div>
        <div className="col-lg-4 card">
          <a href="https://da3em.co" target="_blank">
            <div className="overlay">View Project</div>
          </a>
          <figure>
            <img src="/imgs/projects/da3em.png" alt="" />
          </figure>
        </div>

        <div className="col-lg-4 card">
          <a href="https://www.sedra-itqan.com/en" target="_blank">
            <div className="overlay">View Project</div>
          </a>
          <figure>
            <img src="/imgs/projects/sedra.png" alt="" />
          </figure>
        </div>
      </div>
      <div className="row w-100 mx-auto">
        <div className="col-lg-4 card">
          <a href="https://nibrasarab.com/" target="_blank">
            <div className="overlay">View Project</div>
          </a>
          <figure>
            <img src="/imgs/projects/nebrass.png" alt="" />
          </figure>
        </div>
        <div className="col-lg-4 card">
          <a href="https://www.autoexclecompany.com/en" target="_blank">
            <div className="overlay">View Project</div>
          </a>
          <figure>
            <img src="/imgs/projects/auto-excel.png" alt="" />
          </figure>
        </div>

        <div className="col-lg-4 card">
          <a href="https://hayat-ellohoum.vercel.app/en" target="_blank">
            <div className="overlay">View Project</div>
          </a>
          <figure>
            <img src="/imgs/projects/meat-life.png" alt="" />
          </figure>
        </div>
      </div>
      <div className="row w-100 mx-auto">
        <div className="col-lg-4 card">
          <a href="https://oylimo.com" target="_blank">
            <div className="overlay">View Project</div>
          </a>
          <figure>
            <img src="/imgs/projects/oylimo.png" alt="" />
          </figure>
        </div>
        <div className="col-lg-4 card">
          <a href="https://kdc-frontend.vercel.app/" target="_blank">
            <div className="overlay">View Project</div>
          </a>
          <figure>
            <img src="/imgs/projects/kdc.png" alt="" />
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
      </div>
      <div className="more_coming">
        <h2>And many more to come!</h2>
      </div>
    </section>
  );
}
