import React, { useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import Styles from "../ToggleButton/ToggleButton.module.css";
interface Props {
  status: string;
  slug: string;
}

const CatToggleButton: React.FC<Props> = ({ status, slug }) => {
  const states = useSelector(() => controller.states);

  const [toggleStatus, setToggleStatus] = useState(status);

  const handleClick = () => {
    let patchStatus;

    if (toggleStatus === "active") {
      patchStatus = "inactive";
    } else {
      patchStatus = "active";
    }
    console.log(slug);
    fetch(`http://localhost:8000/categories/${slug}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ cat_status: patchStatus }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToggleStatus(data.cat_status);
      });
  };

  return (
    <div
      className={`w-[80px] overflow-hidden border h-8 relative rounded cursor-pointer ${
        toggleStatus === "active"
          ? Styles["shadow-active"]
          : Styles["shadow-inactive"]
      }`}
    >
      <div
        onClick={() => handleClick()}
        className={`grid grid-cols-[65px,15px,65px] relative transition-all delay-100 duration-200 ease-in ${
          toggleStatus === "active" ? "left-[0px]" : "left-[-65px]"
        }`}
      >
        <span className="bg-green-500 text-xs text-white grid place-items-center">
          Active
        </span>
        <span className="w-[15px] h-8 bg-white hover:bg-slate-200"></span>
        <span className="bg-red-500  text-white grid place-items-center text-xs">
          Inactive
        </span>
      </div>
    </div>
  );
};

export default CatToggleButton;
