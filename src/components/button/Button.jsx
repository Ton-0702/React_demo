import styled from 'styled-components';
import redArrow from '../asset/redArrow.svg';
import greenArrow from '../asset/greenArrow.svg';
const StyledButton = styled.button`
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  border: ${props => props.borderColor ? `1px solid ${props.borderColor}` : "none"};
  border-radius: 40px;
  background: ${(props) => props.bgcolor};
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: ${props => props.textColor};
  font-size: ${props => props.fontSize};
  img {
    margin-right: 8px;
  };
  `
;
export const Button = ({ width, height, bgcolor, borderColor, borderRadius, textColor, fontSize, percent, children, ...rest }) => {
    console.log('children', children);
    return <StyledButton 
    percent={percent}
    width = {width}
    height = {height}
    bgcolor = {bgcolor}
    borderColor = {borderColor}
    fontSize = {fontSize}
    textColor = {textColor}
    {...rest}
    >
      {/* <img src={ percent< 0 ? redArrow : greenArrow} alt="arr"></img> */}
      { percent && (<img src={ percent< 0 ? redArrow : greenArrow} alt="arr"></img>)}
      {Math.abs(children[0])}{children[1]}  {/* Thay đổi giá trị trong giá trị truyền vào */}
    </StyledButton>;
 }

Button.defaultProps = {
    bgColor: '#FFFFFF',
    textColor: '#5429FF',
    width: 128,
    height: 46,
    fontSize: 16,
    // borderRadius:40,

};