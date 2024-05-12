import Select from "react-select";
import { countryOptions } from "../data";

const PhoneNumber = ({
  name,
  formatData,
  handleInputChange,
  handleCountryChange,
  selectedCountry,
}) => {
  const defaultOption = countryOptions.find((option) => option.value === "+00");

  return (
    <div>
      <label
        htmlFor="country"
        className="block text-xs font-medium text-gray-700 dark:text-gray-200"
      >
        Select Country
      </label>
      <Select
        id="country"
        value={selectedCountry || defaultOption}
        onChange={handleCountryChange}
        options={countryOptions}
      />
      <div className="mt-4">
        <label
          htmlFor="phoneNumber"
          className="block text-xs font-medium text-gray-700 dark:text-gray-200"
        >
          Phone Number
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-1 text-gray-700 dark:text-gray-200">
            {selectedCountry?.flag && (
              <img
                src={selectedCountry?.flag}
                srcSet={selectedCountry?.flag}
                className="w-8 h-8"
              />
            )}
            {selectedCountry?.value || defaultOption?.value}
          </span>
          <input
            type="text"
            id="phoneNumber"
            name={name}
            value={formatData}
            onChange={handleInputChange}
            placeholder="Enter phone number..."
            className="pl-[70px] pr-3 py-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneNumber;
