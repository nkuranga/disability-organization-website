import React from "react";
import { serviceContent } from "./index";
import ServicesCard from "../Cards/servicesCard";

const services = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-10 mx-auto">
        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2">
          {serviceContent.map((service) => (
            <ServicesCard service={service} key={service.Icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default services;
