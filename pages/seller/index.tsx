import React from "react";
import { useSelector } from "react-redux";
import SellerDetailsSummary from "../../components/pages/SellerPage/SellerDetailsSummary/SellerDetailsSummary";
import { controller } from "../../src/state/StateController";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <SellerDetailsSummary />;
};

export default index;
