import React, {FC} from 'react';
import Key from "./Key";
import {WrapperBox} from "./Keyboard";
import styled from "styled-components";
import {IPropsOnDrop} from "../type/type";

const WrapperSymbols = styled(WrapperBox)<IPropsOnDrop>`
  height: 56px;
  align-content: space-between;
  opacity: ${props=>props.opacity};
  box-shadow: ${props=> props.boxShadow};
  display: ${props=>props.display};
  margin-bottom: ${props=>props.marginBottom};
`
const Symbols:FC<IPropsOnDrop> = (props) => {
    const keyData = ['/','x','-','+']
    return (
        <WrapperSymbols {...props}>
            {keyData.map(item=>{
                return <Key key={item} width={'52px'} val={item}/>
            })}
        </WrapperSymbols>
    );
};

export default Symbols;