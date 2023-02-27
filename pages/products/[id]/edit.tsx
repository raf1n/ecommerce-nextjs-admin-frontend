import React from "react";
import { useSelector } from "react-redux";
import ProductEdit from "../../../components/pages/AdminPage/Dashboard/ManageProducts/ProductEdit/ProductEdit";
import { controller } from "./../../../src/state/StateController";

interface Props {}

const edit: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <ProductEdit />;
};

export default edit;
