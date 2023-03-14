import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { FaLongArrowAltDown, FaLongArrowAltUp, FaTrash } from "react-icons/fa";
import { useRouter } from "next/router";
import SharedDeleteModal from "../../../../../shared/SharedDeleteModal/SharedDeleteModal";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import { controller } from "../../../../../../src/state/StateController";
import {
  IFlashSaleProducts,
  IProduct,
} from "../../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import Select from "react-select";
import ToggleButton from "../../ManageCategories/ToggleButton/ToggleButton";

interface Props {}

const reactSelectStyle = {
  control: (base: any) => ({
    ...base,
    height: "42px",
    width: "100%",
    margin: "0",
    fontColor: "#495057",
    paddingLeft: "5px",
    paddingRight: "5px",
    fontSize: "14px",
    borderRadius: 5,
    borderColor: "#e4e6fc",
    backgroundColor: "#fdfdff",
    cursor: "pointer",
  }),
  menuList: (styles: any) => ({
    ...styles,
    fontSize: "13px",
  }),
};

const tableHeaders = {
  sn: "sn",
  product: "productName",
  status: "status",
  action: "action",
};

const options = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
];

const FlashSaleProducts: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const [sortBy, setSortBy] = useState("createdAt");
  const [sortType, setSortType] = useState("desc");
  const [searchString, setSearchString] = useState("");
  const [deleteModalSlug, setDeleteModalSlug] = useState<any | string>("");
  const [allProductsData, setAllProductsData] = useState<IProduct[]>([]);
  const [flashSaleProductsData, setFlashSaleProductsData] = useState<
    IFlashSaleProducts[]
  >([]);
  const [isSearchable, setIsSearchable] = useState(true);

  const getAllFlashSaleProductsData = async () => {
    const { res, err } = await EcommerceApi.getFlashSaleProductsData(
      `sortBy=${sortBy}&sortType=${sortType}&search=${searchString}`
    );
    if (res) {
      setFlashSaleProductsData(res);
    }
  };

  useEffect(() => {
    const getAllProductsData = async () => {
      const { res, err } = await EcommerceApi.allProducts();
      if (res) {
        setAllProductsData(res.allProductData);
      }
    };

    getAllFlashSaleProductsData();
    getAllProductsData();
  }, [sortBy, sortType, searchString]);

  const handleFlashProduct = async (e: any) => {
    e.preventDefault();
    const flashSale = {
      product_slug: e.target.product.value,
      status: e.target.status.value,
    };
    console.log(e.target.product.value, e.target.status.value);
    const { res, err } = await EcommerceApi.addFlashSaleProducts(flashSale);
    if (res) {
      getAllFlashSaleProductsData();
    }
  };

  const handleDelete = async () => {
    const { res, err } = await EcommerceApi.deleteFlashSale(deleteModalSlug);
    if (res) {
      console.log(res);
      setDeleteModalSlug("");
      getAllFlashSaleProductsData();
    }
  };

  return (
    <div className="w-full">
      <DashboardBreadcrumb
        headline="Flash Sale Products"
        slug="Flash Sale Products"
        link="flash_sale_products"
      ></DashboardBreadcrumb>
      <div className="px-[25px] w-full relative">
        <div className="mt-4">
          <div className="mt-6 bg-white rounded relative mb-7 border-0">
            <div className="p-5 leading-6 mt-7">
              <form onSubmit={handleFlashProduct}>
                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2 font-semibold">
                    Product
                  </label>
                  {allProductsData && (
                    <Select
                      isSearchable={isSearchable}
                      name="product"
                      id="product"
                      options={allProductsData.map((data) => {
                        return {
                          value: data.slug,
                          label: data.productName,
                        };
                      })}
                      styles={reactSelectStyle}
                      components={{
                        IndicatorSeparator: () => null,
                      }}
                    />
                  )}
                </div>
                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2 font-semibold">
                    Status
                  </label>
                  <Select
                    isSearchable={isSearchable}
                    name="status"
                    id="status"
                    options={options}
                    styles={reactSelectStyle}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                  />
                </div>
                <div className="col-12">
                  <button className="text-white rounded py-[.3rem] px-[.8rem] shadow-[0_2px_6px_#acb5f6] border border-[#6777ef] bg-[#2046DA]">
                    Add Stock
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[25] rounded mx-[25px] bg-white">
        <div className="p-4  w-full">
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
                  {/* -------Plz Attention ,Table body/Row start here -------------- */}
                  <tbody>
                    {flashSaleProductsData.map((data, index) => (
                      // <div>
                      <tr key={index} className="even:bg-gray-50 odd:bg-white">
                        <td className="px-3 py-3    text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {index + 1}
                          </p>
                        </td>

                        {data.productsData && (
                          <td className="px-3 py-3">
                            <p className="text-gray-900 whitespace-no-wrap ">
                              {data?.productsData.productName}
                            </p>
                          </td>
                        )}

                        <td className="px-3 py-3    ">
                          <ToggleButton
                            status={data.status}
                            slug={data.slug}
                            apiUrl="flash-sale"
                          />
                        </td>

                        <td className="px-2 py-3  text-sm">
                          <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              onClick={() => {
                                setDeleteModalSlug(data.slug);
                              }}
                              style={{
                                boxShadow: "0 2px 6px #fd9b96",
                              }}
                              className="h-8 w-8  inset-0 bg-red-500   rounded  relative text-white flex justify-center items-center"
                            >
                              <FaTrash />
                            </span>
                          </span>
                        </td>
                      </tr>
                      // </div>
                    ))}
                  </tbody>
                  {/* <tbody>
                    <tr className="even:bg-gray-50 odd:bg-white">
                      <td className="px-3 py-3    text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">1</p>
                      </td>

                      <td className="px-3 py-3    ">
                        <p className="text-gray-900 whitespace-no-wrap ">100</p>
                      </td>

                      <td className="px-3 py-3    ">
                        <p className="text-gray-900 whitespace-no-wrap ">
                          01/02/23
                        </p>
                      </td>

                      <td className="px-2 py-3  text-sm">
                        <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            // onClick={() => openModal()}
                            style={{
                              boxShadow: "0 2px 6px #fd9b96",
                            }}
                            className="h-8 w-8  inset-0 bg-red-500   rounded  relative text-white flex justify-center items-center"
                          >
                            <FaTrash />
                          </span>
                        </span>
                      </td>
                    </tr>
                  </tbody> */}
                </table>

                {/* -------------- */}
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
          <SharedDeleteModal
            deleteModalSlug={deleteModalSlug}
            handleDelete={handleDelete}
            setDeleteModalSlug={setDeleteModalSlug}
          ></SharedDeleteModal>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleProducts;
