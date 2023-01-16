import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import Table from "../../../../../shared/SharedTable/Table";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";

interface Props {}

const DeclinedOrders: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <DashboardBreadcrumb
        headline="Declined Orders"
        slug="Declined Orders"
        link="/Declined-orders"
      ></DashboardBreadcrumb>

      <Table />
    </div>
  );
};

export default DeclinedOrders;
