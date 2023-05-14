import React from "react";
import { useSelector } from "react-redux";
import withAdminPrivate from "../../../components/hocs/withAdminPrivate";
import SellerProducts from "../../../components/pages/AdminPage/Dashboard/ManageProducts/SellerProducts/SellerProducts";
import { controller } from "../../../src/state/StateController";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <SellerProducts />;
};

export default withAdminPrivate(index);
