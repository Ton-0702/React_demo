import styled from "styled-components";
import {NavLink} from "react-router-dom";

const SideBarTextNav = styled.div`
    display: flex;
    margin-top: 40px;
    color: #7A797D;
    font-size: ${props => `${props.font_size}px`};
    i{
        margin-right: 20px;
        font-size: ${props => `${props.font_size_img}px`}
    }

    /* fa-th-large{
        color: #7A797D;
        margin-right: 20px;
    }
    .fa-th-large::before {
        margin-right:20px;
        font-size: ${props => `${props.font_size_img}px`};
    } */
    
    ${props => props.font_awe}{
        color: #7A797D;
        margin-right: 20px;
    }
    
`
const NavItem = ({text, path}) => {
    return (
        <NavLink to={path}>{text}</NavLink>
    )
}

const ItemSideBar = ({font_size_img, font_size, children, font_awe, path_web, ...rest}) => {
    console.log('font_size_img, ',font_size_img);
    // font_awe = font_awe.split(" ")[1]
    return <SideBarTextNav
        font_size = {font_size}
        font_size_img = {font_size_img}
        font_awe = {font_awe.split(" ")[1]}
        {...rest}
        >
        {/* {<img src={imgPic} alt="icon_nav"></img>} */}
        
        {<i className={font_awe}></i>}
        {/* {children} */}
        {<NavItem text={children} path={path_web}></NavItem>}
    </SideBarTextNav>

}

ItemSideBar.defaultProps = {
    fontSize: 10,
    font_size_img:40,
};

export default ItemSideBar;