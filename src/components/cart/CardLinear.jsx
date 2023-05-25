import styled from "styled-components";
// import { Button } from "../button";
import ButtonSideBar from "../button/ButtonSideBar";


const StyleCart = styled.div`
    padding: 24px;
    background-image: linear-gradient(To Right, #5429FF, #BBAAFF);
    border-radius: 20px;
    font-size: 12px;
    line-height: 16px;
     /* Text/color2 */
    color: #747475;

    .title{
        color: #FFFFFF;
        text-align: left;
        font-weight: bold;
        font-size: ${props => `${props.font_size}px`};
        line-height: 18px;
        margin-bottom: 12px;
    }

    .titleCenter{
        color: #FFFFFF;
        text-align: center;
        /* font-weight: bold; */
        font-size: ${props => `${props.font_size}px`};
        line-height: 18px;
        margin-bottom: 34px;
    }


    .eth {
        margin-right: 4px;
    }

    .ammount-wrapper {
        margin-bottom: 33px;
        display: flex;
        align-items: center;
        justify-content:center;
        /* position: relative; */
        img{
            /* font-size:65px; */
            width: 32px;
            height: 32px;
            margin-right:5px;
        }
    }

    .span_text__img{
        /* display: flex; */
        /* position: absolute; */
        font-size: 20px;
        color: white;
    }
    /* .content{
        margin-right: 4px;
        font-size: 24px;
        line-height: 31px;
        color: #27262E;
    } */

    .text__Content{
        text-align: center;
        color: #FFFFFF;
        font-weight: bold;
        margin: 0px 43px;
        font-size: ${props => `${props.font_size_text}px`};
    }
`

const CardLinear = ({title, imgPic, check_title, font_size, content, font_size_text, ...rest}) =>{
    // const [onTitle, setOnTitle] = useState(false)
    return <StyleCart
        title = {title}
        font_size = {font_size}
        font_size_text = {font_size_text}
        {... rest}
    >
        <div className={check_title ==="left" ? 'title' : 'titleCenter'}>{title}</div>
        <div className='ammount-wrapper'>
            <span className="text__Content">{content}</span> 
        </div>

        <div className='ammount-wrapper'>
            <img src={imgPic} alt="ETH_black" />
            <span className="span_text__img">ETH</span>
        </div>
        <ButtonSideBar width={150} height={50} font_awe={"fas fa-plus"} bgcolor_i={"#5429FF"} padding_i={10} borderRadius={45} font_awe2={"fas fa-chevron-right"} textColor={"black"} bgcolor="#E9E9E9">Top Up Balance</ButtonSideBar>
    </StyleCart>
}

export default CardLinear;