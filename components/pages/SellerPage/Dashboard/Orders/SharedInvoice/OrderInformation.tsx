import React from "react";
import { HiPrinter } from "react-icons/hi";

import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import OrderInvoiceTable from "./OrderInvoiceTable";
import { ISellerOrder } from "../../../../../../interfaces/models";

interface Props {
  order: ISellerOrder;
}

const OrderInformation: React.FC<Props> = ({ order }) => {
  const states = useSelector(() => controller.states);
  let m;

  if (order?.createdAt) {
    let date = new Date(order?.createdAt);
    m = date.toDateString();
  }
  return (
    <div>
      <div className="section-body bg-white rounded-[3px] m-6 p-8 print:m-0 print:p-0">
        <div className="invoice ">
          <div className="invoice-print">
            <div className="row ">
              <div className="">
                <div className="invoice-title flex justify-between print:justify-between">
                  <img
                    className="mr-2 w-[120px] h-[31px]"
                    src="https://api.websolutionus.com/shopo/uploads/website-images/logo-2022-11-22-11-19-02-4634.png"
                    alt="logo"
                  />

                  <h1 className="font-bold text-xl opacity-60">
                    Order {order?.slug}
                  </h1>

                  {/* -------------- Only hr  ------------------- */}
                </div>
                <div className="my-10 border-t border-gray-50"></div>

                <div className="my-10  text-sm text-[#6c757d] text-[13px]">
                  <div className="grid grid-cols-2 bg-white mt-4">
                    <div>
                      <strong>Billing Information :</strong>
                      <br /> {order?.address?.address}
                      <br /> {order?.address?.state}
                      <br /> {order?.address?.city}
                      <br /> {order?.address?.country}
                      <br />
                    </div>

                    <div className="lg:text-right ">
                      <div>
                        <strong>Shipping Information :</strong>
                        <br /> {order?.address?.address}
                        <br /> {order?.address?.state}
                        <br /> {order?.address?.city}
                        <br /> {order?.address?.country}
                        <br />
                      </div>
                    </div>
                  </div>

                  <div className=" grid grid-cols-2 bg-white mt-4">
                    <div className="text-left">
                      <strong>Payment Information:</strong>
                      <br />
                      <span className="uppercase">
                        Method: {order?.payment_method}
                      </span>
                      <br />
                      Status:{" "}
                      <span className="bg-[#47c363] rounded-full px-2 py-1 text-white text-xs uppercase">
                        {order?.payment_status}
                      </span>
                      <br />
                      Transaction:
                      <br />
                      {order?.transaction_id}
                      <br />
                    </div>

                    <div className="lg:text-right mt-3">
                      <strong>Order Information:</strong>
                      <br />
                      {m}
                      <br />
                      Shipping: {order?.shippingCost}
                      <br />
                      Status:{" "}
                      <span className="bg-[#fc544b] rounded-full px-2 py-1 text-white text-xs uppercase">
                        {order?.order_status}
                      </span>
                      <br />
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
              <OrderInvoiceTable orderData={order} />
            </div>

            {/* ---------------  Order Status ----------------- */}
            <div className="grid grid-cols-1 place-content-end print:grid print:grid-cols-1">
              <div className="text-end mt-[40px]  text-sm lg:w-full px-4 print:mr-14">
                <div className="opacity-60">
                  <p className="leading-7">Subtotal : ${order?.total}</p>
                  <p className="leading-7">
                    Discount(-) : ${order?.discount ? order?.discount : 0}
                  </p>
                  <p className="leading-7">
                    {" "}
                    Shipping : ${order?.shippingCost ? order?.shippingCost : 0}
                  </p>
                </div>
                <div className="my-2 border-t w-full border-gray-50"></div>
                <h1 className="font-bold text-2xl text-gray-800">
                  Total : $
                  {order?.total + order?.shippingCost - order?.discount}
                </h1>
              </div>
            </div>
          </div>
          <div className="my-10 border-t border-gray-50"></div>
          <div className="text-md-right print-area  flex justify-end print:hidden">
            <button
              onClick={() => print()}
              className="bg-green-500 shadow-[0_4px_4px_#acb5f6] px-[14px] py-[8px] text-white text-sm rounded mt-1 flex  items-center  gap-1 "
            >
              <HiPrinter className="w-4 h-4" />
              Print
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
