import React from 'react'
import { CategoryData } from '../../api/constents';

const CategoryTable = () => {
          return (
                    <div className="flex flex-col justify-between flex-end w-full h-full">
                     <table className="min-w-full table-auto mt-6">
                     <thead  className="bg-white border-gray-400 border-t-[2px] border-l-[2px] border-r-[2px] border-b-[2px]">
                          <tr>
                            <th className="px-4 py-4 text-left border-r border-gray-400">
                              Name
                            </th>
                            <th className="px-4 py-4 text-left border-r border-gray-400">
                              CategoryID
                            </th>
                            <th className="px-4 py-4 text-left border-r border-gray-400">
                              Description
                            </th>
                            <th className="px-4 py-4 text-left border-r border-gray-400">
                              Status
                            </th>
                            <th className="px-4 py-4 text-left">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="border-[2px] border-opacity-50 border-[#969696]">
                          {CategoryData?.map((employee, index) => (
                            <tr
                              key={index}
                              className="odd:bg-teal-100 even:bg-grey border-[2px] border-opacity-50 border-[#9e9696]">
                              {/* <td className="px-4 py-2 border-r border-gray-400">
                                
                              </td> */}
                              <td style={{minWidth:"10rem"}} className="flex px-4 py-2 border-r border-gray-400"><img
                                  src={employee.image}
                                  alt={employee.name}
                               className="w-10 h-10 rounded-full mr-1 mt-1"
                                />{employee.name}</td>
                              <td className="px-4 py-2 border-r border-gray-400">{employee.categoryId}</td>
                              <td className="px-4 py-2 border-r border-gray-400">{employee.description}</td>
                              <td className="px-4 py-2 border-r border-gray-400">
                                <span className="inline-block rounded-full p-2 border border-gray-400 text-sm w-[145px] text-center">
                                  {employee.status ? "Active":"Blocked"}
                                </span>
                              </td>
                              <td className="px-4 py-2 border-r border-gray-400">
                                <h1 className="text-black mr-2 font-bold">...</h1>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
}

export default CategoryTable