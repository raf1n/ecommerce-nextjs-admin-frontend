import React, { useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";

interface Props {
  showModal: boolean;
  setShowModal: any;
}

const Modal: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const { setShowModal, showModal } = props;
  return (
    <>
      {showModal ? (
        <>
          <div className="flex justify-center fixed inset-0 z-50 backdrop-blur-[0.5px]">
            <div className="bg-white px-16 py-14 rounded-md text-center mt-10 shadow h-1/3 lg:h-1/4">
              <h1 className="text-xl mb-4 font-bold text-slate-500">
                Do you Want to Delete?
              </h1>
              <button
                onClick={() => setShowModal(false)}
                className="bg-red-500 px-4 py-2 rounded-md text-md text-white"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
              >
                Ok
              </button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
