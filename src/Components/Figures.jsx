import { FaRegCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import "../styles/figures.css";


function Figures()
{
    return(
        <>
            <div className="figures">
                <ImCross className="cross" />
                <FaRegCircle className="circle" />
            </div>
        </>
    );
}


export default Figures;