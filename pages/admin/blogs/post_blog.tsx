import React from "react";
import { useSelector } from "react-redux";
import PostBlog from "../../../components/pages/AdminPage/Dashboard/Blogs/PostBlog";
import { controller } from "../../../src/state/StateController";

interface Props {}

const post_blog: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <PostBlog />;
};

export default post_blog;
