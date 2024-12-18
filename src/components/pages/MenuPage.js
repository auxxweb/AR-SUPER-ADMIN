import React, { useState } from "react";
import Modal from "../reUsableCmponent/modal/Modal";
import VendorTable from "../tables/VendorTable";
import Pagination from "../Pagination";
import MenuTable from "../tables/MenuTable";

const MenuPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <div className="flex rounded-lg p-4">
        <h2 className="text-2xl font-semibold text-gray-700">Menu</h2>
        <div className="ml-auto flex items-center space-x-4">
          {" "}
          <span className="flex items-center">
            <span
              className="bg-[#F39B00] text-white rounded-full p-3 cursor-pointer"
              onClick={toggleModal}>
              + Add Menu
            </span>

            <Modal
              isVisible={isModalVisible}
              onClose={toggleModal}
              modalHeader={"Add Menu"}>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="mt-1 block w-full border-2 p-1 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700">
                      Restaurant
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="mt-1 block w-full border-2 p-1 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Restaurant"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700">
                      Image
                    </label>
                    <input
                      type="file"
                      name="username"
                      id="username"
                      className="mt-1 block w-full border-2 p-1 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Image"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700">
                      3D Image
                    </label>
                    <input
                      type="file"
                      name="email"
                      id="email"
                      className="mt-1 block w-full border-2 p-1 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="3D Image"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700">
                      Category
                    </label>
                    <input
                      type="text"
                      name="password"
                      id="password"
                      className="mt-1 block w-full border-2 p-1 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Category"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-700">
                      Type
                    </label>
                    <input
                      type="text"
                      name="confirmPassword"
                      id="confirmPassword"
                      className="mt-1 block w-full border-2 p-1 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Type"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700">
                      Price
                    </label>
                    <input
                      type="number"
                      name="password"
                      id="password"
                      className="mt-1 block w-full border-2 p-1 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Price"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-700">
                      Status
                    </label>
                    {/* <input
                      type="checkbox"
                      name="confirmPassword"
                      id="confirmPassword"
                      className="mt-1 block w-full border-2 p-1 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Status"
                      required
                    /> */}
                    <select  className="mt-1 block w-full border-2 p-1 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="trueFalseSelect">
                      <option value="true">available</option>
                      <option value="false">not available</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="clientId"
                    className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    type="text"
                    name="clientId"
                    id="clientId"
                    className="mt-1 block w-full border-2 p-1 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Description"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700">
                    Ingredients
                  </label>
                  <textarea
                    type="text"
                    name="phone"
                    id="phone"
                    className="mt-1 block w-full border-2 p-1 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Ingredients"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700">
                      nutritionalInformation
                    </label>
                    <textarea
                      type="text"
                      name="address"
                      id="address"
                      className="mt-1 block w-full border-2 p-1 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="nutritionalInformation"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700">
                      allergenInformation
                    </label>
                    <textarea
                      type="text"
                      name="location"
                      id="location"
                      className="mt-1 block w-full border-2 p-1 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="allergenInformation"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-medium text-gray-700">
                      cookingTime
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      className="mt-1 block w-full border-2 p-1 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="cookingTime"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="designation"
                      className="block text-sm font-medium text-gray-700">
                      Offers
                    </label>
                    <input
                      type="text"
                      name="designation"
                      id="designation"
                      className="mt-1 block w-full border-2 p-1 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Offers"
                      required
                    />
                  </div>
                </div>


                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                  </button>
                </div>
              </form>
            </Modal>
          </span>
        </div>
      </div>
      <div className="ml-auto lg:mr-4 flex items-center space-x-8 justify-end">
        {/* Parent div for span elements */}
        <span className="flex items-center justify-center">
          <input
            className="p-2 lg:w-[300px] w-full appearance-none bg-white border border-gray-500"
            placeholder="Menu name"
          />
        </span>
        <span className="flex items-center">
          <span className="cursor-pointer bg-[#F39B00] text-white p-2 lg:w-[250px] text-center">
            Search
          </span>
        </span>
      </div>

      <div className="flex flex-wrap justify-center mt-4">
        <MenuTable />
      </div>
      <div className="m-auto flex justify-end mt-8">
        <Pagination
          totalItems={35}
          itemsPerPage={10}
          currentPage={1}
          onPageChange={() => {}}
        />
      </div>
    </>
  );
};

export default MenuPage;
