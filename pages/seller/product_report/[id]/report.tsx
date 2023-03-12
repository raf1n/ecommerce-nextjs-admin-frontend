import React from "react";
import { useSelector } from "react-redux";
import ShowReports from "../../../../components/pages/SellerPage/ManageProducts/ProductReport/ShowReports";
import { controller } from "../../../../src/state/StateController";

interface Props {}

const report: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <ShowReports />;
};

export default report;
