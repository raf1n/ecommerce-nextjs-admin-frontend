import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import ProductsStockOut from "../../../components/pages/SellerPage/ManageProducts/ProductsStockOut/ProductsStockOut";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <ProductsStockOut />;
};

export default index;
