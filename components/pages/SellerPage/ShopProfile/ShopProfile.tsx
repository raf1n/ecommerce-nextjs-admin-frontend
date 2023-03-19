import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { EcommerceApi } from "../../../../src/API/EcommerceApi";
import { controller } from "../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
interface Props {}

const ShopProfile: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [shopData, setShopData] = useState<any>();

  useEffect(() => {
    const getSingleSeller = async () => {
      const { res, err } = await EcommerceApi.getSingleSeller(
        states?.currentUser?.email
      );
      if (res) {
        console.log(res);
        setShopData(res);
        console.log("shoopp", shopData);
      } else {
        console.log(err);
      }
    };
    getSingleSeller();
  }, []);
  console.log("seller email-", states?.currentUser?.email);

  const handleUpdateShop = async (e: any) => {
    e.preventDefault();

    const logo = e.target.logoUrl.files[0];
    const cover = e.target.coverUrl.files[0];
    const formData1 = new FormData();
    formData1.append("image", logo);
    const formData2 = new FormData();
    formData2.append("image", cover);

    const { res: res1, err } = await EcommerceApi.uploadImage(formData1);
    if (res1?.data?.url || !res1?.data?.url) {
      let logoUrl;
      logoUrl = res1?.data?.url;
      if (res1?.data?.url === undefined || null) {
        logoUrl = "";
      }

      const { res, err } = await EcommerceApi.uploadImage(formData2);

      if (res?.data?.url || !res?.data?.url) {
        let coverUrl;
        coverUrl = res?.data?.url;
        if (res?.data?.url === undefined || null) {
          coverUrl = "";
        }

        const newShopData = {
          email: e.target.email.value,
          phone: e.target.phone.value,
          shop: {
            shop_name: e.target.shop_name.value,
            shop_address: e.target.address.value,
            shop_logo: logoUrl,
            shop_cover: coverUrl,
            opens_at: e.target.opens_at.value,
            close_at: e.target.close_at.value,
            geetings_message: e.target.geetings_message.value,
            social_icon: e.target.social_icon.value,
            social_link: e.target.social_link.value,
            seo_title: e.target.seo_title.value,
            seo_des: e.target.seo_des.value,
          },
          status: shopData.status,
          role: shopData.role,
          user_email: shopData.user_email,
        };

        EcommerceApi.editShop(newShopData, states?.currentUser?.email);
        console.log("newShopData-", newShopData);
        e.target.reset();
      }
    }
  };

  return (
    <div className="w-full">
      <DashboardBreadcrumb headline="My Shop" link="my_shop" slug="My Shop" />

      <div className="px-[25px] w-full relative">
        <div className="mt-4">
          <div className="mt-6 shadow-md bg-white rounded relative mb-7 border-0">
            <div className="p-5 leading-6">
              <form onSubmit={handleUpdateShop}>
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
                      htmlFor="">
                      New Logo
                      {/* <span className=" text-red-500 ml-2">*</span> */}
                    </label>

                    <input
                      className="w-full mt-4 p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="file"
                      name="logoUrl"
                      id=""
                      defaultValue={shopData?.shop_logo}
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
                      htmlFor="">
                      New Banner Image
                      {/* <span className=" text-red-500 ml-2">*</span> */}
                    </label>

                    <input
                      className="w-full mt-4 p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="file"
                      name="coverUrl"
                      id=""
                      defaultValue={shopData?.shop_cover}
                    />
                  </div>

                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor="">
                        Shop Name
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="shop_name"
                      id=""
                      defaultValue={shopData?.shop?.shop_name}
                    />
                  </div>
                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor="">
                        Email
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="email"
                      id=""
                      defaultValue={shopData?.email}
                      readOnly
                    />
                  </div>
                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor="">
                        Phone
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="number"
                      name="phone"
                      id=""
                      defaultValue={shopData?.phone}
                    />
                  </div>

                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor="">
                        Opens at
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="time"
                      name="opens_at"
                      id=""
                      defaultValue={shopData?.opens_at}
                    />
                  </div>

                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor="">
                        Closed at
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="time"
                      name="close_at"
                      id=""
                      defaultValue={shopData?.close_at}
                    />
                  </div>

                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor="">
                        Address
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="address"
                      id=""
                      defaultValue={shopData?.shop?.shop_address}
                    />
                  </div>

                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor="">
                        Greetings Message for Chatbox
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      className="w-full p-7 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="geetings_message"
                      id=""
                      defaultValue={shopData?.geetings_message}
                    />
                  </div>

                  <div className="mt-4 flex gap-5">
                    <div className="w-full">
                      <div className="my-2 ">
                        <label
                          className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                          htmlFor="">
                          Social Icon
                        </label>
                        {/* <span className="text-red-500 ml-2">*</span> */}
                      </div>
                      <input
                        className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                        type="text"
                        name="social_icon"
                        id=""
                        defaultValue={shopData?.social_icon}
                      />
                    </div>
                    <div className="w-full">
                      <div className="my-2">
                        <label
                          className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                          htmlFor="">
                          Social Link
                        </label>
                        {/* <span className="text-red-500 ml-2">*</span> */}
                      </div>
                      <input
                        className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                        type="text"
                        name="social_link"
                        id=""
                        defaultValue={shopData?.social_link}
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor="">
                        Seo Title
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="seo_title"
                      id=""
                      defaultValue={shopData?.seo_title}
                    />
                  </div>

                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor="">
                        Seo Description
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      className="w-full p-7 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="seo_des"
                      id=""
                      defaultValue={shopData?.seo_des}
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="bg-blue-700 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded">
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
