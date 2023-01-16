import React, { useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../src/state/StateController";
import Sidebar from "../pages/AdminPage/Sidebar/Sidebar";
import { FaBars, FaHome, FaSignOutAlt } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi";
import styles from "../components/pages/AdminPage/Dashboard/Dashboard.module.css";
interface Props {
  children: any;
}

const Layout: React.FC<Props> = ({ children }) => {
  const states = useSelector(() => controller.states);
  const [open, setOpen] = useState(true);
  const [responsiveOpen, setResponsiveOpen] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div className="flex h-screen overflow-y-hidden bg-[#f4f6f9]">
      {/* left side bar */}
      <Sidebar open={open} responsiveOpen={responsiveOpen} />

      {/* right side dashboard */}
      <div className="flex-1 overflow-y-auto relative">
        <div className="flex flex-row justify-between h-[115px] relative bg-[#6777ef]">
          <div className="relative">
            {/* for big screen: hamberger */}
            <FaBars
              className={`absolute cursor-pointer hidden lg:block top- w-16 rounded-full duration-300 text-white`}
              onClick={() => {
                setOpen(!open);
                setResponsiveOpen(false);
              }}
            />
            {/* for small screen: hamberger */}
            <FaBars
              className={`left-[270px] absolute cursor-pointer block lg:hidden  top-6 w-7 rounded-full duration-300 text-white`}
              onClick={() => {
                setResponsiveOpen(!responsiveOpen);
                setOpen(true);
              }}
            />
          </div>
          <div className="flex items-center px-8 text-white">
            <button className="flex text-[#f2f2f2]">
              <span className="text-xl">
                <FaHome />
              </span>
              <span className="text-sm pl-1 ">Visit Website</span>
            </button>
            <button
              onClick={() => {
                setShow(!show);
              }}
            >
              <div className={`flex text-white  pl-6`}>
                <img
                  src={`https://api.websolutionus.com/shopo/uploads/website-images/ibrahim-khalil-2022-01-30-02-48-50-5743.jpg`}
                  alt="pic"
                  className={`${styles["img-style"]}`}
                />
                <span className="text-sm  pt-1 pl-2">Admin</span>
                <span className="text-xl  pt-1">
                  <MdArrowDropDown />
                </span>
              </div>
            </button>
          </div>
        </div>

        <div className={` ${show ? "block" : "hidden"} `}>
          <div className={`${styles["dropdown-menu"]}  mt-3`}>
            <div>
              <a href="/profile" className="flex text-xs">
                <span className="pr-2">
                  <HiOutlineUser />
                </span>
                Profile
              </a>

              <div className="border-t"></div>
              <a href="/logout" className="flex text-xs font-medium">
                <span className="pr-2 text-red-600">
                  <FaSignOutAlt />
                </span>
                <span className="text-red-400"> Logout</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-[-50px] absolute w-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
