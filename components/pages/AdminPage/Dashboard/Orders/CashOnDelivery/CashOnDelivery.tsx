import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import Table from "../../../../../shared/SharedTable/Table";
import DashboardBreadcrumb from "../../../../AdminProfile/DashboardBreadcrumb";

interface Props { }

const CashOnDelivery: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <DashboardBreadcrumb
        headline="Cash On Delivery Orders"
        slug="Cash On Delivery Orders"
        link="/CashOnDelivery-orders"
      ></DashboardBreadcrumb>

      <Table />
    </div>
  );
};

export default CashOnDelivery;
