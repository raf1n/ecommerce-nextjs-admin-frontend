import React from "react";
import { useSelector } from "react-redux";
import CreateCategory from "../../../../components/pages/AdminPage/Dashboard/Blogs/CreateCategory";
import { controller } from "../../../../src/state/StateController";

interface Props {}

const create: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <CreateCategory />;
};

export default create;
