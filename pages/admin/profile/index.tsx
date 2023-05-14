import React from "react";
import { useSelector } from "react-redux";
import withAdminPrivate from "../../../components/hocs/withAdminPrivate";
import AdminProfile from "../../../components/pages/AdminPage/AdminProfile/AdminProfile";
import { controller } from "../../../src/state/StateController";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <AdminProfile />;
};

export default withAdminPrivate(index);
