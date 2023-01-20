import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import EditCategories from "../../../components/pages/AdminPage/Dashboard/ManageCategories/Categories/EditCategories";
import EditSubCategories from "../../../components/pages/AdminPage/Dashboard/ManageCategories/SubCategories/EditSubCategories";

interface Props {}

const edit: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <EditSubCategories></EditSubCategories>;
};

export default edit;
