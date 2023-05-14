import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedGoBackButton from "../../../../shared/SharedGoBackButton/SharedGoBackButton";
import { useRouter } from "next/router";
import { IBlogCategory } from "../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../src/API/EcommerceApi";
import { toast } from "react-hot-toast";

interface Props {}

const EditCategory: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [catData, setCatData] = useState<IBlogCategory>();

  const { asPath } = useRouter();
  const catSlug = asPath.split("/")[4];

  const router = useRouter();

  useEffect(() => {
    const getSingleBlogCategory = async () => {
      if (catSlug !== "[id]") {
        const { res, err } = await EcommerceApi.getSingleBlogCategory(catSlug);
        if (res) {
          setCatData(res);
        }
        // else {
        //   console.log(err);
        // }
      }
    };
    getSingleBlogCategory();
  }, [catSlug]);

  const handleCategory = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const updatedBlogCatData = {
      name: form.name.value,
      //   slug: form.slug.value,
      status: form.status.value,
    };

    const { res, err } = await EcommerceApi.editBlogCategory(
      updatedBlogCatData,
      catSlug
    );
    if (res) {
      toast.success("Successfully Updated !");
      e.target.reset();
      router.push("http://localhost:3010/admin/blogs/category");
    } else {
      toast.error("Something is error !");
    }
  };

  return (
    <div className="w-full">
      <DashboardBreadcrumb
        headline="Edit Blog Category"
        link="/admin/blogs/category"
        slug="Edit Blog Category"
      />
      <div className="m-6">
        <div className="section-body">
          <SharedGoBackButton
            title="Blog Category"
            link="/admin/blogs/category"
          />
        </div>
      </div>
      <div className="px-[25px] w-full relative">
        <div className="mt-4">
          <div className="mt-6 shadow-md bg-white rounded relative mb-7 border-0">
            <div className="p-5 leading-6">
              {/*  onSubmit={handleSave} */}
              <form onSubmit={handleCategory} action="">
                <div>
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
                      defaultValue={catData?.name}
                    />
                  </div>
                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor="">
                        Slug
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="slug"
                      id=""
                      defaultValue={catData?.slug}
                      readOnly
                    />
                  </div>
                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor="">
                        Status
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <select
                      className="w-full border rounded p-3 border-gray-200 bg-[#fdfdff] focus:outline-none"
                      name="status"
                      id="">
                      <option
                        selected={catData?.status === "active"}
                        value="active">
                        Active
                      </option>
                      <option
                        selected={catData?.status === "inactive"}
                        value="inactive">
                        In Active
                      </option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="bg-blue-700 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded">
                      Save
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

export default EditCategory;
