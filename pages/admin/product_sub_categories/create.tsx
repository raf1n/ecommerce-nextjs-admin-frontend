import React from "react";
import { useSelector } from "react-redux";
import withAdminPrivate from "../../../components/hocs/withAdminPrivate";
import CreateSubCategories from "../../../components/pages/AdminPage/Dashboard/ManageCategories/SubCategories/CreateSubCategories";
import { controller } from "../../../src/state/StateController";

interface Props {}

const create: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <CreateSubCategories />;
};

export default withAdminPrivate(create);
