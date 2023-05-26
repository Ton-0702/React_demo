import styled from "styled-components";
import ButtonSideBar from "../button/ButtonSideBar";
import Search from "../search";
import search_img from "../asset/search_img.svg"

const HeaderStyled = styled.div`
  z-index: 99;
  width: 100%;
  height: 100%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between ;
  align-items: center;
  /* background-color: aqua; */

  .nav_info{
    display: flex;
    align-items: center;
    width: 11%;
    height: 74%;
    /* background-color: white; */
    margin: auto 40px;

    .buttonNotification{
      width: 52px;
      height: 52px;
      border-radius: 50px;
      margin-right: 20px;
      border: none;
      position: relative;
    }

    .notification{
        position: absolute;
        top: 12px;
        right: 15px;
        width: 8px;
        height: 8px;
        background-color: orange;
        border-radius: 50px;
      }

    i{
      color: rgb(122, 121, 125);
      font-size: 24px;
    }

    img{
      margin-bottom: 5px;
      height: 52px;
      width: 52px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
        <Search font_awe={"fas fa-search"} ></Search> {/* */}
        <div className="nav_info">
          <button className="buttonNotification">
            <i class="fas fa-bell"></i>
            <div className="notification"></div>
          </button> {/*<i class="fas fa-bell"><div className="notification"></div></i> */}
          <img src={search_img} alt="font_account" />
        </div>  
    </HeaderStyled>
  );
};

export default Header;