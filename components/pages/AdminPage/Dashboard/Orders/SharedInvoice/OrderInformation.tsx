import React from "react";
import { HiPrinter } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import { Jsondata } from "../../../../../../src/utils/Jsondata";
import DynamicTable from "../../../../../shared/SharedTable/DynamicTable";
import OrderInvoiceTable from "./OrderInvoiceTable";

interface Props {}

const OrderInformation: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <div
        className="section-body bg-white my-12  rounded-[3px] "
        style={{ margin: "25px", padding: "40px" }}>
        <div className="invoice ">
          <div className="invoice-print  ">
            <div className="row ">
              <div className="">
                <div className="invoice-title flex justify-between ">
                  <h2>
                    <img
                      className="mr-2"
                      src="https://api.websolutionus.com/shopo/uploads/website-images/logo-2022-11-22-11-19-02-4634.png"
                      alt="logo"
                    />
                  </h2>
                  <div className="invoice-number">Order #344024836</div>
                  {/* -------------- Only hr  ------------------- */}
                </div>
                <div className="my-10 border-t border-gray-50"></div>
                {/* ------------------------------------------- */}
                <div className="my-10 text-sm text-[#6c757d] text-[13px] ">
                  <div className="row flex justify-between bg-white">
                    <div className="col-md-6">
                      <div className="text-left">
                        <strong>Billing Information:</strong>
                        <br /> Sed et error eligend Minim aut molestiae
                        <br /> Et labore exercitati
                        <br /> Deserunt beatae ulla
                        <br /> Aliquip accusantium, Gandhinagar, Gujarat, India
                        <br />
                      </div>
                    </div>
                    <div className="col-md-6 right">
                      <div className="text-right">
                        <strong>Shipping Information :</strong>
                        <br />
                        fd wqe
                        <br />
                        dfshg@gmail.com
                        <br />
                        000000000000
                        <br />
                        England, United Kindom
                        <br />
                      </div>
                    </div>
                  </div>
                  {/* ---------------------------- */}
                  <div className="row flex justify-between bg-white mt-4">
                    <div className="col-md-6">
                      <div className="text-left">
                        <strong>Payment Information:</strong>
                        <br />
                        Method: Razorpay
                        <br />
                        Status :
                        <span className="bg-[#47c363] rounded-full px-2 py-1 text-white text-xs">
                          Success
                        </span>
                        <br />
                        Transaction:
                        <br />
                        pay_L5CX9iZAjdEqbw
                        <br />
                      </div>
                    </div>
                    <div className="col-md-6 right  mt-3">
                      <div className="text-right">
                        <strong>Order Information:</strong>
                        <br />
                        Date: 17 January, 2023
                        <br />
                        Shipping: free shipping
                        <br />
                        Status :
                        <span className="bg-[#fc544b] rounded-full px-2 py-1 text-white text-xs">
                          Pending
                        </span>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ------------- Table  ------------------------ */}
            <div className="flex mb-[40px]">
              <div className="w-[30px] h-[8px] rounded-md bg-[#6777ef] mt-[6px] mr-[15px]   "></div>
              <h2 className="font-semibold">Order Summary</h2>
            </div>
            <div className="overflow-x-auto">
              <OrderInvoiceTable />
            </div>

            {/* ---------------  Order Status ----------------- */}
            <div className="flex flex-col-reverse lg:flex-row justify-between">
              <div className="mt-[70px] text-[#33383b] lg:w-1/2 ">
                <div className="flex ">
                  <div className="w-[30px] h-[8px] rounded-md bg-[#6777ef] mt-[6px] mr-[15px]   "></div>
                  <h2 className="font-semibold">Order Status</h2>
                </div>
                <div className="mt-[40px]">
                  <p className="my-2">Payment</p>
                  <select
                    name=""
                    id=""
                    className="border w-full h-[42px] bg-[#fdfdff] py-15 px-4 text-sm rounded focus:border-blue-500 ">
                    <option value="">Success</option>
                    <option value="">Pending</option>
                  </select>
                </div>
                <div className="my-[15px]">
                  <p className="my-2">Order</p>
                  <select
                    name=""
                    id=""
                    className="border w-full h-[42px] py-15 px-4 text-sm">
                    <option value="">Pending</option>
                    <option value="">In success</option>
                    <option value="">Delivered</option>
                    <option value="">Completed</option>
                    <option value="">Declined</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="bg-blue-700 shadow-[0_4px_6px_#acb5f6] px-[14px] py-[8px] text-white text-sm rounded mt-1">
                  Update Status
                </button>
              </div>
              {/* -------------- Only hr  ------------------- */}
              <div className="text-right mt-[40px] opacity-60 text-sm lg:w-1/2 ">
                <div>
                  <p className="leading-7">Subtotal : $89.99</p>
                  <p className="leading-7">Discount(-) : $0</p>
                  <p className="leading-7"> Shipping : $0</p>
                </div>
                <div className="my-10 border-t w-full border-gray-50"></div>
                <h1 className="font-bold text-2xl opacity-100">
                  Total : $89.99
                </h1>
              </div>
            </div>
          </div>
          <div className="my-10 border-t border-gray-50"></div>
          <div className="text-md-right print-area  flex justify-end">
            <button className="bg-green-500 shadow-[0_4px_4px_#acb5f6] px-[14px] py-[8px] text-white text-sm rounded mt-1 flex  items-center  gap-1 ">
              <HiPrinter className="w-4 h-4" />
              Print
            </button>
            <button className="bg-[#fb160a] ml-[3px] shadow-[0_4px_4px_#acb5f6] px-[14px] py-[8px] text-white text-sm rounded mt-1 flex  items-center  gap-1 ">
              <ImCross className="w-[10px] h-[10px]" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
