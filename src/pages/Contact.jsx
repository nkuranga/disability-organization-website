import React from "react";
import Header from "../components/Headers/header";
// import Slider from "../components/Slider/slide2";
import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/navbar2";
import Contactus from "../components/Cards/contact";

const Contact = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Navbar />
      </div>
      <div>
        <Contactus />
      </div>
      <div>
        <Footer />
      </div>
      ;
    </>
  );
};

export default Contact;
