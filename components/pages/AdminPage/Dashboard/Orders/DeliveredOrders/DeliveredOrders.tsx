import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import Table from "../../../../../shared/SharedTable/Table";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import { IOrder } from "../../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";

interface Props {}

const DeliveredOrders: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [deliveredOrdersData, setDeliveredOrdersData] = useState<IOrder[]>([]);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortType, setSortType] = useState("desc");
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    const findAllOrdersAdmin = async () => {
      const { res, err } = await EcommerceApi.allOrdersAdmin(
        `sortBy=${sortBy}&sortType=${sortType}&search=${searchString}&order_status=delivered`
      );
      if (err) {
        console.log(err);
      } else {
        setDeliveredOrdersData(res.filteredOrdersData);
        console.log(res);
      }
    };

    findAllOrdersAdmin();
  }, [searchString, sortBy, sortType]);

  console.log({ searchString, sortBy, sortType });

  const tableHeaders = {
    SN: "sn",
    Customer: "customer",
    "Order Id": "slug",
    Date: "createdAt",
    Quantity: "quantity",
    Amount: "amount",
    "Order Status": "order_status",
    Payment: "payment_status",
    Action: "action",
  };

  return (
    <div>
      <DashboardBreadcrumb
        headline="Delivered Orders"
        slug="Delivered Orders"
        link="/delivered-orders"
      ></DashboardBreadcrumb>

      <Table
        sortBy={sortBy}
        sortType={sortType}
        setSearchString={setSearchString}
        setSortBy={setSortBy}
        setSortType={setSortBy}
        tableHeaders={tableHeaders}
        ordersData={deliveredOrdersData}
      />
    </div>
  );
};

export default DeliveredOrders;
