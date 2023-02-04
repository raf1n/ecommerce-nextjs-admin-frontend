import React, { Dispatch, SetStateAction, useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import { HiOutlineX } from "react-icons/hi";

interface Props {
  deleteModalSlug: string;
  setDeleteModalSlug: Dispatch<SetStateAction<string>>;
  handleDelete: () => void;
}

const SharedDeleteModal: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const { deleteModalSlug, setDeleteModalSlug, handleDelete } = props;

  return (
    <>
      {deleteModalSlug ? (
        <div className="relative">
          <div className="flex justify-center fixed inset-0 z-50 bg-black bg-opacity-10 backdrop-blur-[1px]">
            <div className="bg-white rounded-md mt-10 shadow h-fit min-w-fit md:w-1/3">
              <div className="px-6 py-6 text-[#6c757d]">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl  font-bold text-slate-500">
                    Item Delete Confirmation
                  </h1>
                  <button onClick={() => setDeleteModalSlug("")}>
                    <HiOutlineX className="w-6 h-6 text-gray-500"></HiOutlineX>
                  </button>
                </div>
                <div className="px-2">
                  <div className="my-4">
                    <div className="my-2">
                      <label
                        className=" tracking-[.5px]  mt-4	text-sm"
                        htmlFor=""
                      >
                        Are you sure you want to Delete - {deleteModalSlug}?
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-2 px-3 py-4 bg-gray-50 rounded">
                <button
                  onClick={() => setDeleteModalSlug("")}
                  className="bg-red-600 hover:bg-red-500 text-white text-sm py-2 px-4 rounded shadow-[0_2px_6px_#fd9b96]"
                >
                  Close
                </button>
                <button
                  onClick={() => handleDelete()}
                  className="bg-blue-700 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded shadow-[0_2px_6px_#acb5f6]"
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
