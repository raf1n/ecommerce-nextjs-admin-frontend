import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../src/state/StateController";

import {
  FaNewspaper,
  FaShoppingCart,
  FaCircle,
  FaCheckCircle,
  FaUser,
} from "react-icons/fa";
import { EcommerceApi } from "../../../../../src/API/EcommerceApi";
import Table from "../../../../shared/SharedTable/Table";
import { IOrder } from "../../../../../interfaces/models";
interface Props {}

const AdminDetailsSummary: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const [sortBy, setSortBy] = useState("createdAt");
  const [sortType, setSortType] = useState("desc");
  const [searchString, setSearchString] = useState("");
  const [deleteModalSlug, setDeleteModalSlug] = useState<any | string>("");
  const [showUpdateModal, setShowUpdateModal] = useState<any | string>("");
  const [count, setCount] = useState<any>({});
  const [todayOrdersData, setTodayOrdersData] = useState<IOrder[]>([]);

  useEffect(() => {
    const allDashboardCount = async () => {
      const { res, err } = await EcommerceApi.allDashboardCount(
        `sortBy=${sortBy}&sortType=${sortType}&search=${searchString}`
      );
      if (res) {
        setCount(res);
        console.log(res);
        setTodayOrdersData(res.todayNewOrders);
      } else {
        console.log(err);
      }
    };
    allDashboardCount();
  }, [searchString, sortBy, sortType, showUpdateModal]);

  const dashboardSummaryData = [
    {
      id: 1,
      title: "Today Order",
      icons: FaShoppingCart,
      bgColor: "#6777ef",
      value: count?.todayNewOrders?.length,
    },
    {
      id: 2,
      title: "Today Pending Order",
      icons: FaShoppingCart,
      bgColor: "#6777ef",
      value: "7",
    },
    {
      id: 3,
      title: "Total Order",
      icons: FaShoppingCart,
      bgColor: "#6777ef",
      value: count.allOrdersCount,
    },
    {
      id: 4,
      title: "Total Pending Order",
      icons: FaShoppingCart,
      bgColor: "#6777ef",
      value: count.pendingOrdersCount,
    },
    {
      id: 5,
      title: "Total Declined Order",
      icons: FaShoppingCart,
      bgColor: "#ffa426",
      value: count.declinedOrdersCount,
    },
    {
      id: 6,
      title: "Total Complete Order",
      icons: FaShoppingCart,
      bgColor: "#ffa426",
      value: count.completedOrdersCount,
    },
    {
      id: 7,
      title: "Total Earning",
      icons: FaNewspaper,
      bgColor: "#ffa426",
      value: "$909",
    },
    {
      id: 8,
      title: "Today Pending Earning",
      icons: FaNewspaper,
      bgColor: "#ffa426",
      value: "$0",
    },
    {
      id: 9,
      title: "This Month Earning",
      icons: FaNewspaper,
      bgColor: "#47c363",
      value: "$0",
    },
    {
      id: 10,
      title: "This Year Earning",
      icons: FaNewspaper,
      bgColor: "#47c363",
      value: "$0",
    },
    {
      id: 11,
      title: "Total Earning",
      icons: FaNewspaper,
      bgColor: "#47c363",
      value: "$0",
    },
    {
      id: 12,
      title: "Today Product Sale",
      icons: FaCircle,
      bgColor: "#47c363",
      value: "0",
    },
    {
      id: 13,
      title: "This Month Product Sale",
      icons: FaCircle,
      bgColor: "#fc544b",
      value: "0",
    },
    {
      id: 14,
      title: "This Year Product Sale",
      icons: FaCircle,
      bgColor: "#fc544b",
      value: "0",
    },
    {
      id: 15,
      title: "Total Product Sale",
      icons: FaCircle,
      bgColor: "#fc544b",
      value: "0",
    },
    {
      id: 16,
      title: "Total Product",
      icons: FaCheckCircle,
      bgColor: "#fc544b",
      value: count.productCount,
    },
    {
      id: 17,
      title: "Total Product Report",
      icons: FaCheckCircle,
      bgColor: "#47c363",
      value: count.reportedCount,
    },
    {
      id: 18,
      title: "Total Product Review",
      icons: FaCheckCircle,
      bgColor: "#47c363",
      value: count.reviewCount,
    },
    {
      id: 19,
      title: "Total Seller",
      icons: FaUser,
      bgColor: "#47c363",
      value: "0",
    },
    {
      id: 20,
      title: "Total User",
      icons: FaUser,
      bgColor: "#47c363",
      value: count.usersCount,
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
      value: count.categoryCount,
    },
    {
      id: 24,
      title: "Total Brand",
      icons: FaCheckCircle,
      bgColor: "#2563eb",
      value: count.brandCount,
    },
  ];

  const handleDelete = async () => {
    const { res, err } = await EcommerceApi.deleteByModal(
      deleteModalSlug,
      "orders"
    );
    if (res) {
      setDeleteModalSlug("");
      const remaining = todayOrdersData.filter(
        (order) => order.slug !== deleteModalSlug
      );
      setTodayOrdersData(remaining);
    }
  };

  const tableHeaders = {
    SN: "sn",
    Customer: "userData.fullName",
    "Order Id": "slug",
    Date: "createdAt",
    Quantity: "quantity",
    Amount: "subTotal",
    "Order Status": "order_status",
    Payment: "payment_status",
    Action: "action",
  };

  return (
    <div>
      <div className="flex justify-between  bg-white  rounded-[3px] m-[25px] p-[20px] h-[72px]">
        <div>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
      </div>

      <div className="section-body mx-2">
        <div className="px-4 w-full">
          <div className="grid grid-cols-12 gap-4">
            {dashboardSummaryData.map((data) => (
              <div className="col-span-12 sm:col-span-6 md:col-span-3 mb-3 px-2">
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

      <div>
        <div className="p-4  m-7 bg-white">
          <h1 className="mb-10 text-2xl font-bold ">Today New Order</h1>

          <hr />

          <Table
            showUpdateModal={showUpdateModal}
            setShowUpdateModal={setShowUpdateModal}
            handleDelete={handleDelete}
            deleteModalSlug={deleteModalSlug}
            setDeleteModalSlug={setDeleteModalSlug}
            sortBy={sortBy}
            sortType={sortType}
            setSortBy={setSortBy}
            setSortType={setSortType}
            setSearchString={setSearchString}
            ordersData={todayOrdersData}
            tableHeaders={tableHeaders}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDetailsSummary;
