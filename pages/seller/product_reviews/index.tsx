import React from "react";
import { useSelector } from "react-redux";

import { controller } from "../../../src/state/StateController";
import withSellerPrivate from "../../../components/hocs/withSellerPrivate";
import ProductReview from "../../../components/pages/SellerPage/ManageProducts/ProductReviews/ProductReview";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <ProductReview />;
};

export default withSellerPrivate(index);
