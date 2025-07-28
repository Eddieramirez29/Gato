import { useEffect, useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import "../styles/Grid.css";


function Grid()
{
    const [position, setPosition] = useState(["", "", "", "", "", "", "", "", ""]);//It saves squares occupied
    const [my_gameX, setMyGameX] = useState([false, false, false, false, false, false, false, false, false]);
    const [my_gameY, setMyGameY] = useState([false, false, false, false, false, false, false, false, false]);
    const user = "x"; //False for"X" and user
    const computer = "o"; //For"O" and computer
    const [turn, setTurn] = useState(false);//turn = false in the beginning

    let [win, setWinner] = useState(0);
    const verifyWhoWins = () =>
    {
        setWinner(() => win++);
        console.log("Counter: "  + win);
        //The winner might appear in the 5th movement
        if(win >= 5)
        {
// Rows
if (position[0] === "x" && position[1] === "x" && position[2] === "x")
    {
        alert("x wins");
        window.location.reload();
    }
    else if (position[0] === "o" && position[1] === "o" && position[2] === "o")
    {
        alert("o wins");
        window.location.reload();
    }
    
    else if (position[3] === "x" && position[4] === "x" && position[5] === "x")
    {
        alert("x wins");
        window.location.reload();
    }
    else if (position[3] === "o" && position[4] === "o" && position[5] === "o")
    {
        alert("o wins");
        window.location.reload();
    }
    
    else if (position[6] === "x" && position[7] === "x" && position[8] === "x")
    {
        alert("x wins");
        window.location.reload();
    }
    else if (position[6] === "o" && position[7] === "o" && position[8] === "o")
    {
        alert("o wins");
        window.location.reload();
    }
    
    // Columns
    else if (position[0] === "x" && position[3] === "x" && position[6] === "x")
    {
        alert("x wins");
        window.location.reload();
    }
    else if (position[0] === "o" && position[3] === "o" && position[6] === "o")
    {
        alert("o wins");
        window.location.reload();
    }
    
    else if (position[1] === "x" && position[4] === "x" && position[7] === "x")
    {
        alert("x wins");
        window.location.reload();
    }
    else if (position[1] === "o" && position[4] === "o" && position[7] === "o")
    {
        alert("o wins");
        window.location.reload();
    }
    
    else if (position[2] === "x" && position[5] === "x" && position[8] === "x")
    {
        alert("x wins");
        window.location.reload();
    }
    else if (position[2] === "o" && position[5] === "o" && position[8] === "o")
    {
        alert("o wins");
        window.location.reload();
    }
    
    // Diagonals
    else if (position[0] === "x" && position[4] === "x" && position[8] === "x")
    {
        alert("x wins");
        window.location.reload();
    }
    else if (position[0] === "o" && position[4] === "o" && position[8] === "o")
    {
        alert("o wins");
        window.location.reload();
    }
    
    else if (position[2] === "x" && position[4] === "x" && position[6] === "x")
    {
        alert("x wins");
        window.location.reload();
    }
    else if (position[2] === "o" && position[4] === "o" && position[6] === "o")
    {
        alert("o wins");
        window.location.reload();
    }
    
    // Draw
    else if (position.every(cell => cell !== ""))
    {
        alert("Draw!");
        window.location.reload();
    }
        }
    }


    const updatePosition = (id, gamer) =>
    {
        setPosition((prev) =>
        {
            const newPosition = [...prev];
            newPosition[id] = gamer;
            return newPosition;
        });
    };

    const generateRadomPosition = () =>
    {
        const randomPosition = Math.floor(Math.random() * 9);//[0, 9)

        return randomPosition;
    }
    useEffect(() =>
    {
        let randomPosition = generateRadomPosition();
            console.log("randomPosition f:" + randomPosition);
        if (position.includes(""))
        {
            while (position[randomPosition] != "")
            {
                randomPosition = generateRadomPosition();
                console.log("randomPosition :" + randomPosition);
            }
            if(turn === true)
            {
                performTun(randomPosition);
            }
        }
        
    }, [position])
    //Turn will be checked after a round
    const checkTurn = () =>
    {
        //Verify if someone wins
        verifyWhoWins();
        //If turn = false, it was(past) user's turn
        //set turn for computer
        if(turn === false)
        {
            setTurn(true);
        }
        else
        {
            setTurn(false);
        }
    }

    //This function will perform computer's turn
    function performTun(computerPosition)
    {
        showImageImage(computerPosition)
    }

    const showImageImage = (id) =>
    {
        const newGameX = [...my_gameX];
        const newGameY = [...my_gameY];
        switch(id)
        {
            case 0:
                if(user === "x" && turn === false)
                {
                    newGameX[id] = true;
                    newGameY[id] = false;
                    setMyGameX(newGameX);
                    setMyGameY(newGameY);
                    updatePosition(id, user);
                }
                else
                {
                    newGameX[id] = false;
                    newGameY[id] = true;
                    setMyGameX(newGameX);
                    setMyGameY(newGameY);
                    updatePosition(id, computer);
                }
                break;
            case 1:
                if(user === "x" && turn === false)
                {
                    newGameX[id] = true;
                    newGameY[id] = false;
                    setMyGameX(newGameX);
                    setMyGameY(newGameY);
                    updatePosition(id, user);
                }
                else
                {
                    newGameX[id] = false;
                    newGameY[id] = true;
                    setMyGameX(newGameX);
                    setMyGameY(newGameY);
                    updatePosition(id, computer);
                }
                break;
            case 2:
                if(user === "x" && turn === false)
                {
                    newGameX[id] = true;
                    newGameY[id] = false;
                    setMyGameX(newGameX);
                    setMyGameY(newGameY);
                    updatePosition(id, user);
                }
                else
                {
                    newGameX[id] = false;
                    newGameY[id] = true;
                    setMyGameX(newGameX);
                    setMyGameY(newGameY);
                    updatePosition(id, computer);
                }
                break;
            case 3:
                if(user === "x" && turn === false)
                {
                    newGameX[id] = true;
                    newGameY[id] = false;
                    setMyGameX(newGameX);
                    setMyGameY(newGameY);
                    updatePosition(id, user);
                }
                else
                {
                    newGameX[id] = false;
                    newGameY[id] = true;
                    setMyGameX(newGameX);
                    setMyGameY(newGameY);
                    updatePosition(id, computer);
                }
                break;
            case 4:
                if(user === "x" && turn === false)
                {
                    newGameX[id] = true;
                    newGameY[id] = false;
                    setMyGameX(newGameX);
                    setMyGameY(newGameY);
                    updatePosition(id, user);
                }
                else
                {
                    newGameX[id] = false;
                    newGameY[id] = true;
                    setMyGameX(newGameX);
                    setMyGameY(newGameY);
                    updatePosition(id, computer);
                }
                break;
            case 5:
                if(user === "x" && turn === false)
                {
                    newGameX[id] = true;
                    newGameY[id] = false;
                    setMyGameX(newGameX);
                    setMyGameY(newGameY);
                    updatePosition(id, user);
                }
                else
                {
                    newGameX[id] = false;
                    newGameY[id] = true;
                    setMyGameX(newGameX);
                    setMyGameY(newGameY);
                    updatePosition(id, computer);
                }
                break;
            case 6:
                if(user === "x" && turn === false)
                {
                    newGameX[id] = true;
                    newGameY[id] = false;
                    setMyGameX(newGameX);
                    setMyGameY(newGameY);
                    updatePosition(id, user);
                }
                else
                {
                    newGameX[id] = false;
                    newGameY[id] = true;
                    setMyGameX(newGameX);
                    setMyGameY(newGameY);
                    updatePosition(id, user);
                    updatePosition(id, computer);
                }
                break;
            case 7:
                if(user === "x" && turn === false)
                {
                    newGameX[id] = true;
                    newGameY[id] = false;
                    setMyGameX(newGameX);
                    setMyGameY(newGameY);
                    updatePosition(id, user);
                }
                else
                {
                    newGameX[id] = false;
                    newGameY[id] = true;
                    setMyGameX(newGameX);
                    setMyGameY(newGameY);
                    updatePosition(id, computer);
                }
                break;
            case 8:
                if(user === "x" && turn === false)
                {
                    newGameX[id] = true;
                    newGameY[id] = false;
                    setMyGameX(newGameX);
                    setMyGameY(newGameY);
                    updatePosition(id, user);
                }
                else
                {
                    newGameX[id] = false;
                    newGameY[id] = true;
                    setMyGameX(newGameX);
                    setMyGameY(newGameY);
                    updatePosition(id, computer);
                }
                break;
        }
        checkTurn();//To switch turn

    }



    return(
        <>
            <div className="grid-container">
            <div onClick={() => showImageImage(0)} className="item">
                    <ImCross className="cross0" style={{ display: my_gameX[0] ? 'flex' : 'none' }}/>
                    <FaRegCircle className="circle0" style={{ display: my_gameY[0] ? 'flex' : 'none' }}/>
                </div>
                <div onClick={() => showImageImage(1)} className="item">
                    <ImCross className="cross1" style={{ display: my_gameX[1] ? 'flex' : 'none' }}/>
                    <FaRegCircle className="circle1" style={{ display: my_gameY[1] ? 'flex' : 'none' }}/>
                </div>
                <div onClick={() => showImageImage(2)} className="item">
                    <ImCross className="cross2" style={{ display: my_gameX[2] ? 'flex' : 'none' }}/>
                    <FaRegCircle className="circle2" style={{ display: my_gameY[2] ? 'flex' : 'none' }}/>
                </div>
                <div onClick={() => showImageImage(3)} className="item">
                    <ImCross className="cross3" style={{ display: my_gameX[3] ? 'flex' : 'none' }}/>
                    <FaRegCircle className="circle3" style={{ display: my_gameY[3] ? 'flex' : 'none' }}/>
                </div>
                <div onClick={() => showImageImage(4)} className="item">
                    <ImCross className="cross4" style={{ display: my_gameX[4] ? 'flex' : 'none' }}/>
                    <FaRegCircle className="circle4" style={{ display: my_gameY[4] ? 'flex' : 'none' }}/>
                </div>
                <div onClick={() => showImageImage(5)} className="item">
                    <ImCross className="cross5" style={{ display: my_gameX[5] ? 'flex' : 'none' }}/>
                    <FaRegCircle className="circle5" style={{ display: my_gameY[5] ? 'flex' : 'none' }}/>
                </div>
                <div onClick={() => showImageImage(6)} className="item">
                    <ImCross className="cross6" style={{ display: my_gameX[6] ? 'flex' : 'none' }}/>
                    <FaRegCircle className="circle6" style={{ display: my_gameY[6] ? 'flex' : 'none' }}/>
                </div>
                <div onClick={() => showImageImage(7)} className="item">
                    <ImCross className="cross7" style={{ display: my_gameX[7] ? 'flex' : 'none' }}/>
                    <FaRegCircle className="circle7" style={{ display: my_gameY[7] ? 'flex' : 'none' }}/>
                </div>
                <div onClick={() => showImageImage(8)} className="item">
                    <ImCross className="cross8" style={{ display: my_gameX[8] ? 'flex' : 'none' }}/>
                    <FaRegCircle className="circle8" style={{ display: my_gameY[8] ? 'flex' : 'none' }}/>
                </div>
            </div>
        </>
    );
}


export default Grid;