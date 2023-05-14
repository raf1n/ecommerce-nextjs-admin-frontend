import React from "react";
import { useSelector } from "react-redux";
import withAdminPrivate from "../../../../components/hocs/withAdminPrivate";
import EditCategories from "../../../../components/pages/AdminPage/Dashboard/ManageCategories/Categories/EditCategories";
import { controller } from "../../../../src/state/StateController";

interface Props {}

const edit: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <EditCategories />;
};

export default withAdminPrivate(edit);
