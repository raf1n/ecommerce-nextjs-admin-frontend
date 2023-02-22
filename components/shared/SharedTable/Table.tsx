import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaEye, FaTrash, FaTruck } from "react-icons/fa";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import { Jsondata } from "../../../src/utils/Jsondata";
import { controller } from "../../../src/state/StateController";
import Link from "next/link";
import { ICartProduct, IOrder } from "../../../interfaces/models";
import { CartHandler } from "../../../src/utils/CartHandler";
import SharedDeleteModal from "../SharedDeleteModal/SharedDeleteModal";
import SharedOrderStatusUpdateModal from "../SharedOrderStatusUpdateModal/SharedOrderStatusUpdateModal";
import { EcommerceApi } from "../../../src/API/EcommerceApi";
interface Props {
  setShowUpdateModal: Dispatch<SetStateAction<string | any>>;
  showUpdateModal: string;
  setDeleteModalSlug: Dispatch<SetStateAction<string | any>>;
  deleteModalSlug: string;
  handleDelete: () => void;
  ordersData: IOrder[];
  tableHeaders: any;
  sortType: string;
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
  setSortType: Dispatch<SetStateAction<string>>;
  setSearchString: Dispatch<SetStateAction<string>>;
}

const Table: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const {
    tableHeaders,
    setSortBy,
    setSearchString,
    setSortType,
    sortBy,
    sortType,
    ordersData,
    setDeleteModalSlug,
  } = props;

  const handleQuantity = (product_list: ICartProduct[]) => {
    const quantity = product_list.reduce(
      (acc: number, item: ICartProduct) => acc + item.quantity,
      0
    );

    return quantity;
  };
  const orderStatus = [
    {
      value: "in_progress",
      name: "In Progress",
    },
    {
      value: "pending",
      name: "Pending",
    },
    {
      value: "delivered",
      name: "Delivered",
    },
    {
      value: "completed",
      name: "Completed",
    },
    {
      value: "declined",
      name: "Declined",
    },
  ];

  const handleOrder = (order_status: string) => {
    const order = orderStatus.find((order) => {
      if (order.value === order_status) {
        return order;
      }
    });

    return order?.name;
  };

  return (
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
                maxLength={200}
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
                          />
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
                  {ordersData.map((tabledata: IOrder, index: number) => (
                    <tr key={index} className="even:bg-gray-50 odd:bg-white">
                      <td className="px-3 py-3 text-sm">
                        <p className="text-gray-900 ">{index + 1}</p>
                      </td>
                      <td className="px-3 py-3  text-sm">
                        {tabledata && tabledata.userData && (
                          <p className="text-gray-900 ">
                            {tabledata?.userData.fullName}
                          </p>
                        )}
                      </td>
                      <td className="px-3 py-3    text-sm">
                        <p className="text-gray-900 ">
                          {tabledata.slug?.split("_")[4]}
                        </p>
                      </td>
                      <td className="px-0 py-3  text-sm">
                        <p className="text-gray-900 ">
                          {tabledata.createdAt?.split("T")[0]}
                        </p>
                      </td>
                      <td className="px-3 py-3  text-sm">
                        <p className="text-gray-900">
                          {handleQuantity(tabledata.product_list)}
                        </p>
                      </td>
                      <td className="px-3 py-3  text-sm">
                        <p className="text-gray-900 ">${tabledata.total}</p>
                      </td>

                      <td className="px-3 py-3   text-sm ">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight ">
                          <span
                            aria-hidden
                            className={`absolute inset-0 ${
                              tabledata.order_status === "pending"
                                ? "bg-red-500"
                                : "bg-green-500"
                            }  rounded-full`}
                          ></span>
                          <span className="relative text-white text-xs capitalize break-words">
                            {handleOrder(tabledata.order_status)}
                          </span>
                        </span>
                      </td>

                      <td className="px-3 py-3  text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden
                            className={`absolute inset-0  rounded-full
                            ${
                              tabledata.payment_status === "success"
                                ? " bg-green-500 "
                                : "bg-red-500 "
                            }`}
                          ></span>
                          <span className="relative text-white text-xs capitalize">
                            {tabledata.payment_status === "pending"
                              ? "Pending"
                              : "Success"}
                          </span>
                        </span>
                      </td>

                      <td className="px-2 py-3  text-sm">
                        <button>
                          <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              style={{ boxShadow: "0 2px 6px #acb5f6" }}
                              className="h-8 w-8  inset-0 bg-blue-700   rounded  relative text-white flex justify-center items-center"
                            >
                              <Link href={`/show_order/${tabledata.slug}`}>
                                <FaEye />
                              </Link>
                            </span>
                          </span>
                        </button>
                        <button>
                          <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight">
                            {tabledata && tabledata.slug && (
                              <span
                                onClick={() =>
                                  setDeleteModalSlug(tabledata.slug)
                                }
                                style={{ boxShadow: "0 2px 6px #fd9b96" }}
                                className="h-8 w-8  inset-0 bg-red-500   rounded  relative text-white flex justify-center items-center"
                              >
                                <FaTrash />
                              </span>
                            )}
                          </span>
                        </button>
                        <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight">
                          <button
                            onClick={() =>
                              props.setShowUpdateModal(tabledata.slug)
                            }
                          >
                            <span
                              style={{ boxShadow: "0 2px 6px #ffc473" }}
                              className="h-8 w-8  inset-0 bg-orange-400   rounded  relative text-white flex justify-center items-center"
                            >
                              <FaTruck />
                            </span>
                          </button>
                        </span>
                      </td>
                      <SharedOrderStatusUpdateModal
                        singleOrderData={tabledata}
                        showUpdateModal={props.showUpdateModal}
                        setShowUpdateModal={props.setShowUpdateModal}
                      ></SharedOrderStatusUpdateModal>
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
              <SharedDeleteModal
                deleteModalSlug={props.deleteModalSlug}
                handleDelete={props.handleDelete}
                setDeleteModalSlug={props.setDeleteModalSlug}
              ></SharedDeleteModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
