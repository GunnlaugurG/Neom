import { faArrowLeft, faBars, faCarBattery, faChess, faChessBoard, faChessPawn, faGears, faHome, faSliders, faUser, faWheatAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Button from './Components/Button/Button';
import Card from './Components/Card/Card';
import Navbar from './Components/Navbar/Navbar';
import { NavigationsModel } from './Models/Models';
import Home from './Pages/Home/Home';
import Main from './Pages/Main/Main';
import Settings from './Pages/Settings/Settings';
import StockFish from './intergrations/Stockfish';
import Chessboard from 'chessboardjsx';


const navigations: NavigationsModel[] = [
  { name: 'Home', icon: faChessPawn, active: true, path: "/" },
  { name: 'Puzzels', icon: faChessBoard, active: false, path: "/puzzels" },
  { name: 'Settings', icon: faGears, active: false, path: "/settings" }
]

function App() {
  
  return (
    <div className="App">
      <header style={{display: 'flex', justifyContent: 'space-between'}}>
        <Button onClick={() => {console.log('clicked')}}><FontAwesomeIcon icon={faArrowLeft} /></Button>
        <Button onClick={() => {console.log('primary clicked')}}><FontAwesomeIcon icon={faBars} /></Button>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/puzzels' element={<Main/>} />
          <Route path='/settings' element={<Settings/>} />
        </Routes>
        {/* <Card>
          <h1>App ársins</h1>
          <p>Fallegasta app ársins fær Gunnlaugur Guðmundsson fyrir agalega fallegt app</p>  
        </Card> */}
        <div className='navbar'>
          <Navbar navigations={navigations}/>
        </div>
        {/* <StockFish>
          {({ position, onDrop }: any) => (
            <Chessboard
              id="stockfish"
              position={position}
              width={320}
              onDrop={onDrop}
              orientation="black"
            />
          )}
        </StockFish> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
