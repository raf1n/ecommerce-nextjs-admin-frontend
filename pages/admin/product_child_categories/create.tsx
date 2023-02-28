import React from "react";
import { useSelector } from "react-redux";
import CreateProductChildCategory from "../../../components/pages/AdminPage/Dashboard/ManageCategories/ProductChildCategory/CreateProductChildCategory";
import { controller } from "../../../src/state/StateController";

interface Props {}

const create: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <CreateProductChildCategory />;
};

export default create;
