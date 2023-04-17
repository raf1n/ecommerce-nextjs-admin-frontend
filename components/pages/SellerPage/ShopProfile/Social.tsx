import React, { useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import { FaPlus, FaTrash } from "react-icons/fa";
import { toast } from "react-hot-toast";

interface Props {
  inputlists: Array<any>;
  setInputlists: any;
}

const Social: React.FC<Props> = ({ inputlists, setInputlists }) => {
  const states = useSelector(() => controller.states);

  const handleAdd = (e: any) => {
    setInputlists((inputlists: any) => {
      return [{ social_icon: "", social_link: "" }, ...inputlists];
    });

    if (inputlists.length === 4) {
      toast.error(`You can't add more than 5 input fields ! `);
    }
  };

  const handleInputChange = (e: any, index: any) => {
    const { name, value } = e.target;
    const list = [...inputlists];
    list[index][name] = value;
    setInputlists(list);
  };

  const handleRemove = (index: any) => {
    const list = [...inputlists];
    const q = list.filter((input, idx) => idx !== index);
    console.log(q);
    setInputlists(q);
  };

  return (
    <>
      {inputlists.map((input, index) => (
        <div key={Math.random()}>
          <div className="mt-4 flex gap-5">
            <div className="w-full">
              <div className="my-2 ">
                <label
                  className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                  htmlFor="">
                  Social Icon {index + 1}
                </label>
              </div>
              <input
                className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                type="text"
                name="social_icon"
                id="social_icon"
                onBlur={(e) => handleInputChange(e, index)}
                defaultValue={
                  input?.social_icon
                  //   shopData?.shop?.social[index]?.social_icon
                  //     ? shopData?.shop?.social[index]?.social_icon
                  //     : ""
                }
              />
            </div>
            <div className="w-full">
              <div className="my-2">
                <label
                  className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                  htmlFor="">
                  Social Link {index + 1}
                </label>
              </div>
              <input
                className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                type="text"
                name="social_link"
                id="social_link"
                onBlur={(e) => handleInputChange(e, index)}
                defaultValue={
                  input?.social_link
                  // shopData?.shop?.social[index]?.social_link
                }
              />
            </div>
            {inputlists?.length - 1 === index ? (
              ""
            ) : (
              <button onClick={() => handleRemove(index)}>
                <span className="relative inline-block  px-1  mt-9 font-semibold  leading-tight">
                  <span
                    style={{
                      boxShadow: "0 2px 6px #fd9b96",
                    }}
                    className="h-9 w-9 mr-14 inset-0 bg-[#fb160a]   rounded  relative text-white flex justify-center items-center">
                    <FaTrash />
                  </span>
                </span>
              </button>
            )}

            {inputlists?.length - 1 === index && (
              <button onClick={handleAdd} disabled={inputlists.length === 5}>
                <span className="relative inline-block px-1  mt-9 font-semibold  leading-tight">
                  <span
                    style={{
                      boxShadow: "0 2px 4px #18a93a",
                    }}
                    className="h-9 w-9 mr-14  inset-0 bg-[#18a93a]   rounded  relative text-white flex justify-center items-center">
                    <FaPlus />
                  </span>
                </span>
              </button>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Social;
