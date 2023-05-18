import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import Table from "../../../../../shared/SharedTable/Table";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import { IOrder } from "../../../../../../interfaces/models";

interface Props {}

const CashOnDelivery: React.FC<Props> = (props) => {
  const user_slug = useSelector(() => controller.states.currentUser?.slug);
  const [completedOrdersData, setCompletedOrdersData] = useState<IOrder[]>([]);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortType, setSortType] = useState("desc");
  const [searchString, setSearchString] = useState("");
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
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
    const findCodOrdersAdmin = async () => {
      if (user_slug) {
        const { res, err } = await EcommerceApi.allOrdersAdmin(
          `sortBy=${sortBy}&sortType=${sortType}&search=${searchString}&page=${page}&limit=${limit}&order_status=completed`
        );

        if (err) {
          console.log(err);
        } else {
          setCompletedOrdersData(res.filteredOrdersData);
          setCount(res.filteredOrdersCount);
        }
      }
    };

    findCodOrdersAdmin();
  }, [searchString, sortBy, sortType, page, limit, showUpdateModal, user_slug]);

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
        link="/cash_on_delivery"
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
        ordersData={completedOrdersData}
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

export default CashOnDelivery;
