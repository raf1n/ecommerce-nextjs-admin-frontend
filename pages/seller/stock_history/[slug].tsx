import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import StockHistory from "../../../components/pages/SellerPage/Dashboard/Inventory/StockHistory";

interface Props {}

const StockHistoryPage: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <StockHistory />;
};

export default StockHistoryPage;
