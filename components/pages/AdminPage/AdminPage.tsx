import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";

import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Dashboard from "./Dashboard/Dashboard";
interface Props {}

const AdminPage: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [open, setOpen] = useState(true);
  const [responsiveOpen, setResponsiveOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-y-hidden bg-[#f4f6f9]">
      <Sidebar open={open} responsiveOpen={responsiveOpen} />
      <Dashboard
        open={open}
        setOpen={setOpen}
        responsiveOpen={responsiveOpen}
        setResponsiveOpen={setResponsiveOpen}
      />
    </div>
  );
};

export default AdminPage;
