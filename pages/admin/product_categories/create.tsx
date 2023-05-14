import React from "react";
import { useSelector } from "react-redux";
import withAdminPrivate from "../../../components/hocs/withAdminPrivate";
import CreateCategories from "../../../components/pages/AdminPage/Dashboard/ManageCategories/Categories/CreateCategories";
import { controller } from "../../../src/state/StateController";

interface Props {}

const create: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <CreateCategories />;
};

export default withAdminPrivate(create);
