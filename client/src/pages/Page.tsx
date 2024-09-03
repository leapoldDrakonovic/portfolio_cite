import React from "react";
import Header from "../components/header/Header";
import style from "./page.module.css";
import Container from "../components/container/Container";
import ItemContainer from "../components/container/ItemContainer";

import portrait from "../../public/portrait.png";
import FSection from "./sections/1/FSection";
import SSection from "./sections/2/SSection";
import TSection from "./sections/3/TSection";
import FoSection from "./sections/4/FoSection";
import Footer from "../components/footer/Footer";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className={style.page}>
      <Container>
        <Header />
        <FSection/>
        <SSection/>
        <TSection/>
        <FoSection/>

        <Footer/>
      </Container>
    </div>
  );
};

export default Page;
