import React from "react";
import { useSelector } from "react-redux";
import { Jsondata } from "../../../../../../src/utils/Jsondata";
import { controller } from "./../../../../../../src/state/StateController";
import DashboardBreadcrumb from "./../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import DynamicTable from "./../../../../../shared/SharedTable/DynamicTable";

interface Props {}

const ProductsStockOut: React.FC<Props> = (props) => {
  const tableHeaders = [
    "SN",
    "Name",
    "Price",
    "Photo",
    "Action",
  ];

  const actions = {
    isEditable: true,
    isDeletable: true,
  };

  const states = useSelector(() => controller.states);

  const { stockOutProductsData } = Jsondata;

  return (
    <div className="w-full">
      <DashboardBreadcrumb
        headline="Stock Out Products"
        slug="Stock Out"
        link="/stock_out"
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
              testDynamicTableData={stockOutProductsData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsStockOut;
