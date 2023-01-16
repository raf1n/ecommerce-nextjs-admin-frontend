import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../src/state/StateController";
import Styles from "./AdminDetailsSummary.module.css";
import { Jsondata } from "../../../../../src/utils/Jsondata";
interface Props {}

const AdminDetailsSummary: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div style={{ padding: "25px" }} className={`${Styles["section"]} mt-12`}>
      <div className={`${Styles["section-header"]}`}>
        <h1>Dashboard</h1>
      </div>
      <div className="section-body">
        <div className="p-4 w-full">
          <div className="grid grid-cols-12 gap-4">
            {Jsondata.dashboardSummaryData.map((data) => (
              <div className="col-span-12 sm:col-span-6 md:col-span-3">
                <div className="flex flex-row bg-white shadow-sm rounded p-2 justify-center items-center">
                  <div
                    className={`flex items-center justify-center flex-shrink-0 h-14 w-14 p-2   border`}
                    style={{ backgroundColor: data.bgColor }}
                  >
                    <data.icons className="w-6 h-6 text-white"></data.icons>
                  </div>
                  <div className="flex flex-col flex-grow ml-4">
                    <div className="text-sm text-gray-500">{data?.title}</div>
                    <div className="font-bold text-lg">{data?.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDetailsSummary;
