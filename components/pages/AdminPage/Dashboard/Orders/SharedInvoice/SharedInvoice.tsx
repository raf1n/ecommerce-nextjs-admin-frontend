import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import OrderInformation from "./OrderInformation";

interface Props {}

const SharedInvoice: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <DashboardBreadcrumb headline="Invoice " slug="Invoice" link="invoice" />
      <OrderInformation />
    </div>
  );
};

export default SharedInvoice;
