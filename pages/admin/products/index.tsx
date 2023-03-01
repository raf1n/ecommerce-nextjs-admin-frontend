import React from "react";
import { useSelector } from "react-redux";
import Products from "../../../components/pages/AdminPage/Dashboard/ManageProducts/Products/Products";
import { controller } from "../../../src/state/StateController";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <Products />;
};

export default index;
