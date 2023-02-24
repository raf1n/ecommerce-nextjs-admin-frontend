import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IReview } from "../../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import { controller } from "../../../../../../src/state/StateController";
import { Jsondata } from "../../../../../../src/utils/Jsondata";
import SharedAddNewButton from "../../../../../shared/SharedAddNewButton/SharedAddNewButton";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import DynamicTable from "../../../../../shared/SharedTable/DynamicTable";
import ReviewTable from "./ReviewTable";

interface Props {}
const tableHeaders = ["SN", "Name", "Product", "Rating", "Status", "Action"];
const actions = {
  // isEditable: true,
  isDeletable: true,
  isViewable: true,
  isSeller: true,
};

const ProductReview: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const { productReviews } = Jsondata;

  const [deleteModalSlug, setDeleteModalSlug] = useState("");

  const [sortBy, setSortBy] = useState("createdAt");
  const [sortType, setSortType] = useState("desc");
  const [searchString, setSearchString] = useState("");

  const [reviewDatas, setReviewDatas] = useState<IReview[]>([]);

  const getAllReviews = async () => {
    const { res, err } = await EcommerceApi.getAllReviews(
      `sortBy=${sortBy}&sortType=${sortType}&search=${searchString}`
    );
    if (res) {
      setReviewDatas(res);
    } else {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllReviews();
  }, [searchString, sortBy, sortType]);

  return (
    <div className="w-full">
      <DashboardBreadcrumb
        headline="Product Reviews"
        slug="Product Reviews"
        link="/product_reviews"></DashboardBreadcrumb>
      <div className="mx-[25px]">
        <div className="section-body">
          <div className="mt-7">
            <ReviewTable
              reviewDatas={reviewDatas}
              sortBy={sortBy}
              setSortBy={setSortBy}
              sortType={sortType}
              setSortType={setSortType}
              // searchString={searchString}
              setSearchString={setSearchString}
            />
            {/* <DynamicTable
              apiUrl=""
              setSearchString={setSearchString}
              setSortBy={setSortBy}
              sortType={sortType}
              setDeleteModalSlug={setDeleteModalSlug}
              setSortType={setSortType}
              sortBy={sortBy}
              tableHeaders={tableHeaders}
              actions={actions}
              testDynamicTableData={reviewDatas}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
