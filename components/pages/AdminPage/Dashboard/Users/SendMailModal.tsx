import React, { useRef, Dispatch, SetStateAction } from "react";
import { HiOutlineX } from "react-icons/hi";
import { useSelector } from "react-redux";
import { controller } from "../../../../../src/state/StateController";
import emailjs from "@emailjs/browser";

interface Props {
  sendMailModalEmail: string;
  setSendMailModalEmail: Dispatch<SetStateAction<string>>;
  // handleSendMail: () => void;
}

const SendMailModal: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const { sendMailModalEmail, setSendMailModalEmail } = props;
  let form = useRef<any>();

  const handleSendMail = (e: any) => {
    e.preventDefault();
    console.log("ddd");

    emailjs
      .sendForm(
        "service_w3gw1va",
        "template_46jfncu",
        form.current,
        "L1JLjb4PpIPrIKEpu"
      )
      .then(
        (result: any) => {
          console.log("first");
          console.log(result.text);
          setSendMailModalEmail("");
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {sendMailModalEmail ? (
        <div className="relative">
          <div className="flex justify-center fixed inset-0 z-50 bg-black bg-opacity-10 backdrop-blur-[1px]">
            <div className="bg-white rounded-md mt-10 shadow h-fit w-full sm:w-[500px] ">
              <form
                ref={form}
                onSubmit={handleSendMail}
                className="px-6 py-6 text-[#6c757d]"
              >
                <div className="flex justify-between items-center">
                  <h5 className="text-lg font-bold text-slate-500">
                    Send To : {sendMailModalEmail}
                  </h5>
                  <button onClick={() => setSendMailModalEmail("")}>
                    <HiOutlineX className="w-6 h-6 text-gray-500"></HiOutlineX>
                  </button>
                </div>
                <div className="px-2">
                  <input
                    id="email"
                    type="hidden"
                    name="email"
                    value={sendMailModalEmail}
                    readOnly
                  />
                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor="subject"
                      >
                        Subject
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="subject"
                      id="subject"
                    />
                  </div>

                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <textarea
                      required
                      className="w-full p-3 border border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      name="message"
                      id="message"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2 px-3 py-4 bg-gray-50 rounded">
                  <button
                    type="button"
                    onClick={() => setSendMailModalEmail("")}
                    className="bg-red-600 hover:bg-red-500 text-white text-sm py-2 px-4 rounded shadow-[0_2px_6px_#fd9b96]"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-700 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded shadow-[0_2px_6px_#acb5f6]"
                  >
                    Send Mail
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SendMailModal;
