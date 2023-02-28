import React from "react";
import { useSelector } from "react-redux";
import EditProductChildCategory from "../../../../components/pages/AdminPage/Dashboard/ManageCategories/ProductChildCategory/EditProductChildCategory";
import { controller } from "../../../../src/state/StateController";

interface Props {}

const edit: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <EditProductChildCategory />;
};

export default edit;
