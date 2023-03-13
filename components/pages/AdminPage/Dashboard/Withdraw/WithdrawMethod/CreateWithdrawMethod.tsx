import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedGoBackButton from "../../../../../shared/SharedGoBackButton/SharedGoBackButton";

interface Props {}

const CreateWithdrawMethod: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="w-full">
      <DashboardBreadcrumb
        headline="Withdraw Method"
        slug="Withdraw Method"
        link="/admin/withdraw_method"
      ></DashboardBreadcrumb>
      <div className="mx-[25px]">
        <div className="section-body">
          <SharedGoBackButton
            title="Withdraw Method"
            link="/admin/withdraw_method"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateWithdrawMethod;
