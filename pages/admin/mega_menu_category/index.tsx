import React from "react";
import { useSelector } from "react-redux";
import withAdminPrivate from "../../../components/hocs/withAdminPrivate";
import MegaMenuCategory from "../../../components/pages/AdminPage/Dashboard/ManageCategories/MegaMenuCategory/MegaMenuCategory";
import { controller } from "../../../src/state/StateController";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <MegaMenuCategory />;
};

export default withAdminPrivate(index);
