import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import Link from "next/link";

interface Props {
  slug: string;
  link: string;
  headline: string;
}

const DashboardBreadcrumb: React.FC<Props> = (props) => {
  const user = useSelector(() => controller.states.currentUser);

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
          <Link href={`/${user?.role}`}>
            <span className="mx-1 capitalize text-xs text-[#6777EF] ">
              Dashboard
            </span>
          </Link>
          <span className="separator">/</span>
        </span>
        <span>
          <Link href={`/${user?.role}/${props.link}`}>
            <span className="mx-1 capitalize text-xs ">{props.slug}</span>
          </Link>
          {/* <span className="separator">/</span> */}
        </span>
      </div>
    </div>
  );
};

export default DashboardBreadcrumb;
