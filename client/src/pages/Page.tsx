import Header from "../components/header/Header";
import style from "./page.module.css";
import Container from "../components/container/Container";

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
        <FSection />
        <SSection />
        <TSection />
        <FoSection />

        <Footer />
      </Container>
    </div>
  );
};

export default Page;
