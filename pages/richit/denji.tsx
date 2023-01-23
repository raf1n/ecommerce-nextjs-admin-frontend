import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../src/state/StateController";
import AdminProfile from "../../components/pages/AdminPage/AdminProfile/AdminProfile";

interface Props {}

const denji: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <>
      <AdminProfile></AdminProfile>
    </>
  );
};

export default denji;
