import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import Table from "../../../../../shared/SharedTable/Table";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import { IOrder } from "../../../../../../interfaces/models";

interface Props {}

const CashOnDelivery: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [completedOrdersData, setCompletedOrdersData] = useState<IOrder[]>([]);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortType, setSortType] = useState("desc");
  const [searchString, setSearchString] = useState("");
  const [deleteModalSlug, setDeleteModalSlug] = useState<any | string>("");
  const [showUpdateModal, setShowUpdateModal] = useState<any | string>("");

  const handleDelete = async () => {
    controller.setApiLoading(true);

    const { res, err } = await EcommerceApi.deleteByModal(
      deleteModalSlug,
      "orders"
    );

    if (res) {
      setDeleteModalSlug("");

      const remainingOrders = completedOrdersData.filter(
        (order) => order.slug !== deleteModalSlug
      );

      setCompletedOrdersData(remainingOrders);
    }

    controller.setApiLoading(false);
  };

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
  }, [searchString, sortBy, sortType, showUpdateModal]);

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
        headline="Cash On Delivery Orders"
        slug="Cash On Delivery Orders"
        link="/CashOnDelivery-orders"></DashboardBreadcrumb>

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
        ordersData={completedOrdersData}
        tableHeaders={tableHeaders}
      />
    </div>
  );
};

export default CashOnDelivery;
