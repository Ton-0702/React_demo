import styled from "styled-components";

const StyledButtonSideBar = styled.button`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: ${props => props.justify_content};
    align-items: center;
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
    border:  ${props => props.borderColor ? `1px solid ${props.borderColor}` : "none"};
    border-radius: ${props => `${props.borderRadius}px`}; 
    background: ${props => props.bgcolor};
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
        font-size: ${props => `${props.fontSize}px`};
        font-weight: bold;
        color: ${props => props.textColor};
    }
`;

const ButtonSideBar = ({width, height, imgPic, justify_content, borderColor, bgcolor, bgcolor_i, padding_i, color_i, borderRadius, textColor, fontSize, children, font_awe, font_awe2, ...rest}) => {
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
    bgcolor= {bgcolor}
    justify_content = {justify_content}
    {...rest}
    >
        { font_awe &&
            <div className="plus__i">
                <i className={font_awe}></i>
            </div>
        }
        <span>{children}</span>
        {font_awe2 && <i class={font_awe2}></i>}
    </StyledButtonSideBar>
}

export default ButtonSideBar;