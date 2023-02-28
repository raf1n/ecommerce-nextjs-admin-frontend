import React from "react";
import { useSelector } from "react-redux";
import ProductBrandsEdit from "../../../../components/pages/AdminPage/Dashboard/ManageProducts/ProductBrands/ProductBrandsEdit";
import { controller } from "../../../../src/state/StateController";

interface Props {}

const edit: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <ProductBrandsEdit />;
};

export default edit;
