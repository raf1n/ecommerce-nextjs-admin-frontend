import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import Table from "../../../../../shared/SharedTable/Table";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";

interface Props {}

const PendingOrders: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <DashboardBreadcrumb
        headline="Pending Orders"
        slug="Pending Orders"
        link="/pending-orders"
      ></DashboardBreadcrumb>

      <Table />
    </div>
  );
};

export default PendingOrders;
