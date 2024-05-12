import React from "react";

const FirstName = ({ formatData, handleInputChange, name }) => {
  return (
    <div>
      <label
        htmlFor="FirstName"
        className="block text-xs font-medium text-gray-700 dark:text-gray-200"
      >
        First Name
      </label>

      <input
        name={name}
        onChange={handleInputChange}
        value={formatData}
        type="text"
        id="FirstName"
        placeholder="FirstName... "
        className="mt-1 w-full rounded-md p-2 border-gray-200 shadow-sm sm:text-md dark:border-gray-700 dark:bg-gray-800 dark:text-white"
      />
    </div>
  );
};

export default FirstName;
