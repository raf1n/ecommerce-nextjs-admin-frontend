import React, { useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import { HiOutlineX } from "react-icons/hi";

interface Props {
  showModal: boolean;
  setShowModal: any;
}

const SharedDeleteModal: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const { setShowModal, showModal } = props;
  return (
    <>
      {showModal ? (
        <div className="relative">
          <div className="flex justify-center fixed inset-0 z-50 bg-black bg-opacity-10 backdrop-blur-[1px]">
            <div className="bg-white px-6 py-6 rounded-md mt-10 shadow h-fit min-w-fit md:w-1/3">
              <div className="flex justify-between items-center">
                <h1 className="text-xl  font-bold text-slate-500">
                  Item Delete Confirmation
                </h1>
                <button onClick={() => setShowModal(false)}>
                  <HiOutlineX className="w-6 h-6 text-gray-500"></HiOutlineX>
                </button>
              </div>
              <div className="px-2">
                <div className="my-4">
                  <div className="my-2">
                    <label
                      className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                      htmlFor=""
                    >
                      Are you sure you want to Delete?
                    </label>
                    {/* <span className='text-red-500 ml-2'>*</span> */}
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-2 p-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-red-700 hover:bg-red-600 text-white text-sm py-2 px-4 rounded"
                >
                  Close
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-blue-700 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded"
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SharedDeleteModal;
