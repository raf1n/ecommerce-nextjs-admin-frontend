import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import { FaShoppingCart, FaCheckCircle } from "react-icons/fa";
import style from "./MyProfile.module.css";

interface Props {}

const MyProfile: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

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
                    style={{ backgroundColor: data.bgColor }}>
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
                  src="https://api.websolutionus.com/shopo/uploads/custom-images/kelsey-conrad-2022-12-28-04-55-51-8312.jpg"
                  alt=""
                />
                <div className={`${style["profile-widget-item"]} `}>
                  <div>Joined at</div>
                  <div>21 Sep 2022</div>
                </div>
                <div className={`${style["profile-widget-item"]} `}>
                  <div>Balanced</div>
                  <div>212022</div>
                </div>
              </div>

              <div>
                {/* table */}

                <div className="relative overflow-x-auto  mt-12">
                  <table className="w-full text-sm text-left text-gray-500 border ">
                    <thead className="text-xs text-gray-700  bg-gray-50 ">
                      <tr>
                        <th scope="col" className="px-6 py-5">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-5">
                          Kelsey Conrad
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white ">
                        <th
                          scope="row"
                          className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap ">
                          Email
                        </th>
                        <td className="px-6 py-5">seller@gmail.com</td>
                      </tr>
                      <tr className=" bg-gray-50">
                        <th
                          scope="row"
                          className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap ">
                          Phone
                        </th>
                        <td className="px-6 py-5">123-874-8948</td>
                      </tr>

                      <tr className="bg-white ">
                        <th
                          scope="row"
                          className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap ">
                          User Status
                        </th>
                        <td className="px-6 py-5 ">
                          <span className="bg-[#28a745] py-1 px-3 text-white rounded-full text-xs">
                            Active
                          </span>
                        </td>
                      </tr>
                      <tr className=" bg-gray-50 ">
                        <th
                          scope="row"
                          className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap ">
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
                <div className="mt-12 text-center">
                  <p>Follow Kelsey Conrad</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${style["seller-action"]} text-white  py-3`}>
            <div className="border-b py-2 text-2xl font-bold text-black">
              Seller Action
            </div>
            <button className=" bg-[#47c363] mt-6 my-2 py-2.5 px-2 rounded shadow shadow-[#81d694]">
              Go To Shop
            </button>
            <button className="bg-blue-700 my-2 py-2.5 px-2 rounded shadow shadow-blue-700">
              My Reviews
            </button>
            <button className="bg-cyan-500 my-2 py-2.5 px-2 rounded shadow shadow-cyan-600">
              Email Log
            </button>
            <button className=" bg-[#ffa426] my-2 py-2.5 px-2 rounded shadow shadow-[#ffc473]">
              Change Password
            </button>
          </div>
        </div>

        {/* Edit Profile */}
        <div>
          <div className="w-[623px] h-[430px] bg-white  mx-5 mt-12">
            <div className="px-7 py-5  border-b font-bold text-blue-600">
              Edit Profile
            </div>
            <div className="px-7">
              <form>
                <div className="mb-6 mt-8">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900">
                    New Image
                  </label>
                  <input type="file" id="file" />
                </div>
                <div className="grid grid-cols-2">
                  <div className="mb-6 ">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900">
                      Your Name
                    </label>
                    <input
                      type="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-10/12 p-2.5 "
                      placeholder="Iqbal Hasan"
                      required
                    />
                  </div>

                  <div className="mb-6  ">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-10/12  p-2.5 "
                      placeholder="iamhasan9501@gmail.com"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 ">
                      Your phone
                    </label>
                    <input
                      type="phone"
                      id="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 w-10/12  p-2.5 "
                      placeholder="01834 093014 "
                      required
                    />
                  </div>

                  <div className="mb-6 ">
                    <label
                      htmlFor="address"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your address
                    </label>
                    <input
                      type="address"
                      id="address"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-10/12 p-2.5 "
                      placeholder="255 VIP Tower, Kazir Dewri , Chattogram"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-5 py-2 text-center shadow shadow-blue-500">
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
