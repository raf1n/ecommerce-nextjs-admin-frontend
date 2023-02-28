import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import { IOrder } from "../../../../../../interfaces/models";
import Table from "../../../Shared/Table";

interface Props {}

const AllOrders: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [allOrdersData, setAllOrdersData] = useState<IOrder[]>([]);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortType, setSortType] = useState("desc");
  const [searchString, setSearchString] = useState("");
  const [deleteModalSlug, setDeleteModalSlug] = useState<any | string>("");
  const [showUpdateModal, setShowUpdateModal] = useState<any | string>("");

  useEffect(() => {
    const findAllOrdersAdmin = async () => {
      const { res, err } = await EcommerceApi.allOrdersAdmin(
        `sortBy=${sortBy}&sortType=${sortType}&search=${searchString}`
      );
      if (err) {
        console.log(err);
      } else {
        setAllOrdersData(res.allOrdersData);
        console.log(res);
      }
    };

    findAllOrdersAdmin();
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
    <div className="">
      <DashboardBreadcrumb
        headline="All Orders : Seller"
        slug="All Orders"
        link="/all-orders"
      />

      <Table
        sortBy={sortBy}
        sortType={sortType}
        setSortBy={setSortBy}
        setSortType={setSortType}
        setSearchString={setSearchString}
        ordersData={allOrdersData}
        tableHeaders={tableHeaders}
      />
    </div>
  );
};

export default AllOrders;
