import React, { useState } from "react";
import FirstName from "./FirstName";
import LastName from "./LastName";
import PhoneNumber from "./PhoneNumber";
import { useDispatch, useSelector } from "react-redux";
import { addUserData, getUserFailure } from "./store/userSlice";
const Form = () => {
  const { user, isError } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [formatData, setFormateData] = useState({
    fname: user.fname,
    lname: user.lname,
    phone: user.phone,
  });

  //handle change of select
  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setFormateData((prevData) => ({
      ...prevData,
      countryName: selectedOption?.label || "",
      iso2: selectedOption?.value || "",
      flag: selectedOption?.value || "",
    }));
  };

  //handle change of inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormateData({
      ...formatData,
      [name]: value,
    });

    console.log(":::::::::first::::::::", name, value);
  };

  // handle change of inputs
  const resetInputs = () => {
    setFormateData({
      fname: "",
      lname: "",
      phone: "",
    });
    setSelectedCountry(null);
  };

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formatData.fname ||
      !formatData.lname ||
      !formatData.phone ||
      !selectedCountry
    ) {
      dispatch(getUserFailure(true));
      return;
    }
    dispatch(addUserData(formatData));
    dispatch(getUserFailure(false));

    resetInputs();
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Welcome Task
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          sunt dolores deleniti inventore quaerat mollitia?
        </p>

        <form
          onSubmit={handleSubmit}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center capitalize text-white text-lg font-medium">
            add your information
          </p>
          {isError && (
            <p className="text-red-500 text-md my-2">
              checked feilds are required
            </p>
          )}
          <FirstName
            name="fname"
            handleInputChange={handleInputChange}
            formatData={formatData.fname}
          />

          <LastName
            name="lname"
            handleInputChange={handleInputChange}
            formatData={formatData.lname}
          />

          <PhoneNumber
            name="phone"
            formatData={formatData.phone}
            handleInputChange={handleInputChange}
            handleCountryChange={handleCountryChange}
            selectedCountry={selectedCountry}
          />

          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
