import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../header";
// import Frame_big1_sidebar from "../../components/asset/Frame_big1_sidebar.svg"
import SideBar from "../sidebar";

const LayoutStyled = styled.div`
    background-color: rgb(140, 221, 194);
    min-height: 100vh;
    .right {
        float: right;
        width: 80%;
    }
`;

const SideBarStyled = styled.aside`
    background-color: whitesmoke;
    float: left;
    width: 20%;
    height: 100vh;
`;

const ContentStyled = styled.div`
  background-color: #f23412;
  /* margin-top: 64px; */
  height: 100vh;
`;



const PrimaryLayout = ({ children }) => {
    return (
        <LayoutStyled>
            <SideBarStyled>
                <SideBar>
                    
                </SideBar>
            </SideBarStyled>
            <div className="right">
                <Header />
                <ContentStyled>{children}</ContentStyled>
            </div>
        </LayoutStyled>
    )
}

export default PrimaryLayout
