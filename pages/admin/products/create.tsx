import React from "react";
import { useSelector } from "react-redux";
import ProductCreate from "../../../components/pages/AdminPage/Dashboard/ManageProducts/ProductCreate/ProductCreate";
import { controller } from "../../../src/state/StateController";

interface Props {}

const create: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <ProductCreate />;
};

export default create;
