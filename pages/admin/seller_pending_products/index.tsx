import React from "react";
import { useSelector } from "react-redux";
import SellerPendingProduct from "../../../components/pages/AdminPage/Dashboard/ManageProducts/SellerPendingProduct/SellerPendingProduct";
import { controller } from "../../../src/state/StateController";
interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <SellerPendingProduct />;
};

export default index;
