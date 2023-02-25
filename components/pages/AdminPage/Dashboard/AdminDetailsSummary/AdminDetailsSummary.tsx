import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../src/state/StateController";
import Styles from "./AdminDetailsSummary.module.css";
import { Jsondata } from "../../../../../src/utils/Jsondata";
import {
  FaFire,
  FaTrash,
  FaCog,
  FaEnvelope,
  FaColumns,
  FaGlobe,
  FaUserAlt,
  FaNewspaper,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaHome,
  FaAdversal,
  FaCircle,
  FaCheckCircle,
  FaUser,
  FaAnchor,
  FaGamepad,
  FaMobileAlt,
  FaBasketballBall,
  FaBicycle,
  FaStreetView,
  FaAndroid,
  FaAdjust,
  FaCogs,
} from "react-icons/fa";
import { EcommerceApi } from "../../../../../src/API/EcommerceApi";
interface Props {}

const AdminDetailsSummary: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const dashboardSummaryData = [
    {
      id: 1,
      title: "Today Order",
      icons: FaShoppingCart,
      bgColor: "#2563eb",
      value: "0",
    },
    {
      id: 2,
      title: "Today Pending Order",
      icons: FaShoppingCart,
      bgColor: "#2563eb",
      value: "7",
    },
    {
      id: 3,
      title: "Total Order",
      icons: FaShoppingCart,
      bgColor: "#2563eb",
      value: "2",
    },
    {
      id: 4,
      title: "Total Pending Order",
      icons: FaShoppingCart,
      bgColor: "#2563eb",
      value: "62",
    },
    {
      id: 5,
      title: "Total Declined Order",
      icons: FaShoppingCart,
      bgColor: "#c2410c",
      value: "0",
    },
    {
      id: 6,
      title: "Total Complete Order",
      icons: FaShoppingCart,
      bgColor: "#c2410c",
      value: "6",
    },
    {
      id: 7,
      title: "Total Earning",
      icons: FaNewspaper,
      bgColor: "#c2410c",
      value: "$0",
    },
    {
      id: 8,
      title: "Today Pending Earning",
      icons: FaNewspaper,
      bgColor: "#c2410c",
      value: "$0",
    },
    {
      id: 9,
      title: "This Month Earning",
      icons: FaNewspaper,
      bgColor: "#16a34a",
      value: "$0",
    },
    {
      id: 10,
      title: "This Year Earning",
      icons: FaNewspaper,
      bgColor: "#16a34a",
      value: "$0",
    },
    {
      id: 11,
      title: "Total Earning",
      icons: FaNewspaper,
      bgColor: "#16a34a",
      value: "$0",
    },
    {
      id: 12,
      title: "Today Product Sale",
      icons: FaCircle,
      bgColor: "#16a34a",
      value: "0",
    },
    {
      id: 13,
      title: "This Month Product Sale",
      icons: FaCircle,
      bgColor: "#dc2626",
      value: "0",
    },
    {
      id: 14,
      title: "This Year Product Sale",
      icons: FaCircle,
      bgColor: "#dc2626",
      value: "0",
    },
    {
      id: 15,
      title: "Total Product Sale",
      icons: FaCircle,
      bgColor: "#dc2626",
      value: "0",
    },
    {
      id: 16,
      title: "Total Product",
      icons: FaCheckCircle,
      bgColor: "#dc2626",
      value: "0",
    },
    {
      id: 17,
      title: "Total Product Report",
      icons: FaCheckCircle,
      bgColor: "#16a34a",
      value: "0",
    },
    {
      id: 18,
      title: "Total Product Review",
      icons: FaCheckCircle,
      bgColor: "#16a34a",
      value: "0",
    },
    {
      id: 19,
      title: "Total Seller",
      icons: FaUser,
      bgColor: "#16a34a",
      value: "0",
    },
    {
      id: 20,
      title: "Total Seller",
      icons: FaUser,
      bgColor: "#16a34a",
      value: "0",
    },
    {
      id: 21,
      title: "Total Subscriber",
      icons: FaUser,
      bgColor: "#2563eb",
      value: "0",
    },
    {
      id: 22,
      title: "Total Blog",
      icons: FaCheckCircle,
      bgColor: "#2563eb",
      value: "0",
    },
    {
      id: 23,
      title: "Product Category",
      icons: FaCheckCircle,
      bgColor: "#2563eb",
      value: "0",
    },
    {
      id: 24,
      title: "Total Brand",
      icons: FaCheckCircle,
      bgColor: "#2563eb",
      value: "40",
    },
  ];

  return (
    <div>
      <div
        className="flex justify-between  bg-white my-12 rounded-[3px]"
        style={{ margin: "25px", padding: "20px", height: "72px" }}>
        <div>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
      </div>
      <div className="section-body mx-2">
        <div className="px-4 w-full">
          <div className="grid grid-cols-12 gap-4">
            {dashboardSummaryData.map((data) => (
              <div className="col-span-12 sm:col-span-6 md:col-span-3">
                <div className="flex flex-row bg-white shadow-sm rounded p-2 justify-center items-center">
                  <div
                    className={`flex items-center justify-center flex-shrink-0 h-14 w-14 p-2   border`}
                    style={{ backgroundColor: data.bgColor }}>
                    <data.icons className="w-6 h-6 text-white"></data.icons>
                  </div>
                  <div className="flex flex-col flex-grow ml-4">
                    <div className="text-sm text-gray-500">{data?.title}</div>
                    <div className="font-bold text-lg">{data?.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDetailsSummary;
