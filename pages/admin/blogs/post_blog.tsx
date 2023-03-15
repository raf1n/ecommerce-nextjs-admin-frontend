import React from "react";
import { useSelector } from "react-redux";
import PostBlos from "../../../components/pages/AdminPage/Dashboard/Blogs/PostBlos";
import { controller } from "../../../src/state/StateController";

interface Props {}

const post_blog: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <PostBlos />;
};

export default post_blog;
