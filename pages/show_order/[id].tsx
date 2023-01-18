import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../src/state/StateController";

interface Props {}

const id: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <div>Id...........: {}</div>;
};

export default id;
