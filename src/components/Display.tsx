import React, {FC} from 'react';
import styled from "styled-components";
import {WrapperBox} from "./Keyboard";
import {IPropsOnDrop} from "../type/type";

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
const WrapperDisplay = styled(WrapperBox)<IPropsOnDrop>`
  height: 60px;
  opacity: ${props=>props.opacity};
  box-shadow: ${props=> props.boxShadow};
  display: ${props=>props.display};
  margin-bottom: ${props=>props.marginBottom};
`
const Display:FC<IPropsOnDrop> = (props) => {
    return (
        <WrapperDisplay {...props}>
            <Show>0</Show>
        </WrapperDisplay>
    );
};

export default Display;