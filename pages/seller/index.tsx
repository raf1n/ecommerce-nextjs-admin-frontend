import React from "react";
import { useSelector } from "react-redux";
import withSellerPrivate from "../../components/hocs/withSellerPrivate";
import SellerDetailsSummary from "../../components/pages/SellerPage/SellerDetailsSummary/SellerDetailsSummary";
import { controller } from "../../src/state/StateController";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <SellerDetailsSummary />;
};

export default withSellerPrivate(index);
