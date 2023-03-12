import Link from "next/link";
import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { IWithdraw } from "../../../../interfaces/models";
import { controller } from "../../../../src/state/StateController";
import SharedAddNewButton from "../../../shared/SharedAddNewButton/SharedAddNewButton";
import DashboardBreadcrumb from "../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";

interface Props {}

const tableHeaders = {
  sn: "sn",
  method: "Method",
  charge: "Charge",
  "total Amount": "Total Amount",
  "withdraw Amount": "Withdraw Amount",
  status: "status",
  action: "Action",
};

const MyWithdraw: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [withdrawData, setWithdrawData] = useState<IWithdraw[]>([]);
  const [deleteModalSlug, setDeleteModalSlug] = useState<any | string>("");
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortType, setSortType] = useState("desc");
  const [searchString, setSearchString] = useState("");

  return (
    <div className="w-full">
      <DashboardBreadcrumb
        headline="My Withdraw"
        slug="My Withdraw"
        link="/my_withdraw"
      ></DashboardBreadcrumb>
      <div className="mx-[25px]">
        <div className="section-body">
          <Link className="inline-block" href="/seller/my_withdraw/create">
            <button className=" flex items-center justify-center bg-blue-700 hover:bg-blue-600 text-white text-sm tracking-[.5px] shadow-[0_2px_6px_#acb5f6] py-2 px-3 rounded">
              <BiPlus className=" h-6 w-6" />
              <span>New Withdraw</span>
            </button>
          </Link>
          <div className="mt-7">
            <div className="bg-white p-8 rounded-md w-full">
              <div className=" flex items-center justify-between pb-6">
                <div>
                  <span className="text-xs text-gray-500 px-1">Show </span>
                  <select
                    name="dataTable_length"
                    aria-controls="dataTable"
                    className="custom-select custom-select-sm form-control form-control-sm border hover:border-blue-600 text-gray-500 h-[42px] w-[52px] font-light text-sm text-center"
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                  <span className="text-xs text-gray-500  px-1">entries</span>
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
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-1 overflow-x-auto">
                  <div className="inline-block min-w-full shadow overflow-hidden">
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
                      <tbody>
                        {withdrawData.map((data: IWithdraw, indx) => (
                          <tr className="even:bg-gray-100 odd:bg-white">
                            <td className="px-5 py-5  text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {indx + 1}
                              </p>
                            </td>
                            <td className="px-5 py-5 text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {/* {data.productName} */}
                              </p>
                            </td>
                            <td className="px-5 py-5 text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {/* {data.price} */}
                              </p>
                            </td>
                            <td className="px-3 py-3 ">
                              {/* {data && data.imageURL && (
                                <img
                                  src={data?.imageURL[0]}
                                  className="w-[100px] h-[100px] object-cover"
                                />
                              )} */}
                            </td>

                            {/* <td className="px-3 py-3 text-sm ">
                              <ProductsToggleButton
                                slug={data?.slug}
                                status={data?.status}
                              />
                            </td> */}
                            <td className="px-2 py-3  text-sm">
                              {/* <button
                                onClick={() =>
                                  router.push(`${asPath}/${data.slug}/edit`)
                                }
                              >
                                <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                    style={{
                                      boxShadow: "0 2px 6px #acb5f6",
                                    }}
                                    className="h-8 w-8  inset-0 bg-blue-700   rounded  relative text-white flex justify-center items-center"
                                  >
                                    <FaEdit />
                                  </span>
                                </span>
                              </button>
                              <button>
                                <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                    onClick={() =>
                                      setDeleteModalSlug(data?.slug)
                                    }
                                    // onClick={() => openModal()}
                                    style={{
                                      boxShadow: "0 2px 6px #fd9b96",
                                    }}
                                    className="h-8 w-8  inset-0 bg-red-500   rounded  relative text-white flex justify-center items-center"
                                  >
                                    <FaTrash />
                                  </span>
                                </span>
                              </button> */}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWithdraw;
