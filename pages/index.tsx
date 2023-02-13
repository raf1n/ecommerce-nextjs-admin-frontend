import { useSelector } from "react-redux";
import { controller } from "../src/state/StateController";
import AdminDetailsSummary from "../components/pages/AdminPage/Dashboard/AdminDetailsSummary/AdminDetailsSummary";

const index = () => {
  const states = useSelector(() => controller.states);

  return (
    <>
      <AdminDetailsSummary></AdminDetailsSummary>
    </>
  );
};

export default index;
