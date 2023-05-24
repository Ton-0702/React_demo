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
    
    ${props => props.font_awe}{
        color: #7A797D;
        margin-right: 20px;
    }
    
`

const StyledNavItem = styled.div`
    display: flex;
    justify-content: space-between;
    a {
        text-decoration: unset;
        color: #7A797D;
    }
  
`;

// const toogleButton = (){

// }

const NavItem = ({text, path, src_font_awe}) => {
    return (
        <StyledNavItem>
            <NavLink to={path}>
                <i className={src_font_awe}></i>
                {text}
            </NavLink>
        </StyledNavItem>
    )
}

const ItemSideBar = ({font_size_img, font_size, children, font_awe, path_web, ...rest}) => {
    // console.log('font_size_img, ',font_size_img);
    // font_awe = font_awe.split(" ")[1]
    return <SideBarTextNav
        font_size = {font_size}
        font_size_img = {font_size_img}
        font_awe = {font_awe.split(" ")[1]}
        {...rest}
        >
        {<NavItem text={children} path={path_web} src_font_awe={font_awe}></NavItem>}
    </SideBarTextNav>

}

ItemSideBar.defaultProps = {
    fontSize: 10,
    font_size_img:40,
};

export default ItemSideBar;