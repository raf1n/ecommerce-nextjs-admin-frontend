import React from "react";
import { useSelector } from "react-redux";
import withAdminPrivate from "../../components/hocs/withAdminPrivate";
import PendingOrders from "../../components/pages/AdminPage/Dashboard/Orders/PendingOrders/PendingOrders";
import { controller } from "../../src/state/StateController";


interface Props {}

const pending_orders: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <PendingOrders />;
};

export default withAdminPrivate(pending_orders);
