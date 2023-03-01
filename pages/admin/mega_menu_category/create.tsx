import React from "react";
import { useSelector } from "react-redux";
import CreateMegaMenuCategory from "../../../components/pages/AdminPage/Dashboard/ManageCategories/MegaMenuCategory/CreateMegaMenuCategory";
import { controller } from "../../../src/state/StateController";

interface Props {}

const create: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <CreateMegaMenuCategory />;
};

export default create;
