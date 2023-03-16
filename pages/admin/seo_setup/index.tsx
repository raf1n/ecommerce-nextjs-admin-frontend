import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import SEO from "../../../components/pages/AdminPage/Dashboard/ManageWebsite/SEO/SEO";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <SEO />;
};

export default index;
