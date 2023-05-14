import React from "react";
import { useSelector } from "react-redux";
import withAdminPrivate from "../../../components/hocs/withAdminPrivate";
import ProductReview from "../../../components/pages/AdminPage/Dashboard/ManageProducts/ProductReviews/ProductReview";
import { controller } from "../../../src/state/StateController";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <ProductReview />;
};

export default withAdminPrivate(index);
