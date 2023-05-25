import styled from "styled-components";
import Button from "../button";
import { useState } from "react";

const StyleCart = styled.div`
    padding: 24px;
    background-color: white;
    border-radius: 20px;
    font-size: 12px;
    line-height: 16px;
     /* Text/color2 */
    color: #747475;

    .title{
        color: #747475;
        text-align: left;
        font-weight: bold;
        font-size: ${props => `${props.font_size}px`};
        line-height: 18px;
        margin-bottom: 12px;
    }

    .titleCenter{
        color: #747475;
        text-align: center;
        font-weight: bold;
        font-size: ${props => `${props.font_size}px`};
        line-height: 18px;
        margin-bottom: 12px;
    }
    .amount {
    font-size: 24px;
    line-height: 31px;
    /* Text/color1 */
    color: #27262E;
    }

    .ammount-wrapper {
        margin-bottom: 12px;
    }

    .eth {
        margin-right: 4px;
       
    }

    .content{
        margin-right: 4px;
        font-size: 24px;
        line-height: 31px;
        /* Text/color1 */
        color: #27262E;
    }

    .text__Content{
        text-align: center;
        color: #FFFFFF;
        font-size: ${props => `${props.font_size_text}px`};
    }
`

const Cart = ({title, amount, imgPic, content, percent, check_title, font_size, text, font_size_text, ...rest}) =>{
    // const [onTitle, setOnTitle] = useState(false)
    return <StyleCart
        title = {title}
        font_size = {font_size}
        font_size_text = {font_size_text}
        {... rest}
    >
        <div className={check_title ==="left" ? 'title' : 'titleCenter'}>{title}</div>
        { text === "true" ? 
                    <div className='ammount-wrapper'>
                        <span className="content">{content}</span> 
                    </div>
                    

                : //nguoc lai text
                amount?
                        <div className='ammount-wrapper'>
                            <img className="eth" src={imgPic} alt="icon"></img>
                            <span className="amount">{amount}</span>
                            ETH
                        </div>
                        :
                        <div className='ammount-wrapper'>
                            <span className="content">{content}</span> 
                            %
                        </div>
        }
        <Button percent={percent} boderColor="#E9E9E9">{percent}%</Button>
    </StyleCart>
}

export default Cart;