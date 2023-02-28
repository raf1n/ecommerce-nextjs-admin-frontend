import React from "react";
import { useSelector } from "react-redux";
import ProgressOrders from "../../../components/pages/SellerPage/Dashboard/Orders/ProgressOrders/ProgressOrders";
import { controller } from "../../../src/state/StateController";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <ProgressOrders />;
};

export default index;
