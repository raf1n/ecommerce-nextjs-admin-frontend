import React from "react";
import { useSelector } from "react-redux";
import ProductReport from "../../../components/pages/SellerPage/ManageProducts/ProductReport/ProductReport";
import { controller } from "../../../src/state/StateController";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <ProductReport />;
};

export default index;
