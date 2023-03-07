import React from "react";
import { useSelector } from "react-redux";
import withAdminPrivate from "../../components/hocs/withAdminPrivate";
import AllOrders from "../../components/pages/AdminPage/Dashboard/Orders/AllOrders/AllOrders";
import { controller } from "../../src/state/StateController";

interface Props {}

const all_orders: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <AllOrders />
    </div>
  );
};

export default withAdminPrivate(all_orders);
