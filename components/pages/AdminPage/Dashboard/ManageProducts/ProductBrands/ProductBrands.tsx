import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import DashboardBreadcrumb from "./../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedAddNewButton from "./../../../../../shared/SharedAddNewButton/SharedAddNewButton";
import DynamicTable from "../../../../../shared/SharedTable/DynamicTable";
import { Jsondata } from "../../../../../../src/utils/Jsondata";
import Link from "next/link";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import { IBrandDetail } from "../../../../../../interfaces/models";

interface Props {}

const tableHeaders = ["SN", "Name", "Slug", "Logo", "Status", "Action"];

const actions = {
  isEditable: true,
  isDeletable: true,
};

const ProductBrands: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [productBrandsData, setProductBrandsData] = useState<IBrandDetail[]>([])

  useEffect( () => {
    const fetchBrands = async () => {
      const { res, err } = await EcommerceApi.getAllBrandsAdmin();

      setProductBrandsData(res)
    }

    fetchBrands();

  }, [])
  

  // const { productBrandsData } = Jsondata;

  return (
    <div className="w-full">
      <DashboardBreadcrumb
        headline="Product Brands"
        slug="Product Brands"
        link="/product_brands"
      ></DashboardBreadcrumb>
      <div className="mx-[25px]">
        <div className="section-body">
          <Link className="inline-block" href="/product_brands/create">
            <SharedAddNewButton></SharedAddNewButton>
          </Link>
          <div className="mt-7">
            <DynamicTable
              tableHeaders={tableHeaders}
              actions={actions}
              testDynamicTableData={productBrandsData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBrands;
