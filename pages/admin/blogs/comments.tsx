import React from "react";
import { useSelector } from "react-redux";
import FetchComments from "../../../components/pages/AdminPage/Dashboard/Blogs/FetchComments";
import { controller } from "../../../src/state/StateController";

interface Props {}

const comments: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <FetchComments />;
};

export default comments;
