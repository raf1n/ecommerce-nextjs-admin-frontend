import { Router, useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ICategories } from "../../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import { controller } from "../../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedGoBackButton from "../../../../../shared/SharedGoBackButton/SharedGoBackButton";

interface Props {}

const EditCategories: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const { asPath } = useRouter();
  const catSlug = asPath.split("/")[2];
  const [catData, setCatData] = useState<ICategories | null>(null);
  useEffect(() => {
    console.log(catSlug);
    const getSingleCategory = async () => {
      if (catSlug !== "[id]") {
        const { res, err } = await EcommerceApi.getSingleCategory(catSlug);
        if (res) {
          setCatData(res);
        } else {
          console.log(err);
        }
      }
    };
    getSingleCategory();
  }, [catSlug]);
  // if (catSlug !== "[slug]") {
  //   fetch(`http://localhost:8000/categories/${catSlug}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data) {
  //         setCatData(data);
  //       }
  //     });
  // }

  const handleEdit = async (e: any) => {
    e.preventDefault();
    const image = e.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const { res, err } = await EcommerceApi.uploadCategoryImage(formData);
    if (res.data?.url) {
      let imageUrl;
      imageUrl = res.data?.url;
      // setImageLink(data?.data?.url);
      if (res.data?.url === undefined) {
        imageUrl = "";
      }
      const categories = {
        // cat_image: e.target.image.value,

        cat_image: imageUrl,
        cat_icon: e.target.icon.value,
        cat_name: e.target.name.value,
        // cat_slug: e.target.slug.value,
        cat_status: e.target.status.value,
      };
      EcommerceApi.editCategories(categories, catSlug);
      e.target.reset();
    }
  };
  // fetch(
  //   `https://api.imgbb.com/1/upload?key=d78d32c3d086f168de7b3bfaf5032024`,
  //   {
  //     method: "POST",
  //     body: formData,
  //   }
  // )
  //   .then((res) => res.json())
  //   .then((data) => {
  //     const categories = {
  //       // cat_image: e.target.image.value,

  //       cat_image: data?.data?.url,
  //       cat_icon: e.target.icon.value,
  //       cat_name: e.target.name.value,
  //       // slug: e.target.slug.value,
  //       cat_status: e.target.status.value,
  //     };
  //     console.log(data?.data?.url);

  //     fetch(`http://localhost:8000/categories/${catSlug}`, {
  //       method: "PATCH",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(categories),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => console.log(data), e.target.reset());
  //   });

  return (
    <div className="w-full ">
      <DashboardBreadcrumb
        headline="Edit Product Category"
        link="/product_categories/edit"
        slug="Edit Product Category"
      ></DashboardBreadcrumb>
      <div className="m-6">
        <div className="section-body">
          <SharedGoBackButton
            title="Product Categories"
            link="/product_categories"
          ></SharedGoBackButton>
        </div>
      </div>
      <div className="px-[25px] w-full relative">
        <div className="mt-4">
          <div className="mt-6 shadow-md bg-white rounded relative mb-7 border-0">
            <div className="p-5 leading-6">
              <div>
                <label className="text-sm tracking-[.5px] text-[#34395e] font-semibold">
                  Existing Image
                </label>
                <picture>
                  <img
                    style={{ width: "200px" }}
                    className="mt-4 "
                    src=""
                    // https://api.websolutionus.com/shopo/uploads/custom-images/electronics-2022-11-19-02-48-28-5548.png
                    alt=""
                  />
                </picture>
              </div>

              <form onSubmit={handleEdit} action="">
                <div>
                  <div className="form-group grid text-sm mt-4">
                    <label
                      className="text-sm tracking-[.5px] text-[#34395e] font-semibold"
                      htmlFor=""
                    >
                      Image
                      <span className=" text-red-500 ml-2">*</span>
                    </label>

                    <input
                      className="w-full mt-4 p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="file"
                      name="image"
                      id=""
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Icon
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="icon"
                      id=""
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Name
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="name"
                      defaultValue={catData?.cat_name}
                      id=""
                      required
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
                    </div>
                    <input
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="slug"
                      // defaultValue=
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
                    </div>
                    <select
                      className="w-full border rounded p-3 border-gray-200 bg-[#fdfdff] focus:outline-none"
                      name="status"
                      id=""
                      required
                    >
                      <option value="active" selected>
                        Active
                      </option>
                      <option value="inactive">InActive</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="bg-blue-700 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded"
                    >
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

export default EditCategories;
