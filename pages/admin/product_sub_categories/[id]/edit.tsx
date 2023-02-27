import React from "react";
import { useSelector } from "react-redux";
import EditSubCategories from "../../../../components/pages/AdminPage/Dashboard/ManageCategories/SubCategories/EditSubCategories";
import { controller } from "../../../../src/state/StateController";

interface Props {}

const edit: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <EditSubCategories />;
};

export default edit;
