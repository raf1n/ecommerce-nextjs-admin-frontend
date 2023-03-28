import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";

import SharedAddNewButton from "../../../../../shared/SharedAddNewButton/SharedAddNewButton";

import styles from "./PopularCategoryAdmin.module.css";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedAddNewModal from "../../../../../shared/SharedAddNewModal/SharedAddNewModal";

import SharedDeleteModal from "../../../../../shared/SharedDeleteModal/SharedDeleteModal";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import {
  ICategories,
  IPopularCategories,
} from "../../../../../../interfaces/models";

interface Props {}

const PopularCategoryAdmin: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [categoriesData, setCategoriesData] = useState<ICategories[]>([]);
  const [deleteModalSlug, setDeleteModalSlug] = useState<any | string>("");
  const [popularCategoriesData, setPopularCategoriesData] = useState<
    IPopularCategories[]
  >([]);

  // const handleSave = async (e: any) => {
  //   e.preventDefault();
  //   const image = e.target.imageURL.files[0];
  //   console.log("image", image);
  //   const formData = new FormData();
  //   console.log("form", formData);
  //   formData.append("image", image);
  //   const { res, err } = await EcommerceApi.uploadCategoryImage(formData);
  //   console.log("response", res);
  //   if (res?.data?.url || !res?.data?.url) {
  //     let imageUrl;
  //     imageUrl = res?.data?.url;
  //     // setImageLink(data?.data?.url);
  //     if (res?.data?.url === undefined || null) {
  //       imageUrl = "";
  //     }
  //     const Popularcategories = {
  //       // cat_image: e.target.image.value,

  //       cat_image: imageUrl,
  //       // cat_icon: e.target.icon.value,
  //       // cat_name: e.target.name.value,
  //       // // cat_slug: e.target.slug.value,
  //       // cat_status: e.target.status.value,
  //     };
  //     // EcommerceApi.editPopularCategories(Popularcategories);
  //     e.target.reset();
  //   }
  // };
  const handleDelete = async () => {
    const { res, err } = await EcommerceApi.deletePopularCategories(
      deleteModalSlug
    );
    if (res) {
      setDeleteModalSlug("");
      const remainingBrands = popularCategoriesData.filter(
        (product) => product.slug !== deleteModalSlug
      );
      setPopularCategoriesData(remainingBrands);
    }
  };
  useEffect(() => {
    const fetchAllCategoriesData = async () => {
      const { res, err } = await EcommerceApi.allCategories();
      if (err) {
        console.log(err);
      } else {
        setCategoriesData(res);

        // console.log(res);
      }
    };
    fetchAllCategoriesData();
  }, []);

  useEffect(() => {
    const fetchAllPopularCategoriesData = async () => {
      const { res, err } = await EcommerceApi.allPopularCategories();
      if (err) {
        console.log(err);
      } else {
        setPopularCategoriesData(res);

        console.log(res);
      }
    };
    fetchAllPopularCategoriesData();
  }, [showAddModal]);

  return (
    <div className="w-full">
      <DashboardBreadcrumb
        headline="Popular Category"
        slug="Popular Category"
        link="/Popular Category"
      ></DashboardBreadcrumb>
      <div className="m-6">
        {/* <div className={`${styles["section-header"]}  justify-between`}>
          <h1 className={`${styles["title"]} `}>Popular Category</h1>
          <div className={`${styles["section-header-breadcrumb"]} `}> */}

        {/* </div>
        </div> */}
        <form action="">
          <div className={`${styles["card"]}`}>
            <div className={`${styles["card-body"]}`}>
              <div className="">
                <label className=" text-qblack text-sm" htmlFor="">
                  Existing Banner
                </label>
                <div>
                  <img
                    className={`${styles["sidebarImg"]} my-2`}
                    src="https://api.websolutionus.com/shopo/uploads/website-images/popular-cat-banner-2022-09-20-01-15-44-7577.jpg"
                    alt=""
                  />
                </div>
              </div>

              <div className="">
                <label className="text-qblack text-sm" htmlFor="">
                  Popular Category Sidebar Banner
                </label>
                <br />
                <input
                  className="text-sm my-3"
                  type="file"
                  name="imageURL"
                  src=""
                  alt=""
                />
              </div>

              <div className="">
                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
        <SharedAddNewModal
          categoriesData={categoriesData}
          title="Popular"
          setShowModal={setShowAddModal}
          showModal={showAddModal}
        ></SharedAddNewModal>
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
                      className={`px-3 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase `}
                    >
                      <span className="flex  space-x-0 space-y-0 opacity-80">
                        Name
                      </span>
                    </th>

                    <th
                      className={` px-3 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase`}
                    >
                      <span className="flex  space-x-0 space-y-0 opacity-80">
                        Action
                        {/* <FaLongArrowAltUp /> <FaLongArrowAltDown /> */}
                      </span>
                    </th>
                  </tr>
                </thead>
                {/* -----------Plz Attention ,Table body/Row start here -------------- */}
                <tbody>
                  {popularCategoriesData
                    .slice(0, 4)
                    .map((categoryTableData, index) => (
                      <tr className="even:bg-gray-50 odd:bg-white">
                        <td className="px-3 py-3  text-sm">
                          <p className="text-gray-900 whitespace-no-wrap ">
                            {categoryTableData.categoriesData.cat_name}
                          </p>
                        </td>

                        <td className="px-2 py-3  text-sm">
                          <button
                            onClick={() =>
                              setDeleteModalSlug(categoryTableData.slug)
                            }
                          >
                            <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                style={{
                                  boxShadow: "0 2px 6px #fd9b96",
                                }}
                                className="h-8 w-8  inset-0 bg-red-500   rounded  relative text-white flex justify-center items-center"
                              >
                                <FaTrash />
                              </span>
                            </span>
                          </button>
                          <SharedDeleteModal
                            deleteModalSlug={deleteModalSlug}
                            handleDelete={handleDelete}
                            setDeleteModalSlug={setDeleteModalSlug}
                          ></SharedDeleteModal>
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

export default PopularCategoryAdmin;
