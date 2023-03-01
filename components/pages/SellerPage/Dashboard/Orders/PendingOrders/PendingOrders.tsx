import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import { IOrder } from "../../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import Table from "../../../Shared/Table";

interface Props {}

const PendingOrders: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const [pendingOrdersData, setPendingOrdersData] = useState<IOrder[]>([]);

  const [sortBy, setSortBy] = useState("createdAt");
  const [sortType, setSortType] = useState("desc");
  const [searchString, setSearchString] = useState("");
  const [deleteModalSlug, setDeleteModalSlug] = useState<any | string>("");
  const [showUpdateModal, setShowUpdateModal] = useState<any | string>("");

  useEffect(() => {
    const findPendingOrdersAdmin = async () => {
      const { res, err } = await EcommerceApi.allOrdersAdmin(
        `sortBy=${sortBy}&sortType=${sortType}&search=${searchString}&order_status=pending`
      );
      if (err) {
        console.log(err);
      } else {
        setPendingOrdersData(res.filteredOrdersData);
        console.log(res);
      }
    };
    findPendingOrdersAdmin();
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
        headline="Pending Orders : Seller"
        slug="Pending Orders"
        link="/pending-orders"
      />

      <Table
        sortBy={sortBy}
        sortType={sortType}
        setSortBy={setSortBy}
        setSortType={setSortType}
        setSearchString={setSearchString}
        ordersData={pendingOrdersData}
        tableHeaders={tableHeaders}
      />
    </div>
  );
};

export default PendingOrders;
