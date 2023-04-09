import Image from "next/image";
import React, { useEffect, useState } from "react";
import DashboardBreadcrumb from "./../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedGoBackButton from "./../../../../../shared/SharedGoBackButton/SharedGoBackButton";
import { controller } from "../../../../../../src/state/StateController";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { IBrand, IBrandDetail } from "../../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import { toast } from "react-hot-toast";

interface Props {}

const ProductBrandsEdit: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [brandData, setBrandData] = useState<IBrandDetail | null>(null);

  const { asPath } = useRouter();
  const brandSlug = asPath.split("/")[3];

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

  const handleEdit = async (e: any) => {
    e.preventDefault();
    controller.setApiLoading(true);

    const logo = e.target.logo.files[0];
    const formData = new FormData();
    formData.append("image", logo);

    const { res, err } = await EcommerceApi.uploadImage(formData);
    console.log({ res, err });
    // if (res?.data?.url) {
    let imageUrl;
    imageUrl = res?.data?.url;

    console.log({ res, err });

    if (res?.data?.url === undefined || err) {
      imageUrl = "" || brandData?.logo;
    }

    const editBrandData: IBrand = {
      logo: imageUrl,
      name: e.target.name.value,
      status: e.target.status.value,
    };

    const { res: brandRes, err: brandErr } = await EcommerceApi.editBrand(
      editBrandData,
      brandSlug
    );

    if (brandRes) {
      toast.success("Brand Edited");
      setBrandData(brandRes);
    } else {
      console.log(brandErr);
    }

    controller.setApiLoading(false);
  };

  return (
    <div className="w-full ">
      <DashboardBreadcrumb
        headline="Edit Product Brand"
        link={`/product_brands/${brandSlug}/edit`}
        slug="Edit Product Brand"
      />
      <div className="m-6">
        <div className="section-body">
          <SharedGoBackButton
            title="Product Brands"
            link="/admin/product_brands"
          />
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
                    {brandData?.status && (
                      <select
                        className="w-full border rounded p-3 border-gray-200 bg-[#fdfdff] focus:outline-none"
                        name="status"
                        id=""
                        defaultValue={brandData?.status}
                        // required
                      >
                        <option value="active">Active</option>
                        <option value="inactive">InActive</option>
                      </select>
                    )}
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
