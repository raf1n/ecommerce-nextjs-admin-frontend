import React from "react";
import { useSelector } from "react-redux";
import CreateSlider from "../../../components/pages/AdminPage/Dashboard/ManageWebsite/Slider/CreateSlider";
import { controller } from "../../../src/state/StateController";

interface Props {}

const create: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <CreateSlider></CreateSlider>;
};

export default create;
