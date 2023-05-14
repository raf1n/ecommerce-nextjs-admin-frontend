import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IWithdrawMethod } from "../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../src/API/EcommerceApi";
import { controller } from "../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedGoBackButton from "../../../../shared/SharedGoBackButton/SharedGoBackButton";
import { toast } from "react-hot-toast";

interface Props {}

const CreateWithdraw: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortType, setSortType] = useState("desc");
  const [searchString, setSearchString] = useState("");
  const [withdrawMethods, setWithdrawMethods] = useState<IWithdrawMethod[]>([]);

  const handleSave = async (e: any) => {
    e.preventDefault();
    controller.setApiLoading(true);

    const formData = {
      method: e.target.method.value,
      amount: e.target.amount.value,
      information: e.target.information.value,
      seller_slug: states.currentUser?.slug,
    };

    const { res, err } = await EcommerceApi.postWithdraw(formData);

    if (res) {
      toast.success("Withdraw added Successfully");
      e.target.reset();
    }

    controller.setApiLoading(false);
  };

  useEffect(() => {
    const fetchAllWithdrawMethods = async () => {
      const { res, err } = await EcommerceApi.getAllWithdrawMethods(
        `sortBy=${sortBy}&sortType=${sortType}&search=${searchString}`
      );
      if (err) {
        console.log(err);
      } else {
        setWithdrawMethods(res);
      }
    };

    fetchAllWithdrawMethods();
  }, [searchString, sortBy, sortType]);

  return (
    <div className="w-full ">
      <DashboardBreadcrumb
        headline="My Withdraw"
        slug="My Withdraw"
        link="/my_withdraw"
      ></DashboardBreadcrumb>
      <div className="m-6">
        <div className="section-body">
          <SharedGoBackButton
            title="My Withdraw"
            link="/seller/my_withdraw"
          ></SharedGoBackButton>
        </div>
      </div>
      <div className="px-[25px] w-1/2 relative">
        <div className="mt-4">
          <div className="mt-6 shadow-md bg-white rounded relative mb-7 border-0">
            <div className="p-5 leading-6">
              <form onSubmit={handleSave} action="">
                <div>
                  <div>
                    <div className="mt-4">
                      <div className="my-2">
                        <label
                          className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                          htmlFor=""
                        >
                          Withdraw Method
                        </label>
                        <span className="text-red-500 ml-2">*</span>
                      </div>
                      <select
                        className="w-full border rounded p-3 border-gray-200 bg-[#fdfdff] focus:outline-none"
                        name="method"
                        id=""
                      >
                        <option value="">Select Method</option>
                        {withdrawMethods.map((withdraw: IWithdrawMethod) => (
                          <option value={withdraw.slug}>{withdraw.name}</option>
                        ))}
                        {/* <option value="active">Electronics</option>
                        <option value="inactive">Game</option>
                        <option value="inactive">Mobile</option>
                        <option value="inactive">Lifestyles</option> */}
                      </select>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Withdraw Amount
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="amount"
                      id=""
                    />
                  </div>
                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Account Information
                      </label>
                      {/* <span className='text-red-500 ml-2'>*</span> */}
                    </div>
                    <input
                      className="w-full p-8 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="information"
                      id=""
                    />
                  </div>
                  {/* <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Status
                      </label>
                      <span className='text-red-500 ml-2'>*</span>
                    </div>
                    <select
                      className="w-full border rounded p-3 border-gray-200 bg-[#fdfdff] focus:outline-none"
                      name="status"
                      id=""
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div> */}
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="bg-blue-700 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded"
                    >
                      Send Request
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

export default CreateWithdraw;
