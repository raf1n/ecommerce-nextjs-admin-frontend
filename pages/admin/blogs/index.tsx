import React from "react";
import { useSelector } from "react-redux";
import Blogs from "../../../components/pages/AdminPage/Dashboard/Blogs/Blogs";
import { controller } from "../../../src/state/StateController";
interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <Blogs />;
};

export default index;
