import React from "react";
import { useSelector } from "react-redux";
import FetchBlogs from "../../../components/pages/AdminPage/Dashboard/Blogs/FetchBlogs";
import { controller } from "../../../src/state/StateController";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <FetchBlogs />;
};

export default index;
