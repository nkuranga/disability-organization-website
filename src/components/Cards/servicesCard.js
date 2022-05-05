import React from "react";

const servicesCard = ({ service: { Icon, title, description } }) => {
  return (
    <div class="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
      <div class="md:flex md:items-start sm:flex md:-mx-4">
        <span class="inline-block p-2 text-white bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
          <Icon className="w-6 h-6" />
        </span>

        <div class="mt-4 md:mx-4 md:mt-0">
          <h1 class="text-2xl font-medium text-gray-700 capitalize dark:text-white">
            {title}
          </h1>
          <p class="mt-3 text-gray-500 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default servicesCard;
