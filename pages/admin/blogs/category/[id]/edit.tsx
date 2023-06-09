import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../src/state/StateController";
import EditCategory from "../../../../../components/pages/AdminPage/Dashboard/Blogs/EditCategory";

interface Props {}

const edit: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <EditCategory />;
};

export default edit;
