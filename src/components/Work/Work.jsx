import "./Work.scss";
import ProjectList from "../ProjectList/ProjectList"

function Work() {
  return (
    <section className="work" id="work">
      <div className="work__container">
        <h2 className="work__title">My Work</h2>
        <div className="work__project-container">
          <ProjectList />
        </div>
      </div>
    </section>
  );
}

export default Work;