import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import { FaLongArrowAltDown, FaLongArrowAltUp, FaTrash } from "react-icons/fa";
import { useRouter } from "next/router";
import { EcommerceApi } from "../../../../../src/API/EcommerceApi";
import { IInventoryProduct } from "../../../../../interfaces/models";
import SharedDeleteModal from "../../../../shared/SharedDeleteModal/SharedDeleteModal";
import { toast } from "react-hot-toast";

interface Props {}

const tableHeaders = {
  sn: "sn",
  stock: "stock",
  date: "date",
  action: "action",
};

const StockHistory: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const [productData, setProductData] = useState<IInventoryProduct | undefined>(
    undefined
  );

  const [sortBy, setSortBy] = useState("createdAt");
  const [sortType, setSortType] = useState("desc");
  const [searchString, setSearchString] = useState("");
  const [deleteModalSlug, setDeleteModalSlug] = useState<any | string>("");
  const [stockData, setStockData] = useState<any>();
  // const [inventoriesData, setInventoriesData] = useState([]);

  const router = useRouter();
  console.log(router.query.slug);
  const productSlug = router.query.slug;
  // const productSlug = asPath.split("/")[1];

  const fetchSingleInventory = async () => {
    if (productSlug) {
      const { res, err } = await EcommerceApi.getSingleProductInventory(
        productSlug as string,
        `sortBy=${sortBy}&sortType=${sortType}&search=${searchString}`
      );

      console.log(res);

      setProductData(res);
    }
  };

  useEffect(() => {
    fetchSingleInventory();
  }, [productSlug, sortBy, sortType, searchString]);

  const handleAddStock = async (e: any) => {
    e.preventDefault();
    controller.setApiLoading(true);

    const data = {
      product_slug: productSlug,
      quantity: parseInt(e.target.stock.value),
      type: "stockIn",
    };

    const { res, err } = await EcommerceApi.addSingleProductStock(data);

    if (res) {
      toast.success("Stock added");
      fetchSingleInventory();
      e.target.reset();
    }

    controller.setApiLoading(false);
  };

  const handleDelete = async () => {
    controller.setApiLoading(true);

    const { res, err } = await EcommerceApi.deleteSingleInventory(
      deleteModalSlug
    );

    if (res && productData?.stock && productData.slug) {
      const data = {
        stock: productData?.stock - stockData.quantity,
      };

      EcommerceApi.editProducts(data, productData?.slug);
      setDeleteModalSlug("");
    }

    controller.setApiLoading(false);
  };

  return (
    <div className="w-full">
      <DashboardBreadcrumb
        headline="Stock History"
        slug="Stock History"
        link="inventory"
      ></DashboardBreadcrumb>
      <div className="px-[25px] w-full relative">
        <div className="mt-4">
          <div className="mt-6 bg-white rounded relative mb-7 border-0">
            <div className="p-5 leading-6 mt-7">
              <form onSubmit={handleAddStock}>
                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2 font-semibold">
                    Product
                  </label>
                  <input
                    readOnly
                    type="text"
                    id="name"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                    name="productName"
                    value={productData?.productName}
                  />
                </div>
                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2 font-semibold">
                    Stock In Quantity
                  </label>
                  <input
                    required
                    min={0}
                    type="number"
                    id="name"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                    name="stock"
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
                    {productData?.stockInData.map((stockData, index) => (
                      // <div>
                      <tr
                        key={stockData.slug}
                        className="even:bg-gray-50 odd:bg-white"
                      >
                        <td className="px-3 py-3    text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {index + 1}
                          </p>
                        </td>

                        <td className="px-3 py-3    ">
                          <p className="text-gray-900 whitespace-no-wrap ">
                            {stockData?.quantity}
                          </p>
                        </td>

                        <td className="px-3 py-3    ">
                          <p className="text-gray-900 whitespace-no-wrap ">
                            {stockData?.createdAt}
                          </p>
                        </td>

                        <td className="px-2 py-3  text-sm">
                          <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              onClick={() => {
                                setStockData(stockData);
                                setDeleteModalSlug(stockData.slug);
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

export default StockHistory;
