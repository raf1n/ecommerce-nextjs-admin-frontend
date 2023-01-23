import React, { useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import Styles from "./ToggleButton.module.css";
interface Props {}

const ToggleButton: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const [active, setActive] = useState(true);

  return (
    <div
      className={`w-[80px] overflow-hidden border h-8 relative rounded ${
        active ? Styles["shadow-active"] : Styles["shadow-inactive"]
      }`}
    >
      <div
        onClick={() => setActive(!active)}
        className={`grid grid-cols-[65px,15px,65px] relative transition-all delay-100 duration-200 ease-in ${
          active ? "left-[0px]" : "left-[-65px]"
        }`}
      >
        <span className="bg-green-500 text-xs text-white grid place-items-center">
          Active
        </span>
        <span className=" border-blue-500 inline-block w-[15px] h-8 rounded bg-white"></span>
        <span className="bg-red-500  text-white grid place-items-center text-xs">
          Inactive
        </span>
      </div>
    </div>
  );
};

export default ToggleButton;
