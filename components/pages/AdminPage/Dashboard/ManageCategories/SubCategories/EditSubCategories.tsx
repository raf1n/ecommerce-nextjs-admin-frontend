import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedGoBackButton from "../../../../../shared/SharedGoBackButton/SharedGoBackButton";
import { controller } from "../../../../../../src/state/StateController";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import {
  ICategories,
  ISubCategories,
} from "../../../../../../interfaces/models";
import { useRouter } from "next/router";

interface Props {}

const EditSubCategories: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [categoriesData, setCategoriesData] = useState<ICategories[]>([]);
  const { asPath } = useRouter();
  const subCatSlug = asPath.split("/")[3];
  const [subCatData, setSubCatData] = useState<ISubCategories | null>(null);
  useEffect(() => {
    console.log(subCatSlug);
    const getSingleCategory = async () => {
      if (subCatSlug !== "[id]") {
        const { res, err } = await EcommerceApi.getSingleSubCategory(
          subCatSlug
        );
        if (res) {
          setSubCatData(res);
        } else {
          console.log(err);
        }
      }
    };
    getSingleCategory();
  }, [subCatSlug]);

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

  const handleEdit = async (e: any) => {
    e.preventDefault();

    const subCategories = {
      // cat_imag

      cat_slug: e.target.categories.value,
      subcat_name: e.target.name.value,
      // cat_slug: e.target.slug.value,
      slug: e.target.slug.value,
      subcat_status: e.target.status.value,
    };
    EcommerceApi.editSubCategories(subCategories, subCatSlug);
    e.target.reset();
  };
  return (
    <div className="w-full ">
      <DashboardBreadcrumb
        headline="Edit Sub Product Category"
        link="/product_sub_categories/edit"
        slug="Edit Sub Product Category"
      ></DashboardBreadcrumb>
      <div className="m-6">
        <div className="section-body">
          <SharedGoBackButton
            title="Product Sub Categories"
            link="/admin/product_sub_categories"
          ></SharedGoBackButton>
        </div>
      </div>
      <div className="px-[25px] w-full relative">
        <div className="mt-4">
          <div className="mt-6 shadow-md bg-white rounded relative mb-7 border-0">
            <div className="p-5 leading-6">
              <form onSubmit={handleEdit} action="">
                <div>
                  <div>
                    <div className="mt-4">
                      <div className="my-2">
                        <label
                          className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                          htmlFor=""
                        >
                          Category
                        </label>
                        <span className="text-red-500 ml-2">*</span>
                      </div>
                      <select
                        className="w-full border rounded p-3 border-gray-200 bg-[#fdfdff] focus:outline-none"
                        name="categories"
                        id=""
                      >
                        <option value="">Select Category</option>
                        {categoriesData.map((category: ICategories) => (
                          <option value={category.cat_slug}>
                            {category.cat_name}
                          </option>
                        ))}
                        {/* <option value="active">Electronics</option>
                        <option value="inactive">Game</option>
                        <option value="inactive">Mobile</option>
                        <option value="inactive">Lifestyles</option> */}
                      </select>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Sub Category Name
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="name"
                      defaultValue={subCatData?.subcat_name}
                      id=""
                    />
                  </div>
                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Slug
                      </label>
                      {/* <span className='text-red-500 ml-2'>*</span> */}
                    </div>
                    <input
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="slug"
                      id=""
                    />
                  </div>
                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Status
                      </label>
                      {/* <span className='text-red-500 ml-2'>*</span> */}
                    </div>
                    <select
                      className="w-full border rounded p-3 border-gray-200 bg-[#fdfdff] focus:outline-none"
                      name="status"
                      id=""
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="bg-blue-700 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSubCategories;
