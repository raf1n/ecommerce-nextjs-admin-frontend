import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import {
  FaEdit,
  FaLongArrowAltDown,
  FaLongArrowAltUp,
  FaTrash,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { ICoupon } from "../../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import { controller } from "../../../../../../src/state/StateController";
import SharedAddNewButton from "../../../../../shared/SharedAddNewButton/SharedAddNewButton";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedDeleteModal from "../../../../../shared/SharedDeleteModal/SharedDeleteModal";
import ToggleButton from "../../ManageCategories/ToggleButton/ToggleButton";
import AddNewCoupon from "./AddNewCoupon/AddNewCoupon";
import UpdateCoupon from "./UpdateCoupon/UpdateCoupon";

interface Props {}

const Coupon: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [deleteModalSlug, setDeleteModalSlug] = useState<any | string>("");
  const [updateModalSlug, setUpdateModalSlug] = useState<any | string>("");
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortType, setSortType] = useState("desc");
  const [searchString, setSearchString] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [couponData, setCouponData] = useState<ICoupon[]>([]);

  const router = useRouter();
  const { asPath } = router;

  const tableHeaders = {
    sn: "sn",
    Name: "name",
    Code: "code",
    Discount: "discount",
    // icon: "cat_icon",
    // type: "type",
    "Number of times": "items_number",
    "Apply Qty": "apply_qty",
    "Expired Date": "expired_date",
    Status: "status",
    Action: "action",
  };

  const handleDelete = async () => {
    controller.setApiLoading(true);

    const { res, err } = await EcommerceApi.deleteCoupon(deleteModalSlug);
    if (res) {
      setDeleteModalSlug("");
      const remainingCoupons = couponData.filter(
        (coupon) => coupon.slug !== deleteModalSlug
      );
      setCouponData(remainingCoupons);
    }

    controller.setApiLoading(false);
  };

  useEffect(() => {
    const fetchAllCouponAdminData = async () => {
      const { res, err } = await EcommerceApi.allCouponsAdmin(
        `sortBy=${sortBy}&sortType=${sortType}&search=${searchString}`
      );
      if (err) {
        console.log(err);
      } else {
        setCouponData(res);
        controller.setCouponData(res);
        console.log(res);
      }
    };
    fetchAllCouponAdminData();
  }, [searchString, sortBy, sortType, showAddModal, updateModalSlug]);

  return (
    <div className="w-full">
      <DashboardBreadcrumb
        headline="Coupon"
        slug="Coupon"
        link="/coupon"
      ></DashboardBreadcrumb>
      <div className="m-6">
        <div onClick={() => setShowAddModal(true)} className="section-body">
          <SharedAddNewButton></SharedAddNewButton>
        </div>
        <div style={{ marginTop: "25px", backgroundColor: "white" }}>
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
                    <tbody>
                      {couponData.map((couponableData: ICoupon, index) => (
                        // <div>
                        <tr className="even:bg-gray-50 odd:bg-white">
                          <td className="px-3 py-3    text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {index + 1}
                            </p>
                          </td>
                          <td className="px-3 py-3  text-sm">
                            <p className="text-gray-900 whitespace-no-wrap ">
                              {couponableData?.name}
                            </p>
                          </td>
                          <td className="px-3 py-3  text-sm">
                            <p className="text-gray-900 whitespace-no-wrap ">
                              {couponableData?.code}
                            </p>
                          </td>
                          <td className="px-3 py-3  text-sm">
                            <p className="text-gray-900 whitespace-no-wrap ">
                              {couponableData?.discount?.role == "percent"
                                ? couponableData?.discount?.value + "%"
                                : couponableData?.discount?.value + "$"}
                            </p>
                          </td>
                          <td className="px-3 py-3  text-sm">
                            <p className="text-gray-900 whitespace-no-wrap ">
                              {couponableData?.items_number}
                            </p>
                          </td>
                          <td className="px-3 py-3  text-sm">
                            <p className="text-gray-900 whitespace-no-wrap ">
                              {couponableData?.apply_qty}
                            </p>
                          </td>
                          <td className="px-3 py-3  text-sm">
                            <p className="text-gray-900 whitespace-no-wrap ">
                              {couponableData?.expired_date}
                            </p>
                          </td>

                          <td className="px-3 py-3 text-sm">
                            <ToggleButton
                              apiUrl="coupon"
                              slug={couponableData?.slug}
                              status={couponableData.status}
                            />
                          </td>

                          <td className="px-2 py-3  text-sm">
                            <button
                              onClick={() =>
                                setUpdateModalSlug(couponableData.slug)
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
                                    setDeleteModalSlug(couponableData.slug)
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
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <AddNewCoupon
          title="Coupon"
          setShowModal={setShowAddModal}
          showModal={showAddModal}
        ></AddNewCoupon>
        <UpdateCoupon
          title="Coupon"
          setUpdateModalSlug={setUpdateModalSlug}
          updateModalSlug={updateModalSlug}
        ></UpdateCoupon>
        <SharedDeleteModal
          deleteModalSlug={deleteModalSlug}
          handleDelete={handleDelete}
          setDeleteModalSlug={setDeleteModalSlug}
        ></SharedDeleteModal>
      </div>
    </div>
  );
};

export default Coupon;
