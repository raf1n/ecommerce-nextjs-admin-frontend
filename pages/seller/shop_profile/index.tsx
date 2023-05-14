import React from "react";
import { useSelector } from "react-redux";
import withSellerPrivate from "../../../components/hocs/withSellerPrivate";
import ShopProfile from "../../../components/pages/SellerPage/ShopProfile/ShopProfile";
import { controller } from "../../../src/state/StateController";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <ShopProfile />;
};

export default withSellerPrivate(index);
