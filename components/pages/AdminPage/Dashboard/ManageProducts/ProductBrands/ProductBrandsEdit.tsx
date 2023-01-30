import Image from "next/image";
import React, { useEffect, useState } from "react";
import DashboardBreadcrumb from "./../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedGoBackButton from "./../../../../../shared/SharedGoBackButton/SharedGoBackButton";
import { controller } from "../../../../../../src/state/StateController";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { IBrandDetail } from "../../../../../../interfaces/models";

interface Props {}

const ProductBrandsEdit: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [brandData, setBrandData] = useState<IBrandDetail>({});

  const { asPath } = useRouter();
  const brandSlug = asPath.split("/")[2];

  useEffect(() => {
    if (brandSlug !== "[id]") {
      fetch(`http://localhost:8000/brands/${brandSlug}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setBrandData(data);
        });
    }
  }, [brandSlug]);

  const handleEdit = (e: any) => {
    e.preventDefault();

    const logo = e.target.logo.files[0];
    const formData = new FormData();
    formData.append("image", logo);

    fetch(
      `https://api.imgbb.com/1/upload?key=d78d32c3d086f168de7b3bfaf5032024`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const editBrand = {
          logo: data?.data?.url,
          name: e.target.name.value,
          slug: e.target.slug.value,
          cat_slug: [e.target.categories.value],
          sub_cat_slug: [e.target.sub_categories.value],
          status: e.target.status.value,
        };

        fetch(`http://localhost:8000/brands/${brandSlug}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(editBrand),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setBrandData(data);
          });
      });
  };

  return (
    <div className="w-full ">
      <DashboardBreadcrumb
        headline="Edit Product Brand"
        link="/product_brands/edit"
        slug="Edit Product Brand"
      ></DashboardBreadcrumb>
      <div className="m-6">
        <div className="section-body">
          <SharedGoBackButton
            title="Product Brands"
            link="/product_brands"
          ></SharedGoBackButton>
        </div>
      </div>
      <div className="px-[25px] w-full relative">
        <div className="mt-4">
          <div className="mt-6 shadow-md bg-white rounded relative mb-7 border-0">
            <div className="p-5 leading-6">
              <div>
                <label className="text-sm tracking-[.5px] text-[#34395e] font-semibold">
                  Existing Logo
                </label>
                <div>
                  <picture>
                    <img
                      className="mt-4"
                      src={brandData?.logo}
                      width={100}
                      height={100}
                      alt=""
                    />
                  </picture>
                </div>
              </div>
              <form onSubmit={handleEdit}>
                <div>
                  <div className="form-group grid text-sm mt-4">
                    <label
                      className="text-sm tracking-[.5px] text-[#34395e] font-semibold"
                      htmlFor=""
                    >
                      Logo
                      <span className=" text-red-500 ml-2">*</span>
                    </label>

                    <input
                      className="w-full mt-4 p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="file"
                      name="logo"
                      id=""
                      // required
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
                      defaultValue={brandData?.name}
                      id=""
                      // required
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
                      defaultValue={brandData?.slug}
                      id=""
                    />
                  </div>

                  {/* brand categories */}
                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4 text-sm"
                        htmlFor=""
                      >
                        Brand Categories
                      </label>
                    </div>
                    <select
                      className="w-full border rounded p-3 border-gray-200 bg-[#fdfdff] focus:outline-none"
                      name="categories"
                      id=""
                      // required
                    >
                      {brandData?.cat_slug && (
                        <>
                          <option
                            value="Electronics_slug"
                            selected={
                              brandData?.cat_slug[0] === "Electronics_slug"
                            }
                          >
                            Electronics
                          </option>
                          <option value="lifestyle_slug" selected={
                              brandData?.cat_slug[0] === "lifestyle_slug"
                            }>Lifestyle</option>
                          <option value="accessories_slug" selected={
                              brandData?.cat_slug[0] === "accessories_slug"
                            }>Accessories</option>
                          <option value="mens_clothes_slug" selected={
                              brandData?.cat_slug[0] === "mens_clothes_slug"
                            }>
                            Men's clothes
                          </option>
                          <option value="womens_clothes_slug" selected={
                              brandData?.cat_slug[0] === "womens_clothes_slug"
                            }>
                            Women's clothes
                          </option>
                        </>
                      )}
                    </select>
                  </div>

                  {/* brand sub-categories */}
                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4 text-sm"
                        htmlFor=""
                      >
                        Brand Sub-Categories
                      </label>
                    </div>
                    <select
                      className="w-full border rounded p-3 border-gray-200 bg-[#fdfdff] focus:outline-none"
                      name="sub_categories"
                      id=""
                      // required
                    >
                      <option value="mobiles_slug">Mobiles</option>
                      <option value="monitor_slug">Monitor</option>
                      <option value="headphone_slug">Headphone</option>
                    </select>
                  </div>

                  {/* Brand status */}
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
                      // required
                    >
                      <option
                        value="active"
                        selected={brandData?.status === "active"}
                      >
                        Active
                      </option>
                      <option
                        value="inactive"
                        selected={brandData?.status === "inactive"}
                      >
                        InActive
                      </option>
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

export default ProductBrandsEdit;
