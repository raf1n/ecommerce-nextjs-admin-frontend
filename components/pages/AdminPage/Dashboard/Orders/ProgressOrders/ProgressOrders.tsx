import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import Table from "../../../../../shared/SharedTable/Table";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import { IOrder } from "../../../../../../interfaces/models";

interface Props {}

const ProgressOrders: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const [progressOrdersData, setProgressOrdersData] = useState<IOrder[]>([]);
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
      const remainingBrands = progressOrdersData.filter(
        (order) => order.slug !== deleteModalSlug
      );
      setProgressOrdersData(remainingBrands);
    }

    controller.setApiLoading(false);
  };

  useEffect(() => {
    const findProgressOrdersAdmin = async () => {
      const { res, err } = await EcommerceApi.allOrdersAdmin(
        `sortBy=${sortBy}&sortType=${sortType}&search=${searchString}&page=${page}&limit=${limit}&order_status=in_progress`
      );
      if (err) {
        console.log(err);
      } else {
        setProgressOrdersData(res.filteredOrdersData);
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
        headline="Progress Orders"
        slug="Progress Orders"
        link="/progress-orders"></DashboardBreadcrumb>

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
        ordersData={progressOrdersData}
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

export default ProgressOrders;
