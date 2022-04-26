import React, {FC} from 'react';
import {WrapperBox} from "./Keyboard";
import styled from "styled-components";
import {IPropsOnDrop} from "../type/type";


const WrapperEqual = styled(WrapperBox)<IPropsOnDrop>`
  height: 72px;
  opacity: ${props=>props.opacity};
  box-shadow: ${props=> props.boxShadow};
  display: ${props=>props.display};
  margin-bottom: ${props=>props.marginBottom};
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

const Equals:FC<IPropsOnDrop> = (props) => {
    return (
        <WrapperEqual {...props}>
            <EqualBtn>=</EqualBtn>
        </WrapperEqual>
    );
};

export default Equals;