import React from "react";
import { useSelector } from "react-redux";
import AdminDetailsSummary from "../../components/pages/AdminPage/Dashboard/AdminDetailsSummary/AdminDetailsSummary";
import { controller } from "../../src/state/StateController";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <div>Seller</div>
      <AdminDetailsSummary />
    </div>
  );
};

export default index;
