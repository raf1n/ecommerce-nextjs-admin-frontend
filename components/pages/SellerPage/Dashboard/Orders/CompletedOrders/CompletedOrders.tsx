import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import { IOrder } from "../../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import Table from "../../../Shared/Table";

interface Props {}

const CompletedOrders: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [completedOrdersData, setCompletedOrdersData] = useState<IOrder[]>([]);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortType, setSortType] = useState("desc");
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    const findProgressOrdersAdmin = async () => {
      const { res, err } = await EcommerceApi.allOrdersAdmin(
        `sortBy=${sortBy}&sortType=${sortType}&search=${searchString}&order_status=completed`
      );

      if (err) {
        console.log(err);
      } else {
        setCompletedOrdersData(res.filteredOrdersData);
        console.log(res);
      }
    };

    findProgressOrdersAdmin();
  }, [searchString, sortBy, sortType]);

  console.log({ searchString, sortBy, sortType });

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
        headline="Completed Orders : Seller"
        slug="Completed Orders"
        link="/completed-orders"
      />

      <Table
        sortBy={sortBy}
        sortType={sortType}
        setSortBy={setSortBy}
        setSortType={setSortType}
        setSearchString={setSearchString}
        ordersData={completedOrdersData}
        tableHeaders={tableHeaders}
      />
    </div>
  );
};

export default CompletedOrders;
