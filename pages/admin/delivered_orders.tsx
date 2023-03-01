import React from "react";
import { useSelector } from "react-redux";
import DeliveredOrders from "../../components/pages/AdminPage/Dashboard/Orders/DeliveredOrders/DeliveredOrders";
import { controller } from "../../src/state/StateController";

interface Props {}

const delivered_orders: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <DeliveredOrders />;
};

export default delivered_orders;
