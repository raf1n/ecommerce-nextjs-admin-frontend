import React from "react";
import { useSelector } from "react-redux";
import withAdminPrivate from "../../../components/hocs/withAdminPrivate";
import Slider from "../../../components/pages/AdminPage/Dashboard/ManageWebsite/Slider/Slider";
import { controller } from "../../../src/state/StateController";

interface Props {}

const slider: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <Slider></Slider>;
};

export default withAdminPrivate(slider);
