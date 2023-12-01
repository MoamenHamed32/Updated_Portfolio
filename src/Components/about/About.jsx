import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container d-flex flex-column align-items-center gap-5">
        <h2 className="section_title">ABOUT ME</h2>
        <p className="text-center about_disc">
          Front-End Web Developer with high vision and forward-thinking.
          innovative use of technology. Effective problem solving skills,
          outstanding interpersonal skills with ability to work independently as
          well as within a team environment.
        </p>
        <h4 className="explore fw-semibold">Explore</h4>
        <img src="/imgs/separatorBlack.svg" className="my-3" alt="" />
        <div className="work_skills row justify-content-center my-4">
          <div className="card col-lg-6 mb-5 border-0">
            <img src="/imgs/design.svg" alt="" />
            <h2 className="mb-3">DESIGN</h2>
            <p>
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>
          <div className="card col-lg-6 border-0">
            <img src="/imgs/development.svg" alt="" />
            <h2 className="mb-3">DEVELOPMENT</h2>
            <p>
              Crafting digital solutions from inception to execution, I
              specialize in web development that seamlessly merges functionality
              with innovation, ensuring a tailored and dynamic online
              experience.
            </p>
          </div>
          <div className="card col-lg-6 border-0">
            <img src="/imgs/maintenance.svg" alt="" />
            <h2 className="mb-3">MAINTENANCE</h2>
            <p>
              Ensuring sustained excellence, my maintenance services guarantee
              the ongoing smooth operation of your website, combining regular
              updates and enhancements to keep your online presence at its best.
            </p>
          </div>
        </div>
        <img src="/imgs/separatorBlack.svg" className="my-3" alt="" />
      </div>
    </section>
  );
}
