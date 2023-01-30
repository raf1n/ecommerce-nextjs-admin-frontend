import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "./../../../../../../src/state/StateController";
import DashboardBreadcrumb from "./../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import { IProducts } from "../../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import { FaEdit, FaTrash } from "react-icons/fa";
import SharedDeleteModal from "../../../../../shared/SharedDeleteModal/SharedDeleteModal";
import { useRouter } from "next/router";

interface Props {}

const ProductsStockOut: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [stockoutProducts, setStockoutProducts] = useState<IProducts[]>([]);
  const [deleteModalSlug, setDeleteModalSlug] = useState<any | string>("");
  const router = useRouter();
  useEffect(() => {
    const getStockoutProducts = async () => {
      const { res, err } = await EcommerceApi.allProducts();
      if (res) {
        setStockoutProducts(res.stockOutProducts);
      }
    };
    getStockoutProducts();
  }, []);
  const handleDelete = async () => {
    const { res, err } = await EcommerceApi.deleteProduct(deleteModalSlug);
    if (res) {
      setDeleteModalSlug("");
      const remainingBrands = stockoutProducts.filter(
        (product) => product.slug !== deleteModalSlug
      );
      setStockoutProducts(remainingBrands);
    }
  };
  return (
    <div className="w-full">
      <DashboardBreadcrumb
        headline="Stock Out Products"
        slug="Stock Out"
        link="/stock_out"
      ></DashboardBreadcrumb>
      <div className="mx-[25px]">
        <div className="section-body">
          {/* <Link className="inline-block" href="/products/create">
            <SharedAddNewButton></SharedAddNewButton>
          </Link> */}
          <div className="mt-7">
            <div>
              <div className="bg-white p-8 rounded-md w-full">
                <div className=" flex items-center justify-between pb-6">
                  <div>
                    <span className="text-xs px-1">Show </span>
                    <select
                      name="dataTable_length"
                      aria-controls="dataTable"
                      className="custom-select custom-select-sm form-control form-control-sm"
                    >
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                    <span className="text-xs px-1">Entries</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex bg-gray-50 items-center p-2 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <input
                        className="bg-gray-50 outline-none ml-1 block "
                        type="text"
                        name=""
                        id=""
                        placeholder="search..."
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                      <table className="min-w-full leading-normal">
                        <thead>
                          <tr>
                            <th className=" px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              <span className="flex">
                                SN
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 256 512"
                                  className="w-2 ml-2 cursor-pointer"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M88 166.059V468c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12V166.059h46.059c21.382 0 32.09-25.851 16.971-40.971l-86.059-86.059c-9.373-9.373-24.569-9.373-33.941 0l-86.059 86.059c-15.119 15.119-4.411 40.971 16.971 40.971H88z"></path>
                                </svg>{" "}
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 256 512"
                                  className="w-2 ml-1 cursor-pointer"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z"></path>
                                </svg>
                              </span>
                            </th>
                            <th className=" px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              <span className="flex">
                                Name
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 256 512"
                                  className="w-2 ml-2 cursor-pointer"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M88 166.059V468c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12V166.059h46.059c21.382 0 32.09-25.851 16.971-40.971l-86.059-86.059c-9.373-9.373-24.569-9.373-33.941 0l-86.059 86.059c-15.119 15.119-4.411 40.971 16.971 40.971H88z"></path>
                                </svg>{" "}
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 256 512"
                                  className="w-2 ml-1 cursor-pointer"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z"></path>
                                </svg>
                              </span>
                            </th>
                            <th className=" px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              <span className="flex">
                                Price
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 256 512"
                                  className="w-2 ml-2 cursor-pointer"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M88 166.059V468c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12V166.059h46.059c21.382 0 32.09-25.851 16.971-40.971l-86.059-86.059c-9.373-9.373-24.569-9.373-33.941 0l-86.059 86.059c-15.119 15.119-4.411 40.971 16.971 40.971H88z"></path>
                                </svg>{" "}
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 256 512"
                                  className="w-2 ml-1 cursor-pointer"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z"></path>
                                </svg>
                              </span>
                            </th>
                            <th className=" px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              <span className="flex">
                                Photo
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 256 512"
                                  className="w-2 ml-2 cursor-pointer"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M88 166.059V468c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12V166.059h46.059c21.382 0 32.09-25.851 16.971-40.971l-86.059-86.059c-9.373-9.373-24.569-9.373-33.941 0l-86.059 86.059c-15.119 15.119-4.411 40.971 16.971 40.971H88z"></path>
                                </svg>{" "}
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 256 512"
                                  className="w-2 ml-1 cursor-pointer"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z"></path>
                                </svg>
                              </span>
                            </th>
                            <th className=" px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              <span className="flex">
                                Action
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 256 512"
                                  className="w-2 ml-2 cursor-pointer"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M88 166.059V468c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12V166.059h46.059c21.382 0 32.09-25.851 16.971-40.971l-86.059-86.059c-9.373-9.373-24.569-9.373-33.941 0l-86.059 86.059c-15.119 15.119-4.411 40.971 16.971 40.971H88z"></path>
                                </svg>{" "}
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 256 512"
                                  className="w-2 ml-1 cursor-pointer"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z"></path>
                                </svg>
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {stockoutProducts.map((product: IProducts, indx) => (
                            <tr className="border-b border-gray-200">
                              <td className="px-5 py-5 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {indx + 1}
                                </p>
                              </td>
                              <td className="px-5 py-5 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {product.productName}
                                </p>
                              </td>
                              <td className="px-5 py-5 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {product.price}
                                </p>
                              </td>
                              <td className="px-3 py-3 ">
                                {product && product?.imageURL && (
                                  <img
                                    src={product.imageURL[0]}
                                    className="w-[100px] h-[100px] object-cover"
                                  />
                                )}
                              </td>
                              <td className="px-5 py-5 bg-white text-sm">
                                <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight cursor-pointer">
                                  <span
                                    onClick={() =>
                                      router.push(
                                        `/products/${product.slug}/edit`
                                      )
                                    }
                                    className="h-8 w-8 shadow-[0_2px_6px_#acb5f6] inset-0 bg-blue-700 rounded relative text-white flex justify-center items-center"
                                  >
                                    <FaEdit></FaEdit>
                                  </span>
                                </span>
                                <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight cursor-pointer">
                                  <span
                                    onClick={() =>
                                      setDeleteModalSlug(product?.slug)
                                    }
                                    className="h-8 w-8 shadow-[0_2px_6px_#fd9b96] inset-0 bg-red-500 rounded relative text-white flex justify-center items-center"
                                  >
                                    <FaTrash></FaTrash>
                                  </span>
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <SharedDeleteModal
                        handleDelete={handleDelete}
                        deleteModalSlug={deleteModalSlug}
                        setDeleteModalSlug={setDeleteModalSlug}
                      ></SharedDeleteModal>
                      <div className="px-5 py-5 bg-white border-t flex justify-between">
                        <span className="text-xs xs:text-sm text-gray-900">
                          Showing 1 to 4 of 50 Entries
                        </span>
                        <div className="inline-flex mt-2 xs:mt-0">
                          <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                            Prev
                          </button>
                          &nbsp; &nbsp;
                          <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
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
      </div>
    </div>
  );
};

export default ProductsStockOut;
