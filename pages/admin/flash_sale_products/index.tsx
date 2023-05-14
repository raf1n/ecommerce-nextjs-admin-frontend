import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import FlashSaleProducts from "../../../components/pages/AdminPage/Dashboard/Ecommerce/FlashSale/FlashSaleProducts";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <FlashSaleProducts />;
};

export default index;
