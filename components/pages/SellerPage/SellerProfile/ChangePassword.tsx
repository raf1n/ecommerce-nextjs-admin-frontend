import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import { SocialLogin } from "../../../helpers/SocialLogin";
import DashboardBreadcrumb from "../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";

interface Props {}

const ChangePassword: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const handlePassChange = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    SocialLogin.changePassword(password)
  }

  return (
    <div>
      <DashboardBreadcrumb
        headline="Change Password"
        link="/seller/change_password"
        slug="Change Password"
      ></DashboardBreadcrumb>

      <div className="px-[25px] mt-6 w-full relative">
        <form className="p-5 bg-white" onSubmit={handlePassChange}>
          <div className="row ">
          <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    New Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="password"
                    name="password"
                    id="password"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                  />
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                  Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="confirm_password"
                    name="confirm_password"
                    id="confirm_password"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                  />
                </div>
          </div>
          <div className="col-12">
                  <button className="text-white rounded py-[.3rem] px-[.8rem] shadow-[0_2px_6px_#acb5f6] border border-[#6777ef] bg-[#2046DA]">
                    Update
                  </button>
                </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
