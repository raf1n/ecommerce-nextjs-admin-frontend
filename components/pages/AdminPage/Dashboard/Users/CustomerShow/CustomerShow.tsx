import Link from "next/link";
import { Router } from "next/router";
import React from "react";
import { FaList } from "react-icons/fa";
import { useSelector } from "react-redux";
import { IUser } from "../../../../../../interfaces/models";
import { controller } from "../../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import ToggleButton from "../../ManageCategories/ToggleButton/ToggleButton";

interface Props {
  user: IUser;
}

const CustomerShow: React.FC<Props> = ({ user }) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="w-full">
      <DashboardBreadcrumb
        headline="Customer Detail"
        slug="Customer List"
        link="/admin/customer_list"
      ></DashboardBreadcrumb>

      <div className="mx-[25px]">
        <Link className="inline-block" href="/admin/customer_list">
          <button className=" flex items-center justify-center bg-blue-700 hover:bg-blue-600 text-white text-sm tracking-[.5px] shadow-[0_2px_6px_#acb5f6] py-2 px-3 rounded">
          <span className="flex gap-2 items-center font-semibold"><FaList /> Customer List</span>
          </button>
        </Link>

        <div className="mt-10 text-qgray bg-white">
          <div className="p-5 overflow-x-auto">
            <table className="table-fixed w-full">
              <thead>
                <th className="w-72"></th>
                <th></th>
              </thead>
              <tbody>
                <tr className="bg-[#00000005]">
                  <td className="px-[25px] h-16">Image</td>
                  <td className="px-[25px] h-16">
                    <img src={user?.avatar as string} alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="px-[25px] h-16">Name</td>
                  <td className="px-[25px] h-16">{user?.fullName}</td>
                </tr>
                <tr className="bg-[#00000005]">
                  <td className="px-[25px] h-16">Email</td>
                  <td className="px-[25px]  h-16">{user?.email}</td>
                </tr>
                <tr>
                  <td className="px-[25px] h-16">Phone</td>
                  <td className="px-[25px] h-16">{user?.phone}</td>
                </tr>
                <tr className="bg-[#00000005]">
                  <td className="px-[25px] h-16">Address</td>
                  <td className="px-[25px]  h-16">{JSON.stringify(user?.address)}</td>
                </tr>
                <tr>
                  <td className="px-[25px] h-16">Status</td>
                  <td className="px-[25px]  h-16">
                    <ToggleButton slug={user?.slug} status={user?.status} apiUrl="users/edit-status" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerShow;
