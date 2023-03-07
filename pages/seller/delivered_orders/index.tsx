import React from "react";
import { useSelector } from "react-redux";
import withSellerPrivate from "../../../components/hocs/withSellerPrivate";
import DeliveredOrders from "../../../components/pages/SellerPage/Dashboard/Orders/DeliveredOrders/DeliveredOrders";
import { controller } from "../../../src/state/StateController";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <DeliveredOrders />;
};

export default withSellerPrivate(index);
