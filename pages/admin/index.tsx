import { useSelector } from "react-redux";
import { controller } from "../../src/state/StateController";
import AdminDetailsSummary from "../../components/pages/AdminPage/Dashboard/AdminDetailsSummary/AdminDetailsSummary";
import withAdminPrivate from "../../components/hocs/withAdminPrivate";

const index = () => {
  const states = useSelector(() => controller.states);

  return (
      <AdminDetailsSummary />
  );
};

export default withAdminPrivate(index);
