import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../src/state/StateController";
import SharedGoBackButton from "../../../../shared/SharedGoBackButton/SharedGoBackButton";
import DashboardBreadcrumb from "../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import { toast } from "react-hot-toast";
import { SocialLogin } from "../../../../helpers/SocialLogin";
import { EcommerceApi } from "../../../../../src/API/EcommerceApi";

interface Props {}

const CreateAdmin: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  useEffect(() => {
    SocialLogin.initFirebase();
  }, []);

  const handleSave = async (e: any) => {
    e.preventDefault();
    controller.setApiLoading(true);

    const fullName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const status = e.target.status.value;
    const role = "admin";
    const tokenType = "email";
    const avatar = "https://tinyurl.com/382e6w5t";

    const data = {
      fullName,
      email,
      password,
      status,
      role,
      tokenType,
      avatar,
    };
    
    if (e.target.password.value.length < 6) {
      toast.error("Password Should be atleast 6 Characters Long");
    } else {
      const { res: fireRes, err } = await SocialLogin.signUpWithEmailPassword(
        fullName,
        email,
        password
      );
      if (err) {
        toast.error(err);
        // setErrorText(err);
      } else {
        console.log("resooooo", fireRes);
        const { res: dbRes, err } = await EcommerceApi.addAdmin(data);
        if (dbRes) {
          console.log(dbRes);
          toast.success("Admin Added Successfully");
        }
      }
    }

    controller.setApiLoading(false);
  };

  return (
    <div className="w-full">
      <DashboardBreadcrumb
        headline="Create Admin"
        slug="Create Admin"
        link="/admin/admin_list/create"
      ></DashboardBreadcrumb>
      <div className="m-6">
        <div className="section-body">
          <SharedGoBackButton title="Admin List" link="/admin/admin_list" />
        </div>
      </div>
      <div className="px-[25px] w-full relative">
        <div className="mt-4">
          <div className="mt-6 shadow-md bg-white rounded relative mb-7 border-0">
            <div className="p-5 leading-6">
              <form onSubmit={handleSave}>
                <div>
                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Name
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      required
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="name"
                      id=""
                    />
                  </div>
                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Email
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      required
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="email"
                      name="email"
                      id=""
                    />
                  </div>
                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Password
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      required
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="password"
                      name="password"
                      id=""
                    />
                  </div>
                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Status
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <select
                      className="w-full border rounded p-3 border-gray-200 bg-[#fdfdff] focus:outline-none"
                      name="status"
                      id=""
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="bg-blue-700 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAdmin;
