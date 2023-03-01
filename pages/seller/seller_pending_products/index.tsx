import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import SellerPendingProduct from "../../../components/pages/SellerPage/ManageProducts/SellerPendingProduct/SellerPendingProduct";
interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <SellerPendingProduct />;
};

export default index;
