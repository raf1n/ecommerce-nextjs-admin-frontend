import React from "react";
import { useSelector } from "react-redux";

import { controller } from "../../../src/state/StateController";
import Products from "../../../components/pages/SellerPage/ManageProducts/Products/Products";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <Products />;
};

export default index;
