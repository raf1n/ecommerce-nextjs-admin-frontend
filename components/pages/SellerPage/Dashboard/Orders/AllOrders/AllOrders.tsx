import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import { ICartProduct, IOrder } from "../../../../../../interfaces/models";
import Table from "../../../Shared/Table";
import { CookiesHandler } from "../../../../../../src/utils/CookiesHandler";

interface Props {}

const AllOrders: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const [allOrdersData, setAllOrdersData] = useState<IOrder[]>([]);

  const [sortBy, setSortBy] = useState("createdAt");
  const [sortType, setSortType] = useState("desc");
  const [searchString, setSearchString] = useState("");

  // const seller_slug = states.currentUser?.slug;
  const seller_slug = CookiesHandler.getSlug();

  useEffect(() => {
    const getAllOrderForSeller = async () => {
      const { res, err } = await EcommerceApi.getAllOrderForSeller(
        seller_slug,
        `sortBy=${sortBy}&sortType=${sortType}&search=${searchString}`
      );
      if (err) {
        console.log(err);
      } else {
        setAllOrdersData(res);
        console.log(res);
      }
    };
    getAllOrderForSeller();
  }, [searchString, sortBy, sortType]);

  console.log("allOrdersData for seller only-", allOrdersData);

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
