import styled from "styled-components";
import { Button } from "../button";

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
        font-size: 14px;
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
`

export const Cart = ({title, amount, imgPic, content, percent}) =>{
    return <StyleCart>
        <div className='title'>{title}</div>
        { amount?
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