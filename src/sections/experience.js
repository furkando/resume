import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

export default function Experience({ resumeData }) {
  return (
    <section className="sectionCont sectionContExperience">
      <div id="experience" className="target"></div>
      <header>
        <h2>Experience</h2>
      </header>
      <div className="cardContainer">
        <div className="card">
          <div className="cardContent">
            {resumeData.resume.work.map((item, index) => (
              <div className="cardCont" key={index}>
                <h5>
                  <span>
                    <FontAwesomeIcon icon={faCalendarAlt} /> {item.years}
                  </span>
                </h5>
                <h3>{item.title}</h3>
                <h4>{item.company}</h4>
                <ul>
                  {item.description.map((item) => (
                    <li>
                      <span className="colorRed">- </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
