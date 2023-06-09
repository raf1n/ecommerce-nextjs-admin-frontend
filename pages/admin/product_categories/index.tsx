import React from "react";
import { useSelector } from "react-redux";
import withAdminPrivate from "../../../components/hocs/withAdminPrivate";
import Categories from "../../../components/pages/AdminPage/Dashboard/ManageCategories/Categories/Categories";
import { controller } from "../../../src/state/StateController";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <Categories />;
};

export default withAdminPrivate(index);
