import React from "react";
import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import styles from "./Scrollbar.module.css";
import { controller } from "../../../../src/state/StateController";
import Link from "next/link";
import { Jsondata } from "../../../../src/utils/Jsondata";

interface Props {
  open: boolean;
  responsiveOpen: boolean;
  menuOpen: number | null;
  handleMenuClick: Function;
}

const Sidebar: React.FC<Props> = (props) => {
  const { open, responsiveOpen, menuOpen, handleMenuClick } = props;
  const states = useSelector(() => controller.states);

  return (
    <div
      className={` ${open ? "w-[250px]" : "w-[65px] "} ${
        responsiveOpen ? "left-0" : "left-[-250px]"
      } h-screen fixed z-50 lg:left-0 lg:relative bg-white duration-500`}>
      <div className="text-center h-[60px] leading-[60px]">
        <Link href="/" className="font-bold text-sm tracking-widest">
          {open ? "SHOPO" : "SP"}
        </Link>
      </div>
      <ul
        className={`${styles["scrollbar"]} h-[calc(100vh-60px)] text-[#78828a] overflow-y-scroll overflow-x-hidden`}>
        {Jsondata.menusForSeller.map((menu, index) => (
          <MenuItem
            key={index}
            menu={menu}
            open={open}
            idx={index}
            menuOpen={menuOpen}
            handleMenuClick={handleMenuClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
