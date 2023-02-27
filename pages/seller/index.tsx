import React from "react";
import { useSelector } from "react-redux";
import AllOrders from "../../components/pages/SellerPage/Dashboard/Orders/AllOrders/AllOrders";
import { controller } from "../../src/state/StateController";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <AllOrders />
    </div>
  );
};

export default index;
