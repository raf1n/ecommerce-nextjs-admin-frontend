import React from "react";
import { useSelector } from "react-redux";
import PendingOrders from "../../../components/pages/SellerPage/Dashboard/Orders/PendingOrders/PendingOrders";
import { controller } from "../../../src/state/StateController";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <PendingOrders />;
};

export default index;
