import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import OrderInformation from "./OrderInformation";
import { IOrder } from "../../../../../../interfaces/models";

interface Props {
  order: IOrder;
}

const SharedInvoice: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <DashboardBreadcrumb headline="Invoice " slug="Invoice" link="invoice" />
      <OrderInformation order={props.order} />
    </div>
  );
};

export default SharedInvoice;
