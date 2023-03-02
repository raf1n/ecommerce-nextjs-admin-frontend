import React from "react";
import { useSelector } from "react-redux";
import withAdminPrivate from "../../../components/hocs/withAdminPrivate";
import SharedInvoice from "../../../components/pages/AdminPage/Dashboard/Orders/SharedInvoice/SharedInvoice";
import { controller } from "../../../src/state/StateController";

interface Props {}

const id: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <SharedInvoice />;
};

export default withAdminPrivate(id);
