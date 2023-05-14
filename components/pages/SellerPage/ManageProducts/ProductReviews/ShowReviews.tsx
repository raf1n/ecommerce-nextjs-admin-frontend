import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Styles from "./showReviews.module.css";
import { controller } from "../../../../../src/state/StateController";
import { Jsondata } from "../../../../../src/utils/Jsondata";
import DashboardBreadcrumb from "../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedGoBackButton from "../../../../shared/SharedGoBackButton/SharedGoBackButton";
import ToggleButton from "../../../AdminPage/Dashboard/ManageCategories/ToggleButton/ToggleButton";
import { useRouter } from "next/router";
import { IReview } from "../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../src/API/EcommerceApi";
interface Props {}

const ShowReviews: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [reviewData, setReviewData] = useState<IReview | null>(null);
  const { asPath } = useRouter();
  console.log(asPath);
  const slug = asPath.split("/")[3];

  console.log(slug);

  useEffect(() => {
    const getSingleCategory = async () => {
      if (slug !== "[id]") {
        const { res, err } = await EcommerceApi.getSingleReview(slug);
        if (res) {
          console.log(res);
          setReviewData(res);
        } else {
          console.log(err);
        }
      }
    };
    getSingleCategory();
  }, [slug]);

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
            link="/seller/product_reviews"
          ></SharedGoBackButton>
        </div>
      </div>
      <div className="mx-[40px] mt-10 text-qgray bg-white">
        <div className="p-10">
          <table className="w-full">
            <tbody>
              <tr className="bg-gray-200">
                <td className="px-[25px] h-16">User Name</td>
                <td className="px-[25px] pl-96 h-16">
                  {reviewData?.user?.fullName}
                </td>
              </tr>
              <tr>
                <td className="px-[25px] h-16">User Email</td>
                <td className="px-[25px] pl-96 h-16">
                  {reviewData?.user?.email}
                </td>
              </tr>
              <tr className="bg-gray-200">
                <td className="px-[25px] h-16">Product</td>
                <td className="px-[25px] pl-96 h-16">
                  {reviewData?.reviewProducts.productName}
                </td>
              </tr>
              <tr>
                <td className="px-[25px] h-16">Rating</td>
                <td className="px-[25px] pl-96 h-16">{reviewData?.rating}</td>
              </tr>
              <tr className="bg-gray-200">
                <td className="px-[25px] h-16">Review</td>
                <td className="px-[25px] pl-96 h-16">{reviewData?.message}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowReviews;
