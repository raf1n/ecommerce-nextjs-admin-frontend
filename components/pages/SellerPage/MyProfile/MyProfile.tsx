import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import { FaShoppingCart, FaCheckCircle } from "react-icons/fa";
import style from "./MyProfile.module.css";
import { EcommerceApi } from "../../../../src/API/EcommerceApi";
import Link from "next/link";
import { SocialLogin } from "../../../helpers/SocialLogin";
import { toast } from "react-hot-toast";

interface Props {}

const MyProfile: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [seller, setSeller] = useState<any | string>({});

  useEffect(() => {
    const fetchSingleSeller = async () => {
      const { res, err } = await EcommerceApi.getSingleSeller(
        states?.currentUser?.email
      );
      if (res) {
        setSeller(res);
      }
    };
    fetchSingleSeller();
  }, []);

  const handleUpdateProfile = async (e: any) => {
    e.preventDefault();
    controller.setApiLoading(true);

    const image = e.target.profilePicUrl.files[0];
    const formData = new FormData();
    formData.append("image", image);

    const { res, err } = await EcommerceApi.uploadImage(formData);

    if (res?.data?.url || !res?.data?.url) {
      let imageURL;
      imageURL = res?.data?.url;
      
      if (res?.data?.url === undefined || null) {
        imageURL = states.currentUser?.avatar;
      }

      const newProfileDataForFirebase = {
        fullName: e.target.name.value,
        avatar: imageURL,
      };

      const { res: socialRes, err } =
        await SocialLogin.updateLoggedInAdminProfile(
          states.currentUser?.slug,
          newProfileDataForFirebase
        );

      const newProfileData = {
        fullName: newProfileDataForFirebase.fullName,
        avatar: newProfileDataForFirebase.avatar,
        phone: e.target.phone.value,
        shop: {
          shop_address: e.target.address.value,
        },
      };

      if (socialRes === "Profile updated") {
        const { res: dbRes, err } = await EcommerceApi.editProfile(
          newProfileData,
          states?.currentUser?.email
        );

        if (dbRes) {
          controller.setCurrentUser(dbRes);
          // setSeller(dbRes);
          toast.success("Profile Updated Successfully");
          // e.target.reset();
        }
      }
    }

    controller.setApiLoading(false);
  };

  const dashboardSummaryData = [
    {
      id: 1,
      title: "Total Product Sale",
      icons: FaCheckCircle,
      bgColor: "#6777ef ",
      value: "0",
    },

    {
      id: 2,
      title: "Total Withdraw",
      icons: FaShoppingCart,
      bgColor: "#fc544b ",
      value: "0",
    },
    {
      id: 3,
      title: "Current Balance",
      icons: FaShoppingCart,
      bgColor: "#ffa426 ",
      value: "0",
    },

    {
      id: 4,
      title: "Total Product",
      icons: FaCheckCircle,
      bgColor: "#47c363 ",
      value: "4",
    },
  ];

  return (
    <div>
      <div>
        <DashboardBreadcrumb
          headline="My Profile"
          slug="My Profile"
          link="/my-profile"
        />
      </div>

      <div className="section-body mx-2">
        <div className="px-4 w-full">
          <div className="grid grid-cols-12 gap-4">
            {dashboardSummaryData.map((data) => (
              <div className="col-span-12 sm:col-span-6 md:col-span-3">
                <div className="flex flex-row bg-white shadow-sm rounded p-2 justify-center items-center">
                  <div
                    className={`flex items-center justify-center flex-shrink-0 h-20 w-20 p-6 rounded  border`}
                    style={{ backgroundColor: data.bgColor }}
                  >
                    <data.icons className="w-[25px] h-[22px] text-white"></data.icons>
                  </div>
                  <div className="flex flex-col flex-grow ml-4">
                    <div className="text-sm  text-gray-400">{data?.title}</div>
                    <div className="font-bold text-lg">{data?.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex">
        <div>
          <div className={`${style["card"]}`}>
            <div>
              <div className={`${style["profile-widget-items"]} `}>
                <img
                  className={`${style["seller-img"]}  `}
                  src={seller?.avatar}
                  alt=""
                />
                <div className={`${style["profile-widget-item"]} `}>
                  <div>Joined at</div>
                  <div>{seller?.createdAt?.split("T")[0]}</div>
                </div>
                <div className={`${style["profile-widget-item"]} `}>
                  <div>Balanced</div>
                  <div>999</div>
                </div>
              </div>
              <div>
                {/* table */}

                <div className="relative overflow-x-auto  mt-12">
                  <table className="w-full text-sm text-left text-gray-500 border-[0.25px] ">
                    <thead className="text-sm text-gray-700  bg-gray-50 ">
                      <tr>
                        <th scope="col" className="px-6 py-5">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-5 capitalize">
                          {/* {seller?.fullName} */}
                          {states.currentUser?.fullName}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white ">
                        <th
                          scope="row"
                          className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap "
                        >
                          Email
                        </th>
                        <td className="px-6 py-5">{seller.email}</td>
                      </tr>
                      <tr className=" bg-gray-50">
                        <th
                          scope="row"
                          className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap "
                        >
                          Phone
                        </th>
                        <td className="px-6 py-5">{seller.phone}</td>
                      </tr>

                      <tr className="bg-white ">
                        <th
                          scope="row"
                          className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap "
                        >
                          User Status
                        </th>
                        <td className="px-6 py-5 ">
                          <span className="bg-[#28a745] py-1 px-3 text-white rounded-full text-xs">
                            {seller.status}
                          </span>
                        </td>
                      </tr>
                      <tr className=" bg-gray-50 ">
                        <th
                          scope="row"
                          className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap "
                        >
                          Shop Status
                        </th>
                        <td className="px-6 py-5 ">
                          <span className="bg-[#28a745] py-1 px-3 text-white rounded-full text-xs">
                            Active
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <div className="mt-12 text-center capitalize">
                  {/* <b>Follow {seller?.fullName}</b> */}
                  <b>Follow {states.currentUser?.fullName}</b>
                </div>
              </div>
            </div>
          </div>
          <div className={`${style["seller-action"]} text-white  py-3`}>
            <div className="border-b py-2 text-2xl font-bold text-black">
              Seller Action
            </div>
            <Link href={`/seller/shop_profile/`}>
              <button className=" bg-[#47c363] mt-6 my-2 py-2.5 px-[145px] rounded shadow shadow-[#81d694]">
                Go To Shop
              </button>
            </Link>

            <Link href={`/seller/product_reviews`}>
              <button className="bg-blue-700 my-2 py-2.5 px-[143px] rounded shadow shadow-blue-700">
                My Reviews
              </button>
            </Link>

            <Link href={`/seller/email-history`}>
              <button className="bg-cyan-500 my-2 py-2.5 px-[150px] rounded shadow shadow-cyan-600">
                Email Log
              </button>
            </Link>

            <Link href={`/seller/change-password`}>
              <button className=" bg-[#ffa426] my-2 py-2.5 px-[121px] rounded shadow shadow-[#ffc473]">
                Change Password
              </button>
            </Link>
          </div>
        </div>

        {/* Edit Profile */}
        <div>
          <div className="w-[623px] h-[430px] bg-white  mx-5 mt-12">
            <div className="px-7 py-5  border-b font-bold text-blue-600">
              Edit Profile
            </div>
            <div className="px-7">
              <form onSubmit={handleUpdateProfile}>
                <div className="mb-6 mt-8">
                  <label
                    htmlFor="file"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    New Image
                  </label>
                  <input
                    type="file"
                    id="profilePicUrl"
                    name="profilePicUrl"
                    className=""
                    defaultValue={seller?.avater}
                  />
                </div>
                <div className="grid grid-cols-2">
                  <div className="mb-6 ">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Name <span className="text-red-500"> *</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-10/12 p-2.5 "
                      placeholder="Type your name here"
                      defaultValue={seller?.fullName}
                    />
                  </div>

                  <div className="mb-6  ">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email <span className="text-red-500"> *</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-10/12  p-2.5 "
                      placeholder="Type your email here"
                      defaultValue={seller?.email}
                      readOnly
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Phone <span className="text-red-500"> *</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 w-10/12  p-2.5 "
                      placeholder="Type your phone here"
                      defaultValue={seller?.phone}
                    />
                  </div>

                  <div className="mb-6 ">
                    <label
                      htmlFor="address"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Address <span className="text-red-500"> *</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-10/12 p-2.5 "
                      placeholder="Type your address here"
                      defaultValue={seller?.shop?.shop_address}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-5 py-2 text-center shadow shadow-blue-500"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
