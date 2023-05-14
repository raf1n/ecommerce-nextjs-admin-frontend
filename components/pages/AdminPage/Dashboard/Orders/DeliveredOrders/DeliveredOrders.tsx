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
  const [deleteModalSlug, setDeleteModalSlug] = useState<any | string>("");
  const [showUpdateModal, setShowUpdateModal] = useState<any | string>("");
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const handleDelete = async () => {
    controller.setApiLoading(true);

    const { res, err } = await EcommerceApi.deleteByModal(
      deleteModalSlug,
      "orders"
    );

    if (res) {
      setDeleteModalSlug("");

      const remainingOrders = deliveredOrdersData.filter(
        (order) => order.slug !== deleteModalSlug
      );

      setDeliveredOrdersData(remainingOrders);
    }

    controller.setApiLoading(false);
  };

  useEffect(() => {
    const findProgressOrdersAdmin = async () => {
      const { res, err } = await EcommerceApi.allOrdersAdmin(
        `sortBy=${sortBy}&sortType=${sortType}&search=${searchString}&page=${page}&limit=${limit}&order_status=delivered`
      );

      if (err) {
        console.log(err);
      } else {
        setDeliveredOrdersData(res.filteredOrdersData);
        setCount(res.filteredOrdersCount)
        console.log(res);
      }
    };

    findProgressOrdersAdmin();
  }, [searchString, sortBy, sortType, showUpdateModal]);

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
        headline="Delivered Orders"
        slug="Delivered Orders"
        link="/delivered_orders"
      ></DashboardBreadcrumb>

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
        ordersData={deliveredOrdersData}
        tableHeaders={tableHeaders}
        count={count}
        limit={limit}
        setLimit={setLimit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default DeliveredOrders;
