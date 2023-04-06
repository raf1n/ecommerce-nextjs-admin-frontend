import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IProduct, ISlider } from "../../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import { controller } from "../../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedGoBackButton from "../../../../../shared/SharedGoBackButton/SharedGoBackButton";
import { toast } from "react-hot-toast";

interface Props {}

const EditSlider: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [productData, setProductData] = useState<IProduct[]>([]);
  const [singlesliderData, setSingleSliderData] = useState<ISlider | null>(
    null
  );
  const { asPath } = useRouter();
  const slug = asPath.split("/")[3];

  const getSingleSlider = async () => {
    if (slug !== "[id]") {
      const { res, err } = await EcommerceApi.getSingleSlider(slug);
      if (res) {
        console.log(res);
        setSingleSliderData(res);
      } else {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    getSingleSlider();
  }, [slug]);

  const handleEdit = async (e: any) => {
    e.preventDefault();
    const image = e.target.imageURL.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const { res, err } = await EcommerceApi.uploadSliderImage(formData);
    let imageUrl;
    if (res?.data?.url || !res?.data?.url) {
      imageUrl = res?.data?.url;
      // setImageLink(data?.data?.url);
      if (res?.data?.url === undefined || null) {
        imageUrl = singlesliderData?.image;
      }

      const slider = {
        image: imageUrl,
        badge: e.target.badge.value,
        titleOne: e.target.titleOne.value,
        titleTWo: e.target.titleTwo.value,
        productLink: e.target.productLink.value,
        serial: parseInt(e.target.serial.value),
        status: e.target.status.value,
      };

      EcommerceApi.editSlider(slider, slug);
      getSingleSlider();
      toast.success("Slider Updated");
    }
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
        link="edit"
        slug="Edit Slider"
      ></DashboardBreadcrumb>
      <div className="m-6">
        <div className="section-body">
          <SharedGoBackButton
            title="Go Back"
            link="/admin/slider"
          ></SharedGoBackButton>
        </div>
      </div>
      <div className="px-[25px] w-full relative">
        <div className="mt-4">
          <div className="mt-6 shadow-md bg-white rounded relative mb-7 border-0">
            <div className="p-5 leading-6">
              <form onSubmit={handleEdit} action="">
                <div>
                  <div className="form-group col-12 mb-[25px]">
                    <label className="inline-block text-sm tracking-wide mb-2">
                      Current Slider
                    </label>
                    <div>
                      <picture>
                        <img
                          id="preview-img"
                          className="admin-img border border-[#ddd] p-0 m-0 max-w-[180px] h-[150px] object-cover"
                          // src="https://api.websolutionus.com/shopo/uploads/website-images/preview.png"
                          src={singlesliderData?.image}
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
                      New Slider
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
                        htmlFor=""
                      >
                        Badge
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="badge"
                      id=""
                      defaultValue={singlesliderData?.badge}
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
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="titleOne"
                      id=""
                      defaultValue={singlesliderData?.titleOne}
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
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="titleTwo"
                      id=""
                      defaultValue={singlesliderData?.titleTWo}
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
                      className="w-full border rounded p-3 border-gray-200 bg-[#fdfdff] focus:outline-none"
                      name="productLink"
                      id=""
                    >
                      <option value="">Select Product</option>
                      {productData.map((product: IProduct) => (
                        <option
                          selected={
                            product?.slug === singlesliderData?.productLink
                          }
                          value={product?.slug}
                        >
                          {product?.productName}
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
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="number"
                      name="serial"
                      id=""
                      defaultValue={singlesliderData?.serial}
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
                      className="w-full border rounded p-3 border-gray-200 bg-[#fdfdff] focus:outline-none"
                      name="status"
                      id=""
                      defaultValue={singlesliderData?.status}
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

export default EditSlider;
