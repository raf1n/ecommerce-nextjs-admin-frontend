import React, { useState } from "react";
import { useSelector } from "react-redux";

import { FaAngleRight } from "react-icons/fa";
import { controller } from "../../../../src/state/StateController";

interface Props {
  menu: any;
  open: boolean;
  idx: number;
  menuOpen: number | null;
  setMenuOpen: Function;
}

const MenuItem: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const { menu, open, idx, menuOpen, setMenuOpen } = props;

  const handleClick = () => {
    if (menuOpen === idx) {
      setMenuOpen(null);
    } else {
      setMenuOpen(idx);
    }
  };

  return (
    <li
      className={`grid cursor-pointer text-sm ${
        menuOpen === idx ? "bg-[#f8fafb]" : ""
      }`}
    >
      <div
        onClick={handleClick}
        className={`${
          !open ? "min-h-[65px]" : "min-h-[50px]"
        } duration-300 relative px-5 hover:bg-[#f8fafb] ${
          menuOpen === idx ? "text-[#6777ef]" : ""
        }`}
      >
        <div
          className={`w-full group relative h-full flex items-center ${
            open && "gap-x-6"
          }`}
        >
          <div>
            <menu.icon className={`${open ? "w-4 h-4" : "w-6 h-6"} group`} />
          </div>
          <span
            className={`${
              open
                ? ""
                : "hidden group-hover:block absolute z-10 left-14 bg-[#78828a] text-white w-max shadow-lg px-3 py-1 rounded"
            } group origin-left duration-300 flex-1 flex items-center justify-between`}
          >
            <span className={``}>{menu.title}</span>
            {menu.nestedRoutes ? (
              <FaAngleRight
                className={`${menuOpen === idx ? "rotate-90" : ""} ${
                  open ? "" : "hidden group-hover:hidden"
                } group duration-300`}
              />
            ) : (
              ""
            )}
          </span>
        </div>
      </div>
      {menu.nestedRoutes && (
        <div
          className={`${
            menuOpen === idx ? `h-[${menu.height}]` : "h-0 invisible opacity-0"
          } ${
            !open
              ? "absolute left-[65px] bg-white w-max shadow-lg py-2 rounded-tr-md rounded-br-md"
              : ""
          } overflow-hidden duration-300`}
        >
          <ul>
            {menu.nestedRoutes.map((menu: any, idx: number) => (
              <li
                key={idx}
                className={` ${
                  !open ? "px-12" : "pl-[65px]"
                } h-[35px] flex items-center`}
              >
                <span className="flex-1 text-[13px] hover:text-[#6777ef]">
                  {menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default MenuItem;
