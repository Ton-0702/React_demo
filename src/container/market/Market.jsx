import React from "react";
// import '../../App.css';
// import { Button } from 'components/button';
import { Cart } from '../../components/cart';
import EthereumBlue from '../../components/asset/Ethereum-blue.svg'
import styled from "styled-components";
// import Home from ".";
// import Login from "../login";
// import About from "../about";
import { Link } from "react-router-dom";


const AppWrapper = styled.div`
  text-align: center;
  .button-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    font-weight: 700;
    font-size: 13px;
    color: #27262E;
  }

  .list_card{
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

`;


const Market = ({}) => {
        return (
          <div className="wrapper">
            <aside className="sidebar">
              <div className="sidebar__inside"></div>
            </aside>
              <AppWrapper>
                <header className="App-header">

                    {/* <Button percent={10} onClick={()=>console.log("Clickkkk")}><span>Click</span>Me</Button>
                    <Button boderColor="red" percent={-109}>109%</Button>
                    <Button textColor="white" bgColor="transparent" boderColor="white">0%</Button>
                    <Button width={77} height={32} textColor="white" bgColor="#5429FF">Following</Button>
                    <Button width={77} height={32} textColor="purple" bgColor="rgba(84, 41, 255, 0.1)">Follow</Button> */}
                    <nav>
                      <div>
                        <Link to="/">Home</Link>
                      </div>

                      <div>
                        <Link to="/about">About</Link>
                      </div>
                      
                      <div>
                        <Link to="/sign-in">Logout</Link>
                      </div>
                      
                      
                    </nav>
                    <div className="list_card">
                        <Cart title={"Revenue"} imgPic={EthereumBlue} amount="5.00" percent={12.3}></Cart>
                        <Cart title={"Spending"} imgPic={EthereumBlue} amount="2.00" percent={11}></Cart>
                        <Cart title={"ROI"} imgPic={EthereumBlue} content={14.02} percent={-12.3}></Cart>
                        <Cart title={"Estimated"} imgPic={EthereumBlue} amount="38.00" percent={0}></Cart>
                    </div>
                </header>
              </AppWrapper>
            </div>
        );
}

export default Market;