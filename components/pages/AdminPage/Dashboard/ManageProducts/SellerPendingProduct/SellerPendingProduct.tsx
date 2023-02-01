import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import SharedAddNewButton from "../../../../../shared/SharedAddNewButton/SharedAddNewButton";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import { useRouter } from "next/router";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import { IProducts } from "../../../../../../interfaces/models";
import {
  FaEdit,
  FaLongArrowAltDown,
  FaLongArrowAltUp,
  FaTrash,
} from "react-icons/fa";
import SharedDeleteModal from "../../../../../shared/SharedDeleteModal/SharedDeleteModal";
import ApprovalToggleButton from "../ApprovalToggleButton/ApprovalToggleButton";

interface Props {}

const SellerPendingProduct: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const router = useRouter();
  const { asPath } = router;
  const [sellerPendingProducts, setSellerPendingProducts] = useState<
    IProducts[]
  >([]);
  const [deleteModalSlug, setDeleteModalSlug] = useState<any | string>("");
  const [refresh, setRefresh] = useState(false);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortType, setSortType] = useState("desc");
  const [searchString, setSearchString] = useState("");
  const refreshPage = () => {
    setTimeout(() => {
      setRefresh(!refresh);
    }, 1500);
  };
  const handleDelete = async () => {
    const { res, err } = await EcommerceApi.deleteProduct(deleteModalSlug);
    if (res) {
      setDeleteModalSlug("");
      const remainingProducts = sellerPendingProducts.filter(
        (product) => product.slug !== deleteModalSlug
      );
      setSellerPendingProducts(remainingProducts);
    }
  };
  useEffect(() => {
    const fetchAllProducts = async () => {
      const { res, err } = await EcommerceApi.allProductsAdmin(
        `sortBy=${sortBy}&sortType=${sortType}&search=${searchString}`
      );
      if (err) {
        console.log(err);
      } else {
        setSellerPendingProducts(res.sellerPendingProducts);
      }
    };

    fetchAllProducts();
  }, [searchString, sortBy, sortType, refresh]);
  const tableHeaders = {
    sn: "sn",
    name: "productName",
    price: "price",
    photo: "imageURL",
    action: "action",
    type: "type",
    status: "approvalStatus",
  };
  return (
    <div className="w-full">
      <DashboardBreadcrumb
        headline="Pending Products"
        slug="Pending Products"
        link="/seller_pending_products"
      ></DashboardBreadcrumb>
      <div className="mx-[25px]">
        <div className="section-body">
          <Link className="inline-block" href="/products/create">
            <SharedAddNewButton></SharedAddNewButton>
          </Link>
          <div className="mt-7">
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
                      onChange={(e) => setSearchString(e.target.value)}
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
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-1 overflow-x-auto">
                  <div className="inline-block min-w-full shadow overflow-hidden">
                    <table className="min-w-full leading-normal">
                      <thead>
                        <tr className="h-16">
                          {Object.keys(tableHeaders).map((header: any) => (
                            <th className=" px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              <span className="flex">
                                {header}
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
                        {sellerPendingProducts.map((data: IProducts, indx) => (
                          <tr className="even:bg-gray-100 odd:bg-white">
                            <td className="px-5 py-5  text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {/* {data?.slug?.split("_")[2]} */}
                                {indx + 1}
                              </p>
                            </td>
                            <td className="px-5 py-5 text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {data.productName}
                              </p>
                            </td>
                            <td className="px-5 py-5 text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {data.price}
                              </p>
                            </td>
                            <td className="px-3 py-3 ">
                              {data && data.imageURL && (
                                <img
                                  src={data?.imageURL[0]}
                                  className="w-[100px] h-[100px] object-cover"
                                />
                              )}
                            </td>
                            <td className="px-5 py-5  text-sm">
                              <span className="flex gap-2">
                                {data.isNewArrival && (
                                  <span className="bg-green-500 rounded-xl py-1 px-2 text-white">
                                    New
                                  </span>
                                )}
                                {data.isFeatured && (
                                  <span className="bg-blue-500 rounded-xl py-1 px-2 text-white">
                                    Featured
                                  </span>
                                )}

                                {data.isBestProduct && (
                                  <span className="bg-red-500 rounded-xl py-1 px-2 text-white">
                                    Best
                                  </span>
                                )}
                                {data.isPopular && (
                                  <span className="bg-orange-500 rounded-xl py-1 px-2 text-white">
                                    Popular
                                  </span>
                                )}
                                {data.isTopProduct && (
                                  <span className="bg-amber-500 rounded-xl py-1 px-2 text-white">
                                    Top
                                  </span>
                                )}
                              </span>
                            </td>
                            <td
                              onClick={() => refreshPage()}
                              className="px-3 py-3 text-sm "
                            >
                              <ApprovalToggleButton
                                slug={data?.slug}
                                status={data?.approvalStatus}
                              />
                            </td>
                            <td className="px-2 py-3  text-sm">
                              <button
                                onClick={() =>
                                  router.push(`products/${data.slug}/edit`)
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
                              </button>
                              {/* <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight"> */}
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
                              {/* </span> */}
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
  );
};

export default SellerPendingProduct;
