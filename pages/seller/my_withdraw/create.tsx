import React from "react";
import { useSelector } from "react-redux";
import CreateWithdraw from "../../../components/pages/SellerPage/MyWithdraw/CreateWithdraw/CreateWithdraw";
import { controller } from "../../../src/state/StateController";

interface Props {}

const create: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <CreateWithdraw />;
};

export default create;
