import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import Table from "../../../../../shared/SharedTable/Table";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import { IOrder } from "../../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";

interface Props {}

const DeclinedOrders: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [declinedOrdersData, setDeclinedOrdersData] = useState<IOrder[]>([]);
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
      const remainingOrders = declinedOrdersData.filter(
        (order) => order.slug !== deleteModalSlug
      );
      setDeclinedOrdersData(remainingOrders);
    }

    controller.setApiLoading(false);
  };

  useEffect(() => {
    const findAllOrdersAdmin = async () => {
      const { res, err } = await EcommerceApi.allOrdersAdmin(
        `sortBy=${sortBy}&sortType=${sortType}&search=${searchString}&page=${page}&limit=${limit}&order_status=declined`
      );
      if (err) {
        console.log(err);
      } else {
        setDeclinedOrdersData(res.filteredOrdersData);
        setCount(res.filteredOrdersCount)
        console.log(res);
      }
    };

    findAllOrdersAdmin();
  }, [searchString, sortBy, sortType, showUpdateModal]);

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
        headline="Declined Orders"
        slug="Declined Orders"
        link="/Declined-orders"
      ></DashboardBreadcrumb>

      <Table
        showUpdateModal={showUpdateModal}
        setShowUpdateModal={setShowUpdateModal}
        handleDelete={handleDelete}
        deleteModalSlug={deleteModalSlug}
        setDeleteModalSlug={setDeleteModalSlug}
        sortBy={sortBy}
        sortType={sortType}
        setSearchString={setSearchString}
        setSortBy={setSortBy}
        setSortType={setSortBy}
        tableHeaders={tableHeaders}
        ordersData={declinedOrdersData}
        count={count}
        limit={limit}
        setLimit={setLimit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default DeclinedOrders;
