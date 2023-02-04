import React, { Dispatch, SetStateAction, useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import {
  FaEdit,
  FaEye,
  FaTrash,
  FaTruck,
  FaLongArrowAltUp,
  FaLongArrowAltDown,
} from "react-icons/fa";
import ToggleButton from "../../pages/AdminPage/Dashboard/ManageCategories/ToggleButton/ToggleButton";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  apiUrl: string;
  tableHeaders: Array<string>;
  actions?: {
    isEditable?: boolean;
    isDeletable?: boolean;
    isShipping?: boolean;
    isViewable?: boolean;
    isSeller?: boolean;
  };
  testDynamicTableData: Array<object>;
  setDeleteModalSlug: Dispatch<SetStateAction<string>>;
  sortBy: string;
  sortType: string;
  setSortBy: Dispatch<SetStateAction<string>>;
  setSortType: Dispatch<SetStateAction<string>>;
  setSearchString: Dispatch<SetStateAction<string>>;
  // handleSetSortBy: Function;
}
const DynamicTable: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const router = useRouter();
  const { asPath } = router;
  const {
    tableHeaders,
    actions,
    testDynamicTableData,
    setDeleteModalSlug,
    sortBy,
    sortType,
    setSortBy,
    setSortType,
    setSearchString,
    apiUrl,
    // handleSetSortBy,
  } = props;

  console.log(testDynamicTableData);

  return (
    <div>
      <div className="bg-white p-4 rounded-md w-full">
        <div className="flex items-center justify-between pb-6">
          <div>
            <span className="text-xs text-gray-500 px-1">Show </span>
            <select
              name="dataTable_length"
              aria-controls="dataTable"
              className="custom-select custom-select-sm form-control form-control-sm border hover:border-blue-600 text-gray-500 h-[42px] w-[52px] font-light text-sm text-center">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <span className="text-xs text-gray-500  px-1">Entries</span>
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="" className="text-xs text-gray-500">
              Search
            </label>
            <div className={`flex items-center ml-3   `}>
              <input
                onChange={(e) => setSearchString(e.target.value)}
                className={` rounded outline-none  border hover:border-blue-400 h-[31px] w-[181px] py-[2px] px-[6px]`}
                type="text"
                name=""
                id=""
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
                      <th
                        key={idx}
                        className=" px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        <span className="flex">
                          <span className="flex-1">{header}</span>
                          <FaLongArrowAltUp
                            onClick={() => {
                              setSortType("asc");
                              setSortBy(header);
                            }}
                            className={`${
                              sortBy === header && sortType === "asc"
                                ? "fill-gray-700"
                                : "fill-gray-300"
                            } w-2 ml-2 cursor-pointer`}
                          />{" "}
                          <FaLongArrowAltDown
                            onClick={() => {
                              setSortType("desc");
                              setSortBy(header);
                            }}
                            className={`${
                              sortBy === header && sortType === "desc"
                                ? "fill-gray-700"
                                : "fill-gray-300"
                            } w-2 ml-1 cursor-pointer`}
                          />
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                {/* ------------------------- */}
                <tbody>
                  {testDynamicTableData.map((row: any, idx) => {
                    return (
                      <tr key={row.slug} className="border-b border-gray-200">
                        {Object.keys(row).map((key: any, idx) => {
                          if (key === "link") {
                            return null;
                          } else if (key === "status") {
                            return (
                              <td key={idx} className="px-3 py-3 text-sm ">
                                <ToggleButton
                                  apiUrl={apiUrl}
                                  slug={row.slug}
                                  status={row[key]}
                                />
                              </td>
                            );
                          } else if (
                            key === "orderStatus" &&
                            row[key] === "pending"
                          ) {
                            return (
                              <td
                                key={idx}
                                className="px-5 py-5  bg-white text-sm">
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                    aria-hidden
                                    className="absolute inset-0 bg-red-500  rounded-full"></span>
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
                              <td
                                key={idx}
                                className="px-5 py-5  bg-white text-sm">
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                    aria-hidden
                                    className="absolute inset-0 bg-green-500 rounded-full"></span>
                                  <span className="relative text-white">
                                    Success
                                  </span>
                                </span>
                              </td>
                            );
                          } else if (key === "type") {
                            return (
                              <td
                                key={idx}
                                className=" px-5 py-5  bg-white text-sm">
                                <span className="flex gap-2">
                                  {row[key].map((type: any, idx: number) => (
                                    <span
                                      key={idx}
                                      className="bg-green-500 rounded-xl py-1 px-2 text-white">
                                      {type}
                                    </span>
                                  ))}
                                </span>
                              </td>
                            );
                          } else if (key === "image") {
                            return (
                              <td key={idx} className="px-3 py-3 ">
                                <img
                                  src={row[key]}
                                  className="w-[100px] h-[100px] object-cover"
                                />
                              </td>
                            );
                          } else if (key === "icon") {
                            return (
                              <td key={idx} className="px-0 py-3 text-sm ">
                                <p className="text-gray-900 whitespace-wrap pl-5 ">
                                  <row.icon />
                                </p>
                              </td>
                            );
                          } else if (key === "logo") {
                            return (
                              <td
                                key={idx}
                                className="px-5 py-5  bg-white text-sm">
                                <Image
                                  width={80}
                                  height={80}
                                  loader={() => row[key]}
                                  unoptimized={true}
                                  className="w-20 h-20 rounded-full object-cover"
                                  src={row[key]}
                                  alt="logo"
                                />
                              </td>
                            );
                          } else {
                            return (
                              <td
                                key={idx}
                                className="px-5 py-5 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {row[key]}
                                </p>
                              </td>
                            );
                          }
                        })}
                        {actions && (
                          <td key={idx} className="px-5 py-5  bg-white text-sm">
                            {actions?.isViewable && (
                              <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight cursor-pointer">
                                <span
                                  onClick={() =>
                                    router.push(`${asPath}/${row.id}/review`)
                                  }
                                  className="h-8 w-8 shadow-[0_2px_6px_#acb5f6] inset-0 bg-blue-700 rounded relative text-white flex justify-center items-center">
                                  <FaEye />
                                </span>
                              </span>
                            )}
                            {actions?.isEditable && (
                              <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight cursor-pointer">
                                <span
                                  onClick={() =>
                                    router.push(`${asPath}/${row.slug}/edit`)
                                  }
                                  className="h-8 w-8 shadow-[0_2px_6px_#acb5f6] inset-0 bg-blue-700 rounded relative text-white flex justify-center items-center">
                                  <FaEdit />
                                </span>
                              </span>
                            )}
                            {actions?.isDeletable && (
                              <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight cursor-pointer">
                                <span
                                  onClick={() => setDeleteModalSlug(row.slug)}
                                  className="h-8 w-8 shadow-[0_2px_6px_#fd9b96] inset-0 bg-red-500 rounded relative text-white flex justify-center items-center">
                                  <FaTrash />
                                </span>
                              </span>
                            )}
                            {actions?.isShipping && (
                              <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight cursor-pointer">
                                <span className="h-8 w-8 shadow-[0_2px_6px_#acb5f6] inset-0 bg-orange-400 rounded relative text-white flex justify-center items-center">
                                  <FaTruck />
                                </span>
                              </span>
                            )}
                          </td>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {/* <SharedDeleteModal
                showModal={showModal}
                setShowModal={setShowModal}
              ></SharedDeleteModal> */}
              {/* -----  --------- */}
              {/* <div className="px-5 py-5 bg-white border-t flex justify-between">
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
              </div> */}
              {/* ------------ */}
              <div className="px-5 py-5  border-t flex justify-between">
                <div>
                  <span className="text-xs xs:text-sm text-gray-900">
                    Showing 1 to 10 of 50 Entries
                  </span>
                </div>
                <div className="inline-flex  xs:mt-0">
                  <button className="text-sm text-indigo-400 bg-indigo-50 transition duration-150 hover:bg-indigo-500 hover:text-white   font-semibold py-2 px-4 rounded-l">
                    Prev
                  </button>
                  &nbsp; &nbsp;
                  <a
                    href="#"
                    aria-current="page"
                    className="relative z-10 inline-flex items-center  bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20 hover:bg-indigo-500 hover:text-white ">
                    1
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-indigo-500 hover:text-white  focus:z-20">
                    2
                  </a>
                  <a
                    href="#"
                    className="relative hidden items-center bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-indigo-500 hover:text-white  focus:z-20 md:inline-flex">
                    3
                  </a>
                  <button className="text-sm text-indigo-400 bg-indigo-50 transition duration-150 hover:bg-indigo-500 hover:text-white   font-semibold py-2 px-4 rounded-r">
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
