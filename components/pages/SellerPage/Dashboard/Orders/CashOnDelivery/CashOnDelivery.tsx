import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import Table from "../../../Shared/Table";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import { IOrder } from "../../../../../../interfaces/models";
import { CookiesHandler } from "../../../../../../src/utils/CookiesHandler";

interface Props {}

const CashOnDelivery: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const [completedOrdersData, setCompletedOrdersData] = useState<IOrder[]>([]);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortType, setSortType] = useState("desc");
  const [searchString, setSearchString] = useState("");

  const seller_slug = CookiesHandler.getSlug();
  useEffect(() => {
    const getAllOrderForSeller = async () => {
      const { res, err } = await EcommerceApi.getAllOrderForSeller(
        seller_slug,
        `sortBy=${sortBy}&sortType=${sortType}&search=${searchString}&order_status=cash_on`
      );

      if (err) {
        console.log(err);
      } else {
        setCompletedOrdersData(res);
        console.log(res);
      }
    };
    getAllOrderForSeller();
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
        headline="Cash On Delivery "
        slug="Cash On Delivery "
        link="/seller/cash_on_delivery"
      />

      <Table
        tableHeaders={tableHeaders}
        sortBy={sortBy}
        sortType={sortType}
        setSortBy={setSortBy}
        setSortType={setSortType}
        setSearchString={setSearchString}
        ordersData={completedOrdersData}
      />
    </div>
  );
};

export default CashOnDelivery;
