import React from "react";
import { useSelector } from "react-redux";
import FetchBlogCategory from "../../../../components/pages/AdminPage/Dashboard/Blogs/FetchBlogCategory";
import { controller } from "../../../../src/state/StateController";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <FetchBlogCategory />;
};

export default index;
