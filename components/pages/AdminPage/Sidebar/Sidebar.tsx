import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Jsondata } from "../../../../src/utils/Jsondata";
import MenuItem from "./MenuItem";
import styles from "./Scrollbar.module.css";
import { controller } from "../../../../src/state/StateController";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  open: boolean;
  responsiveOpen: boolean;
  menuOpen: number | null;
  handleMenuClick: Function;
}

const Sidebar: React.FC<Props> = (props) => {
  const { open, responsiveOpen, menuOpen, handleMenuClick } = props;
  const states = useSelector(() => controller.states);
  const { asPath } = useRouter();
  const menus = asPath.includes("/admin")
    ? Jsondata.menus
    : Jsondata.menusForSeller;

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
        {menus.map((menu, index) => (
          <MenuItem
            key={index}
            menu={menu}
            open={open}
            idx={index}
            menuOpen={menuOpen}
            // setMenuOpen={setMenuOpen}
            handleMenuClick={handleMenuClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
