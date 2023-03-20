import React from "react";
import { useSelector } from "react-redux";
import { IBrand, IBrandDetail } from "../../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import { controller } from "../../../../../../src/state/StateController";
import DashboardBreadcrumb from "./../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedGoBackButton from "./../../../../../shared/SharedGoBackButton/SharedGoBackButton";

interface Props {}

const ProductBrandsCreate: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const status = form.status.value;

    const logoFile = e.target.logo.files[0];
    const formData = new FormData();
    formData.append("image", logoFile);

    const { res, err } = await EcommerceApi.uploadImage(formData);
    // if (res?.data?.url) {
    let imageUrl;
    imageUrl = res?.data?.url;

    // console.error(err.stack);

    if (res?.data?.url === undefined || err) {
      imageUrl = "";
    }

    const brandData: IBrand = {
      logo: imageUrl,
      name,
      status,
    };

    const { res: brandRes, err: brandErr } = await EcommerceApi.addNewBrand(
      brandData
    );

    if (brandRes) {
      e.target.reset();
    } else {
      console.log(brandErr);
    }
    // }
  };

  return (
    <div className="w-full ">
      <DashboardBreadcrumb
        headline="Create Product Brand"
        link="/product_brands/create"
        slug="Create Product Brand"></DashboardBreadcrumb>
      <div className="m-6">
        <div className="section-body">
          <SharedGoBackButton
            title="Product Brands"
            link="/admin/product_brands"></SharedGoBackButton>
        </div>
      </div>
      <div className="px-[25px] w-full relative">
        <div className="mt-4">
          <div className="mt-6 shadow-md bg-white rounded relative mb-7 border-0">
            <div className="p-5 leading-6">
              <form onSubmit={handleSubmit}>
                <div>
                  <div className="form-group grid text-sm">
                    <label
                      className="text-sm tracking-[.5px] text-[#34395e] font-semibold"
                      htmlFor="">
                      Logo
                      <span className=" text-red-500 ml-2">*</span>
                    </label>

                    <input
                      className="w-full mt-4 bg-[#fdfdff] text-sm"
                      type="file"
                      name="logo"
                      id=""
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4 text-sm"
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
                      required
                    />
                  </div>

                  {/* brand status */}
                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4 text-sm"
                        htmlFor="">
                        Status
                      </label>
                    </div>
                    <select
                      className="w-full border rounded p-3 border-gray-200 bg-[#fdfdff] focus:outline-none"
                      name="status"
                      id=""
                      required>
                      <option value="active">Active</option>
                      <option value="inactive">InActive</option>
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

export default ProductBrandsCreate;
