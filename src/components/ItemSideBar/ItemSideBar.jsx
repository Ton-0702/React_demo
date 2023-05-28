import styled from "styled-components";
import {NavLink} from "react-router-dom";
import Toogle from "../toogle";
import { useState } from "react";

const SideBarTextNav = styled.div`
    display: flex;
    margin-top: 40px;
    margin-left: 30px;
    margin-right:30px;
    /* color: #7A797D; */
    font-size: ${props => `${props.font_size}px`};
    i{
        margin-right: 20px;
        font-size: ${props => `${props.font_size_img}px`}
    }
    
    ${props => props.font_awe}{
        /* color: #7A797D; */
        margin-right: 20px;
    }
    
`

const StyledNavItem = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    /* a {
        text-decoration: unset;
        color: #7A797D;
    }
   */

    .navItem_a{
        text-decoration: unset;
        color: #7A797D;
    }

   .onNavItem{
        text-decoration: unset;
        color: blue;
   }
`;

// const toogleButton = (){

// }

const NavItem = ({text, path, src_font_awe, toogle}) => {
    const [navItem_a, setOnState] = useState(true);
    const showNav = () => setOnState(o => !o);
    console.log(document.getElementsByClassName("navItem_a"));
    return (
        <StyledNavItem>
            <NavLink to={path} className={navItem_a ? 'navItem_a' : 'onNavItem'} onClick={showNav}>
                <i className={src_font_awe}></i>
                {text}
            </NavLink>
            <div>
                {toogle ==="True" && (<Toogle></Toogle>)}
            </div>
        </StyledNavItem>
    )
}

const ItemSideBar = ({font_size_img, font_size, children, font_awe, path_web, toogle, ...rest}) => {
    // console.log('font_size_img, ',font_size_img);
    // font_awe = font_awe.split(" ")[1]

    return <SideBarTextNav
        font_size = {font_size}
        font_size_img = {font_size_img}
        font_awe = {font_awe.split(" ")[1]}
        {...rest}
        >
        {<NavItem text={children} path={path_web} src_font_awe={font_awe} toogle={toogle}></NavItem>}
    </SideBarTextNav>

}

ItemSideBar.defaultProps = {
    fontSize: 10,
    font_size_img:40,
};

export default ItemSideBar;