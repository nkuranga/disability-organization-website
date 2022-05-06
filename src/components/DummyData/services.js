import React from "react";
import { serviceContent } from "./index";
import ServicesCard from "../Cards/servicesCard";

const services = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2">
          {serviceContent.map((service) => (
            <ServicesCard service={service} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default services;
