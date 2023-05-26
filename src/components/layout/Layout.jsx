// import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../header";
// import Frame_big1_sidebar from "../../components/asset/Frame_big1_sidebar.svg"
// import SideBar from '../sidebar';
import ItemSideBar from '../ItemSideBar';
import Frame_big1_sidebar from "../asset/Frame_big1_sidebar.svg";
import Cart from "../cart/Cart";
import CardLinear from "../cart/CardLinear";
import Ethereum_ETH_sidebar1 from '../asset/Ethereum_ETH_sidebar1.svg';
import Rectange_13 from '../asset/Rectangle_13.svg'
import ButtonSideBar from "../button/ButtonSideBar";
import EthereumBlue from "../asset/Ethereum-blue.svg"
import CardTrending from "../cart/CardTrending";
import monkey1 from "../asset/monkey1.svg"
import trending_account_1 from "../asset/trending_account_1.svg"
import diamondblack from "../asset/diamonblack.svg"
import monkey2 from "../asset/monkey2.svg"
import monkey3 from "../asset/monkey3.svg"
import monkey4 from "../asset/monkey4.svg"

const BodyStyled = styled.body`
    background-color: rgb(140, 221, 194);
    max-width: 1450px;
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
    height: 130px;
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
    /* display: flex;
    flex-direction: column; */
`;

const ContentOneStyled = styled.div`
    height: 390px;
    width: 100%;
    display: flex;
    

    .ContentOneLeft{
        float: left;
        width: 717px;
        height: 354px;
        background-image: url(${Rectange_13});
        background-repeat: no-repeat;
        position: relative;

        .ContentOneLeft__text{
        position: absolute;
        display: flex;
        flex-direction: column;
        /* width: 100%;
        height: 100%; */
        padding: 77px 120px 0px 60px;

        .spanOneLeft{
            color: white;
            font-size: 54px;
            font-weight: bold;
        }     

        .ContentOneLeft__text2{
            display: flex;
            margin-top: 25px;
            button{
                    margin-right: 15px;
                }
            }
        }   
    }
    
    .ContentOneRight{
        float: right;
        display: grid;
        grid-template-columns: auto auto;
        gap: 20px;
        width: 355px;
        height: 354px;
        padding: 0px 20px 20px 20px;
    }
    
`

const ContentTrending = styled.div`
    /* margin-top: 30px; */
    display: flex;
    flex-direction: column;
    width: 100%;

    .ContentTrending__Left{
        float: left;
        width: 716px;
        /* height: 354px; */
        display: flex;
        justify-content: space-between;
    }

    .ContentTrending__LeftTopLeft{
        font-size: 24px;
        font-weight: bold;
        /* line-height: 31px; */
    }

    .ContentTrending__LeftTopRight{
        display: flex;
        
        span{
            margin-left: 10px;
            font-size: 16px;
            color: #7A797D;
            line-height: 30px;
        }
        /* font-weight: bold; */
        /* line-height: 31px; */
    }

    .ContentTrending__LeftBottom{
        width: 716px;
        display: grid;
        grid-template-columns: auto auto;
        gap:20px;
        margin-top: 30px;
        
    }
`

const trending_data = [
    {
        imgPic: monkey1,
        name_imgTrend: "Ape In Love",
        eval_img: "21,5K Likes",
        imgAccount: trending_account_1,
        name_account: "@johnti60",
        nameBottom:"Current Bid",
        imgBottom: diamondblack,
        number: "9.10",
        brand: "ETH"
    }
]


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
                                    <div className="ContentOneLeft__text">
                                        <div>
                                            <span className="spanOneLeft">Discover, Create and Sell Your Own NFT.</span>
                                        </div>
                                        <div className="ContentOneLeft__text2">
                                            <ButtonSideBar bgcolor={"white"} width={150} height={50} textColor={"#5429FF"} justify_content={"center"}>Discover</ButtonSideBar>
                                            <ButtonSideBar borderColor={"white"} bgcolor={"none"} width={150} height={50} textColor={"white"} justify_content={"center"}>Create</ButtonSideBar>
                                        </div>
                                    </div>
                                </div>

                                <div className="ContentOneRight">
                                    <Cart title={"Revenue"} check_title={"left"} imgPic={EthereumBlue} amount="5.00" percent={12.3}></Cart>
                                    <Cart title={"Revenue"} check_title={"left"} imgPic={EthereumBlue} content="+14.00" percent={12.3}></Cart>
                                    <Cart title={"Revenue"} check_title={"left"} imgPic={EthereumBlue} amount="7.00" percent={0} ></Cart>
                                    <Cart title={"Revenue"} check_title={"left"} imgPic={EthereumBlue} amount="5.00" percent={-5}></Cart>
                                </div>

                            </ContentOneStyled>

                            <ContentTrending>
                                <div className="ContentTrending__Left">
                                    <div className="ContentTrending__LeftTopLeft">
                                        Trending Auctions
                                    </div>

                                    <div className="ContentTrending__LeftTopRight">
                                        <span style={{backgroundColor: "#dad5e8", padding:"0px 15px", borderRadius:"50px"}}>Art</span>
                                        <span>Music</span>
                                        <span>Collectibles</span>
                                        <span>Utility</span>
                                    </div>
                                </div>

                                <div className="ContentTrending__LeftBottom">
                                    <CardTrending imgPic={monkey1} imgAccount={trending_account_1} name={"@johnti60"} nameBottom={"Current Bid"} imgBottom={diamondblack}></CardTrending>
                                    <CardTrending imgPic={monkey1}></CardTrending>
                                </div>
                            </ContentTrending>
                        </ContentStyled>
                    </SideBarRightStyled>
            </LayoutStyled>
        </BodyStyled>
    )
}

export default PrimaryLayout
