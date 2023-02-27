import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../src/state/StateController";
import Advertisement from "../../components/pages/AdminPage/Dashboard/Advertisement/Advertisement";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <Advertisement />;
};

export default index;
