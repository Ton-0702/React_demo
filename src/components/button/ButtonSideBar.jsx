import styled from "styled-components";

const StyledButtonSideBar = styled.button`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: center;
    width: 233px;
    height: 50px;
    border: none;
    border-radius: 11px;
    background: rgb(233, 233, 233);
    color: black;

    i{
        margin-right: 5px;
    }

    .plus__i{
        i {
        margin-left: 10px;
        font-size: 15px;
        background: ${props => props.bgcolor_i};//#5429FF;
        padding: ${props => `${props.padding_i}px`};
        border-radius: ${props => `${props.borderRadius}px`};
        color: ${props => props.color_i};
        }
    }

    span{
        font-size: 15px;
        font-weight: bold;
    }
`;

const ButtonSideBar = ({width, height, imgPic, borderColor, bgcolor_i, padding_i, color_i, borderRadius, textColor, fontSize, children, font_awe, font_awe2, ...rest}) => {
    // console.log("font_awe", font_awe.split(" ")[1]);
    return <StyledButtonSideBar
    width={width}
    height = {height}
    textColor = {textColor}
    fontSize = {fontSize}
    bgcolor_i = {bgcolor_i}
    borderColor = {borderColor}
    padding_i = {padding_i}
    borderRadius = {borderRadius}
    color_i ={color_i}
    {...rest}
    >
        <div className="plus__i">
            <i className={font_awe}></i>
        </div>
        
        <span>{children}</span>
        {font_awe2 && <i class={font_awe2}></i>}
    </StyledButtonSideBar>
}

export default ButtonSideBar;