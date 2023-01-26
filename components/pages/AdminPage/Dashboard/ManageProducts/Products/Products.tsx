import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { controller } from "./../../../../../../src/state/StateController";
import { Jsondata } from "../../../../../../src/utils/Jsondata";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedAddNewButton from "./../../../../../shared/SharedAddNewButton/SharedAddNewButton";
import DynamicTable from "./../../../../../shared/SharedTable/DynamicTable";

interface Props {}

const tableHeaders = [
  "SN",
  "Name",
  "Price",
  "Photo",
  "Type",
  "Status",
  "Action",
];

const actions = {
  isEditable: true,
  isDeletable: true,
};

const Products: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [productsData, setProductsData] = useState([]);
  const { adminProductsData } = Jsondata;
  useEffect(() => {
    fetch("http://localhost:8000/products/")
      .then((res) => res.json())
      .then((data) => setProductsData(data));
  }, []);
  return (
    <div className="w-full">
      <DashboardBreadcrumb
        headline="Products"
        slug="Products"
        link="/products"
      ></DashboardBreadcrumb>
      <div className="mx-[25px]">
        <div className="section-body">
          <Link className="inline-block" href="/products/create">
            <SharedAddNewButton></SharedAddNewButton>
          </Link>
          <div className="mt-7">
            <DynamicTable
              tableHeaders={tableHeaders}
              actions={actions}
              testDynamicTableData={productsData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
