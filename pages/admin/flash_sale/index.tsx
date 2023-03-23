import React from "react";
import { useSelector } from "react-redux";
import FlashSale from "../../../components/pages/AdminPage/Dashboard/Ecommerce/FlashSale/FlashSale";
import { controller } from "../../../src/state/StateController";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <FlashSale />;
};

export default index;
