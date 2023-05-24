import styled from "styled-components";
import Frame_big1_sidebar from "../asset/Frame_big1_sidebar.svg";
// import Icon_sidebar1 from "../../components/asset/Icon_sidebar1.svg";
import ItemSideBar from '../ItemSideBar';

const SideBarEleStyled = styled.div`
    padding: 0px 30px;
    height: 100%;
    
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
        font-weight: 500;
    }
`
// const SideBarEleNavStyled = styled.div`
//         margin-top: 20px;
//         display: flex;
//         /* justify-content: space-between; */
//         img{
//             height: 20px;
//             width: 20px;
//             margin-right: 20px;
//         }
// `

const SideBar = () => {
    return (
        <SideBarEleStyled>
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
            path_web={"/active-bids"}>My Portfolio</ItemSideBar>
            
            <ItemSideBar font_size_img={25} font_size={20}  font_awe={"fas fa-wallet"}
            path_web={"/active-bids"}>Wallet</ItemSideBar>

            <ItemSideBar font_size_img={25} font_size={20}  font_awe={"fas fa-heart"}
            path_web={"/active-bids"}>Favourites</ItemSideBar>

            <ItemSideBar font_size_img={25} font_size={20}  font_awe={"fas fa-clock"}
            path_web={"/active-bids"}>History</ItemSideBar>

            <ItemSideBar font_size_img={25} font_size={20}  font_awe={"fas fa-cog"}
            path_web={"/active-bids"}>Settings</ItemSideBar>

            <div className="SideBarEleNewTag">
                OTHER
            </div>
            <ItemSideBar font_size_img={25} font_size={20}  font_awe={"fas fa-cloud-moon"}
            path_web={"/active-bids"} toogle={"True"}>Light Mode</ItemSideBar>

        </SideBarEleStyled>
    )
}

export default SideBar;