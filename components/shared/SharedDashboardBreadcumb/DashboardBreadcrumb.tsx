import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";

interface Props {
  slug: string;
  link: string;
  headline: string;
}

const DashboardBreadcrumb: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div
      className="flex justify-between  bg-white my-12 rounded-[3px]"
      style={{ margin: "25px", padding: "20px", height: "72px" }}
    >
      <div>
        <h1 className="text-2xl font-semibold">{props.headline}</h1>
      </div>
      <div className="font-normal text-[13px] text-qblack mb-[23px] content-center ">
        <span>
          <a href="/">
            <span className="mx-1 capitalize text-xs text-[#6777EF] ">
              Dashboard
            </span>
          </a>
          <span className="separator">/</span>
        </span>
        <span>
          <a href={props.link}>
            <span className="mx-1 capitalize text-xs ">{props.slug}</span>
          </a>
          {/* <span className="separator">/</span> */}
        </span>
      </div>
    </div>
  );
};

export default DashboardBreadcrumb;
