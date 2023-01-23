import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import EditProductChildCategory from "../../../components/pages/AdminPage/Dashboard/ManageCategories/ProductChildCategory/EditProductChildCategory";

interface Props {}

const edit: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <EditProductChildCategory />;
};

export default edit;
