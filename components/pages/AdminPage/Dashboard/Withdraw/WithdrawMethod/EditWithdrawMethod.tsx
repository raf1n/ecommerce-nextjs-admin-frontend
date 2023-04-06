import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IWithdrawMethod } from "../../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import { controller } from "../../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedGoBackButton from "../../../../../shared/SharedGoBackButton/SharedGoBackButton";
import { toast } from "react-hot-toast";

interface Props {}

const EditWithdrawMethod: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const { asPath } = useRouter();
  const withdrawMethodSlug = asPath.split("/")[3];

  const [withdrawMethodData, setWithdrawMethodData] =
    useState<IWithdrawMethod | null>(null);

  useEffect(() => {
    console.log(withdrawMethodSlug);
    const getSingleCategory = async () => {
      if (withdrawMethodSlug !== "[slug]") {
        const { res, err } = await EcommerceApi.getSingleWithdrawMethod(
          withdrawMethodSlug
        );
        if (res) {
          setWithdrawMethodData(res);
        } else {
          console.log(err);
        }
      }
    };
    getSingleCategory();
  }, [withdrawMethodSlug]);

  const handleUpdate = async (e: any) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      min: parseInt(e.target.min.value),
      max: parseInt(e.target.max.value),
      charge: parseInt(e.target.charge.value),
      status: e.target.status.value,
      description: e.target.description.value,
    };

    const { res, err } = await EcommerceApi.editWithdrawMethod(
      withdrawMethodSlug,
      formData
    );

    if (res) {
      toast.success("Withdraw method updated");
      e.target.reset();
    }
  };

  return (
    <div className="w-full">
      <DashboardBreadcrumb
        headline="Edit Withdraw Method"
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

        <div className=" w-full relative">
          <div className="mt-4">
            <div className="mt-6 shadow-md bg-white rounded relative mb-7 border-0">
              <div className="p-5 leading-6">
                <form onSubmit={handleUpdate} action="">
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
                        defaultValue={withdrawMethodData?.name}
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
                        <span className="text-red-500 ml-2">*</span>
                      </div>
                      <input
                        className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                        type="number"
                        name="min"
                        min={0}
                        defaultValue={withdrawMethodData?.min}
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
                        <span className="text-red-500 ml-2">*</span>
                      </div>
                      <input
                        className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                        type="number"
                        name="max"
                        min={0}
                        defaultValue={withdrawMethodData?.max}
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
                        <span className="text-red-500 ml-2">*</span>
                      </div>
                      <input
                        className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                        type="number"
                        name="charge"
                        min={0}
                        defaultValue={withdrawMethodData?.charge}
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
                          Status
                        </label>
                        <span className="text-red-500 ml-2">*</span>
                      </div>
                      {withdrawMethodData && (
                        <select
                          className="w-full text-gray-500 border rounded p-3 border-gray-200 bg-[#fdfdff] focus:outline-none"
                          name="status"
                          defaultValue={withdrawMethodData?.status}
                        >
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                        </select>
                      )}
                    </div>

                    <div className="mt-4">
                      <div className="my-2">
                        <label
                          className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                          htmlFor=""
                        >
                          Description
                        </label>
                        <span className="text-red-500 ml-2">*</span>
                      </div>
                      <textarea
                        className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                        name="description"
                        defaultValue={withdrawMethodData?.description}
                        id=""
                        required
                      />
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
    </div>
  );
};

export default EditWithdrawMethod;
