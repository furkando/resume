import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

export default function Education({ resumeData }) {
  return (
    <section className="sectionCont sectionContEducation">
      <div id="education" className="target"></div>
      <header>
        <h2>Education</h2>
      </header>
      <div className="cardContainer">
        <div className="card">
          <div className="cardContent">
            {resumeData.resume.education.map((item, index) => (
              <div className="cardCont" key={index}>
                <h5>
                  <span>
                    <FontAwesomeIcon icon={faCalendarAlt} /> {item.startYear} -{" "}
                    {item.endYear}
                  </span>
                </h5>
                <h3>{item.degree}</h3>
                <h4>{item.school}</h4>
                {item.description && (
                  <ul>
                    <li>
                      <span className="colorRed">- </span>
                      <span>{item.description}</span>
                    </li>
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
