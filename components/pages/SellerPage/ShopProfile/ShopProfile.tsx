import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedGoBackButton from "../../../shared/SharedGoBackButton/SharedGoBackButton";

interface Props {}

const ShopProfile: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="w-full">
      <DashboardBreadcrumb
        headline="My Shop"
        link="my_shop"
        slug="My Shop"
      ></DashboardBreadcrumb>
      {/* <div className="m-6">
    <div className="section-body">
      <SharedGoBackButton
        title="Slider"
        link="/admin/slider"
      ></SharedGoBackButton>
    </div>
  </div> */}
      <div className="px-[25px] w-full relative">
        <div className="mt-4">
          <div className="mt-6 shadow-md bg-white rounded relative mb-7 border-0">
            <div className="p-5 leading-6">
              <form action="">
                <div>
                  <div className="form-group col-12 mb-[25px]">
                    <label className="inline-block text-sm tracking-wide mb-2">
                      Current Logo
                    </label>
                    <div>
                      <picture>
                        <img
                          id="preview-img"
                          className="admin-img border border-[#ddd] p-0 m-0 max-w-[180px] h-[150px] object-cover"
                          src="https://cdn.pixabay.com/photo/2017/03/19/20/19/ball-2157465__340.png"
                          // src={singlesliderData?.image}
                          alt=""
                        />
                      </picture>
                    </div>
                  </div>
                  <div className="form-group grid text-sm">
                    <label
                      className="text-sm tracking-[.5px] text-[#34395e] font-semibold"
                      htmlFor=""
                    >
                      New Logo
                      {/* <span className=" text-red-500 ml-2">*</span> */}
                    </label>

                    <input
                      className="w-full mt-4 p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="file"
                      name="imageURL"
                      id=""
                    />
                  </div>

                  <div className="form-group col-12 mb-[25px]">
                    <label className="inline-block text-sm tracking-wide mb-2">
                      Current Banner Image
                    </label>
                    <div>
                      <picture>
                        <img
                          id="preview-img"
                          className="admin-img border border-[#ddd] p-0 m-0 max-w-[180px] h-[150px] object-cover"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtkHDkSq_8rN4mPhbWA0-kxs8jlGRsiRsPzQ&usqp=CAU"
                          // src={singlesliderData?.image}
                          alt=""
                        />
                      </picture>
                    </div>
                  </div>
                  <div className="form-group grid text-sm">
                    <label
                      className="text-sm tracking-[.5px] text-[#34395e] font-semibold"
                      htmlFor=""
                    >
                      New Banner Image
                      {/* <span className=" text-red-500 ml-2">*</span> */}
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
                        htmlFor=""
                      >
                        Shop Name
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="shopName"
                      id=""
                    />
                  </div>
                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Email
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="email"
                      id=""
                    />
                  </div>
                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Phone
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="number"
                      name="phone"
                      id=""
                    />
                  </div>
                  {/* <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Product Link
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <select
                      className="w-full border rounded p-3 border-gray-200 bg-[#fdfdff] focus:outline-none"
                      name="productLink"
                      id=""
                    >
                      <option value="">Select Product</option>
                      {productData.map((product: IProduct) => (
                        <option value={product.slug}>
                          {product.productName}
                        </option>
                      ))}
                    
                    </select>
                  </div> */}
                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Opens at
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="time"
                      name="open"
                      id=""
                    />
                  </div>

                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Closed at
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="time"
                      name="close"
                      id=""
                    />
                  </div>

                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Address
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="close"
                      id=""
                    />
                  </div>

                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Greetings Message for Chatbox
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      className="w-full p-7 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="close"
                      id=""
                    />
                  </div>

                  <div className="mt-4 flex gap-5">
                    <div className="w-full">
                      <div className="my-2 ">
                        <label
                          className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                          htmlFor=""
                        >
                          Social Icon
                        </label>
                        {/* <span className="text-red-500 ml-2">*</span> */}
                      </div>
                      <input
                        className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                        type="text"
                        name="close"
                        id=""
                      />
                    </div>
                    <div className="w-full">
                      <div className="my-2">
                        <label
                          className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                          htmlFor=""
                        >
                          Social Link
                        </label>
                        {/* <span className="text-red-500 ml-2">*</span> */}
                      </div>
                      <input
                        className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                        type="text"
                        name="close"
                        id=""
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Seo Title
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="seoTitle"
                      id=""
                    />
                  </div>

                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Seo Description
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      className="w-full p-7 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="seoDesc"
                      id=""
                    />
                  </div>

                  {/* <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Status
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <select
                      className="w-full border rounded p-3 border-gray-200 bg-[#fdfdff] focus:outline-none"
                      name="status"
                      id=""
                    >
                      <option value="active">Active</option>
                      <option value="inactive">In Active</option>
                    </select>
                  </div> */}
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="bg-blue-700 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded"
                    >
                      Save Changes
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

export default ShopProfile;
