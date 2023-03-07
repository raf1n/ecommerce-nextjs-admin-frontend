import React from "react";
import { useSelector } from "react-redux";
import withAdminPrivate from "../../components/hocs/withAdminPrivate";
import DeclinedOrders from "../../components/pages/AdminPage/Dashboard/Orders/DeclinedOrders/DeclinedOrders";
import { controller } from "../../src/state/StateController";

interface Props {}

const declined_orders: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <DeclinedOrders />;
};

export default withAdminPrivate(declined_orders);
