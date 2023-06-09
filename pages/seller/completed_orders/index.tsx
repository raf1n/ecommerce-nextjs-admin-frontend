import React from "react";
import { useSelector } from "react-redux";
import withSellerPrivate from "../../../components/hocs/withSellerPrivate";
import CompletedOrders from "../../../components/pages/SellerPage/Dashboard/Orders/CompletedOrders/CompletedOrders";
import { controller } from "../../../src/state/StateController";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <CompletedOrders />;
};

export default withSellerPrivate(index);
