import React from "react";
import { useSelector } from "react-redux";

import { controller } from "../../../src/state/StateController";
import Inventory from "../../../components/pages/SellerPage/Dashboard/Inventory/Inventory";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <Inventory />;
};

export default index;
