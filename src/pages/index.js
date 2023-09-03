import Head from "next/head";
import NavBar from "../sections/navBar";
import Banner from "../sections/banner";
import AboutMe from "../sections/aboutMe";
import Education from "../sections/education";
import Experience from "../sections/experience";
import Skills from "../sections/skills";
import Readings from "../sections/reading";
import Modal from "../components/modal";
import { Contexto } from "../appContext";
import { resumeData } from "../data/resumeData";
import { useContext } from "react";

export default function Home() {
  const { navResOpen, setNavResOpen } = useContext(Contexto);

  const closeNavRes = () => {
    if (navResOpen) {
      setNavResOpen(() => false);
    }
  };

  return (
    <>
      <Head>
        <title>Furkan Doğan</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://furkando.github.io/resume/favicon.ico"
        />
        <link
          rel="image_src"
          href="https://furkando.github.io/resume/images/profilePicture.jpg"
        />
        <meta
          name="description"
          content="Hey, this is my personal website. You can take a look at my resume, download my CV and see how you can contact me."
        />
        <meta property="og:title" content="Furkan Doğan" />
        <meta property="og:site_name" content="Furkan Doğan" />
        <meta property="og:url" content="http://furkando.github.io/" />
        <meta
          property="og:description"
          content="Hey, this is my personal website. You can take a look at my resume, download my CV and see how you can contact me"
        />
        <meta property="og:type" content="profile" />
        <meta
          property="og:image"
          content="https://furkando.github.io/resume/images/profilePicture.jpg"
        />
        <meta property="og:image:width" content="1580" />
        <meta property="og:image:height" content="790" />
        <meta
          name="twitter:image"
          content="https://furkando.github.io/resume/images/profilePicture.jpg"
        />
      </Head>
      <Modal />
      <NavBar />
      <main onClick={closeNavRes}>
        <Banner resumeData={resumeData} />
        <AboutMe resumeData={resumeData} />
        <section className="container">
          <div className="containerCont rowFlexRes breakExpEduc sectionGroup">
            <div>
              <Experience resumeData={resumeData} />
            </div>
            <div className="educationSkillCont">
              <Education resumeData={resumeData} />
              <Skills resumeData={resumeData} />
            </div>
          </div>
        </section>
        <Readings />
      </main>
    </>
  );
}
