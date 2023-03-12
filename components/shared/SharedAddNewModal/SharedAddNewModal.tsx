import React, { useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import { HiOutlineX } from "react-icons/hi";
import { ICategories } from "../../../interfaces/models";
import { EcommerceApi } from "../../../src/API/EcommerceApi";

interface Props {
  title: string;
  showModal: boolean;
  setShowModal: any;
  categoriesData: any;
}

const SharedAddNewModal: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const { setShowModal, showModal } = props;

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    console.log("eeee");

    const popularCategories = {
      // cat_imag

      // cat_slug: e.target.cat_slug.value,
      cat_name: e.target.catName.value.split("+")[0],
      cat_slug: e.target.catName.value.split("+")[1],
      // slug: e.target.slug.value,
      // subcat_status: e.target.status.value,
    };
    const { res, err } = await EcommerceApi.createPopularCategories(
      popularCategories
    );
    if (res) {
      setShowModal(false);
    } else
      (err: any) => {
        console.log(err);
      };

    // e.target.reset();
  };

  return (
    <>
      {showModal ? (
        <div className="relative">
          <div className="flex justify-center fixed inset-0 z-50 bg-black bg-opacity-10 backdrop-blur-[1px]">
            <div className="bg-white px-6 py-6 rounded-md mt-10 shadow h-fit min-w-fit md:w-1/3">
              <div className="flex justify-between items-center">
                <h1 className="text-xl  font-bold text-slate-500">
                  {`Add New ${props.title} Category`}
                </h1>
                <button onClick={() => setShowModal(false)}>
                  <HiOutlineX className="w-6 h-6 text-gray-500"></HiOutlineX>
                </button>
              </div>
              <div className="px-2">
                <form onSubmit={(e) => handleUpdate(e)}>
                  <div className="my-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Category
                      </label>
                      {/* <span className='text-red-500 ml-2'>*</span> */}
                    </div>

                    <select
                      className="w-full border rounded p-2 border-gray-200 bg-[#fdfdff] focus:outline-none"
                      name="catName"
                      id=""
                    >
                      {props.categoriesData.map((category: ICategories) => (
                        <option
                          value={`${category.cat_name}+${category.cat_slug}`}
                        >
                          {category.cat_name}
                        </option>
                      ))}
                      {/* <option value="electronics">Electronics</option>
                    <option value="electronics">Electronics</option>
                    <option value="electronics">Electronics</option>
                    <option value="electronics">Electronics</option>
                    <option value="electronics">Electronics</option> */}
                    </select>
                  </div>
                  <button
                    type="submit"
                    // onClick={() => setShowModal(false)}
                    className="bg-blue-700 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded"
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SharedAddNewModal;
