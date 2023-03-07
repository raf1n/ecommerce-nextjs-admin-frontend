import React from "react";
import { useSelector } from "react-redux";
import withAdminPrivate from "../../../components/hocs/withAdminPrivate";
import SubCategories from "../../../components/pages/AdminPage/Dashboard/ManageCategories/SubCategories/SubCategories";
import { controller } from "../../../src/state/StateController";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <SubCategories />;
};

export default withAdminPrivate(index);
