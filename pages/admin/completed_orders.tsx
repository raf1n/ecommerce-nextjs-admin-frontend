import React from "react";
import { useSelector } from "react-redux";
import withAdminPrivate from "../../components/hocs/withAdminPrivate";
import CompletedOrders from "../../components/pages/AdminPage/Dashboard/Orders/CompletedOrders/CompletedOrders";
import { controller } from "../../src/state/StateController";

interface Props {}

const completed_orders: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <CompletedOrders />;
};

export default withAdminPrivate(completed_orders);
