import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { EcommerceApi } from "../../../../src/API/EcommerceApi";
import { controller } from "../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import { toast } from "react-hot-toast";
import { FaPlus, FaTrash } from "react-icons/fa";
import Social from "./Social";
interface Props {}

const ShopProfile: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [shopData, setShopData] = useState<any>();

  const [selectedLogo, setSelectedLogo] = useState(null);
  const [selectedCover, setSelectedCover] = useState(null);

  const [inputlists, setInputlists] = useState<any>([
    { social_icon: "", social_link: "" },
  ]);

  const logoChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedLogo(e.target.files[0]);
    }
  };
  const coverChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedCover(e.target.files[0]);
    }
  };

  // const imageChange = (e: any) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setSelectedLogo(e.target.files[0]);
  //     console.log(selectedLogo);
  //   }
  // };

  useEffect(() => {
    const getSingleSeller = async () => {
      const { res, err } = await EcommerceApi.getSingleSeller(
        states?.currentUser?.email
      );
      if (res) {
        setShopData(res);
        // console.log(res);
        setInputlists(res?.shop?.social);
      } else {
        console.log(err);
      }
    };
    getSingleSeller();
  }, []);

  // useEffect(() => {
  //   console.log("hello", inputlists);
  // }, [inputlists]);
  // console.log("seller email-", states?.currentUser?.email, shopData);

  const handleUpdateShop = async (e: any) => {
    e.preventDefault();
    controller.setApiLoading(true);

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
        logoUrl = shopData?.shop?.shop_logo;
      }

      const { res, err } = await EcommerceApi.uploadImage(formData2);

      if (res?.data?.url || !res?.data?.url) {
        let coverUrl;
        coverUrl = res?.data?.url;
        if (res?.data?.url === undefined || null) {
          coverUrl = shopData?.shop?.shop_cover;
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
            // social_icon: e.target.social_icon.value,
            // social_link: e.target.social_link.value,

            social: inputlists,

            seo_title: e.target.seo_title.value,
            seo_des: e.target.seo_des.value,
          },

          status: shopData.status,
          role: shopData.role,
          user_email: shopData.user_email,
        };

        const { res: editRes, err } = await EcommerceApi.editShop(
          newShopData,
          states?.currentUser?.email
        );
        if (editRes) {
          // console.log("newShopData-", newShopData);
          e.target.reset();
          toast.success("Successfully Updated !");
        }
      }
    }

    controller.setApiLoading(false);
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
                        {selectedLogo ? (
                          <img
                            id="preview-img"
                            className="admin-img border border-[#ddd] p-0 m-0 w-[100px] h-[83px] object-cover  rounded-full"
                            src={URL.createObjectURL(selectedLogo)}
                            alt=""
                          />
                        ) : (
                          <img
                            id="preview-img"
                            className="admin-img border border-[#ddd] p-0 m-0 w-[100px] h-[83px] object-cover rounded-full"
                            src={shopData?.shop.shop_logo}
                            alt=""
                          />
                        )}
                      </picture>
                    </div>
                  </div>
                  <div className="form-group grid text-sm">
                    <label
                      className="text-sm tracking-[.5px] text-[#34395e] font-semibold"
                      htmlFor="logoUrl">
                      New Logo
                    </label>

                    <input
                      className="  mt-2 p-3"
                      type="file"
                      name="logoUrl"
                      id=""
                      onChange={logoChange}
                      // defaultValue={shopData?.shop.shop_logo} border-gray-200 border  bg-[#fdfdff] rounded-md text-sm w-full
                    />
                  </div>

                  <div className="form-group col-12 mb-[25px]">
                    <label className="inline-block text-sm tracking-wide mb-2">
                      Current Banner Image
                    </label>
                    <div>
                      <picture>
                        {selectedCover ? (
                          <img
                            id="preview-img"
                            className="admin-img border border-[#ddd] p-0 m-0 w-[300px] h-[85px] object-cover"
                            src={URL.createObjectURL(selectedCover)}
                            alt=""
                          />
                        ) : (
                          <img
                            id="preview-img"
                            className="admin-img border border-[#ddd] p-0 m-0 w-[300px] h-[85px] object-cover"
                            src={shopData?.shop.shop_cover}
                            alt=""
                          />
                        )}
                      </picture>
                    </div>
                  </div>
                  <div className="form-group grid text-sm">
                    <label
                      className="text-sm tracking-[.5px] text-[#34395e] font-semibold"
                      htmlFor="coverUrl">
                      New Banner Image
                    </label>

                    <input
                      className=" mt-2 p-3 "
                      type="file"
                      name="coverUrl"
                      id="coverUrl"
                      onChange={coverChange}
                      // defaultValue={shopData?.shop.shop_cover} border border-gray-200 bg-[#fdfdff] rounded-md text-sm w-full
                    />
                  </div>

                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor="shop_name">
                        Shop Name
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] hover:border-blue-200 rounded-md text-sm focus:border-blue-200"
                      type="text"
                      name="shop_name"
                      id=""
                      readOnly
                      defaultValue={shopData?.shop?.shop_name}
                    />
                  </div>
                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor="email">
                        Email
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="email"
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
                        htmlFor="phone">
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
                      defaultValue={shopData?.shop.opens_at}
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
                      defaultValue={shopData?.shop.close_at}
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
                    <textarea
                      id="geetings_message"
                      name="geetings_message"
                      rows={3}
                      cols={90}
                      className="w-full p-2 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      defaultValue={
                        shopData?.shop?.geetings_message
                      }></textarea>
                  </div>

                  {/***************  social div start ***************/}
                  <Social
                    inputlists={inputlists}
                    setInputlists={setInputlists}
                  />

                  {/***************  social div end ***************/}

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
                      defaultValue={shopData?.shop.seo_title}
                    />
                  </div>

                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor="seo_des">
                        Seo Description
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <textarea
                      id="seo_des"
                      name="seo_des"
                      rows={4}
                      cols={90}
                      className="w-full p-2 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      defaultValue={shopData?.shop.seo_des}></textarea>

                    {/* <input
                      className="w-full p-5 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="seo_des"
                      id=""
                      defaultValue={shopData?.shop.seo_des}
                    /> */}
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
