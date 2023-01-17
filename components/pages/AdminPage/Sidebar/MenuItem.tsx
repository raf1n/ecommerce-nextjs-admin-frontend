import React, { useState } from "react";
import { useSelector } from "react-redux";

import { FaAngleRight } from "react-icons/fa";
import { controller } from "../../../../src/state/StateController";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  menu: any;
  open: boolean;
  idx: number;
  menuOpen: number | null;
  // setMenuOpen: Function;
  handleMenuClick: Function;
}

const MenuItem: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const router = useRouter();
<<<<<<< HEAD
  const [nestedMenuActive, setNestedMenuActive] = useState<null | number>(null)
=======
>>>>>>> 32c751229c362428aa98efcfddcb6bcfb01a3968

  const { asPath } = router;

<<<<<<< HEAD
  const handleClick = () => {
    if (menuOpen === idx) {
      setMenuOpen(null);
      setNestedMenuActive(null)
    } else {
      setMenuOpen(idx);
      setNestedMenuActive(null)
    }
  };
  const handleNestedMenuClick = (index: number) => {
    if (nestedMenuActive === index) {
      setNestedMenuActive(null)
    }
    else {
      setNestedMenuActive(index)
    }
  }

  return (
    <li
      className={`grid cursor-pointer text-sm ${menuOpen === idx ? "bg-[#f8fafb]" : ""
        }`}
    >
      <div
        onClick={handleClick}
        className={`${!open ? "min-h-[65px]" : "min-h-[50px]"
          } duration-300 relative px-5 hover:bg-[#f8fafb] ${menuOpen === idx ? "text-[#6777ef]" : ""
          }`}
=======
  const { menu, open, idx, menuOpen, handleMenuClick } = props;

  return (
    <li
      onClick={() => {
        if (menu.link) {
          router.push(menu.link)
        }
      }}
      className={`grid cursor-pointer text-sm ${
        menuOpen === idx ? "bg-[#f8fafb]" : ""
      }`}
    >
      <div
        onClick={() => handleMenuClick(menuOpen, idx)}
        className={`${
          !open ? "min-h-[65px]" : "min-h-[50px]"
        } duration-300 relative px-5 hover:bg-[#f8fafb] ${
          menuOpen === idx ? "text-[#6777ef]" : ""
        }`}
>>>>>>> 32c751229c362428aa98efcfddcb6bcfb01a3968
      >
        <div
          className={`w-full group relative h-full flex items-center ${open && "gap-x-6"
            }`}
        >
          <div>
            <menu.icon className={`${open ? "w-4 h-4" : "w-6 h-6"} group`} />
          </div>
          <span
            className={`${open
              ? ""
              : "hidden group-hover:block absolute z-10 left-14 bg-[#78828a] text-white w-max shadow-lg px-3 py-1 rounded"
              } group origin-left duration-300 flex-1 flex items-center justify-between`}
          >
            <span className={``}>{menu.title}</span>
            {menu.nestedRoutes && (
              <FaAngleRight
                className={`${menuOpen === idx ? "rotate-90" : ""} ${open ? "" : "hidden group-hover:hidden"
                  } group duration-300`}
              />
            )}
          </span>
        </div>
      </div>
      {menu.nestedRoutes && (
        <div
<<<<<<< HEAD
          className={`${menuOpen === idx ? `h-[${menu.height}]` : "h-0 invisible opacity-0"
            } ${!open
=======
          className={`${
            menuOpen === idx ? `h-[${menu.height}] visible opacity-100` : "h-0 invisible opacity-0"
          } ${
            !open
>>>>>>> 32c751229c362428aa98efcfddcb6bcfb01a3968
              ? "absolute left-[65px] bg-white w-max shadow-lg py-2 rounded-tr-md rounded-br-md"
              : ""
            } overflow-hidden duration-300`}
        >
          <ul>
            {menu.nestedRoutes.map((nestedMenu: any, idx: number) => (
              <li
                key={idx}
                className={` ${!open ? "px-12" : "pl-[65px]"
                  } h-[35px] flex items-center`}
              >
<<<<<<< HEAD
                <Link href="/all_orders">
                  <span onClick={() => { handleNestedMenuClick(idx) }}
                    className={`${nestedMenuActive === idx ? "text-[#6777ef]" : ""
                      } flex-1 text-[13px] hover:text-[#6777ef]`}>
                    {menu.title}
=======
                <Link href={nestedMenu?.link} className={`${asPath === nestedMenu?.link ? "text-[#6777ef]" : ""}`}>
                  <span className="flex-1 text-[13px] hover:text-[#6777ef]">
                    {nestedMenu?.title}
>>>>>>> 32c751229c362428aa98efcfddcb6bcfb01a3968
                  </span>
                </Link>

              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default MenuItem;
