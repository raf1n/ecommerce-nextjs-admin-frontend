import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FaEye, FaTrash, FaEdit } from "react-icons/fa";

import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import { controller } from "../../../../../../src/state/StateController";
import { Jsondata } from "../../../../../../src/utils/Jsondata";

import SharedAddNewButton from "../../../../../shared/SharedAddNewButton/SharedAddNewButton";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import Link from "next/link";
import { useRouter } from "next/router";
import SharedDeleteModal from "../../../../../shared/SharedDeleteModal/SharedDeleteModal";
import { ISubCategories } from "../../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import ToggleButton from "./ToggleButton";

interface Props {}

const SubCategories: React.FC<Props> = (props) => {
  const user_slug = useSelector(() => controller.states.currentUser?.slug);
  const router = useRouter();
  const { asPath } = router;
  const [subCategoriesData, setSubCategoriesData] = useState<ISubCategories[]>(
    []
  );
  // const [showModal, setShowModal] = useState(false);
  const [deleteModalSlug, setDeleteModalSlug] = useState<any | string>("");
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortType, setSortType] = useState("desc");
  const [searchString, setSearchString] = useState("");

  const handleDelete = async () => {
    controller.setApiLoading(true);

    const { res, err } = await EcommerceApi.deleteSubCategories(
      deleteModalSlug
    );
    if (res) {
      setDeleteModalSlug("");
      const remainingBrands = subCategoriesData.filter(
        (product) => product.slug !== deleteModalSlug
      );
      setSubCategoriesData(remainingBrands);
    }

    controller.setApiLoading(false);
  };

  useEffect(() => {
    const fetchAllSubCategoriesAdminData = async () => {
      if (user_slug) {
        const { res, err } = await EcommerceApi.allSubCategoriesAdmin(
          `sortBy=${sortBy}&sortType=${sortType}&search=${searchString}`
        );
        if (err) {
          console.log(err);
        } else {
          setSubCategoriesData(res);
        }
      }
    };
    fetchAllSubCategoriesAdminData();
  }, [searchString, sortBy, sortType, user_slug]);
  const tableHeaders = {
    sn: "sn",
    "sub category": "subcat_name",
    slug: "slug",
    category: "cat_name",
    // icon: "cat_icon",
    // type: "type",
    status: "subcat_status",
    action: "action",
  };
  return (
    <div className="w-full">
      <DashboardBreadcrumb
        headline="Product Sub Category"
        slug="Product Sub Categories"
        link="/product_sub_categories"
      ></DashboardBreadcrumb>
      <div className="m-6">
        <Link className="inline-block" href="product_sub_categories/create">
          <SharedAddNewButton></SharedAddNewButton>
        </Link>
        <div style={{ margin: "25px 0", backgroundColor: "white" }}>
          <div className="p-4 rounded w-full">
            <div className="flex items-center justify-between pb-6">
              <div>
                <span className="text-xs text-gray-500 px-1">Show </span>
                <select
                  name="dataTable_length"
                  aria-controls="dataTable"
                  className="custom-select custom-select-sm form-control form-control-sm bg-gray-50  border hover:border-blue-600 text-gray-500 h-[42px] w-[52px] font-light text-sm text-center"
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

                    <tbody>
                      {subCategoriesData.map(
                        (tabledata: ISubCategories, index) => (
                          <tr className="even:bg-gray-50 odd:bg-white">
                            <td className="px-3 py-3   text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {index + 1}
                              </p>
                            </td>
                            <td className="px-3 py-3  text-sm">
                              <p className="text-gray-900 whitespace-no-wrap ">
                                {tabledata.subcat_name}
                              </p>
                            </td>
                            <td className="px-3 py-3 text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {tabledata.slug}
                              </p>
                            </td>
                            <td className="px-0 py-3 text-sm">
                              <p className="text-gray-900 whitespace-wrap">
                                {tabledata?.cat_name}
                              </p>
                            </td>
                            <td className="px-1 py-3 text-sm ">
                              <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight ">
                                <ToggleButton
                                  slug={tabledata?.slug}
                                  status={tabledata.subcat_status}
                                />
                              </span>
                            </td>

                            <td className="px-2 py-3  text-sm">
                              <button
                                onClick={() =>
                                  router.push(
                                    `${asPath}/${tabledata.slug}/edit`
                                  )
                                }
                              >
                                <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                    style={{ boxShadow: "0 2px 6px #acb5f6" }}
                                    className="h-8 w-8  inset-0 bg-blue-700   rounded  relative text-white flex justify-center items-center"
                                  >
                                    <FaEdit />
                                  </span>
                                </span>
                              </button>
                              <button
                                onClick={
                                  () => setDeleteModalSlug(tabledata.slug)

                                  // setShowModal(true)
                                }
                              >
                                <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                    style={{ boxShadow: "0 2px 6px #fd9b96" }}
                                    className="h-8 w-8  inset-0 bg-red-500   rounded  relative text-white flex justify-center items-center"
                                  >
                                    <FaTrash />
                                  </span>
                                </span>
                              </button>
                            </td>
                            <SharedDeleteModal
                              deleteModalSlug={deleteModalSlug}
                              handleDelete={handleDelete}
                              setDeleteModalSlug={setDeleteModalSlug}
                            ></SharedDeleteModal>
                          </tr>
                        )
                      )}
                    </tbody>
                    {/* <SharedDeleteModal
                      showModal={showModal}
                      setShowModal={setShowModal}
                    ></SharedDeleteModal> */}
                  </table>
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
    </div>
  );
};

export default SubCategories;
