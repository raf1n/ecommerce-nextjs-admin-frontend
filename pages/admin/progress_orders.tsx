import React from "react";
import { useSelector } from "react-redux";
import withAdminPrivate from "../../components/hocs/withAdminPrivate";
import ProgressOrders from "../../components/pages/AdminPage/Dashboard/Orders/ProgressOrders/ProgressOrders";
import { controller } from "../../src/state/StateController";

interface Props {}

const progress_orders: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <ProgressOrders />;
};

export default withAdminPrivate(progress_orders);
