import './App.css';
import Figures from "./Components/Figures";
import Grid from "./Components/Grid";
import Reset from "./Components/Reset";
import Turn from "./Components/Turn";

function App() {
  

  return (
    <>
      <div className="game">
        <div className="header">
          <Figures/>
          <Turn/>
          <Reset/>
        </div>
        <Grid/>
      </div>
    </>
  )
}

export default App
