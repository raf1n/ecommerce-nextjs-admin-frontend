import React, { useState } from "react";
import { HiPrinter } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import { Jsondata } from "../../../../../../src/utils/Jsondata";
import DynamicTable from "../../../../../shared/SharedTable/DynamicTable";
import OrderInvoiceTable from "./OrderInvoiceTable";
import { IOrder } from "../../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import { useRouter } from "next/router";
import SharedDeleteModal from "../../../../../shared/SharedDeleteModal/SharedDeleteModal";

interface Props {
  order: IOrder;
}

const OrderInformation: React.FC<Props> = ({ order }) => {
  const router = useRouter();
  const [deleteModalSlug, setDeleteModalSlug] = useState<any | string>("");

  const states = useSelector(() => controller.states);
  let m;

  if (order?.createdAt) {
    let date = new Date(order.createdAt);
    m = date.toDateString();
  }

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    controller.setApiLoading(true);

    const orderStatus = {
      payment_status: e.target.payment.value,
      order_status: e.target.order.value,
    };

    const { res, err } = await EcommerceApi.orderStatusUpdate(
      order?.slug,
      orderStatus
    );
    if (res) {
    } else {
      console.log(err);
    }

    controller.setApiLoading(false);
  };

  const handleDelete = async () => {
    controller.setApiLoading(true);
    console.log(router);

    const { res, err } = await EcommerceApi.deleteByModal(
      deleteModalSlug,
      "orders"
    );

    if (res) {
      setDeleteModalSlug("");
      router.back();
    }

    controller.setApiLoading(false);
  };
  return (
    <div>
      <div className="section-body bg-white rounded-[3px] m-6 p-8 print:m-0 print:p-0">
        <div className="invoice ">
          <div className="invoice-print">
            <div className="row ">
              <div className="">
                <div className="invoice-title flex print:justify-between">
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
                      Method: {order?.payment_method}
                      <br />
                      Status :
                      <span className="bg-[#47c363] rounded-full px-2 py-1 text-white text-xs">
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
                      Status :
                      <span className="bg-[#fc544b] rounded-full px-2 py-1 text-white text-xs">
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
            <div className="grid grid-cols-2 print:grid print:grid-cols-1">
              <div className="w-[70em] print:hidden">
                <form
                  onSubmit={handleUpdate}
                  className="mt-[70px] text-[#33383b] lg:w-1/2 "
                >
                  <div className="flex ">
                    <div className="w-[30px] h-[8px] rounded-md bg-[#6777ef] mt-[6px] mr-[15px]   "></div>
                    <h2 className="font-semibold">Order Status</h2>
                  </div>
                  <div className="mt-[40px]">
                    <div className="my-4">
                      <div className="my-2">
                        <label
                          className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                          htmlFor=""
                        >
                          Payment
                        </label>
                      </div>
                      <select
                        className="w-full border rounded p-2 border-gray-200 bg-[#fdfdff] focus:outline-none"
                        name="payment"
                        id=""
                      >
                        <option
                          selected={order?.payment_status === "success"}
                          value="success"
                        >
                          Success
                        </option>
                        <option
                          selected={order?.payment_status === "pending"}
                          value="pending"
                        >
                          Pending
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="my-4 mb-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Order
                      </label>
                    </div>
                    <select
                      className="w-full border rounded p-2 border-gray-200 bg-[#fdfdff] focus:outline-none"
                      name="order"
                      id=""
                    >
                      <option
                        selected={order?.order_status === "pending"}
                        value="pending"
                      >
                        Pending
                      </option>
                      <option
                        selected={order?.order_status === "in_progress"}
                        value="in_progress"
                      >
                        In Progress
                      </option>
                      <option
                        selected={order?.order_status === "delivered"}
                        value="delivered"
                      >
                        Delivered
                      </option>
                      <option
                        selected={order?.order_status === "completed"}
                        value="completed"
                      >
                        Completed
                      </option>
                      <option
                        selected={order?.order_status === "declined"}
                        value="declined"
                      >
                        Declined
                      </option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-700 shadow-[0_4px_6px_#acb5f6] px-[14px] py-[8px] text-white text-sm rounded mt-1"
                  >
                    Update Status
                  </button>
                </form>

                {/* -------------- Only hr  ------------------- */}
              </div>
              <div className="text-end mt-[40px]  text-sm lg:w-full px-4 print:mr-14">
                <div className="opacity-60">
                  <p className="leading-7">Subtotal : ${order?.subTotal}</p>
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
                  Total : ${order?.total}
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
            <button
              onClick={() => setDeleteModalSlug(order?.slug)}
              className="bg-[#fb160a] ml-[3px] shadow-[0_4px_4px_#acb5f6] px-[14px] py-[8px] text-white text-sm rounded mt-1 flex  items-center  gap-1 "
            >
              <ImCross className="w-[10px] h-[10px]" />
              Delete
            </button>
          </div>
          <SharedDeleteModal
            deleteModalSlug={deleteModalSlug}
            handleDelete={handleDelete}
            setDeleteModalSlug={setDeleteModalSlug}
          ></SharedDeleteModal>
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
