import React from "react";
import { useSelector } from "react-redux";
import Coupon from "../components/pages/AdminPage/Dashboard/Ecommerce/Coupon/Coupon";
import { controller } from "../src/state/StateController";

interface Props {}

const coupon: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <Coupon></Coupon>;
};

export default coupon;
