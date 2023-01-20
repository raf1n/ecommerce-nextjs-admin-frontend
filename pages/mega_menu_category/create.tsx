import React from "react";
import { useSelector } from "react-redux";
import { controller } from "./../../src/state/StateController";
import CreateMegaMenuCategory from "../../components/pages/AdminPage/Dashboard/ManageCategories/MegaMenuCategory/CreateMegaMenuCategory";

interface Props {}

const create: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <CreateMegaMenuCategory />;
};

export default create;
