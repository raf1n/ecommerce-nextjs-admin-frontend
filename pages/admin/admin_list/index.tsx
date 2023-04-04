import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import AdminList from "../../../components/pages/AdminPage/Dashboard/AdminList/AdminList";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <AdminList />;
};

export default index;
