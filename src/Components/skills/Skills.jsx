import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container d-flex flex-column align-items-center gap-5">
        <h2 className="section_title">SKILLS</h2>
        <div className="current_skills w-100">
          <h2 className="skills_state">USING NOW:</h2>
          <div className="row justify-content-center gap-4 mb-5">
            <div className="skill col-lg-2 col-md-4 d-flex flex-column align-items-center">
              <figure className="d-flex justify-content-center">
                <img src="/imgs/skills/HTML5.png" alt="" />
              </figure>
              <h3>HTML5</h3>
            </div>
            <div className="skill col-lg-2 col-md-4 d-flex flex-column align-items-center">
              <figure className="d-flex justify-content-center">
                <img src="/imgs/skills/CSS3.png" alt="" />
              </figure>
              <h3>CSS3</h3>
            </div>
            <div className="skill col-lg-2 col-md-4 d-flex flex-column align-items-center">
              <figure className="d-flex justify-content-center">
                <img src="/imgs/skills/JS.png" alt="" />
              </figure>
              <h3>JavaScript</h3>
            </div>
            <div className="skill col-lg-2 col-md-4 d-flex flex-column align-items-center">
              <figure className="d-flex justify-content-center">
                <img src="/imgs/skills/React.png" alt="" />
              </figure>
              <h3>React</h3>
            </div>
          </div>
          <div className="row justify-content-center gap-4 mb-5">
            <div className="skill col-lg-2 col-md-4 d-flex flex-column align-items-center">
              <figure className="d-flex justify-content-center">
                <img src="/imgs/skills/Angular.png" alt="" />
              </figure>
              <h3>Angular</h3>
            </div>
            <div className="skill col-lg-2 col-md-4 d-flex flex-column align-items-center">
              <figure className="d-flex justify-content-center">
                <img src="/imgs/skills/bootstrap.png" alt="" />
              </figure>
              <h3>Bootstrap</h3>
            </div>
            <div className="skill col-lg-2 col-md-4 d-flex flex-column align-items-center">
              <figure className="d-flex justify-content-center">
                <img src="/imgs/skills/git.png" alt="" />
              </figure>
              <h3>Git</h3>
            </div>
            <div className="skill col-lg-2 col-md-4 d-flex flex-column align-items-center">
              <figure className="d-flex justify-content-center">
                <img src="/imgs/skills/github.png" alt="" />
              </figure>
              <h3>GitHub</h3>
            </div>
          </div>
          <div className="row justify-content-center gap-4 mb-5">
            <div className="skill col-lg-2 col-md-4 d-flex flex-column align-items-center">
              <figure className="d-flex justify-content-center">
                <img src="/imgs/skills/TS.png" alt="" />
              </figure>
              <h3>TypeScript</h3>
            </div>
            <div className="skill col-lg-2 col-md-4 d-flex flex-column align-items-center">
              <figure className="d-flex justify-content-center">
                <img src="/imgs/skills/JQuery.png" alt="" />
              </figure>
              <h3>JQuery</h3>
            </div>
            <div className="skill col-lg-2 col-md-4 d-flex flex-column align-items-center">
              <figure className="d-flex justify-content-center">
                <img src="/imgs/skills/tailwind.png" alt="" />
              </figure>
              <h3>Tailwind</h3>
            </div>
            <div className="skill col-lg-2 col-md-4 d-flex flex-column align-items-center">
              <figure className="d-flex justify-content-center">
                <img src="/imgs/skills/redux.png" alt="" />
              </figure>
              <h3>Redux</h3>
            </div>
          </div>
        </div>
        <div className="learning_skills w-100">
          <h2 className="skills_state">LEARNING:</h2>
          <div className="row justify-content-center gap-4 mb-5 ">
            <div className="skill col-lg-2 col-md-4 d-flex flex-column align-items-center">
              <figure className="d-flex justify-content-center">
                <img src="/imgs/skills/node.png" alt="" />
              </figure>
              <h3>Node.js</h3>
            </div>
            <div className="skill col-lg-2 col-md-4 d-flex flex-column align-items-center">
              <figure className="d-flex justify-content-center">
                <img src="/imgs/skills/mongo.png" alt="" />
              </figure>
              <h3>MongoDB</h3>
            </div>
            <div className="skill col-lg-2 col-md-4 d-flex flex-column align-items-center">
              <figure className="d-flex justify-content-center">
                <img src="/imgs/skills/express.png" alt="" />
              </figure>
              <h3>Express JS</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
