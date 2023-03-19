import React from "react";
import { useSelector } from "react-redux";
import PopularBlogs from "../../../components/pages/AdminPage/Dashboard/Blogs/PopularBlogs";
import { controller } from "../../../src/state/StateController";

interface Props {}

const popular_blogs: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <PopularBlogs />;
};

export default popular_blogs;
