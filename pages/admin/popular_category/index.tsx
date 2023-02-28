import React from "react";
import { useSelector } from "react-redux";
import PopularCategoryAdmin from "../../../components/pages/AdminPage/Dashboard/ManageCategories/PopularCategoryAdmin/PopularCategoryAdmin";
import { controller } from "../../../src/state/StateController";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <PopularCategoryAdmin />;
};

export default index;
