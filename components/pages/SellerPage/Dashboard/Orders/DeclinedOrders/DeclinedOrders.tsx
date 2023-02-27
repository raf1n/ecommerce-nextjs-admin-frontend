import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import { IOrder } from "../../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import Table from "../../../Shared/Table";

interface Props {}

const DeclinedOrders: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [declinedOrdersData, setDeclinedOrdersData] = useState<IOrder[]>([]);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortType, setSortType] = useState("desc");
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    const findAllOrdersAdmin = async () => {
      const { res, err } = await EcommerceApi.allOrdersAdmin(
        `sortBy=${sortBy}&sortType=${sortType}&search=${searchString}&order_status=declined`
      );
      if (err) {
        console.log(err);
      } else {
        setDeclinedOrdersData(res.filteredOrdersData);
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
        headline="Declined Orders:Seller"
        slug="Declined Orders"
        link="/Declined-orders"
      />

      <Table
        sortBy={sortBy}
        sortType={sortType}
        setSearchString={setSearchString}
        setSortBy={setSortBy}
        setSortType={setSortBy}
        tableHeaders={tableHeaders}
        ordersData={declinedOrdersData}
      />
    </div>
  );
};

export default DeclinedOrders;
