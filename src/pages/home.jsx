import React from "react";
// import Navbar from "../components/Navbar/navbar";
// import Slider from "../components/Slider/slider";
import Slider2 from "../components/Slider/slide2";
import "flowbite";
import Navbar2 from "../components/Navbar/navbar2";
import Aboutus from "../components/Cards/aboutus";
import Footer from "../components/Footer/footer";
import News from "../components/Cards/news";
import Header from "../components/Headers/header";
import ServicesCard from "../components/YummyData/services";
const home = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Navbar2 />
      </div>
      <div>
        <Slider2 />
      </div>
      <div>
        <ServicesCard />
      </div>
      <div>
        <Aboutus />
      </div>
      <div>
        <News />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default home;
