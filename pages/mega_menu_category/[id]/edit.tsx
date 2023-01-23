import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import EditMegaMenuCategory from "../../../components/pages/AdminPage/Dashboard/ManageCategories/MegaMenuCategory/EditMegaMenuCategory";

interface Props {}

const edit: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <EditMegaMenuCategory />;
};

export default edit;
