import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import styled from "./SharedLoadingModal.module.css";

interface Props {}

const SharedLoadingModal: React.FC<Props> = (props) => {
  const loading = useSelector(() => controller.states.apiLoading);

  return (
    <>
      {loading && (
        <div className="relative">
          <div className="flex justify-center items-center fixed inset-0 z-50 bg-black bg-opacity-10 backdrop-blur-[.7px]">
            <div className="bg-white rounded-md mt-10 shadow h-fit min-w-fit">
              <div className="px-6 py-4 text-[#6c757d] text-sm flex justify-between items-center gap-2 font-semibold">
                <div className={styled["SpinnerContainer"]}></div>
                Loading...
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SharedLoadingModal;
