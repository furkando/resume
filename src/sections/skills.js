import dynamic from "next/dynamic";
import Skill from "../components/skill";
import CircularProg from "../components/circularProg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
const ReactTooltip = dynamic(() => import("react-tooltip"), {
  ssr: false,
});

export default function Skills({ resumeData }) {
  return (
    <section className="sectionCont sectionContEducation">
      <ReactTooltip effect={"solid"} type="light" id="skills" />
      <div className="sectionCont sectionContSkills">
        <header>
          <h2>Skills</h2>
        </header>
        <div className=" breakMainTechOverall">
          <div className="cardContainer">
            <div className="card">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  marginBottom: "20px",
                  marginTop: "15px",
                }}
              >
                {/* TODO
                    Fix inline stylings
                */}

                <h3 style={{ margin: "0px 10px 0px 0px" }}>Main Tech</h3>
                <div
                  data-tip={"(50 + Math.floor(Math.random() * 50))"}
                  data-for="skills"
                >
                  <FontAwesomeIcon icon={faExclamationCircle} />
                </div>
              </div>
              <ul>
                {resumeData.resume.skills.map((skill) => (
                  <Skill key={skill.name} skill={skill} />
                ))}
              </ul>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  marginBottom: "30px",
                  marginTop: "45px",
                }}
              >
                {/* TODO
                    Fix inline stylings
                */}

                <h3 style={{ margin: "0px 10px 0px 0px" }}>Overall</h3>
                <div
                  data-tip={"(70 + Math.floor(Math.random() * 30))"}
                  data-for="skills"
                >
                  <FontAwesomeIcon icon={faExclamationCircle} />
                </div>
              </div>

              <div className="rowFlexRes breakOverall">
                {resumeData.resume.overallSkills.map((skill) => (
                  <CircularProg key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
