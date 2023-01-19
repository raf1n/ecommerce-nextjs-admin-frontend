import React from "react";
import { useSelector } from "react-redux";
import { controller } from "./../../../../../../src/state/StateController";
import DashboardBreadcrumb from "./../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedGoBackButton from "./../../../../../shared/SharedGoBackButton/SharedGoBackButton";

interface Props {}

const ProductCreate: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="w-full ">
      <DashboardBreadcrumb
        headline="Create Product"
        link="/product_brands/create"
        slug="Create Product"
      ></DashboardBreadcrumb>
      <div className="m-6">
        <div className="section-body">
          <SharedGoBackButton
            title="Products"
            link="/products"
          ></SharedGoBackButton>
        </div>
      </div>
      <div className="px-[25px] w-full relative">
        <div className="mt-4">
          <div className="mt-6 shadow-md bg-white rounded relative mb-7 border-0">
            <div className="p-5 leading-6 mt-7">
              <form action="">
                <div className="form-group col-12 mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Thumbnail Image Preview
                  </label>
                  <div>
                    <picture>
                      <img
                        id="preview-img"
                        className="admin-img border border-[#ddd] p-0 m-0 max-w-[180px] h-[150px] object-cover"
                        src="https://api.websolutionus.com/shopo/uploads/website-images/preview.png"
                        alt=""
                      />
                    </picture>
                  </div>
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Thumbnail Image <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    className="form-control-file"
                    name="thumb_image"
                  />
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Short Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="short_name"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                    name="short_name"
                  />
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                    name="name"
                  />
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Slug <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="slug"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                    name="slug"
                  />
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="category"
                    id="category"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                  >
                    <option value="electronics">Electronics</option>
                    <option value="game">Game</option>
                    <option value="mobile">Mobile</option>
                    <option value="television">Television</option>
                  </select>
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Sub Category
                  </label>
                  <select
                    name="sub_category"
                    id="sub_category"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                  >
                    <option value="electronics">Electronics</option>
                    <option value="game">Game</option>
                    <option value="mobile">Mobile</option>
                    <option value="television">Television</option>
                  </select>
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Brand
                  </label>
                  <select
                    name="brand"
                    id="brand"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                  >
                    <option value="electronics">Electronics</option>
                    <option value="game">Game</option>
                    <option value="mobile">Mobile</option>
                    <option value="television">Television</option>
                  </select>
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    SKU
                  </label>
                  <input
                    type="text"
                    id="sku"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                    name="sku"
                  />
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Price <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="price"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                    name="price"
                  />
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Offer Price <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="offer_price"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                    name="offer_price"
                  />
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Stock Quantity <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="stock_quantity"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                    name="stock_quantity"
                  />
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Weight <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="weight"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                    name="weight"
                  />
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Short Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="short_description"
                    className="form-control h-[100px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                    name="short_description"
                  />
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Highlight
                  </label>
                  <div className="text-[#495057]">
                    <input
                      type="checkbox"
                      name="top_product"
                      id="top_product"
                    />{" "}
                    <label htmlFor="top_product" className="mr-3">
                      Top Product
                    </label>
                    <input
                      type="checkbox"
                      name="new_arrival"
                      id="new_arrival"
                    />{" "}
                    <label htmlFor="new_arrival" className="mr-3">
                      New Arrival
                    </label>
                    <input
                      type="checkbox"
                      name="best_product"
                      id="best_product"
                    />{" "}
                    <label htmlFor="best_product" className="mr-3">
                      Best Product
                    </label>
                    <input
                      type="checkbox"
                      name="is_featured"
                      id="is_featured"
                    />{" "}
                    <label htmlFor="is_featured" className="mr-3">
                      Featured Product
                    </label>
                  </div>
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full border rounded p-3 border-gray-200 bg-[#fdfdff] focus:outline-none"
                    name="status"
                    id=""
                    required
                  >
                    <option value="active">Active</option>
                    <option value="inactive">InActive</option>
                  </select>
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    SEO Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="seo_title"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                    name="seo_title"
                  />
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    SEO Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="seo_description"
                    className="form-control h-[100px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                    name="seo_description"
                  />
                </div>

                <div className="col-12">
                  <button className="text-white rounded py-[.3rem] px-[.8rem] shadow-[0_2px_6px_#acb5f6] border border-[#6777ef] bg-[#2046DA]">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
