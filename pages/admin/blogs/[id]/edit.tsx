import React from "react";
import { useSelector } from "react-redux";
import EditBlog from "../../../../components/pages/AdminPage/Dashboard/Blogs/EditBlog";
import { controller } from "../../../../src/state/StateController";

interface Props {}

const edit: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <EditBlog />;
};

export default edit;
