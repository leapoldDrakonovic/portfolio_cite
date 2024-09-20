import Header from "../components/header/Header";
import style from "./page.module.css";
import Container from "../components/container/Container";


import ProjectsSection from "./sections/projects/ProjectsSection";
import FSection from "./sections/1/FSection";
import SSection from "./sections/2/SSection";
import TSection from "./sections/3/TSection";
import FoSection from "./sections/4/FoSection";
import Footer from "../components/footer/Footer";

const Page = () => {
  return (
    <div className={style.page}>
      <Container>
        <Header />
        <section id="about">
        <FSection />
        </section>
        <section id="exp">
        <SSection />
        </section>
        <section id="proj">
        <ProjectsSection/>
        </section>
        <section id="skill">
        <TSection />
        </section>
        <section id="contacts">
        <FoSection />

        </section>

        <Footer />
      </Container>
    </div>
  );
};

export default Page;
