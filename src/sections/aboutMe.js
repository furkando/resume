import { useContext } from "react";
import { Contexto } from "../appContext";

export default function AboutMe() {
  const { setIsOpen } = useContext(Contexto);

  function openModal() {
    setIsOpen(true);
  }

  const email = "me@furkando.com";
  return (
    <section className="container">
      <div className="containerCont sectionCont sectionContAbout">
        <div id="about" className="target"></div>
        <header>
          <h2>about me</h2>
          <h3>
            Hi! My name is Furkan Doğan,{" "}
            <span className="colorRed">Software Engineer</span>
          </h3>
        </header>

        <p>
          I am a software developer, focused on web technologies. I have
          experience using some programming languages such as JavaScript and
          Python, in collaboration with HTML and CSS to build amazing and
          complex web sites; involving beautiful interfaces, client side logic
          (front-end), and server side logic (back-end). I have knowledge in
          Computer Science, Responsive Web Design, Object Oriented Programming,
          APIs and Microservices, Database Management, among others.
        </p>
        <p>
          You can get in touch with me by filling this{" "}
          <strong>
            <a onClick={openModal}>📄</a>
          </strong>
          , or you can send me an email to
          <strong>
            <a href={`mailto:${email}`}> {email}</a>
          </strong>
          ; also you are more than welcome to follow my work on my{" "}
          <strong>
            <a target="_blank" href="https://github.com/furkando">
              github
            </a>
          </strong>{" "}
          and visit my{" "}
          <strong>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/furkando/"
            >
              linkedin
            </a>
          </strong>{" "}
          profile.
        </p>
      </div>
    </section>
  );
}
