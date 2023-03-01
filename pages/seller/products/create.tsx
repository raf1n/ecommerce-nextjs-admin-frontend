import React from "react";
import { useSelector } from "react-redux";

import { controller } from "../../../src/state/StateController";
import ProductCreate from "../../../components/pages/SellerPage/ManageProducts/ProductCreate/ProductCreate";

interface Props {}

const create: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <ProductCreate />;
};

export default create;
