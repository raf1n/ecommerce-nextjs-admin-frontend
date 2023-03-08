import Link from "next/link";
import React from "react";
import { FaList } from "react-icons/fa";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";

interface Props {}

const SendEmailToAllCustomers: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="w-full">
      <DashboardBreadcrumb
        headline="Send Email To All Customers"
        slug="Pending Customer List"
        link="/admin/pending_customer_list"
      ></DashboardBreadcrumb>

      <div className="mx-[25px]">
        <Link className="inline-block" href="/admin/customer_list">
          <button className=" flex items-center justify-center bg-blue-700 hover:bg-blue-600 text-white text-sm tracking-[.5px] shadow-[0_2px_6px_#acb5f6] py-2 px-3 rounded">
            <span className="flex gap-2 items-center font-semibold">
              <FaList /> Customer List
            </span>
          </button>
        </Link>

        <div className="mt-10 bg-white">
          <div className="p-5 overflow-x-auto">
            <h1 className="font-bold py-4 text-2xl">
              Send Email to All Customer
            </h1>

            <div className="">
              <div className="my-6">
                <label
                  className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <span className="text-red-500 ml-2">*</span>
                <input
                  className="w-full p-3 border border-gray-200 bg-[#fdfdff] text-sm"
                  type="text"
                  name="subject"
                  id="subject"
                />
              </div>

              <div className="my-6">
                <label
                  className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                  htmlFor="message"
                >
                  Message
                </label>
                <span className="text-red-500 ml-2">*</span>
                <textarea
                  required
                  className="w-full p-3 border border-gray-200 bg-[#fdfdff] text-sm"
                  name="message"
                  id="message"
                />
              </div>

              <button className=" flex items-center justify-center bg-blue-700 hover:bg-blue-600 text-white text-sm tracking-[.5px] shadow-[0_2px_6px_#acb5f6] py-2 px-3 rounded">
                <span className="flex gap-2 items-center font-semibold">
                  Send Email
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendEmailToAllCustomers;
