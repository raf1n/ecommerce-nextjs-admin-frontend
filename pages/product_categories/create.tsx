import React from "react";
import { useSelector } from "react-redux";
import { controller } from "./../../src/state/StateController";
import CreateCategories from "../../components/pages/AdminPage/Dashboard/ManageCategories/Categories/CreateCategories";

interface Props {}

const create: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <CreateCategories></CreateCategories>;
};

export default create;
