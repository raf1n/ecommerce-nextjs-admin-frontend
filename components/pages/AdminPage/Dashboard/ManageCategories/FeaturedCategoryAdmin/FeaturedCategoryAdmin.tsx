import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import { Jsondata } from "../../../../../../src/utils/Jsondata";
import SharedAddNewButton from "../../../../../shared/SharedAddNewButton/SharedAddNewButton";

import styles from "./FeaturedCategoryAdmin.module.css";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedAddNewModal from "../../../../../shared/SharedAddNewModal/SharedAddNewModal";
import SharedDeleteModal from "../../../../../shared/SharedDeleteModal/SharedDeleteModal";

interface Props {}

const FeaturedCaategoryAdmin: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  return (
    <div className="w-full">
      <DashboardBreadcrumb
        headline="Featured Category"
        slug="Featured Category"
        link="/Featured Category"></DashboardBreadcrumb>
      <div className="m-6">
        <div className={`${styles["card"]}`}>
          <div className={`${styles["card-body"]}`}>
            <div className="">
              <label className=" text-qblack text-sm" htmlFor="">
                Existing Banner
              </label>
              <div>
                <img
                  className={`${styles["sidebarImg"]} my-2`}
                  src="https://api.websolutionus.com/shopo/uploads/website-images/featured-cat-banner-2022-09-21-02-43-49-4710.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="">
              <label className="text-qblack text-sm" htmlFor="">
                Featured Category Sidebar Banner
              </label>
              <br />
              <input
                className="text-sm my-3"
                type="file"
                name="image"
                src=""
                alt=""
              />
            </div>
            <div className="">
              <button className="bg-blue-700 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded">
                Save
              </button>
            </div>
          </div>
        </div>
        <SharedAddNewModal
          title="Featured"
          setShowModal={setShowAddModal}
          showModal={showAddModal}></SharedAddNewModal>
        <div onClick={() => setShowAddModal(true)} className="my-5">
          <SharedAddNewButton />
        </div>
        <div className={`${styles["card"]}`}>
          <div className={`${styles["card-body"]}`}>
            <div className="mx-10 my-5">
              <table className="min-w-full  leading-normal ">
                <thead>
                  <tr className="h-16">
                    <th
                      className={`px-3 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase `}>
                      <span className="flex  space-x-0 space-y-0 opacity-80">
                        Name
                      </span>
                    </th>

                    <th
                      className={` px-3 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase`}>
                      <span className="flex  space-x-0 space-y-0 opacity-80">
                        Action
                        {/* <FaLongArrowAltUp /> <FaLongArrowAltDown /> */}
                      </span>
                    </th>
                  </tr>
                </thead>
                {/* -----------Plz Attention ,Table body/Row start here -------------- */}
                <tbody>
                  {Jsondata.categoriesTableData
                    .slice(0, 3)
                    .map((categoryTableData, index) => (
                      <tr className="even:bg-gray-50 odd:bg-white">
                        <td className="px-3 py-3  text-sm">
                          <p className="text-gray-900 whitespace-no-wrap ">
                            {categoryTableData.name}
                          </p>
                        </td>

                        <td className="px-2 py-3  text-sm">
                          <button onClick={() => setShowDeleteModal(true)}>
                            <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                style={{
                                  boxShadow: "0 2px 6px #fd9b96",
                                }}
                                className="h-8 w-8  inset-0 bg-red-500   rounded  relative text-white flex justify-center items-center">
                                <FaTrash />
                              </span>
                            </span>
                          </button>
                          <SharedDeleteModal
                            setShowModal={setShowDeleteModal}
                            showModal={showDeleteModal}></SharedDeleteModal>
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
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCaategoryAdmin;
