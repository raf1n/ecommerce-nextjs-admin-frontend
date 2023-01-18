import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../src/state/StateController";
import AllOrders from "../components/pages/AdminPage/Dashboard/Orders/AllOrders/AllOrders";
import SharedInvoice from "../components/pages/AdminPage/Dashboard/Orders/SharedInvoice/SharedInvoice";

interface Props {}

const all_orders: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      {/* <AllOrders></AllOrders> */}
      <SharedInvoice />
    </div>
  );
};

export default all_orders;
