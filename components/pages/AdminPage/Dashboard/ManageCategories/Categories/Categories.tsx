import React, { useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";

import SharedAddNewButton from "../../../../../shared/SharedAddNewButton/SharedAddNewButton";
import { Jsondata } from "../../../../../../src/utils/Jsondata";
import {
  FaEdit,
  FaEye,
  FaLongArrowAltDown,
  FaLongArrowAltUp,
  FaTrash,
  FaTruck,
} from "react-icons/fa";

import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import Link from "next/link";

import ToggleButton from "../ToggleButton/ToggleButton";
import { useRouter } from "next/router";
import SharedDeleteModal from "../../../../../shared/SharedDeleteModal/SharedDeleteModal";

interface Props {}

const Categories: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const router = useRouter();
  const { asPath } = router;

  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full">
      <DashboardBreadcrumb
        headline="Product Category"
        slug="Product Categories"
        link="/product_categories"
      ></DashboardBreadcrumb>
      <div className="m-6">
        <div className="section-body">
          <Link className="inline-block" href="product_categories/create">
            <SharedAddNewButton></SharedAddNewButton>
          </Link>
        </div>
        <div style={{ marginTop: "25px", backgroundColor: "white" }}>
          <div className="p-4 rounded w-full">
            <div className="flex items-center justify-between pb-6">
              <div>
                <span className="text-xs text-gray-500 px-1">Show </span>
                <select
                  name="dataTable_length"
                  aria-controls="dataTable"
                  className="custom-select custom-select-sm form-control form-control-sm border border-blue-600 text-gray-500"
                >
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
                <div className="flex bg-gray-50 items-center ml-3 p-1 rounded">
                  <input
                    className="bg-gray-50 outline-none   "
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-1 overflow-x-auto">
                <div className="inline-block min-w-full shadow  overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr className="h-16">
                        <th
                          className={`px-3 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase `}
                        >
                          <span className="flex  space-x-0 space-y-0 opacity-80">
                            SN
                            <FaLongArrowAltUp /> <FaLongArrowAltDown />
                          </span>
                        </th>
                        <th
                          className={` px-3 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase `}
                        >
                          <span className="flex  space-x-0 space-y-0  opacity-80">
                            Name
                            <FaLongArrowAltUp /> <FaLongArrowAltDown />
                          </span>
                        </th>
                        <th
                          className={`px-3 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase `}
                        >
                          <span className="flex  space-x-0 space-y-0  opacity-80">
                            Image
                            <FaLongArrowAltUp /> <FaLongArrowAltDown />
                          </span>
                        </th>
                        <th
                          className={` px-3 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase `}
                        >
                          <span className="flex  space-x-0 space-y-0  opacity-80">
                            Icon
                            <FaLongArrowAltUp /> <FaLongArrowAltDown />
                          </span>
                        </th>
                        <th
                          className={` px-3 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase `}
                        >
                          <span className="flex  space-x-0 space-y-0  opacity-80">
                            Status
                            <FaLongArrowAltUp /> <FaLongArrowAltDown />
                          </span>
                        </th>

                        <th
                          className={` px-3 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase`}
                        >
                          <span className="flex  space-x-0 space-y-0 opacity-80">
                            Action
                            <FaLongArrowAltUp /> <FaLongArrowAltDown />
                          </span>
                        </th>
                      </tr>
                    </thead>
                    {/* -----------Plz Attention ,Table body/Row start here -------------- */}
                    <tbody>
                      {Jsondata.categoriesTableData.map(
                        (categoryTableData, index) => (
                          <tr className="even:bg-gray-50 odd:bg-white">
                            <td className="px-3 py-3    text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {index + 1}
                              </p>
                            </td>
                            <td className="px-3 py-3  text-sm">
                              <p className="text-gray-900 whitespace-no-wrap ">
                                {categoryTableData.name}
                              </p>
                            </td>
                            <td className="px-3 py-3    ">
                              <img
                                width="150px"
                                src={categoryTableData.image}
                                className=""
                              ></img>
                            </td>
                            <td className="px-0 py-3 text-sm ">
                              <p className="text-gray-900 whitespace-wrap pl-5 ">
                                <categoryTableData.icon />
                              </p>
                            </td>
                            <td className="px-3 py-3 text-sm">
                              <ToggleButton status={categoryTableData.status} />
                              {/* <span className="text-gray-900 whitespace-no-wrap">
                                   
                                   
                                  </span> */}
                            </td>

                            <td className="px-2 py-3  text-sm">
                              <button
                                onClick={() =>
                                  router.push(
                                    `${asPath}/${categoryTableData.id}/edit`
                                  )
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
                                    onClick={() => setShowModal(true)}
                                    // onClick={() => openModal()}
                                    style={{
                                      boxShadow: "0 2px 6px #fd9b96",
                                    }}
                                    className="h-8 w-8  inset-0 bg-red-500   rounded  relative text-white flex justify-center items-center"
                                  >
                                    <FaTrash />
                                  </span>
                                </span>
                              </button>
                              <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight">
                                {/* <button>
                                      <span
                                        style={{
                                          boxShadow: "0 2px 6px #ffc473",
                                        }}
                                        className="h-8 w-8  inset-0 bg-orange-400   rounded  relative text-white flex justify-center items-center"
                                      >
                                        <FaTruck />
                                      </span>
                                    </button> */}
                              </span>
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                    <SharedDeleteModal
                      showModal={showModal}
                      setShowModal={setShowModal}
                    ></SharedDeleteModal>
                  </table>
                  {/* -------------- */}
                  <div className="px-5 py-5  border-t flex justify-end">
                    <div className="inline-flex mt-2 xs:mt-0">
                      <button className="text-sm text-indigo-500 transition duration-150   font-semibold py-2 px-4 rounded-l">
                        Prev
                      </button>
                      &nbsp; &nbsp;
                      <a
                        href="#"
                        aria-current="page"
                        className="relative z-10 inline-flex items-center  bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                      >
                        1
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-indigo-300 focus:z-20"
                      >
                        2
                      </a>
                      <a
                        href="#"
                        className="relative hidden items-center bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-indigo-300 focus:z-20 md:inline-flex"
                      >
                        3
                      </a>
                      <a
                        href="#"
                        className="relative hidden items-center  bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-indigo-300 focus:z-20 md:inline-flex"
                      >
                        4
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-indigo-300 focus:z-20"
                      >
                        5
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-indigo-300 focus:z-20"
                      >
                        6
                      </a>
                      <button className="ml-3 text-sm text-indigo-500 transition duration-150  font-semibold py-2 px-4 rounded-r">
                        Next
                      </button>
                    </div>
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

export default Categories;
