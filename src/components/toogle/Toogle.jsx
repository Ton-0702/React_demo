import styled from "styled-components";
import { useState } from "react";

const ToogleButtonStyled = styled.button`
    background-color: rgb(221, 219, 219);
    height: 29px;
    width: 58px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    position: relative;

    button:focus,
    button:active { outline: none; }

    .circle{
        position: absolute;
        background-color: white;
        height: 25px;
        width: 25px;
        border-radius: 94px;
        left: 3px;
        top: 2px;
    }

    i{
        position: absolute;
        color: #5429FF;
        font-size: 18px;
        left: 3px;
        top: 3px;
    }

    ${props => props.on} {
        background-color: #52f352;
    }

    ${props => props.on} .circle {
        left: 30px;
        background-color: black;
        i{
            left: 4px;
            color: #9E9CA4;
        }  
    }
`

const Toogle = () =>{
    const [on, setOnState] = useState(true);
    const toggle = () => setOnState(o => !o);
    console.log("on: ", on);
    console.log("setOnState: ",setOnState);
    return (
        <ToogleButtonStyled class={on ? 'on' : 'off'} on={on} onClick={toggle}> 
            <div className="circle">
                {/* <i class="fas fa-sun"></i> */}
                <i class={on ? 'fas fa-sun' : 'far fa-moon'} ></i>
            </div>
        </ToogleButtonStyled>
    )
}

export default Toogle;