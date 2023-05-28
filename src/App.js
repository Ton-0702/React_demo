import './App.css';
// import { ReactDOM } from 'react';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Market from './container/market';
import ActiveBids from './container/activebids';
import NotFoundPage from './container/404Page';
import Dashboard from './container/dashboard';

function App() {
  return(
    <Routes>
      <Route path='/market' element={<Market />}></Route>
      <Route path='/active-bids' element={<ActiveBids />}></Route>
      <Route path='/' element={<Dashboard />}></Route>
      <Route path='*' element={<NotFoundPage />}></Route>
    </Routes>
  )
}

// import logo from './logo.svg';
// import './App.css';
// // import { Button } from 'components/button';
// import { Cart } from './components/cart';
// import EthereumBlue from './components/asset/Ethereum-blue.svg'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <Button percent={10} onClick={()=>console.log("Clickkkk")}><span>Click</span>Me</Button>
//         <Button boderColor="red" percent={-109}>109%</Button>
//         <Button textColor="white" bgColor="transparent" boderColor="white">0%</Button>
//         <Button width={77} height={32} textColor="white" bgColor="#5429FF">Following</Button>
//         <Button width={77} height={32} textColor="purple" bgColor="rgba(84, 41, 255, 0.1)">Follow</Button> */}
//         <Cart title={"Revenue"} imgPic={EthereumBlue} amount="5.00" percent={12.3}></Cart>
//         <Cart title={"Revenue"} imgPic={EthereumBlue} content="+14.00" percent={12.3}></Cart>
//         <Cart title={"Revenue"} imgPic={EthereumBlue} amount="7.00" percent={0} ></Cart>
//         <Cart title={"Revenue"} imgPic={EthereumBlue} amount="5.00" percent={-5}></Cart>
//       </header>
//     </div>
//   );
// }

export default App;
