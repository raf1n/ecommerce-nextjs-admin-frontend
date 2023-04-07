import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IFlashSale } from "../../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import { controller } from "../../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import { toast } from "react-hot-toast";

interface Props {}

const FlashSale: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [selectedImage, setSelectedImage] = useState(null);
  const [saleData, setSaleData] = useState<IFlashSale>();

  useEffect(() => {
    const fetchAllflashData = async () => {
      const { res, err } = await EcommerceApi.getFlashSaleContent(
        "flashcontnet"
      );
      if (err) {
        console.log(err);
      } else {
        setSaleData(res);

        // console.log(res);
      }
    };
    fetchAllflashData();
  }, []);

  // const imageChange = (e: any) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setSelectedImage(e.target.files[0]);
  //     console.log(selectedImage);
  //   }
  // };

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    const image = e.target.imageHome.files[0];
    const image2 = e.target.imageFlash.files[0];
    const formData1 = new FormData();
    formData1.append("image", image);
    const formData2 = new FormData();
    formData2.append("image", image2);
    const { res: res1, err } = await EcommerceApi.uploadImage(formData1);
    // const { res, err } = await EcommerceApi.uploadImage(formData);

    if (res1?.data?.url || !res1?.data?.url) {
      let imageHome;
      imageHome = res1?.data?.url;
      // setImageLink(data?.data?.url);
      if (res1?.data?.url === undefined || null) {
        imageHome = "";
      }
      const { res, err } = await EcommerceApi.uploadImage(formData2);

      if (res?.data?.url || !res?.data?.url) {
        let imageFlash;
        imageFlash = res?.data?.url;
        if (res?.data?.url === undefined || null) {
          imageFlash = "";
        }
        const flashSaleData = {
          name: "flashcontnet",
          title: e.target.title.value,
          offer: e.target.offer.value,
          time: e.target.time.value,
          status: e.target.flashSaleStatus.value,
          imageHome: imageHome,
          imageFlash: imageFlash,
        };
        console.log(flashSaleData);
        const { res: editRes, err } = await EcommerceApi.editFlashSale(
          flashSaleData
        );
        if (editRes) {
          e.target.reset();
          setSelectedImage(null);
          toast.success("FlashSale Content Updated");
        }
      }
    }
  };

  return (
    <div className="w-full">
      <DashboardBreadcrumb
        headline="Flash Sale"
        slug="FlashSale"
        link="/flash_sale"
      ></DashboardBreadcrumb>

      <div className="px-[25px] w-full relative">
        <div className="mt-4">
          <div className="mt-6 shadow-md bg-white rounded relative mb-7 border-0">
            <div className="p-5 leading-6 mt-7">
              <form onSubmit={handleUpdate} action="">
                <div className="form-group col-12 mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Homepage Image Preview
                  </label>
                  {selectedImage ? (
                    <div>
                      <picture>
                        <img
                          id="preview-img"
                          className="admin-img border border-[#ddd] p-0 m-0 max-w-[180px] h-[150px] object-cover"
                          src={URL.createObjectURL(selectedImage)}
                          alt=""
                        />
                      </picture>
                    </div>
                  ) : (
                    <div>
                      <picture>
                        <img
                          id="preview-img"
                          className="admin-img border border-[#ddd] p-0 m-0 max-w-[180px] h-[150px] object-cover"
                          src="https://api.websolutionus.com/shopo/uploads/website-images/flash_sale--2022-09-25-04-09-21-6554.png"
                          alt=""
                        />
                      </picture>
                    </div>
                  )}
                </div>
                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Homepage Image <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="imageHome"
                    type="file"
                    // onChange={imageChange}
                    className="form-control-file text-sm"
                  />
                </div>

                <div className="form-group col-12 mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Flash Sale Page Image Preview
                  </label>
                  {selectedImage ? (
                    <div>
                      <picture>
                        <img
                          id="preview-img"
                          className="admin-img border border-[#ddd] p-0 m-0 max-w-[180px] h-[150px] object-cover"
                          src={URL.createObjectURL(selectedImage)}
                          alt=""
                        />
                      </picture>
                    </div>
                  ) : (
                    <div>
                      <picture>
                        <img
                          id="preview-img"
                          className="admin-img border border-[#ddd] p-0 m-0 max-w-[300px] h-[150px] object-cover"
                          src="https://api.websolutionus.com/shopo/uploads/website-images/flash_sale--2022-09-20-10-54-12-8555.png"
                          alt=""
                        />
                      </picture>
                    </div>
                  )}
                </div>
                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Flash Sale Page Image{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="imageFlash"
                    type="file"
                    // onChange={imageChange}
                    className="form-control-file text-sm"
                  />
                </div>
                <div className="flex ">
                  <div className="form-group w-full col-6  flex flex-col mb-[25px]">
                    <label className="inline-block text-sm tracking-wide mb-2">
                      Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      className="form-control w-full h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                      name="title"
                      defaultValue={saleData?.title}
                    />
                  </div>

                  <div className="form-group w-full px-7 col-6  flex flex-col mb-[25px]">
                    <label className="inline-block text-sm tracking-wide mb-2">
                      Offer <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                      name="offer"
                      defaultValue={saleData?.offer}
                    />
                  </div>
                </div>

                <div className="flex ">
                  <div className="form-group w-full col-6  flex flex-col mb-[25px]">
                    <label className="inline-block text-sm tracking-wide mb-2">
                      End Time <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="datetime-local"
                      id="name"
                      className="form-control w-full h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                      name="time"
                      defaultValue={saleData?.time}
                    />
                  </div>

                  <div className="form-group w-full px-7 col-6  flex flex-col mb-[25px]">
                    <label className="inline-block text-sm tracking-wide mb-2">
                      Status <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="w-full border rounded p-3 border-gray-200 bg-[#fdfdff] focus:outline-none"
                      name="flashSaleStatus"
                      id=""
                      required
                      defaultValue={saleData?.status}
                    >
                      <option value="active">Active</option>
                      <option value="inactive">InActive</option>
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  <button className="text-white rounded py-[.3rem] px-[.8rem] shadow-[0_2px_6px_#acb5f6] border border-[#6777ef] bg-[#2046DA]">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
