import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedGoBackButton from "../../../../../shared/SharedGoBackButton/SharedGoBackButton";

interface Props {}

const CreateSlider: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="w-full">
      <DashboardBreadcrumb
        headline="Slider"
        link="create"
        slug="Create Slider"
      ></DashboardBreadcrumb>
      <div className="m-6">
        <div className="section-body">
          <SharedGoBackButton
            title="Slider"
            link="/slider"
          ></SharedGoBackButton>
        </div>
      </div>
    </div>
  );
};

export default CreateSlider;
