import React from "react";
import { useSelector } from "react-redux";
import withAdminPrivate from "../../../components/hocs/withAdminPrivate";
import ProductsStockOut from "../../../components/pages/AdminPage/Dashboard/ManageProducts/ProductsStockOut/ProductsStockOut";
import { controller } from "../../../src/state/StateController";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <ProductsStockOut />;
};

export default withAdminPrivate(index);
