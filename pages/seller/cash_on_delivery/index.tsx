import React from "react";
import { useSelector } from "react-redux";
import CashOnDelivery from "../../../components/pages/SellerPage/Dashboard/Orders/CashOnDelivery/CashOnDelivery";
import { controller } from "../../../src/state/StateController";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <CashOnDelivery />;
};

export default index;
