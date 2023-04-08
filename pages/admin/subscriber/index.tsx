import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import Subscriber from "../../../components/pages/AdminPage/Dashboard/Subscriber/Subscriber";
interface Props {}
const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  return <Subscriber />;
};
export default index;
