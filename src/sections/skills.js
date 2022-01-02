import Skill from "../components/skill";
import CircularProg from "../components/circularProg";

export default function Skills({ resumeData }) {
  return (
    <section className="sectionCont sectionContEducation">
      <div className="sectionCont sectionContSkills">
        <header>
          <h2>Skills</h2>
        </header>
        <div className=" breakMainTechOverall">
          <div className="cardContainer">
            <div className="card">
              <h3>Main Tech</h3>
              <ul>
                {resumeData.resume.skills.map((skill) => (
                  <Skill key={skill.name} skill={skill} />
                ))}
              </ul>
              <h3 className="overallHeader">Overall</h3>
              <ul className="rowFlexRes breakOverall">
                {resumeData.resume.overallSkills.map((skill) => (
                  <CircularProg key={skill.name} skill={skill} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
