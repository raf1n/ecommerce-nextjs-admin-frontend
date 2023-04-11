import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import Table from "../../../../../shared/SharedTable/Table";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import { IOrder } from "../../../../../../interfaces/models";

interface Props {}

const AllOrders: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const [allOrdersData, setAllOrdersData] = useState<IOrder[]>([]);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortType, setSortType] = useState("desc");
  const [searchString, setSearchString] = useState("");
  const [limit, setLimit] = useState<number>(1);
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
      const remaining = allOrdersData.filter(
        (order) => order.slug !== deleteModalSlug
      );
      setAllOrdersData(remaining);
    }

    controller.setApiLoading(false);
  };

  useEffect(() => {
    const findAllOrdersAdmin = async () => {
      const { res, err } = await EcommerceApi.allOrdersAdmin(
        `sortBy=${sortBy}&sortType=${sortType}&search=${searchString}&page=${page}&limit=${limit}`
      );

      if (err) {
        console.log({ err });
      } else {
        setAllOrdersData(res.allOrdersData);
        setCount(res.allOrdersCount);
        // console.log({ res });
      }
    };

    findAllOrdersAdmin();
  }, [searchString, sortBy, sortType, showUpdateModal, page, limit]);

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
        headline="All Orders"
        slug="All Orders"
        link="/all-orders"
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
        count={count}
        limit={limit}
        setLimit={setLimit}
        page={page}
        setPage={setPage}
        setSearchString={setSearchString}
        ordersData={allOrdersData}
        tableHeaders={tableHeaders}
      />
    </div>
  );
};

export default AllOrders;
