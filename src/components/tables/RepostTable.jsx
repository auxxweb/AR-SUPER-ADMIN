import React from 'react'
import { reportData } from '../../api/constents';

const ReportTable = () => {
  return (
    <div className="flex flex-col justify-between flex-end w-full h-full">
      <table className="min-w-full table-auto mt-6">
        <thead className="bg-white border-gray-400 border-t-[2px] border-l-[2px] border-r-[2px] border-b-[2px]">
          <tr>
            <th className="px-4 py-4 text-left border-r border-gray-400">
              Vendor
            </th>
            <th className="px-4 py-4 text-left border-r border-gray-400">
              VendorId
            </th>
            <th className="px-4 py-4 text-left border-r border-gray-400">
              Total Orders
            </th>
            <th className="px-4 py-4 text-left border-r border-gray-400">
              Most sold category
            </th>
            <th className="px-4 py-4 text-left border-r border-gray-400">
              Most sold Menu
            </th>
            <th className="px-4 py-4 text-left border-r border-gray-400">
              Total Sales
            </th>
          </tr>
        </thead>
        <tbody className="border-[2px] border-opacity-50 border-[#969696]">
          {reportData?.map((employee, index) => (
            <tr
              key={index}
              className="odd:bg-teal-100 even:bg-grey border-[2px] border-opacity-50 border-[#9e9696]"
            >
              {/* <td className="px-4 py-2 border-r border-gray-400">
                                
                              </td> */}
              <td
                style={{ minWidth: '10rem' }}
                className="flex px-4 py-2 border-r border-gray-400"
              >
                <img
                  src={employee.image}
                  alt={employee.vendor}
                  className="w-10 h-10 rounded-full mr-1 mt-1"
                />
                {employee.vendor}
              </td>
              <td className="px-4 py-2 border-r border-gray-400">
                {employee.vendorId}
              </td>
              <td className="px-4 py-2 border-r border-gray-400">
                {employee.totalOrder}
              </td>
              <td className="px-4 py-2 border-r border-gray-400">
                {employee.mostCategory}
              </td>
              <td className="px-4 py-2 border-r border-gray-400">
                {employee.mostMenu}
              </td>
              <td className="px-4 py-2 border-r border-gray-400">
                {employee.totalSales}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ReportTable
