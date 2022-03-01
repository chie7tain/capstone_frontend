import React from "react";
import Header from "../Header/Header";
import About from "../About/About";
import Media from "../Media/Media";
import Members from "../Members/Members";
import Footer from "../Footer/Footer";

export default function Group() {
  return (
    <div>
      <Header />
      <About />
      <Media />
      <Members />
      <Footer />
    </div>
  );
}
