import { useSelector } from "react-redux";
import { controller } from "../src/state/StateController";
import AdminPage from "../components/pages/AdminPage/AdminPage";

const index = () => {
  const states = useSelector(() => controller.states);

  return (
    <>
      <AdminPage></AdminPage>
    </>
  );
};

export default index;
