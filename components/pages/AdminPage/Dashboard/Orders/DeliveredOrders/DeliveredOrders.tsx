import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import Table from "../../../../../shared/SharedTable/Table";
import DashboardBreadcrumb from "../../../../AdminProfile/DashboardBreadcrumb";

interface Props { }

const DeliveredOrders: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <DashboardBreadcrumb
        headline="Delivered Orders"
        slug="Delivered Orders"
        link="/delivered-orders"
      ></DashboardBreadcrumb>

      <Table />
    </div>
  );
};

export default DeliveredOrders;
