import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import { Jsondata } from "../../../../../../src/utils/Jsondata";
import SharedAddNewButton from "../../../../../shared/SharedAddNewButton/SharedAddNewButton";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import DynamicTable from "../../../../../shared/SharedTable/DynamicTable";

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

  return (
    <div className="w-full">
      <DashboardBreadcrumb
        headline="Product Reviews"
        slug="Product Reviews"
        link="/product_reviews"
      ></DashboardBreadcrumb>
      <div className="mx-[25px]">
        <div className="section-body">
          {/* <Link className="inline-block" href="/products/create">
            <SharedAddNewButton></SharedAddNewButton>
          </Link> */}
          <div className="mt-7">
            <DynamicTable
              tableHeaders={tableHeaders}
              actions={actions}
              testDynamicTableData={productReviews}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
