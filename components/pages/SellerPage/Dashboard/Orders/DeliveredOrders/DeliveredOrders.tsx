import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import { IOrder } from "../../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import Table from "../../../Shared/Table";

interface Props {}

const DeliveredOrders: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [deliveredOrdersData, setDeliveredOrdersData] = useState<IOrder[]>([]);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortType, setSortType] = useState("desc");
  const [searchString, setSearchString] = useState("");

  const seller_slug = states.currentUser?.slug;

  useEffect(() => {
    const getAllOrderForSeller = async () => {
      const { res, err } = await EcommerceApi.getAllOrderForSeller(
        seller_slug,
        `sortBy=${sortBy}&sortType=${sortType}&search=${searchString}&order_status=delivered`
      );

      if (err) {
        console.log(err);
      } else {
        setDeliveredOrdersData(res);
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
        headline="Delivered Orders : Seller"
        slug="Delivered Orders"
        link="/delivered-orders"
      />

      <Table
        sortBy={sortBy}
        sortType={sortType}
        setSortBy={setSortBy}
        setSortType={setSortType}
        setSearchString={setSearchString}
        ordersData={deliveredOrdersData}
        tableHeaders={tableHeaders}
      />
    </div>
  );
};

export default DeliveredOrders;
