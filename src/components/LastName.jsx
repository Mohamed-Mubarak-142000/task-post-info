import React from "react";

const LastName = ({ formatData, handleInputChange, name }) => {
  return (
    <div>
      <label
        htmlFor="LastName"
        className="block text-xs font-medium text-gray-700 dark:text-gray-200"
      >
        Last Name
      </label>

      <input
        type="text"
        name={name}
        onChange={handleInputChange}
        value={formatData}
        id="LastName"
        placeholder="LastName..."
        className="mt-1 w-full rounded-md p-2 border-gray-200 shadow-sm sm:text-md dark:border-gray-700 dark:bg-gray-800 dark:text-white"
      />
    </div>
  );
};

export default LastName;
