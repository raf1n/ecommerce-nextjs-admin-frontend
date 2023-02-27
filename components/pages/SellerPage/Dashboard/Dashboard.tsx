import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import { FaBars } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import { FaSignOutAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import styles from "./Dashboard.module.css";
import { MdArrowDropDown } from "react-icons/md";
import { useState } from "react";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  responsiveOpen: boolean;
  setResponsiveOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dashboard: React.FC<Props> = (props) => {
  const { open, setOpen, responsiveOpen, setResponsiveOpen } = props;
  const states = useSelector(() => controller.states);
  const [show, setShow] = useState(false);

  const tableHeadersOne = [
    "SL",
    "CUSTOMER",
    "ORDER ID",
    "DATE",
    "QUANTITY",
    "AMOUNT",
    "ORDER STATUS",
    "PAYMENT",
    "ACTION",
  ];

  const actionsOne = {
    isDeletable: true,
    isShipping: true,
    isViewable: true,
  };

  const tableHeadersTwo = ["SL", "Name", "Image", "Icon", "Status", "Action"];

  const actionsTwo = {
    isEditable: true,
    isDeletable: true,
  };

  return (
    <div className="flex-1  overflow-y-auto relative">
      <div className="flex flex-row justify-between h-[115px] relative bg-[#6777ef]">
        <div className="relative">
          {/* for big screen: hamberger */}
          <FaBars
            className={`absolute cursor-pointer hidden lg:block top-9 w-16 rounded-full duration-300 text-white`}
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
            }}>
            <div className={`flex text-white  pl-6`}>
              <img
                src={`https://api.websolutionus.com/shopo/uploads/custom-images/kelsey-conrad-2022-12-28-04-55-51-8312.jpg`}
                alt="pic"
                className={`${styles["img-style"]}`}
              />
              <span className="text-sm  pt-1 pl-2">Mr. Seller</span>
              <span className="text-xl  pt-1">
                <MdArrowDropDown />
              </span>
            </div>
          </button>
        </div>
      </div>

      <div className={` ${show ? "block" : "hidden"}   `}>
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

      {/* <Login /> */}
      <div className="mt-[-50px] absolute w-full"></div>
    </div>
  );
};

export default Dashboard;
