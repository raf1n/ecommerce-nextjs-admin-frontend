import React from "react";
import { useSelector } from "react-redux";

import { controller } from "../../../../src/state/StateController";
import withSellerPrivate from "../../../../components/hocs/withSellerPrivate";
import ShowReviews from "../../../../components/pages/SellerPage/ManageProducts/ProductReviews/ShowReviews";

interface Props {}

const review: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <ShowReviews />;
};

export default withSellerPrivate(review);
