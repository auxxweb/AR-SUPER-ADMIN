import React from "react";
import { Transition } from "@headlessui/react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  // navigate('/browse');

  return (
    <Transition
      show={isOpen}
      enter="transition duration-300 transform"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transition duration-300 transform"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
      className="bg-[#212529] w-[268px] h-[900px] space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform lg:relative lg:translate-x-0 z-50">
      {/* Sidebar content */}
      <div>
        {/* Close button for mobile */}
        <button
          className="lg:hidden text-white focus:outline-none absolute right-4 top-4"
          onClick={() => setIsOpen(false)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {/* Links */}
        <div className="flex items-center cursor-pointer">
          <span
            onClick={() => navigate("/")}
            className="flex items-center ml-2">
            <svg
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.375 0.8125H17.9708L17.675 1.075L14.1875 4.5625H5.3125C4.47361 4.5625 3.69306 4.77222 2.97083 5.19167C2.24583 5.61111 1.67361 6.18333 1.25417 6.90833C0.834722 7.63056 0.625 8.41111 0.625 9.25V18.625C0.625 19.4639 0.834722 20.2458 1.25417 20.9708C1.67361 21.6931 2.24583 22.2639 2.97083 22.6833C3.69306 23.1028 4.47361 23.3125 5.3125 23.3125H14.6875C15.5264 23.3125 16.3083 23.1028 17.0333 22.6833C17.7556 22.2639 18.3264 21.6931 18.7458 20.9708C19.1653 20.2458 19.375 19.4639 19.375 18.625V0.8125ZM14.9792 6.4375L17.5 3.91667V18.625C17.5 19.4056 17.2264 20.0694 16.6792 20.6167C16.1319 21.1639 15.4681 21.4375 14.6875 21.4375H5.3125C4.53194 21.4375 3.86806 21.1639 3.32083 20.6167C2.77361 20.0694 2.5 19.4056 2.5 18.625V9.25C2.5 8.46944 2.77361 7.80556 3.32083 7.25833C3.86806 6.71111 4.53194 6.4375 5.3125 6.4375H14.9792ZM12.8125 9.25H7.1875C6.67917 9.25 6.24028 9.43611 5.87083 9.80833C5.49861 10.1778 5.3125 10.6167 5.3125 11.125V16.75C5.3125 17.2583 5.49861 17.6972 5.87083 18.0667C6.24028 18.4389 6.67917 18.625 7.1875 18.625H16.9417L14.6875 16.3417V11.125C14.6875 10.6167 14.5014 10.1778 14.1292 9.80833C13.7597 9.43611 13.3208 9.25 12.8125 9.25ZM7.1875 16.75V11.125H12.8125V16.75H7.1875Z"
                fill={
                  location?.pathname?.split("/")[1] === ""
                    ? "#F39B00"
                    : "#909294"
                }
              />
            </svg>
            <span
              className={`text-custom-16 hover:text-[#F39B00] ml-4 ${
                location?.pathname?.split("/")[1] === ""
                  ? "text-[#F39B00]"
                  : "text-[#909294]"
              }`}>
              Dashboard
            </span>
          </span>
        </div>

        {/* <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center justify-between text-custom-16 text-[#909294] hover:text-[#F39B00] lg:2xl px-4 py-2">
                <div className=" flex mr-14">
                  <span className="ml-[-10px]">
                    <svg
                      width="24"
                      height="20"
                      viewBox="0 0 16 18"
                      fill={
                  location?.pathname?.split("/")[1] === ""
                    ? "#F39B00"
                    : "currentColor"
                }
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0.75C7.04667 0.75 6.16778 0.984444 5.36333 1.45333C4.55889 1.92222 3.92222 2.55889 3.45333 3.36333C2.98444 4.16778 2.75 5.04667 2.75 6C2.75 6.89111 2.95667 7.71889 3.37 8.48333C3.78556 9.25 4.35222 9.87556 5.07 10.36C4.17889 10.7511 3.38556 11.29 2.69 11.9767C1.99667 12.6633 1.46222 13.4522 1.08667 14.3433C0.695556 15.2656 0.5 16.2344 0.5 17.25H2C2 16.1567 2.27 15.1522 2.81 14.2367C3.34778 13.3233 4.07333 12.5978 4.98667 12.06C5.90222 11.52 6.90667 11.25 8 11.25C9.09333 11.25 10.0978 11.52 11.0133 12.06C11.9267 12.5978 12.6522 13.3233 13.19 14.2367C13.73 15.1522 14 16.1567 14 17.25H15.5C15.5 16.2344 15.3044 15.2656 14.9133 14.3433C14.5378 13.4522 14.0033 12.6633 13.31 11.9767C12.6144 11.29 11.8211 10.7511 10.93 10.36C11.6478 9.87556 12.2144 9.25 12.63 8.48333C13.0433 7.71889 13.25 6.89111 13.25 6C13.25 5.04667 13.0156 4.16778 12.5467 3.36333C12.0778 2.55889 11.4411 1.92222 10.6367 1.45333C9.83222 0.984444 8.95333 0.75 8 0.75ZM8 2.25C8.68667 2.25 9.31556 2.41778 9.88667 2.75333C10.4578 3.08889 10.9111 3.54222 11.2467 4.11333C11.5822 4.68444 11.75 5.31333 11.75 6C11.75 6.68667 11.5822 7.31556 11.2467 7.88667C10.9111 8.45778 10.4578 8.91111 9.88667 9.24667C9.31556 9.58222 8.68667 9.75 8 9.75C7.31333 9.75 6.68444 9.58222 6.11333 9.24667C5.54222 8.91111 5.08889 8.45778 4.75333 7.88667C4.41778 7.31556 4.25 6.68667 4.25 6C4.25 5.31333 4.41778 4.68444 4.75333 4.11333C5.08889 3.54222 5.54222 3.08889 6.11333 2.75333C6.68444 2.41778 7.31333 2.25 8 2.25Z"
                        fill={
                  location?.pathname?.split("/")[1] === ""
                    ? "#F39B00"
                    : "currentColor"
                }
                      />
                    </svg>
                  </span>
                  <span  onClick={() => navigate("/allemployees")} className="text-custom-16 mt-[-3px] text-[#a5a5a5] hover:text-[#F39B00] ml-4">
                    Employees
                  </span>
                </div>
                <ChevronUpIcon
                  className={`ml-[14px]  mb-2 w-6 h-6 transform ${
                    open ? "rotate-180" : ""
                  } ml-auto`}
                />
              </Disclosure.Button>

              <Disclosure.Panel className="bg-[#373b3e] text-custom-16 rounded-md px-4 py-2">
                <ul className="list-disc list-inside">
                  <li
                    onClick={() => navigate("/allemployees")}
                    className="cursor-pointer text-[#F39B00] hover:text-[#F39B00]"
                  >
                    All Employees
                  </li>
                  <li
                    onClick={() => navigate("/leaves")}
                    className="cursor-pointer text-[#909294] hover:text-[#F39B00]"
                  >
                    Leaves
                  </li>
                  <li
                    onClick={() => navigate("/attendence")}
                    className="cursor-pointer text-[#909294] hover:text-[#F39B00]"
                  >
                    Attendance
                  </li>
                  <li
                    onClick={() => navigate("/shiftsandschedules")}
                    className="cursor-pointer text-[#909294] hover:text-[#F39B00]"
                  >
                    Shift & Schedule
                  </li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure> */}

        <div
          onClick={() => navigate("/vendors")}
          className="cursor-pointer flex items-center text-[#909294] hover:text-[#F39B00]">
          <span className="flex items-center ml-2 ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 22 16"
              fill={
                location?.pathname?.split("/")[1] === "vendors"
                  ? "#F39B00"
                  : "currentColor"
              }
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 2c.55 0 1 .45 1 1v5c0 1.1-.9 2-2 2V3c0-.55.45-1 1-1zm3 0c.55 0 1 .45 1 1v5c0 1.1-.9 2-2 2V3c0-.55.45-1 1-1zm5.5 0c.28 0 .5.22.5.5v5c0 1.66-1.34 3-3 3V2h2c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-2c-1.1 0-2 .9-2 2v6c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1V2c0-1.1.9-2 2-2h9z"
                fill={
                  location?.pathname?.split("/")[1] === "vendors"
                    ? "#F39B00"
                    : "currentColor"
                }
              />
            </svg>
            <span
              className={`text-custom-16 hover:text-[#F39B00] ml-4 ${
                location?.pathname?.split("/")[1] === "vendors"
                  ? "text-[#F39B00]"
                  : "text-[#909294]"
              }`}>
              Vendors
            </span>
          </span>
        </div>

        <div
          onClick={() => navigate("/category")}
          className="cursor-pointer flex items-center text-[#909294] hover:text-[#F39B00]">
          <span className="flex items-center ml-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill={
                location?.pathname?.split("/")[1] === "category"
                  ? "#F39B00"
                  : "currentColor"
              }
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors duration-200">
              <path
                d="M3 3h7v7H3zm0 11h7v7H3zm11-11h7v7h-7zm0 11h7v7h-7z"
                fill={
                  location?.pathname?.split("/")[1] === "category"
                    ? "#F39B00"
                    : "currentColor"
                }
              />
            </svg>

            <span
              className={`text-custom-16 hover:text-[#F39B00] ml-4 ${
                location?.pathname?.split("/")[1] === "category"
                  ? "text-[#F39B00]"
                  : "text-[#909294]"
              }`}>
              Category
            </span>
          </span>
        </div>
        <div
          onClick={() => navigate("/menu")}
          className="cursor-pointer flex items-center text-[#909294] hover:text-[#F39B00]">
          <span className="flex items-center ml-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill={
                location?.pathname?.split("/")[1] === "menu"
                  ? "#F39B00"
                  : "currentColor"
              }
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors duration-200">
              <path
                d="M3 3h7v7H3zm0 11h7v7H3zm11-11h7v7h-7zm0 11h7v7h-7z"
                fill={
                  location?.pathname?.split("/")[1] === "menu"
                    ? "#F39B00"
                    : "currentColor"
                }
              />
            </svg>

            <span
              className={`text-custom-16 hover:text-[#F39B00] ml-4 ${
                location?.pathname?.split("/")[1] === "menu"
                  ? "text-[#F39B00]"
                  : "text-[#909294]"
              }`}>
              Menu
            </span>
          </span>
        </div>
        <div
          onClick={() => navigate("/plans")}
          className="cursor-pointer flex items-center text-[#909294] hover:text-[#F39B00]">
          <span className="flex items-center ml-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill={
                location?.pathname?.split("/")[1] === "plans"
                  ? "#F39B00"
                  : "currentColor"
              }
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors duration-200">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z"
                fill={
                  location?.pathname?.split("/")[1] === "plans"
                    ? "#F39B00"
                    : "currentColor"
                }
              />
            </svg>

            <span
              className={`text-custom-16 hover:text-[#F39B00] ml-4 ${
                location?.pathname?.split("/")[1] === "plans"
                  ? "text-[#F39B00]"
                  : "text-[#909294]"
              }`}>
              Plans
            </span>
          </span>
        </div>
        <div
          onClick={() => navigate("/paymentData")}
          className="cursor-pointer flex items-center text-[#909294] hover:text-[#F39B00]">
          <span className="flex items-center ml-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill={
                location?.pathname?.split("/")[1] === "paymentData"
                  ? "#F39B00"
                  : "currentColor"
              }
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors duration-200">
              <path
                d="M15.6333 0C14.7422 0.0311111 13.8356 0.164444 12.9133 0.4C12.3667 0.524444 11.5856 0.766666 10.57 1.12667L10.5467 1.15C9.46889 1.50778 8.64889 1.75778 8.08667 1.9C7.13333 2.13333 6.18778 2.25 5.25 2.25C3.84333 2.28111 2.42111 2.04667 0.983333 1.54667L0 1.19667V14.0167L0.493333 14.2033C1.80444 14.6567 3.13222 14.9144 4.47667 14.9767C4.67889 14.9922 4.88222 15 5.08667 15C6.08667 15 7.10222 14.8756 8.13333 14.6267C8.74222 14.4844 9.60889 14.2178 10.7333 13.8267H10.7567C11.9144 13.4222 12.8056 13.1489 13.43 13.0067C14.4456 12.7889 15.4533 12.7033 16.4533 12.75C17.64 12.7967 18.82 13.0311 19.9933 13.4533L21 13.8033V0.983334L20.5067 0.796667C19.2111 0.327778 17.8833 0.0699999 16.5233 0.0233332C16.2411 0.00777768 15.9444 0 15.6333 0ZM15.68 1.5C15.9444 1.48444 16.2056 1.48444 16.4633 1.5C16.7211 1.51556 17.0067 1.53889 17.32 1.57C17.4133 1.97667 17.6278 2.31667 17.9633 2.59C18.3011 2.86333 18.6889 3 19.1267 3C19.2511 3 19.3756 2.98444 19.5 2.95333V9.79667C19.3756 9.76556 19.2511 9.75 19.1267 9.75C18.6733 9.75 18.27 9.89889 17.9167 10.1967C17.5656 10.4922 17.3511 10.8589 17.2733 11.2967C17.04 11.2811 16.79 11.2656 16.5233 11.25C15.3989 11.2033 14.2667 11.3044 13.1267 11.5533C12.4222 11.7111 11.4689 12.0011 10.2667 12.4233C9.09333 12.8278 8.20222 13.0933 7.59333 13.22C6.56222 13.4533 5.54667 13.5467 4.54667 13.5C4.28222 13.4844 3.99333 13.4611 3.68 13.43C3.58667 13.0078 3.37222 12.6644 3.03667 12.4C2.69889 12.1333 2.31222 12 1.87667 12C1.75 12 1.62444 12.0156 1.5 12.0467V5.20333C1.62444 5.23444 1.75 5.25 1.87667 5.25C2.34333 5.25 2.74889 5.10111 3.09333 4.80333C3.43778 4.50778 3.64889 4.13333 3.72667 3.68C4.28889 3.74222 4.79667 3.76556 5.25 3.75C6.31222 3.73444 7.36667 3.60111 8.41333 3.35C9.02222 3.21 9.89 2.94444 11.0167 2.55333H11.04C11.9933 2.21111 12.7278 1.97667 13.2433 1.85C14.07 1.63222 14.8822 1.51556 15.68 1.5ZM10.5 3.75C9.95333 3.75 9.44889 3.91778 8.98667 4.25333C8.52667 4.58889 8.16444 5.04667 7.9 5.62667C7.63333 6.20444 7.5 6.82889 7.5 7.5C7.5 8.17111 7.63333 8.79667 7.9 9.37667C8.16444 9.95444 8.52667 10.4111 8.98667 10.7467C9.44889 11.0822 9.95333 11.25 10.5 11.25C11.0467 11.25 11.5511 11.0822 12.0133 10.7467C12.4733 10.4111 12.8356 9.95444 13.1 9.37667C13.3667 8.79667 13.5 8.17111 13.5 7.5C13.5 6.82889 13.3667 6.20444 13.1 5.62667C12.8356 5.04667 12.4733 4.58889 12.0133 4.25333C11.5511 3.91778 11.0467 3.75 10.5 3.75ZM10.5 5.25C10.9067 5.25 11.2578 5.47222 11.5533 5.91667C11.8511 6.36333 12 6.89111 12 7.5C12 8.10889 11.8511 8.63667 11.5533 9.08333C11.2578 9.52778 10.9067 9.75 10.5 9.75C10.0933 9.75 9.74222 9.52778 9.44667 9.08333C9.14889 8.63667 9 8.10889 9 7.5C9 6.89111 9.14889 6.36333 9.44667 5.91667C9.74222 5.47222 10.0933 5.25 10.5 5.25ZM16.1267 5.25C15.8133 5.25 15.5467 5.35889 15.3267 5.57667C15.1089 5.79667 15 6.06333 15 6.37667C15 6.68778 15.1089 6.95333 15.3267 7.17333C15.5467 7.39111 15.8133 7.5 16.1267 7.5C16.4378 7.5 16.7033 7.39111 16.9233 7.17333C17.1411 6.95333 17.25 6.68778 17.25 6.37667C17.25 6.06333 17.1411 5.79667 16.9233 5.57667C16.7033 5.35889 16.4378 5.25 16.1267 5.25ZM4.87667 7.5C4.56333 7.5 4.29667 7.60889 4.07667 7.82667C3.85889 8.04667 3.75 8.31333 3.75 8.62667C3.75 8.93778 3.85889 9.20333 4.07667 9.42333C4.29667 9.64111 4.56333 9.75 4.87667 9.75C5.18778 9.75 5.45333 9.64111 5.67333 9.42333C5.89111 9.20333 6 8.93778 6 8.62667C6 8.31333 5.89111 8.04667 5.67333 7.82667C5.45333 7.60889 5.18778 7.5 4.87667 7.5Z"
                fill={
                  location?.pathname?.split("/")[1] === "paymentData"
                    ? "#F39B00"
                    : "currentColor"
                }
              />
            </svg>

            <span
              className={`text-custom-16 hover:text-[#F39B00] ml-4 ${
                location?.pathname?.split("/")[1] === "paymentData"
                  ? "text-[#F39B00]"
                  : "text-[#909294]"
              }`}>
              Payments
            </span>
          </span>
        </div>

        {/* <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center justify-between text-custom-16 text-[#909294] hover:text-[#F39B00] lg:2xl px-4 py-2">
                <div className=" flex mr-24">
                  <span className="ml-[-10px] ">
                    <svg
                      width="21"
                      height="15"
                      viewBox="0 0 21 15"
                      fill={
                  location?.pathname?.split("/")[1] === ""
                    ? "#F39B00"
                    : "currentColor"
                }
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.6333 0C14.7422 0.0311111 13.8356 0.164444 12.9133 0.4C12.3667 0.524444 11.5856 0.766666 10.57 1.12667L10.5467 1.15C9.46889 1.50778 8.64889 1.75778 8.08667 1.9C7.13333 2.13333 6.18778 2.25 5.25 2.25C3.84333 2.28111 2.42111 2.04667 0.983333 1.54667L0 1.19667V14.0167L0.493333 14.2033C1.80444 14.6567 3.13222 14.9144 4.47667 14.9767C4.67889 14.9922 4.88222 15 5.08667 15C6.08667 15 7.10222 14.8756 8.13333 14.6267C8.74222 14.4844 9.60889 14.2178 10.7333 13.8267H10.7567C11.9144 13.4222 12.8056 13.1489 13.43 13.0067C14.4456 12.7889 15.4533 12.7033 16.4533 12.75C17.64 12.7967 18.82 13.0311 19.9933 13.4533L21 13.8033V0.983334L20.5067 0.796667C19.2111 0.327778 17.8833 0.0699999 16.5233 0.0233332C16.2411 0.00777768 15.9444 0 15.6333 0ZM15.68 1.5C15.9444 1.48444 16.2056 1.48444 16.4633 1.5C16.7211 1.51556 17.0067 1.53889 17.32 1.57C17.4133 1.97667 17.6278 2.31667 17.9633 2.59C18.3011 2.86333 18.6889 3 19.1267 3C19.2511 3 19.3756 2.98444 19.5 2.95333V9.79667C19.3756 9.76556 19.2511 9.75 19.1267 9.75C18.6733 9.75 18.27 9.89889 17.9167 10.1967C17.5656 10.4922 17.3511 10.8589 17.2733 11.2967C17.04 11.2811 16.79 11.2656 16.5233 11.25C15.3989 11.2033 14.2667 11.3044 13.1267 11.5533C12.4222 11.7111 11.4689 12.0011 10.2667 12.4233C9.09333 12.8278 8.20222 13.0933 7.59333 13.22C6.56222 13.4533 5.54667 13.5467 4.54667 13.5C4.28222 13.4844 3.99333 13.4611 3.68 13.43C3.58667 13.0078 3.37222 12.6644 3.03667 12.4C2.69889 12.1333 2.31222 12 1.87667 12C1.75 12 1.62444 12.0156 1.5 12.0467V5.20333C1.62444 5.23444 1.75 5.25 1.87667 5.25C2.34333 5.25 2.74889 5.10111 3.09333 4.80333C3.43778 4.50778 3.64889 4.13333 3.72667 3.68C4.28889 3.74222 4.79667 3.76556 5.25 3.75C6.31222 3.73444 7.36667 3.60111 8.41333 3.35C9.02222 3.21 9.89 2.94444 11.0167 2.55333H11.04C11.9933 2.21111 12.7278 1.97667 13.2433 1.85C14.07 1.63222 14.8822 1.51556 15.68 1.5ZM10.5 3.75C9.95333 3.75 9.44889 3.91778 8.98667 4.25333C8.52667 4.58889 8.16444 5.04667 7.9 5.62667C7.63333 6.20444 7.5 6.82889 7.5 7.5C7.5 8.17111 7.63333 8.79667 7.9 9.37667C8.16444 9.95444 8.52667 10.4111 8.98667 10.7467C9.44889 11.0822 9.95333 11.25 10.5 11.25C11.0467 11.25 11.5511 11.0822 12.0133 10.7467C12.4733 10.4111 12.8356 9.95444 13.1 9.37667C13.3667 8.79667 13.5 8.17111 13.5 7.5C13.5 6.82889 13.3667 6.20444 13.1 5.62667C12.8356 5.04667 12.4733 4.58889 12.0133 4.25333C11.5511 3.91778 11.0467 3.75 10.5 3.75ZM10.5 5.25C10.9067 5.25 11.2578 5.47222 11.5533 5.91667C11.8511 6.36333 12 6.89111 12 7.5C12 8.10889 11.8511 8.63667 11.5533 9.08333C11.2578 9.52778 10.9067 9.75 10.5 9.75C10.0933 9.75 9.74222 9.52778 9.44667 9.08333C9.14889 8.63667 9 8.10889 9 7.5C9 6.89111 9.14889 6.36333 9.44667 5.91667C9.74222 5.47222 10.0933 5.25 10.5 5.25ZM16.1267 5.25C15.8133 5.25 15.5467 5.35889 15.3267 5.57667C15.1089 5.79667 15 6.06333 15 6.37667C15 6.68778 15.1089 6.95333 15.3267 7.17333C15.5467 7.39111 15.8133 7.5 16.1267 7.5C16.4378 7.5 16.7033 7.39111 16.9233 7.17333C17.1411 6.95333 17.25 6.68778 17.25 6.37667C17.25 6.06333 17.1411 5.79667 16.9233 5.57667C16.7033 5.35889 16.4378 5.25 16.1267 5.25ZM4.87667 7.5C4.56333 7.5 4.29667 7.60889 4.07667 7.82667C3.85889 8.04667 3.75 8.31333 3.75 8.62667C3.75 8.93778 3.85889 9.20333 4.07667 9.42333C4.29667 9.64111 4.56333 9.75 4.87667 9.75C5.18778 9.75 5.45333 9.64111 5.67333 9.42333C5.89111 9.20333 6 8.93778 6 8.62667C6 8.31333 5.89111 8.04667 5.67333 7.82667C5.45333 7.60889 5.18778 7.5 4.87667 7.5Z"
                        fill={
                  location?.pathname?.split("/")[1] === ""
                    ? "#F39B00"
                    : "currentColor"
                }
                      />
                    </svg>
                  </span>
                  <span className="text-custom-16 mt-[-8px] mr-4 text-[#a5a5a5] hover:text-[#F39B00] ml-4">
                    Payments
                  </span>
                </div>
                <ChevronUpIcon
                  className={`w-6 h-6 transform ${
                    open ? "rotate-180" : ""
                  } ml-auto`}
                />
              </Disclosure.Button>

              <Disclosure.Panel className="bg-[#373b3e] text-custom-16 rounded-md px-4 py-2">
                <ul className="list-disc list-inside">
                  <li
                    onClick={() => navigate("/paymentpage")}
                    className="cursor-pointer text-[#F39B00] hover:text-[#F39B00] ">
                    Payment
                  </li>
                  <li
                    onClick={() => navigate("/subscription")}
                    className="text-[#909294] hover:text-[#F39B00]">
                    Subcription
                  </li>
                  <li className="text-[#909294] hover:text-[#F39B00]">
                    Payment History
                  </li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure> */}

        {/* <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between text-custom-16 text-[#909294] hover:text-[#F39B00] lg:2xl px-4 py-2">
                  <div className=" flex mr-9">
                    <span className="ml-[-10px] ">
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill={
                  location?.pathname?.split("/")[1] === ""
                    ? "#F39B00"
                    : "currentColor"
                }
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.0001 3.50072C14.0005 4.22476 13.7763 4.9311 13.3585 5.52239C12.9406 6.11367 12.3496 6.5608 11.667 6.80215V9.33363H15.1667C16.0949 9.33363 16.9851 9.70235 17.6414 10.3587C18.2977 11.015 18.6665 11.9052 18.6665 12.8334V14.1983C19.4451 14.4735 20.1015 15.0151 20.5194 15.7274C20.9374 16.4398 21.09 17.2769 20.9504 18.0909C20.8108 18.9049 20.3879 19.6433 19.7565 20.1757C19.1251 20.708 18.3258 21 17.4999 21C16.674 21 15.8747 20.708 15.2433 20.1757C14.6119 19.6433 14.189 18.9049 14.0494 18.0909C13.9097 17.2769 14.0624 16.4398 14.4804 15.7274C14.8983 15.0151 15.5546 14.4735 16.3333 14.1983V12.8334C16.3333 12.524 16.2104 12.2272 15.9916 12.0085C15.7728 11.7897 15.4761 11.6668 15.1667 11.6668H5.83408C5.52468 11.6668 5.22796 11.7897 5.00918 12.0085C4.7904 12.2272 4.6675 12.524 4.6675 12.8334V14.1983C5.44618 14.4735 6.1025 15.0151 6.52045 15.7274C6.93839 16.4398 7.09105 17.2769 6.95144 18.0909C6.81183 18.9049 6.38894 19.6433 5.75752 20.1757C5.12609 20.708 4.3268 21 3.50092 21C2.67503 21 1.87574 20.708 1.24431 20.1757C0.612893 19.6433 0.190001 18.9049 0.0503905 18.0909C-0.0892203 17.2769 0.0634392 16.4398 0.481385 15.7274C0.899331 15.0151 1.55565 14.4735 2.33433 14.1983V12.8334C2.33433 11.9052 2.70306 11.015 3.35939 10.3587C4.01571 9.70235 4.90589 9.33363 5.83408 9.33363H9.33382V6.80215C8.72854 6.58847 8.19365 6.21249 7.78764 5.71532C7.38163 5.21815 7.12012 4.61893 7.0317 3.98316C6.94328 3.34738 7.03135 2.69954 7.28629 2.11045C7.54123 1.52136 7.95323 1.01369 8.47723 0.64296C9.00124 0.272226 9.61708 0.0526935 10.2574 0.00836096C10.8978 -0.0359716 11.538 0.096603 12.1081 0.391591C12.6782 0.686579 13.1562 1.13263 13.4899 1.68097C13.8236 2.22931 14.0001 2.85883 14.0001 3.50072ZM10.5004 2.33414C10.191 2.33414 9.89428 2.45705 9.6755 2.67583C9.45673 2.8946 9.33382 3.19133 9.33382 3.50072C9.33382 3.81012 9.45673 4.10684 9.6755 4.32562C9.89428 4.5444 10.191 4.6673 10.5004 4.6673C10.8098 4.6673 11.1065 4.5444 11.3253 4.32562C11.5441 4.10684 11.667 3.81012 11.667 3.50072C11.667 3.19133 11.5441 2.8946 11.3253 2.67583C11.1065 2.45705 10.8098 2.33414 10.5004 2.33414ZM3.50092 16.3331C3.19152 16.3331 2.89479 16.456 2.67602 16.6748C2.45724 16.8936 2.33433 17.1903 2.33433 17.4997C2.33433 17.8091 2.45724 18.1058 2.67602 18.3246C2.89479 18.5434 3.19152 18.6663 3.50092 18.6663C3.81031 18.6663 4.10704 18.5434 4.32581 18.3246C4.54459 18.1058 4.6675 17.8091 4.6675 17.4997C4.6675 17.1903 4.54459 16.8936 4.32581 16.6748C4.10704 16.456 3.81031 16.3331 3.50092 16.3331ZM17.4999 16.3331C17.1905 16.3331 16.8938 16.456 16.675 16.6748C16.4562 16.8936 16.3333 17.1903 16.3333 17.4997C16.3333 17.8091 16.4562 18.1058 16.675 18.3246C16.8938 18.5434 17.1905 18.6663 17.4999 18.6663C17.8093 18.6663 18.106 18.5434 18.3248 18.3246C18.5436 18.1058 18.6665 17.8091 18.6665 17.4997C18.6665 17.1903 18.5436 16.8936 18.3248 16.6748C18.106 16.456 17.8093 16.3331 17.4999 16.3331Z"
                          fill={
                  location?.pathname?.split("/")[1] === ""
                    ? "#F39B00"
                    : "currentColor"
                }
                        />
                      </svg>
                    </span>
                    <span className="text-custom-16 text-left mt-[-4px] text-[#a5a5a5] hover:text-[#F39B00] ml-4">
                      Team Mangmnt
                    </span>
                  </div>
                  <ChevronUpIcon
                    className={`ml-[-14px]  mb-2 w-6 h-6 transform ${
                      open ? "rotate-180" : ""
                    } ml-auto`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel className="bg-[#373b3e] text-custom-16 rounded-md px-4 py-2">
                  <ul className="list-disc list-inside">
                    <li
                      onClick={() => navigate("/department")}
                      className="cursor-pointer text-[#F39B00] hover:text-[#F39B00]">
                      Department
                    </li>
                    <li
                      onClick={() => navigate("/designation")}
                      className="cursor-pointertext-[#909294] hover:text-[#F39B00]">
                      Designation
                    </li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure> */}

        <div
          onClick={() => navigate("/settings")}
          className="cursor-pointer flex items-center text-[#909294] hover:text-[#F39B00]">
          <span className="flex items-center ml-2">
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill={
                location?.pathname?.split("/")[1] === "settings"
                  ? "#F39B00"
                  : "currentColor"
              }
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.665 21L7.245 17.64C7.0175 17.5525 6.8033 17.4475 6.6024 17.325C6.4015 17.2025 6.20445 17.0712 6.01125 16.9312L2.8875 18.2437L0 13.2562L2.70375 11.2087C2.68625 11.0862 2.6775 10.9683 2.6775 10.8549V10.1461C2.6775 10.0321 2.68625 9.91375 2.70375 9.79125L0 7.74375L2.8875 2.75625L6.01125 4.06875C6.20375 3.92875 6.405 3.7975 6.615 3.675C6.825 3.5525 7.035 3.4475 7.245 3.36L7.665 0H13.44L13.86 3.36C14.0875 3.4475 14.302 3.5525 14.5036 3.675C14.7052 3.7975 14.9019 3.92875 15.0938 4.06875L18.2175 2.75625L21.105 7.74375L18.4012 9.79125C18.4187 9.91375 18.4275 10.0321 18.4275 10.1461V10.8538C18.4275 10.9679 18.41 11.0862 18.375 11.2087L21.0787 13.2562L18.1912 18.2437L15.0938 16.9312C14.9012 17.0712 14.7 17.2025 14.49 17.325C14.28 17.4475 14.07 17.5525 13.86 17.64L13.44 21H7.665ZM9.5025 18.9H11.5763L11.9437 16.1175C12.4862 15.9775 12.9895 15.772 13.4536 15.5012C13.9177 15.2302 14.342 14.9019 14.7262 14.5162L17.325 15.5925L18.3487 13.8075L16.0912 12.1012C16.1787 11.8562 16.24 11.5983 16.275 11.3274C16.31 11.0565 16.3275 10.7807 16.3275 10.5C16.3275 10.2193 16.31 9.94385 16.275 9.67365C16.24 9.40345 16.1787 9.14515 16.0912 8.89875L18.3487 7.1925L17.325 5.4075L14.7262 6.51C14.3412 6.1075 13.917 5.7708 13.4536 5.4999C12.9902 5.229 12.4869 5.0232 11.9437 4.8825L11.6025 2.1H9.52875L9.16125 4.8825C8.61875 5.0225 8.1158 5.2283 7.6524 5.4999C7.189 5.7715 6.76445 6.09945 6.37875 6.48375L3.78 5.4075L2.75625 7.1925L5.01375 8.8725C4.92625 9.135 4.865 9.3975 4.83 9.66C4.795 9.9225 4.7775 10.2025 4.7775 10.5C4.7775 10.78 4.795 11.0512 4.83 11.3137C4.865 11.5762 4.92625 11.8387 5.01375 12.1012L2.75625 13.8075L3.78 15.5925L6.37875 14.49C6.76375 14.8925 7.1883 15.2295 7.6524 15.5012C8.1165 15.7727 8.61945 15.9782 9.16125 16.1175L9.5025 18.9ZM10.605 14.175C11.62 14.175 12.4862 13.8162 13.2037 13.0988C13.9212 12.3812 14.28 11.515 14.28 10.5C14.28 9.485 13.9212 8.61875 13.2037 7.90125C12.4862 7.18375 11.62 6.825 10.605 6.825C9.5725 6.825 8.7017 7.18375 7.9926 7.90125C7.2835 8.61875 6.9293 9.485 6.93 10.5C6.9307 11.515 7.28525 12.3812 7.99365 13.0988C8.70205 13.8162 9.5725 14.175 10.605 14.175Z"
                fill={
                  location?.pathname?.split("/")[1] === "settings"
                    ? "#F39B00"
                    : "currentColor"
                }
              />
            </svg>

            <span
              className={`text-custom-16 hover:text-[#F39B00] ml-4 ${
                location?.pathname?.split("/")[1] === "settings"
                  ? "text-[#F39B00]"
                  : "text-[#909294]"
              }`}>
              Settings & Config
            </span>
          </span>
        </div>
        <div
          onClick={() => navigate("terms")}
          className="cursor-pointer flex items-center text-[#909294] hover:text-[#F39B00]">
          <span className="flex items-center ml-2">
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill={
                location?.pathname?.split("/")[1] === "terms"
                  ? "#F39B00"
                  : "currentColor"
              }
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V8l-6-6H9zm3 0v5h5M9 14h6m-6-4h6m-6 8h6"
                fill={
                  location?.pathname?.split("/")[1] === "terms"
                    ? "#F39B00"
                    : "currentColor"
                }
              />
            </svg>

            <span
              className={`text-custom-16 hover:text-[#F39B00] ml-4 ${
                location?.pathname?.split("/")[1] === "terms"
                  ? "text-[#F39B00]"
                  : "text-[#909294]"
              }`}>
              Terms & conditions
            </span>
          </span>
        </div>
        <div
          onClick={() => navigate("/privacy")}
          className="cursor-pointer flex items-center text-[#909294] hover:text-[#F39B00]">
          <span className="flex items-center ml-2">
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill={
                location?.pathname?.split("/")[1] === "privacy"
                  ? "#F39B00"
                  : "currentColor"
              }
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2a4 4 0 00-4 4v4H6v10h12V10h-2V6a4 4 0 00-4-4zm-2 8V6a2 2 0 114 0v4h-4zm10 6h-2v-2h2v2z"
                fill={
                  location?.pathname?.split("/")[1] === "privacy"
                    ? "#F39B00"
                    : "currentColor"
                }
              />
            </svg>

            <span
              className={`text-custom-16 hover:text-[#F39B00] ml-4 ${
                location?.pathname?.split("/")[1] === "privacy"
                  ? "text-[#F39B00]"
                  : "text-[#909294]"
              }`}>
              Privacy & policy
            </span>
          </span>
        </div>
        <div
          onClick={() => navigate("/report")}
          className="cursor-pointer flex items-center text-[#909294] hover:text-[#F39B00]">
          <span className="flex items-center ml-2">
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill={
                location?.pathname?.split("/")[1] === "report"
                  ? "#F39B00"
                  : "currentColor"
              }
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2c1.1 0 1.99.89 1.99 2L14 18c0 1.1-.89 2-1.99 2H6c-1.1 0-2-.89-2-2V4c0-1.11.89-2 2-2h6zm0 2H6v14h6V4zm1 9h3v2h-3zm-5-4h6v2H8z"
                fill={
                  location?.pathname?.split("/")[1] === "report"
                    ? "#F39B00"
                    : "currentColor"
                }
              />
            </svg>

            <span
              className={`text-custom-16 hover:text-[#F39B00] ml-4 ${
                location?.pathname?.split("/")[1] === "report"
                  ? "text-[#F39B00]"
                  : "text-[#909294]"
              }`}>
              Report
            </span>
          </span>
        </div>
        <div className="cursor-pointer flex items-center text-[#909294] hover:text-[#F39B00]">
          <span className="flex items-center ml-2">
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill={
                  location?.pathname?.split("/")[1] === "fgb"
                    ? "#F39B00"
                    : "currentColor"
                }
              xmlns="http://www.w3.org/2000/svg">
               <path d="M16 13V9h3V5l-5-4-5 4v4h3v4h-3v4h5v-4h-3zm-4 6v-2h-4v2h4z" fill={
                  location?.pathname?.split("/")[1] === "fgb"
                    ? "#F39B00"
                    : "currentColor"
                }/>
            </svg>

            <span className={`text-custom-16 hover:text-[#F39B00] ml-4 ${
            location?.pathname?.split("/")[1] === "dgbd"
              ? "text-[#F39B00]"
              : "text-[#909294]"
          }`}>Logout</span>
          </span>
        </div>
      </div>
    </Transition>
  );
}

export default Sidebar;
