import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, getUserFailure } from "./store/userSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData(user));
  }, [user]);

  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600 dark:text-teal-300" href="#">
              <span className="text-xl font-bold">
                <span className="text-white">T</span>ask
              </span>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li className="text-white flex flex-col items-center capitalize">
                  <span className="text-gray-500 font-bold">First Name:</span>
                  <span>{user.fname}</span>
                </li>

                <li className="text-white flex flex-col items-center capitalize">
                  <span className="text-gray-500 font-bold">Last Name:</span>
                  <span>{user.lname}</span>
                </li>

                <li className="text-white flex flex-col items-center capitalize">
                  <span className="text-gray-500 font-bold">phone Number:</span>
                  <span>{user.phone}</span>
                </li>

                <li className="text-white flex flex-col items-center capitalize">
                  <span className="text-gray-500 font-bold">country:</span>
                  <span>
                    {user.countryName}
                    {user?.flag}
                  </span>
                </li>

                <li className="text-white flex flex-col items-center capitalize">
                  <span className="text-gray-500 font-bold">Country code:</span>
                  <span>{user.iso2}</span>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
