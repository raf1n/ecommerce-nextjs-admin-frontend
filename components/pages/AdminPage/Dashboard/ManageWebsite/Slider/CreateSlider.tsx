import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IProduct } from "../../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import { controller } from "../../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedGoBackButton from "../../../../../shared/SharedGoBackButton/SharedGoBackButton";
import { toast } from "react-hot-toast";

interface Props {}

const CreateSlider: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [productData, setProductData] = useState<IProduct[]>([]);

  const handleSave = async (e: any) => {
    e.preventDefault();
    controller.setApiLoading(true);

    const image = e.target.imageURL.files[0];
    const formData = new FormData();
    formData.append("image", image);

    const { res, err } = await EcommerceApi.uploadSliderImage(formData);

    if (res?.data?.url || !res?.data?.url) {
      let imageUrl;
      imageUrl = res?.data?.url;

      if (res?.data?.url === undefined || null) {
        imageUrl = "";
      }

      const sliders = {
        image: imageUrl,
        badge: e.target.badge.value,
        titleOne: e.target.titleOne.value,
        titleTWo: e.target.titleTwo.value,
        productLink: e.target.productLink.value,
        serial: e.target.serial.value,
        status: e.target.status.value,
      };

      const { res: postRes, err: postErr } = await EcommerceApi.createSlider(
        sliders
      );

      if (postRes) {
        e.target.reset();
        toast.success("Slider Created");
      }
    }

    controller.setApiLoading(false);
  };

  useEffect(() => {
    const fetchAllProductsData = async () => {
      const { res, err } = await EcommerceApi.allProducts();
      if (err) {
        console.log(err);
      } else {
        setProductData(res.allProductData);

        // console.log(res);
      }
    };
    fetchAllProductsData();
  }, []);

  return (
    <div className="w-full">
      <DashboardBreadcrumb
        headline="Slider"
        link="create"
        slug="Create Slider"
      ></DashboardBreadcrumb>
      <div className="m-6">
        <div className="section-body">
          <SharedGoBackButton
            title="Slider"
            link="/admin/slider"
          ></SharedGoBackButton>
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
                      htmlFor=""
                    >
                      Image
                      <span className=" text-red-500 ml-2">*</span>
                    </label>

                    <input
                      required
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
                        Badge
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      required
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="badge"
                      id=""
                    />
                  </div>
                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Title One
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      required
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="titleOne"
                      id=""
                    />
                  </div>
                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Title Two
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      required
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="titleTwo"
                      id=""
                    />
                  </div>
                  <div className="mt-4">
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
                      required
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
                      {/* <option value="active">Electronics</option>
                        <option value="inactive">Game</option>
                        <option value="inactive">Mobile</option>
                        <option value="inactive">Lifestyles</option> */}
                    </select>
                  </div>
                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Serial
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      required
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="number"
                      name="serial"
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
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <select
                      required
                      className="w-full border rounded p-3 border-gray-200 bg-[#fdfdff] focus:outline-none"
                      name="status"
                      id=""
                    >
                      <option value="active">Active</option>
                      <option value="inactive">In Active</option>
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

export default CreateSlider;
