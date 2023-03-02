import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";

interface Props {}

const ShopProfile: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <div>ShopProfile</div>;
};

export default ShopProfile;
