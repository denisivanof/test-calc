import React, {FC} from 'react';
import styled from "styled-components";
import {WrapperKeyboard} from "./Keyboard";

const Show = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 4px 8px;
  width: 232px;
  height: 52px;
  background: #F3F4F6;
  border-radius: 6px;
  font-weight: 800;
  font-size: 36px;
  line-height: 44px;
  color: #111827;
`
const WrapperDisplay = styled(WrapperKeyboard)`
  height: 60px;
`
interface IDisplay {
}

const Display:FC<IDisplay> = () => {
    return (
        <WrapperDisplay draggable>
            <Show>0</Show>
        </WrapperDisplay>
    );
};

export default Display;