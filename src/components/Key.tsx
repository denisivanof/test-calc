import React, {FC} from 'react';
import styled from "styled-components";

const Btn = styled.button<{width:string}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  border: 1px solid #E2E3E5;
  box-sizing: border-box;
  border-radius: 6px;
  height: 48px;
  width: ${props => props.width};
`
export interface IkeyData {
    width: string,
    val: string,
}
const Key: FC<IkeyData> = ({val, width}) => {
    return <Btn width={width} onClick={()=>console.log(val)}>{val}</Btn>
};

export default Key;