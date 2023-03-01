import React, { useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../src/state/StateController";
import { FaBars, FaHome, FaLock, FaSignOutAlt, FaStore } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi";
import styles from "../pages/AdminPage/Dashboard/Dashboard.module.css";
import Link from "next/link";
import Sidebar from "../pages/SellerPage/Sidebar/Sidebar";
import { AiFillShop } from "react-icons/ai";
interface Props {
  children: any;
}

const LayoutForSeller: React.FC<Props> = ({ children }) => {
  const states = useSelector(() => controller.states);
  const [open, setOpen] = useState(true);
  const [responsiveOpen, setResponsiveOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState<null | number>(null);

  const handleMenuClick = (menuOpen: number, idx: number) => {
    if (menuOpen === idx) {
      setMenuOpen(null);
    } else {
      setMenuOpen(idx);
    }
  };

  return (
    <div className="font-nunito flex h-screen overflow-y-hidden bg-[#f4f6f9]">
      {/* left side bar */}
      <Sidebar
        open={open}
        responsiveOpen={responsiveOpen}
        menuOpen={menuOpen}
        handleMenuClick={handleMenuClick}
      />

      {responsiveOpen && (
        <div
          onClick={() => {
            setOpen(!open);
            setResponsiveOpen(false);
            setMenuOpen(0);
          }}
          className="fixed z-10 opacity-40 bg-black top-0 left-0 right-0 bottom-0"></div>
      )}

      {/* right side dashboard */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-row pb-9 justify-between h-[115px] bg-[#6777ef]">
          <div className="flex-1 flex items-center pl-[24px]">
            {/* for big screen: hamberger */}
            <FaBars
              className={` cursor-pointer hidden w-5 h-5 lg:block duration-300 text-white`}
              onClick={() => {
                setOpen(!open);
                setResponsiveOpen(false);
              }}
            />

            <FaBars
              className={` cursor-pointer w-5 h-5 block lg:hidden duration-300 ease-in text-white`}
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
              }}>
              <div className={`flex text-white  pl-6`}>
                <img
                  src={`https://api.websolutionus.com/shopo/uploads/custom-images/kelsey-conrad-2022-12-28-04-55-51-8312.jpg`}
                  alt="pic"
                  className={`${styles["img-style"]}`}
                />
                <span className="text-sm pt-1 pl-2 hidden lg:block">
                  Kelsey Conrad
                </span>
                <span className="text-xl pt-1">
                  <MdArrowDropDown />
                </span>
              </div>
            </button>
          </div>
        </div>

        <div className={` ${show ? "block" : "hidden"} relative`}>
          <div className={`${styles["dropdown-menu"]} -mt-14 mr-2 `}>
            <div>
              <Link href="/profile" className="flex text-[13px]">
                <span className="pr-2  text-[15px]">
                  <HiOutlineUser />
                </span>
                My Profile
              </Link>
              <Link href="/" className="flex text-[13px] font-medium">
                <span className="pr-2 text-[15px] ">
                  <FaStore />
                </span>
                <span> Shop Profile</span>
              </Link>
              <Link href="/" className="flex text-[13px] font-medium">
                <span className="pr-2  text-[15px]">
                  <FaLock />
                </span>
                <span> Change Password</span>
              </Link>
              <div className="border-t"></div>
              <Link
                href="/logout"
                className="flex text-[13px] text-[#fc544b] my-3 font-medium">
                <span className="pr-2  text-[15px]">
                  <FaSignOutAlt />
                </span>
                <span> Logout</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-[-55px] w-full">{children}</div>
      </div>
    </div>
  );
};

export default LayoutForSeller;
