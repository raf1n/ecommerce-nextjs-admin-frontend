import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import { FaEdit, FaEye, FaTrash, FaTruck } from "react-icons/fa";
interface Props {
  tableHeaders: Array<string>;
  actions: {
    isEditable?: boolean;
    isDeletable?: boolean;
    isShipping?: boolean;
    isViewable?: boolean;
  };
  testDynamicTableData: Array<object>;
}

const DynamicTable: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const { tableHeaders, actions, testDynamicTableData } = props;

  return (
    <div>
      <div className="bg-white p-8 rounded-md w-full">
        <div className=" flex items-center justify-between pb-6">
          <div>
            <span className="text-xs px-1">Show </span>
            <select
              name="dataTable_length"
              aria-controls="dataTable"
              className="custom-select custom-select-sm form-control form-control-sm"
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <span className="text-xs  px-1">Entries</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex bg-gray-50 items-center p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                className="bg-gray-50 outline-none ml-1 block "
                type="text"
                name=""
                id=""
                placeholder="search..."
              />
            </div>
          </div>
        </div>
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    {tableHeaders.map((header, idx) => (
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                {/* ------------------------- */}
                <tbody>
                  {testDynamicTableData.map((row: any, idx) => {
                    return (
                      <tr>
                        {Object.keys(row).map((key: any, idx) => {
                          if (key === "status" && row[key] === "pending") {
                            return (
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                    aria-hidden
                                    className="absolute inset-0 bg-red-500  rounded-full"
                                  ></span>
                                  <span className="relative text-white">
                                    Pending
                                  </span>
                                </span>
                              </td>
                            );
                          } else if (
                            key === "payment" &&
                            row[key] === "success"
                          ) {
                            return (
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                    aria-hidden
                                    className="absolute inset-0 bg-green-500 rounded-full"
                                  ></span>
                                  <span className="relative text-white">
                                    Success
                                  </span>
                                </span>
                              </td>
                            );
                          } else if (key === "image") {
                            return (
                              <td className="px-3 py-3    ">
                                <img
                                  width="150px"
                                  src={row[key]}
                                  className=""
                                ></img>
                              </td>
                            );
                          } else if (key === "icon") {
                            return (
                              <td className="px-0 py-3 text-sm ">
                                <p className="text-gray-900 whitespace-wrap pl-5 ">
                                  <row.icon />
                                </p>
                              </td>
                            );
                          } else {
                            return (
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {row[key]}
                                </p>
                              </td>
                            );
                          }
                        })}

                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          {actions.isViewable && (
                            <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight cursor-pointer">
                              <span className="h-8 w-8 shadow-[0_2px_6px_#fd9b96] inset-0 bg-blue-700 rounded relative text-white flex justify-center items-center">
                                <FaEye />
                              </span>
                            </span>
                          )}
                          {actions.isEditable && (
                            <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight cursor-pointer">
                              <span className="h-8 w-8 shadow-[0_2px_6px_#fd9b96] inset-0 bg-blue-700 rounded relative text-white flex justify-center items-center">
                              <FaEdit />
                              </span>
                            </span>
                          )}
                          {actions.isDeletable && (
                            <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight cursor-pointer">
                              <span className="h-8 w-8 shadow-[0_2px_6px_#fd9b96] inset-0 bg-red-500 rounded relative text-white flex justify-center items-center">
                                <FaTrash />
                              </span>
                            </span>
                          )}
                          {actions.isShipping && (
                            <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight cursor-pointer">
                              <span className="h-8 w-8 shadow-[0_2px_6px_#fd9b96] inset-0 bg-orange-400 rounded relative text-white flex justify-center items-center">
                                <FaTruck />
                              </span>
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {/* -------------- */}
              <div className="px-5 py-5 bg-white border-t flex justify-between">
                <span className="text-xs xs:text-sm text-gray-900">
                  Showing 1 to 4 of 50 Entries
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                  <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                    Prev
                  </button>
                  &nbsp; &nbsp;
                  <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                    Next
                  </button>
                </div>
              </div>

              {/* ----------------- */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicTable;
