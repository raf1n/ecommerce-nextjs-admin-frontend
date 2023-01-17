import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import { FaList } from "react-icons/fa";

interface Props {
  title: string;
  link: string;
}

const SharedGoBackButton: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <Link href={props.link} className="inline-block shadow-[0_2px_6px_#acb5f6]">
      <button className=" flex items-center justify-center bg-blue-700 hover:bg-blue-600 text-white text-sm tracking-[.5px] py-2 px-3 rounded">
        <FaList className="h-4 w-4 mr-2" />
        <span>{props.title}</span>
      </button>
    </Link>
  );
};

export default SharedGoBackButton;