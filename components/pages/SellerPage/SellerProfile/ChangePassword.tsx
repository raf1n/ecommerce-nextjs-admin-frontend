import React, { useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import { SocialLogin } from "../../../helpers/SocialLogin";
import DashboardBreadcrumb from "../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";

interface Props {}

const ChangePassword: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errorText, setErrorText] = useState("");

  const handlePassChange = async (e: any) => {
    e.preventDefault();

    const email = "ahmdtoukir@gmail.com";

    if (newPass != confirmPass) {
      setErrorText("New passwords did not match.");
      return;
    }

    const { res, err } = await SocialLogin.changePassword(
      email,
      oldPass,
      newPass
    );

    console.log({ res, err });
    if (err) {
      setErrorText(err);
    } else {
      e.target.reset();
      alert(res);
      setErrorText("");
    }
  };

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
                Old Password <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="password"
                name="old_password"
                id="old_password"
                onChange={(e) => setOldPass(e.target.value)}
                className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
              />
            </div>

            <div className="form-group col-12 flex flex-col mb-[25px]">
              <label className="inline-block text-sm tracking-wide mb-2">
                New Password <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="password"
                name="password"
                id="password"
                onChange={(e) => setNewPass(e.target.value)}
                className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
              />
            </div>

            <div className="form-group col-12 flex flex-col mb-[25px]">
              <label className="inline-block text-sm tracking-wide mb-2">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="password"
                name="confirm_password"
                id="confirm_password"
                onChange={(e) => setConfirmPass(e.target.value)}
                className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
              />
            </div>
          </div>
          <div className="col-12">
            <button className="text-white rounded py-[.3rem] px-[.8rem] shadow-[0_2px_6px_#acb5f6] border border-[#6777ef] bg-[#2046DA]">
              Update
            </button>
          </div>
          {
            errorText &&
            <div className="mt-4 text-qred font-semibold">
              <span>{errorText}</span>
            </div>
          }
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
