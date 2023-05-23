import React, {
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  ChangeEvent,
} from "react";
import { useSelector } from "react-redux";
import { FaEye, FaTrash, FaTruck } from "react-icons/fa";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import { controller } from "../../../src/state/StateController";
import Link from "next/link";
import { ICartProduct, IOrder } from "../../../interfaces/models";
import SharedDeleteModal from "../SharedDeleteModal/SharedDeleteModal";
import SharedOrderStatusUpdateModal from "../SharedOrderStatusUpdateModal/SharedOrderStatusUpdateModal";
import SharedPagination from "../SharedPagination/SharedPagination";

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
  count: number;
  limit: number;
  page: number;
  setSortBy: Dispatch<SetStateAction<string>>;
  setSortType: Dispatch<SetStateAction<string>>;
  setSearchString: Dispatch<SetStateAction<string>>;
  setLimit: Dispatch<SetStateAction<number>>;
  setPage: Dispatch<SetStateAction<number>>;
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
    count,
    limit,
    page,
    setLimit,
    setPage,
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

  // debouncing
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setSearchString(e.target.value);
    }, 500);
  };

  return (
    <div className="m-[25px] bg-white">
      <div className="p-5 rounded w-full">
        <div className="flex items-center justify-between pb-4">
          <div>
            <span className="text-xs text-gray-500 px-1">Show </span>
            <select
              onChange={(e) => setLimit(parseInt(e.target.value))}
              name="dataTable_length"
              aria-controls="dataTable"
              className="border bg-gray-50  hover:border-blue-600 text-gray-500 h-[42px] w-[56px]  text-sm text-center rounded"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span className="text-xs text-gray-500  px-1">entries</span>
          </div>
          {/*********************************************/}
          <div className="flex items-center justify-between">
            <label htmlFor="" className="text-xs text-gray-500">
              Search
            </label>
            <div className={`flex items-center ml-3`}>
              <input
                maxLength={200}
                onChange={(e) => handleSearch(e)}
                className={`rounded outline-none  border hover:border-blue-400 h-[31px] w-[181px] py-[2px] px-[6px]`}
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
          {/*******************************************/}
        </div>
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-1 overflow-x-auto">
            <div className="inline-block min-w-full shadow  overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr className="h-[70px]">
                    {Object.keys(tableHeaders).map((header: any) => (
                      <th className="px-3 pt-6  border-b-[1px] border-[#ddd] bg-[rgba(0,0,0,0.04)] text-left text-[15px] font-bold  text-[#666] capitalize ">
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
                      <td className="px-3 py-3  text-sm capitalize">
                        {tabledata && tabledata.userData && (
                          <p className="text-gray-900 ">
                            {tabledata?.userData.fullName}
                          </p>
                        )}
                      </td>
                      <td className="px-3 py-3    text-sm">
                        <p className="text-gray-900 ">{tabledata.slug}</p>
                      </td>
                      <td className="px-0 py-3  text-sm">
                        <p className="text-gray-900 ">
                          {tabledata.createdAt?.split("T")[0]}
                        </p>
                      </td>
                      <td className="px-5 py-3  text-sm">
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
                              <Link
                                href={`/${states.currentUser?.role}/show_order/${tabledata.slug}`}
                              >
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
                    </tr>
                  ))}
                  <SharedOrderStatusUpdateModal
                    ordersData={ordersData}
                    showUpdateModal={props.showUpdateModal}
                    setShowUpdateModal={props.setShowUpdateModal}
                  ></SharedOrderStatusUpdateModal>
                </tbody>
              </table>
              {/* ---------- table footer  ------------------------------- */}
              <SharedPagination
                count={count}
                limit={limit}
                page={page}
                setPage={setPage}
              />
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
