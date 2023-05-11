import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import { Jsondata } from "../../../../../../src/utils/Jsondata";
import { ICartProduct, IOrder } from "../../../../../../interfaces/models";
// import { Jsondata } from "../../../src/utils/Jsondata";

interface Props {
  orderData: IOrder;
}

const OrderInvoiceTable: React.FC<Props> = ({ orderData }) => {
  const states = useSelector(() => controller.states);
  console.log(orderData.product_list);

  return (
    <table className="leading-normal opacity-90 w-full">
      <thead>
        <tr className="h-16">
          <th
            className={`px-3 py-3  bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase `}
          >
            <span>#</span>
          </th>
          <th
            className={` px-3 py-3  bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase `}
          >
            <span>Product</span>
          </th>
          {/* <th
            className={`px-3 py-3  bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase `}
          >
            <span>Variant</span>
          </th> */}
          {/* <th
            className={` px-3 py-3  bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase  `}
          >
            <span>Shop Name</span>
          </th> */}
          <th
            className={` px-3 py-3  bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase  `}
          >
            <span>Unit Price</span>
          </th>
          <th
            className={` px-3 py-3  bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase  `}
          >
            <span className="flex ">Quantity</span>
          </th>
          <th
            className={` px-3 py-3  bg-gray-50  text-xs font-semibold text-gray-600 uppercase  `}
          >
            <span className="   flex">Total</span>
          </th>
        </tr>
      </thead>
      {/* -----------Plz Attention ,Table body/Row start here -------------- */}
      <tbody>
        {orderData.product_list.map(
          (orderSummaryData: ICartProduct, index: number) => (
            <tr
              key={index}
              className="even:bg-gray-50 odd:bg-white hover:bg-gray-200"
            >
              <td className="px-3 py-3 text-sm">
                <p className="text-gray-900 ">{index + 1}</p>
              </td>

              <Link
                target="_blank"
                href={`${process.env["NEXT_PUBLIC_FRONTEND_URL"]}/single_product?slug=${orderSummaryData?.slug}`}
              >
                <td className="px-3 py-3  text-sm">
                  <p className=" text-blue-700 ">
                    {orderSummaryData.productName}
                  </p>
                </td>
              </Link>

              {/* <td className="px-0 py-3  text-sm">
                <p className="text-gray-900 ">{orderSummaryData.shop_name}</p>
              </td> */}
              <td className="px-3 py-3  text-sm">
                <p className="text-gray-900">
                  $
                  {orderSummaryData.offerPrice
                    ? orderSummaryData.offerPrice
                    : orderSummaryData.price}
                </p>
              </td>
              <td className="px-3 py-3  text-sm">
                <p className="text-gray-900 ">{orderSummaryData.quantity}</p>
              </td>
              <td className="px-3 py-3  text-sm">
                $
                {orderSummaryData.offerPrice ||
                  (orderSummaryData.price && (
                    <p className="text-gray-900 text-center">
                      {orderSummaryData.offerPrice
                        ? orderSummaryData?.quantity *
                          orderSummaryData?.offerPrice
                        : orderSummaryData?.quantity * orderSummaryData?.price}
                    </p>
                  ))}
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default OrderInvoiceTable;
