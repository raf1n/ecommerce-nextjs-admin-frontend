import React from "react";
import { useSelector } from "react-redux";
import { controller } from "./../../src/state/StateController";
import CreateSubCategories from "../../components/pages/AdminPage/Dashboard/ManageCategories/SubCategories/CreateSubCategories";

interface Props {}

const create: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <CreateSubCategories></CreateSubCategories>;
};

export default create;
