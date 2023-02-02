import React, { useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import Styles from "../../ManageCategories/ToggleButton/ToggleButton.module.css";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
interface Props {
  status?: string;
  slug?: string | any;
}

const ApprovalToggleButton: React.FC<Props> = ({ status, slug }) => {
  const states = useSelector(() => controller.states);

  const [toggleStatus, setToggleStatus] = useState(status);

  console.log({
    status,
    toggleStatus,
  });

  const handleClick = async () => {
    let patchStatus;

    if (toggleStatus === "approved") {
      patchStatus = "pending";
    } else {
      patchStatus = "approved";
    }
    const updatedStatus = { approvalStatus: patchStatus };
    const { res, err } = await EcommerceApi.updateApprovalStatus(
      updatedStatus,
      slug
    );
    if (res) {
      setToggleStatus(res.approvalStatus);
    }
  };

  return (
    <div
      className={`w-[80px] overflow-hidden border h-8 relative rounded cursor-pointer ${
        toggleStatus === "approved"
          ? Styles["shadow-active"]
          : Styles["shadow-inactive"]
      }`}
    >
      <div
        onClick={() => handleClick()}
        className={`grid grid-cols-[65px,15px,65px] relative transition-all delay-100 duration-200 ease-in ${
          toggleStatus === "approved" ? "left-[0px]" : "left-[-65px]"
        }`}
      >
        <span className="bg-green-500 text-xs text-white grid place-items-center">
          Approved
        </span>
        <span className="w-[15px] h-8 bg-white hover:bg-slate-200"></span>
        <span className="bg-red-500  text-white grid place-items-center text-xs">
          Pending
        </span>
      </div>
    </div>
  );
};

export default ApprovalToggleButton;
