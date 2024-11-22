import React from 'react'
import { CategoryData, MenuData } from '../../api/constents'

const MenuTable = () => {
  return (
    <div className="flex flex-col justify-between flex-end w-full h-full overflow-x-scroll">
      <table className="min-w-full table-auto mt-6">
        <thead className="bg-white border-gray-400 border-t-[2px] border-l-[2px] border-r-[2px] border-b-[2px]">
          <tr>
            <th className="px-4 py-4 text-left border-r border-gray-400">
              Name
            </th>
            <th className="px-4 py-4 text-left border-r border-gray-400">
              3D Image
            </th>
            <th className="px-4 py-4 text-left border-r border-gray-400">
              AR
            </th>
            <th className="px-4 py-4 text-left border-r border-gray-400">
              Description
            </th>
           
            <th className="px-4 py-4 text-left border-r border-gray-400">
              Price
            </th>
            <th className="px-4 py-4 text-left border-r border-gray-400">
              Category
            </th>
            <th className="px-4 py-4 text-left border-r border-gray-400">
              Ingredients
            </th>
            <th className="px-4 py-4 text-left border-r border-gray-400">
              Nutritional Information
            </th>
            <th className="px-4 py-4 text-left border-r border-gray-400">
              Type
            </th>
            <th className="px-4 py-4 text-left border-r border-gray-400">
              Allergen Information
            </th>
            <th className="px-4 py-4 text-left border-r border-gray-400">
              Cooking Time
            </th>
            <th className="px-4 py-4 text-left border-r border-gray-400">
              Restaurant
            </th>
            <th className="px-4 py-4 text-left border-r border-gray-400">
              Offers
            </th>
            <th className="px-4 py-4 text-left border-r border-gray-400">
              Status
            </th>
            <th className="px-4 py-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="border-[2px] border-opacity-50 border-[#969696]">
          {MenuData?.map((employee, index) => (
            <tr
              key={index}
              className="odd:bg-teal-100 even:bg-grey border-[2px] border-opacity-50 border-[#9e9696]"
            >
              {/* <td className="px-4 py-2 border-r border-gray-400">
                                
                              </td> */}
              <td
                style={{
                  minWidth: '13rem',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                className="flex px-4 py-2 border-r border-gray-400"
              >
                <img
                  src={employee.image}
                  alt={employee.name}
                  className="w-10 h-10 rounded-full mr-1 mt-1"
                />
                {employee.name}
              </td>
              <td className="px-4 py-2 border-r border-gray-400">
                <img
                  src={employee.threeDImage}
                  alt={employee.name}
                  className="w-10 h-10 rounded-full mr-1 mt-1"
                />
              </td>
              <td className="px-4 py-2 border-r border-gray-400">
                {employee.isAr ? (
                  <span style={{ color: 'green' }}>Enabled</span>
                ) : (
                  <span style={{ color: 'red' }}>Disabled</span>
                )}
              </td>
              <td className="px-4 py-2 border-r border-gray-400">
                {employee.description}
              </td>
              <td className="px-4 py-2 border-r border-gray-400">
                {employee.price}
              </td>
              <td className="px-4 py-2 border-r border-gray-400">
                {employee.category}
              </td>
              <td className="px-4 py-2 border-r border-gray-400">
                {employee.ingredients}
              </td>
              <td className="px-4 py-2 border-r border-gray-400">
                <span style={{ fontWeight: '600' }}>Calories:</span>{' '}
                {employee.nutritionalInformation.calories},
                <span style={{ fontWeight: '600' }}>Protein:</span>{' '}
                {employee.nutritionalInformation.protein},{' '}
                <span style={{ fontWeight: '600' }}>Carbs:</span>
                {employee.nutritionalInformation.carbs},{' '}
                <span style={{ fontWeight: '600' }}>Fat:</span>
                {employee.nutritionalInformation.fat}
              </td>
              <td className="px-4 py-2 border-r border-gray-400">
                {employee.type}
              </td>
              <td className="px-4 py-2 border-r border-gray-400">
                {employee.allergenInformation}
              </td>
              <td className="px-4 py-2 border-r border-gray-400">
                {employee.cookingTime}
              </td>
              <td className="px-4 py-2 border-r border-gray-400">
                {employee.restaurant}
              </td>
              <td className="px-4 py-2 border-r border-gray-400">
                {employee.offers}
              </td>
              <td className="px-4 py-2 border-r border-gray-400">
                <span
                  style={{
                    border: `solid 2px ${employee?.status ? 'green' : 'red'}`,
                    backgroundColor: ` ${
                      employee?.status
                        ? 'rgba(0, 255, 0, 0.5)'
                        : 'rgba(255, 0, 0, 0.5)'
                    }`,
                  }}
                  className="inline-block rounded-full p-2 border border-gray-400 text-sm w-[145px] text-center"
                >
                  {employee.status ? 'Available' : 'Not-Available'}
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
  )
}

export default MenuTable
