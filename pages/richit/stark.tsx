import { useSelector } from "react-redux";
import { controller } from "../../src/state/StateController";



const index = () => {
    const states = useSelector(() => controller.states);

    return (
        <>
        </>
    )
}

export default index;
