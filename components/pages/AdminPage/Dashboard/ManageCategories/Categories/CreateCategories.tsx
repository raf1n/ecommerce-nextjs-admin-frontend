import React from "react";
import { useSelector } from "react-redux";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import { controller } from "../../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedGoBackButton from "../../../../../shared/SharedGoBackButton/SharedGoBackButton";

interface Props {}

const CreateCategories: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const handleSave = async (e: any) => {
    e.preventDefault();
    const image = e.target.imageURL.files[0];
    console.log("image", image);
    const formData = new FormData();
    console.log("form", formData);
    formData.append("image", image);
    const { res, err } = await EcommerceApi.uploadCategoryImage(formData);
    console.log("response", res);
    if (res?.data?.url || !res?.data?.url) {
      let imageUrl;
      imageUrl = res?.data?.url;

      if (res?.data?.url === undefined || null) {
        imageUrl = "";
      }
      const categories = {
        cat_image: imageUrl,

        cat_name: e.target.name.value,

        cat_status: e.target.status.value,
      };
      EcommerceApi.createCategories(categories);
      e.target.reset();
    }
  };

  return (
    <div className="w-full">
      <DashboardBreadcrumb
        headline="Create Product Category"
        link="create"
        slug="Create Product Category"></DashboardBreadcrumb>
      <div className="m-6">
        <div className="section-body">
          <SharedGoBackButton
            title="Product Category"
            link="/product_categories"></SharedGoBackButton>
        </div>
      </div>
      <div className="px-[25px] w-full relative">
        <div className="mt-4">
          <div className="mt-6 shadow-md bg-white rounded relative mb-7 border-0">
            <div className="p-5 leading-6">
              <form onSubmit={handleSave} action="">
                <div>
                  <div className="form-group grid text-sm">
                    <label
                      className="text-sm tracking-[.5px] text-[#34395e] font-semibold"
                      htmlFor="">
                      Image
                      <span className=" text-red-500 ml-2">*</span>
                    </label>

                    <input
                      className="w-full mt-4 p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="file"
                      name="imageURL"
                      id=""
                    />
                  </div>

                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor="">
                        Name
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="name"
                      id=""
                    />
                  </div>
                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor="">
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
                        htmlFor="">
                        Status
                      </label>
                      {/* <span className='text-red-500 ml-2'>*</span> */}
                    </div>
                    <select
                      className="w-full border rounded p-3 border-gray-200 bg-[#fdfdff] focus:outline-none"
                      name="status"
                      id="">
                      <option value="active">Active</option>
                      <option value="inactive">In Active</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="bg-blue-700 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded">
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

export default CreateCategories;
