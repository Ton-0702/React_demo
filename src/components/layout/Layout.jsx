// import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../header";
// import Frame_big1_sidebar from "../../components/asset/Frame_big1_sidebar.svg"
// import SideBar from '../sidebar';
import ItemSideBar from '../ItemSideBar';
import Frame_big1_sidebar from "../asset/Frame_big1_sidebar.svg";
import Cart from "../cart";
import CardLinear from "../cart/CardLinear";
import Ethereum_ETH_sidebar1 from '../asset/Ethereum_ETH_sidebar1.svg';
import Rectange_13 from '../asset/Rectangle_13.svg'

const BodyStyled = styled.body`
    background-color: rgb(140, 221, 194);
    max-width: 1400px;
    margin: 0px auto;
`



const LayoutStyled = styled.div`
    min-height: 100vh;
    height: auto;
    /* .right {
        float: right;
        width: 80%;
        height: auto;
    } */
`;

const SideBarRightStyled = styled.div`
    display: flex;
    flex-direction: column;
    float: right;
    width: 80%;
    position: relative;
    /* height: auto; */
`

const SideBarStyled = styled.aside`
    background-color: whitesmoke;
    float: left;
    width: 20%;
    /* height: 100vh;
    position: relative; */

    .SideBarEleNameText{
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* Text color 1 */
        color:#7A797D;
        font-size: 15px;
        span{
            color: black;
            font-weight: bold;
            font-size: 25px;
        }
    }

    .SideBarEleName{
        margin-top: 20px;
        margin-bottom: 80px;
        margin-left: 30px;
        display: flex;
        /* justify-content: space-between; */
        img{
            height: 60px;
            width: 60px;
            margin-right: 20px;
        }
    }

    .SideBarEleNewTag{
        font-size: 20px;
        margin-top: 50px;
        margin-left: 30px;
        font-weight: 500;
    }

    .SideBarEleBottom{
        margin: 50px 30px 30px 30px;
        height: 267px;
        width: 81%;
        border-radius: 40px;
    }
`;

const ContentStyled = styled.div`
    position: absolute;
    margin: 0px 30px;
    top: 160px;
    height: auto;
    width: 100%;
`;

const ContentOneStyled = styled.div`
    height: 390px;
    width: 100%;
    

    .ContentOneLeft{
        float: left;
        width: 716px;
        height: 354px;
        background-image: url(${Rectange_13});
        background-repeat: no-repeat;
    }
`


const PrimaryLayout = () => {
    return (
        <BodyStyled>
            <LayoutStyled>
                <SideBarStyled>
                    {/* <SideBar>
                        
                    </SideBar> */}
                    <div className="SideBarEleName">
                        <img src={Frame_big1_sidebar} alt="logo" />
                        <div className="SideBarEleNameText">
                            <span>MyNFT</span>
                            NFT Marketplace
                        </div>
                    </div>

                    <ItemSideBar font_size_img={25} font_size={20} font_awe={"fas fa-th-large"} 
                    path_web={"/"}>Dashboard</ItemSideBar>
                    <ItemSideBar font_size_img={25} font_size={20} font_awe={"fas fa-store"}
                    path_web={"/market"}>Market</ItemSideBar>
                    <ItemSideBar font_size_img={25} font_size={20}  font_awe={"fas fa-eraser"}
                    path_web={"/active-bids"}>Active Bids</ItemSideBar>

                    <div className="SideBarEleNewTag">
                        PROFILE
                    </div>

                    <ItemSideBar font_size_img={25} font_size={20}  font_awe={"fas fa-tablets"}
                    path_web={"/"}>My Portfolio</ItemSideBar>
                    
                    <ItemSideBar font_size_img={25} font_size={20}  font_awe={"fas fa-wallet"}
                    path_web={"/"}>Wallet</ItemSideBar>

                    <ItemSideBar font_size_img={25} font_size={20}  font_awe={"fas fa-heart"}
                    path_web={"/"}>Favourites</ItemSideBar>

                    <ItemSideBar font_size_img={25} font_size={20}  font_awe={"fas fa-clock"}
                    path_web={"/"}>History</ItemSideBar>

                    <ItemSideBar font_size_img={25} font_size={20}  font_awe={"fas fa-cog"}
                    path_web={"/"}>Settings</ItemSideBar>

                    <div className="SideBarEleNewTag">
                        OTHER
                    </div>
                    <ItemSideBar font_size_img={25} font_size={20}  font_awe={"fas fa-cloud-moon"}
                    path_web={"/"} toogle={"True"}>Light Mode</ItemSideBar>

                    <div className="SideBarEleBottom">
                        {/* <img src={Frame_big3_sidebar} alt="logo" /> */}
                        <CardLinear title={"Your Balance"} check_title={"center"} imgPic={Ethereum_ETH_sidebar1} font_size={15} font_size_text={37} content="1,034.02"></CardLinear>
                    </div>
                    </SideBarStyled>
                    <SideBarRightStyled>
                        <Header></Header>
                        <ContentStyled>
                            <ContentOneStyled>
                                <div className="ContentOneLeft">

                                </div>
                            </ContentOneStyled>
                        </ContentStyled>
                    </SideBarRightStyled>
            </LayoutStyled>
        </BodyStyled>
    )
}

export default PrimaryLayout
