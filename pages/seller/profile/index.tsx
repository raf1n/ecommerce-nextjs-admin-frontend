import React from "react";
import { useSelector } from "react-redux";
import MyProfile from "../../../components/pages/SellerPage/MyProfile/MyProfile";
import { controller } from "../../../src/state/StateController";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <MyProfile />;
};

export default index;
