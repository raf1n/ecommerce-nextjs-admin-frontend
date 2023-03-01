import React from "react";
import { useSelector } from "react-redux";
import ShowReviews from "../../../../components/pages/AdminPage/Dashboard/ManageProducts/ProductReviews/ShowReviews";
import { controller } from "../../../../src/state/StateController";

interface Props {}

const review: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <ShowReviews />;
};

export default review;
