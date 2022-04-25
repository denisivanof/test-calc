import React, {FC} from 'react';
import {WrapperKeyboard} from "./Keyboard";
import styled from "styled-components";


const WrapperEqual = styled(WrapperKeyboard)`
  height: 72px;
`
const EqualBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 30px 25px;
  width: 232px;
  height: 64px;
  background: #5D5FEF;
  border-radius: 6px;
  border: none;
`
interface IEquals {

}
const Equals:FC<IEquals> = () => {
    return (
        <WrapperEqual draggable>
            <EqualBtn>=</EqualBtn>
        </WrapperEqual>
    );
};

export default Equals;