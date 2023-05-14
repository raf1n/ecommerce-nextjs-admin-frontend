import React, { useState, Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { IReview } from "../../../../../interfaces/models";
import { controller } from "../../../../../src/state/StateController";
import { EcommerceApi } from "../../../../../src/API/EcommerceApi";
import {
  FaEye,
  FaLongArrowAltDown,
  FaLongArrowAltUp,
  FaTrash,
} from "react-icons/fa";
import Link from "next/link";

interface Props {
  reviewDatas: Array<IReview>;
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
  sortType: string;
  setSortType: Dispatch<SetStateAction<string>>;
  searchString: string;
  setSearchString: Dispatch<SetStateAction<string>>;
}

const ReviewTable: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const {
    sortBy,
    sortType,
    setSortType,
    setSortBy,
    searchString,
    setSearchString,
  } = props;

  const tableHeaders = {
    sn: "sn",
    //  for testing porpuse using "slug" coz user only one !!
    // name: "slug",
    name: "user.fullName",
    products: "reviewProducts.productName",
    rating: "rating",
    status: "status",
    action: "action",
  };

  return (
    <div>
      <div style={{ margin: "25px", backgroundColor: "white" }}>
        <div className="p-4 rounded w-full">
          <div className="flex items-center justify-between pb-6">
            <div>
              <span className="text-xs text-gray-500 px-1">Show </span>
              <select
                name="dataTable_length"
                aria-controls="dataTable"
                className="custom-select custom-select-sm form-control form-control-sm border bg-gray-50  hover:border-blue-600 text-gray-500 h-[42px] w-[52px] font-light text-sm text-center"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <span className="text-xs text-gray-500  px-1">entries</span>
            </div>
            {/* ***** */}
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
            {/* ***** */}
          </div>
          <div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-1 overflow-x-auto">
              <div className="inline-block min-w-full shadow  overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr className="h-16">
                      {Object.keys(tableHeaders).map((header: any) => (
                        <th className=" px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          <span className="flex">
                            <span className="flex-1">{header}</span>
                            <FaLongArrowAltUp
                              onClick={() => {
                                setSortType("asc");
                                //@ts-ignore
                                setSortBy(tableHeaders[header]);
                              }}
                              className={`${
                                //@ts-ignore
                                sortBy === tableHeaders[header] &&
                                sortType === "asc"
                                  ? "fill-gray-700"
                                  : "fill-gray-300"
                              } w-2 ml-2 cursor-pointer`}
                            />{" "}
                            <FaLongArrowAltDown
                              onClick={() => {
                                setSortType("desc");
                                //@ts-ignore
                                setSortBy(tableHeaders[header]);
                              }}
                              className={`${
                                //@ts-ignore
                                sortBy === tableHeaders[header] &&
                                sortType === "desc"
                                  ? "fill-gray-700"
                                  : "fill-gray-300"
                              } w-2 ml-1 cursor-pointer`}
                            />
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  {/* -----------Plz Attention ,Table body/Row start here -------------- */}
                  <tbody>
                    {props.reviewDatas.map((tabledata: IReview, index) => (
                      <tr className="even:bg-gray-50 odd:bg-white">
                        <td className="px-3 py-3 text-sm">
                          <p className="text-gray-900 ">{index + 1}</p>
                        </td>
                        <td className="px-3 py-3  text-sm">
                          <p className="text-gray-900 capitalize">
                            {/* {tabledata?.slug} */}
                            {/* for testing porpuse */}
                            {tabledata?.user?.fullName}
                          </p>
                        </td>
                        <td className="px-3 py-3    text-sm">
                          <p className="text-[#6777ef] ">
                            <Link
                              href={`http://localhost:3000/single_product?slug=${tabledata.reviewProducts.slug}`}
                            >
                              {tabledata.reviewProducts.productName}
                            </Link>
                          </p>
                        </td>
                        <td className="px-0 py-3  text-sm">
                          <p className="text-gray-900 capitalize">
                            {tabledata.rating}
                          </p>
                        </td>
                        <td className="px-3 py-3   text-sm ">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight ">
                            <span
                              aria-hidden
                              className={`absolute inset-0 ${
                                tabledata.status === "inactive"
                                  ? "bg-red-500"
                                  : "bg-green-500"
                              }  rounded-full`}
                            ></span>
                            <span className="relative text-white text-xs capitalize break-words">
                              {tabledata.status}
                            </span>
                          </span>
                        </td>

                        <td className="px-2 py-3  text-sm">
                          <Link
                            href={`/seller/product_reviews/${tabledata.slug}/review`}
                          >
                            <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                style={{ boxShadow: "0 2px 6px #acb5f6" }}
                                className="h-8 w-8  inset-0 bg-blue-700   rounded  relative text-white flex justify-center items-center"
                              >
                                <FaEye />
                              </span>
                            </span>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* ---------- table footer  ------------------------------- */}
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
                      className="relative z-10 inline-flex items-center  bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20 hover:bg-indigo-500 hover:text-white "
                    >
                      1
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-indigo-500 hover:text-white  focus:z-20"
                    >
                      2
                    </a>
                    <a
                      href="#"
                      className="relative hidden items-center bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-indigo-500 hover:text-white  focus:z-20 md:inline-flex"
                    >
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
    </div>
  );
};

export default ReviewTable;
