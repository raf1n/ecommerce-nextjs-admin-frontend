import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import { controller } from "../../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedGoBackButton from "../../../../../shared/SharedGoBackButton/SharedGoBackButton";

interface Props {}

const CreateWithdrawMethod: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const handleSave = async (e: any) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      min: parseInt(e.target.min.value),
      max: parseInt(e.target.max.value),
      charge: parseInt(e.target.charge.value),
      description: e.target.description.value,
    };

    const { res, err } = await EcommerceApi.postWithdrawMethod(formData);

    if (res) {
      e.target.reset();
    }
  };

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

      <div className="px-[25px] w-full relative">
        <div className="mt-4">
          <div className="mt-6 shadow-md bg-white rounded relative mb-7 border-0">
            <div className="p-5 leading-6">
              <form onSubmit={handleSave} action="">
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
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="name"
                      id=""
                      required
                    />
                  </div>

                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Minimum Amount
                      </label>
                      <span className='text-red-500 ml-2'>*</span>
                    </div>
                    <input
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="number"
                      name="min"
                      min={0}
                      id=""
                      required
                    />
                  </div>

                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Maximum Amount
                      </label>
                      <span className='text-red-500 ml-2'>*</span>
                    </div>
                    <input
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="number"
                      name="max"
                      min={0}
                      id=""
                      required
                    />
                  </div>

                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Withdraw Charge (%)
                      </label>
                      <span className='text-red-500 ml-2'>*</span>
                    </div>
                    <input
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="number"
                      name="charge"
                      min={0}
                      id=""
                      required
                    />
                  </div>

                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Description
                      </label>
                      <span className='text-red-500 ml-2'>*</span>
                    </div>
                    <textarea
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      name="description"
                      id=""
                      required
                    />
                  </div>
                  
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="bg-blue-700 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded"
                    >
                      Save
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

export default CreateWithdrawMethod;
