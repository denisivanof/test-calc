import React, {FC} from 'react';
import Key from "./Key";
import {WrapperKeyboard} from "./Keyboard";
import styled from "styled-components";

const WrapperSymbols = styled(WrapperKeyboard)`
  height: 56px;
  align-content: space-between;
`
interface ISymbols {

}
const Symbols:FC<ISymbols> = () => {
    const keyData = ['/','x','-','+']
    return (
        <WrapperSymbols draggable>
            {keyData.map(item=>{
                return <Key key={item} width={'52px'} val={item}/>
            })}
        </WrapperSymbols>
    );
};

export default Symbols;