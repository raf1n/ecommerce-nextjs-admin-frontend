import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import Table from "../../../../../shared/SharedTable/Table";
import DashboardBreadcrumb from "../../../../AdminProfile/DashboardBreadcrumb";

interface Props { }

const CompletedOrders: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <DashboardBreadcrumb
        headline="Completed Orders"
        slug="Completed Orders"
        link="/completed-orders"
      ></DashboardBreadcrumb>

      <Table />
    </div>
  );
};

export default CompletedOrders;
