import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import { HiOutlineX } from "react-icons/hi";
import { EcommerceApi } from "../../../src/API/EcommerceApi";
import { IOrder } from "../../../interfaces/models";

interface Props {
  ordersData: IOrder[];
  showUpdateModal: string;
  setShowUpdateModal: any;
}

const SharedOrderStatusUpdateModal: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const { showUpdateModal, setShowUpdateModal } = props;
  const [singleOrderData, setSingleOrderData] = useState<IOrder | undefined>();

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    controller.setApiLoading(true);

    const orderStatus = {
      payment_status: e.target.payment.value,
      order_status: e.target.order.value,
    };
    console.log(orderStatus);
    const { res, err } = await EcommerceApi.orderStatusUpdate(
      showUpdateModal,
      orderStatus
    );
    if (res) {
      setShowUpdateModal("");
    } else {
      console.log(err);
    }

    e.target.reset();
    controller.setApiLoading(false);
  };

  useEffect(() => {
    const orderData = props?.ordersData?.find(
      (data) => data.slug === showUpdateModal
    );
    setSingleOrderData(orderData);
  }, [showUpdateModal]);
  
  return (
    <>
      {showUpdateModal ? (
        <div className="relative">
          <div className="flex justify-center fixed inset-0 z-50 bg-black bg-opacity-10 backdrop-blur-[1px]">
            <div className="bg-white px-6 py-6 rounded-md mt-10 shadow h-fit min-w-fit md:w-1/3">
              <div className="flex justify-between items-center">
                <h1 className="text-xl  font-bold text-slate-500">
                  Order Status
                </h1>
                <button onClick={() => setShowUpdateModal("")}>
                  <HiOutlineX className="w-6 h-6 text-gray-500"></HiOutlineX>
                </button>
              </div>
              <div className="px-2">
                <form onSubmit={handleUpdate}>
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
                        selected={singleOrderData?.payment_status === "success"}
                        value="success"
                      >
                        Success
                      </option>
                      <option
                        selected={singleOrderData?.payment_status === "pending"}
                        value="pending"
                      >
                        Pending
                      </option>
                    </select>
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
                        selected={singleOrderData?.order_status === "pending"}
                        value="pending"
                      >
                        Pending
                      </option>
                      <option
                        selected={
                          singleOrderData?.order_status === "in_progress"
                        }
                        value="in_progress"
                      >
                        In Progress
                      </option>
                      <option
                        selected={singleOrderData?.order_status === "delivered"}
                        value="delivered"
                      >
                        Delivered
                      </option>
                      <option
                        selected={singleOrderData?.order_status === "completed"}
                        value="completed"
                      >
                        Completed
                      </option>
                      <option
                        selected={singleOrderData?.order_status === "declined"}
                        value="declined"
                      >
                        Declined
                      </option>
                    </select>
                  </div>
                  <div className="flex gap-4 justify-end pt-4">
                    <button
                      type="submit"
                      onClick={() => setShowUpdateModal("")}
                      className="bg-red-600 hover:bg-red-600 text-white text-sm py-2 px-4 rounded"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-700 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded"
                    >
                      Update Status
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SharedOrderStatusUpdateModal;
