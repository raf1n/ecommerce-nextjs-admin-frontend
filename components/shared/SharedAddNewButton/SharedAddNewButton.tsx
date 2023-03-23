import React from "react";
import { BiPlus } from "react-icons/bi";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import Link from "next/link";

interface Props {}

const SharedAddNewButton: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <button className=" flex items-center justify-center bg-blue-700 hover:bg-blue-600 text-white text-sm tracking-[.5px] shadow-[0_2px_6px_#acb5f6] py-2 px-3 rounded">
      <BiPlus className="h-5 w-5" />
      <span>Add New</span>
    </button>
  );
};

export default SharedAddNewButton;
