import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import { Jsondata } from "../../../../../../src/utils/Jsondata";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedGoBackButton from "../../../../../shared/SharedGoBackButton/SharedGoBackButton";
import ToggleButton from "../../ManageCategories/ToggleButton/ToggleButton";
import Styles from "./showReviews.module.css";
interface Props {}

const ShowReviews: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const { productReviews } = Jsondata;

  return (
    <div className="w-full ">
      <DashboardBreadcrumb
        headline="Product Review"
        link="/product_reviews/review"
        slug="Product Review"
      ></DashboardBreadcrumb>
      <div className="m-6">
        <div className="section-body">
          <SharedGoBackButton
            title="Product Review"
            link="/product_reviews"
          ></SharedGoBackButton>
        </div>
      </div>
      <div className="mx-[40px] mt-10 text-qgray bg-white">
        <div className="p-10">
          <table className="w-full">
            <tbody>
              {productReviews.map((productReview, index) => (
                <>
                  <tr className="bg-gray-200">
                    <td className="px-[25px] h-16">User Name</td>
                    <td className="px-[25px] pl-96 h-16">
                      {productReview.name}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-[25px] h-16">User Email</td>
                    <td className="px-[25px] pl-96 h-16">
                      {productReview.name}
                    </td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-[25px] h-16">Product</td>
                    <td className="px-[25px] pl-96 h-16">
                      {productReview.product}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-[25px] h-16">Rating</td>
                    <td className="px-[25px] pl-96 h-16">5</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-[25px] h-16">Review</td>
                    <td className="px-[25px] pl-96 h-16">...</td>
                  </tr>
                  <tr>
                    <td className="px-[25px] h-16">Status</td>
                    <td className="px-[25px] pl-96 h-16">
                      <ToggleButton slug="" status={productReview.status} />
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowReviews;
