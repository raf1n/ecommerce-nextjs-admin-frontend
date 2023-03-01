import React from "react";
import { useSelector } from "react-redux";

import { controller } from "../../../../src/state/StateController";
import ProductEdit from "../../../../components/pages/SellerPage/ManageProducts/ProductEdit/ProductEdit";

interface Props {}

const edit: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <ProductEdit />;
};

export default edit;
