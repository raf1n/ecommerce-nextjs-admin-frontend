import React from "react";
import { useSelector } from "react-redux";
import MyWithdraw from "../../../components/pages/SellerPage/MyWithdraw/MyWithdraw";
import { controller } from "../../../src/state/StateController";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <MyWithdraw />;
};

export default index;
