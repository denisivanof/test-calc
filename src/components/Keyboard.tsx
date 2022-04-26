import React, {FC} from 'react';
import Key from "./Key";
import styled from "styled-components";
import {IPropsOnDrop} from "../type/type";

export const WrapperBox = styled.div`
  width: 240px;
  height: 224px;
  background: #FFFFFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06), 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  padding: 4px;
  margin-bottom: 12px;
`
const WrapperKeyboard = styled(WrapperBox)<IPropsOnDrop>`
  opacity: ${props=>props.opacity};
  box-shadow: ${props=> props.boxShadow};
  display: ${props=>props.display};
  margin-bottom: ${props=>props.marginBottom};
`
const Keyboard:FC<IPropsOnDrop> = (props) => {
    const keyData = ['1','2','3','4','5','6','7','8','9','0',',']
    return (
        <WrapperKeyboard {...props}>
            {keyData.map(item=>{
                return(
                    <Key key={item} width={item ==='0'?'152px':'72px'} val={item}/>
                )
            })}
        </WrapperKeyboard>
    );
};

export default Keyboard;