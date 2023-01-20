import React from "react";
import { useSelector } from "react-redux";
import ProductReview from "../../components/pages/AdminPage/Dashboard/ManageProducts/ProductReviews/ProductReview";
import { controller } from "../../src/state/StateController";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <ProductReview />;
};

export default index;
