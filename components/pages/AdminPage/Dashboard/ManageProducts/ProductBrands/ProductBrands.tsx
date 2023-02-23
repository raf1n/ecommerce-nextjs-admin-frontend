import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import DashboardBreadcrumb from "./../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedAddNewButton from "./../../../../../shared/SharedAddNewButton/SharedAddNewButton";
import DynamicTable from "../../../../../shared/SharedTable/DynamicTable";
import Link from "next/link";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import { IBrandDetail } from "../../../../../../interfaces/models";
import SharedDeleteModal from "../../../../../shared/SharedDeleteModal/SharedDeleteModal";

interface Props {}

const tableHeaders = ["sn", "name", "slug", "logo", "status", "action"];

const actions = {
  isEditable: true,
  isDeletable: true,
};

const ProductBrands: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [deleteModalSlug, setDeleteModalSlug] = useState("");
  const [productBrandsData, setProductBrandsData] = useState<IBrandDetail[]>(
    []
  );
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortType, setSortType] = useState("desc");
  const [searchString, setSearchString] = useState("");

  // console.log({sortBy, sortType});

  useEffect(() => {
    const fetchBrands = async () => {
      const { res, err } = await EcommerceApi.getAllBrandsAdmin(
        `sortBy=${sortBy}&sortType=${sortType}&search=${searchString}`
      );

      setProductBrandsData(res);
    };

    fetchBrands();
  }, [searchString, sortBy, sortType]);

  const handleDelete = async () => {
    const { res, err } = await EcommerceApi.deleteByModal(
      deleteModalSlug,
      "brands"
    );

    if (res) {
      setDeleteModalSlug("");
      const remainingBrands = productBrandsData.filter(
        (product) => product.slug !== deleteModalSlug
      );
      setProductBrandsData(remainingBrands);
    }
  };

  return (
    <div className="w-full">
      <DashboardBreadcrumb
        headline="Product Brands"
        slug="Product Brands"
        link="/product_brands"
      />
      <div className="mx-[25px]">
        <div className="section-body">
          <Link className="inline-block" href="/product_brands/create">
            <SharedAddNewButton />
          </Link>
          <div className="mt-7">
            <DynamicTable
              apiUrl="brands"
              tableHeaders={tableHeaders}
              actions={actions}
              testDynamicTableData={productBrandsData}
              setDeleteModalSlug={setDeleteModalSlug}
              sortBy={sortBy}
              sortType={sortType}
              setSortBy={setSortBy}
              setSortType={setSortType}
              setSearchString={setSearchString}
              // handleSetSortBy={handleSetSortBy}
            />

            <SharedDeleteModal
              handleDelete={handleDelete}
              deleteModalSlug={deleteModalSlug}
              setDeleteModalSlug={setDeleteModalSlug}></SharedDeleteModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBrands;
