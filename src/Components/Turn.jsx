import { FaRegCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import "../styles/turn.css";

function Turn() {
  

    return (
      <>
        <p className="turn">
            <ImCross id="cross"/>
            <FaRegCircle id="circle"/>
            Turn
        </p>
      </>
    )
  }
  
  export default Turn