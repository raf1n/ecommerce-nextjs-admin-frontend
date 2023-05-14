import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import { IOrder } from "../../../../../../interfaces/models";
import Table from "../../../Shared/Table";
import { CookiesHandler } from "../../../../../../src/utils/CookiesHandler";

interface Props {}

const ProgressOrders: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const [progressOrdersData, setProgressOrdersData] = useState<IOrder[]>([]);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortType, setSortType] = useState("desc");
  const [searchString, setSearchString] = useState("");
  const [deleteModalSlug, setDeleteModalSlug] = useState<any | string>("");
  const [showUpdateModal, setShowUpdateModal] = useState<any | string>("");

  const seller_slug = CookiesHandler.getSlug();

  useEffect(() => {
    const getAllOrderForSeller = async () => {
      const { res, err } = await EcommerceApi.getAllOrderForSeller(
        seller_slug,
        `sortBy=${sortBy}&sortType=${sortType}&search=${searchString}&order_status=in_progress`
      );
      if (err) {
        console.log(err);
      } else {
        setProgressOrdersData(res);
        console.log(res);
      }
    };
    getAllOrderForSeller();
  }, [searchString, sortBy, sortType]);

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
      <DashboardBreadcrumb
        headline="Progress Orders  : Seller"
        slug="Progress Orders"
        link="/progress-orders"
      ></DashboardBreadcrumb>

      <Table
        sortBy={sortBy}
        sortType={sortType}
        setSortBy={setSortBy}
        setSortType={setSortType}
        setSearchString={setSearchString}
        ordersData={progressOrdersData}
        tableHeaders={tableHeaders}
      />
    </div>
  );
};

export default ProgressOrders;
