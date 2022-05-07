import React from "react";
import Header from "../components/Headers/header";
import Navbar2 from "../components/Navbar/navbar2";
import Footer from "../components/Footer/footer";
import ApplicationForm from "../components/Form/application";

const Application = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Navbar2 />
      </div>
      <div>
        <ApplicationForm />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Application;
