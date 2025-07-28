import { RiResetLeftLine } from "react-icons/ri";
import "../styles/reset.css";

function Reset()
{
    const resetGame = () =>
    {
        location.reload();
    }
    return(
        <>
            <RiResetLeftLine id="reset" onClick={resetGame}/>
        </>
    );
}


export default Reset;