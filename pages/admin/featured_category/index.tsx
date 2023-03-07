import React from "react";
import { useSelector } from "react-redux";
import withAdminPrivate from "../../../components/hocs/withAdminPrivate";
import FeaturedCaategoryAdmin from "../../../components/pages/AdminPage/Dashboard/ManageCategories/FeaturedCategoryAdmin/FeaturedCategoryAdmin";
import { controller } from "../../../src/state/StateController";

interface Props {}

const index: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <FeaturedCaategoryAdmin />;
};

export default withAdminPrivate(index);
