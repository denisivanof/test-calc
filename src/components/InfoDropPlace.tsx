import React, {FC} from 'react';
import styled from "styled-components";
import g from "../Group.png";


const WrapperInfoDropPlace = styled.div<{display: string}>`
  display: ${props=> props.display};
`

const InfoDropPlaceImg = styled.div`
  display: flex;
  justify-content: center;
`
const InfoDropPlaceTitle = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  width: 127px;
  height: 17px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #5D5FEF;
`
const InfoDropPlaceText = styled.div`
  margin-top: 4px;
  width: 127px;
  height: 30px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #6B7280;
`

interface IInfoDropPlace {
    IsInfoDropPlace: boolean
}
const InfoDropPlace:FC<IInfoDropPlace> = ({IsInfoDropPlace}) => {
    return (
        <WrapperInfoDropPlace display={IsInfoDropPlace ? 'flex': 'none'}>
            <div>
                <InfoDropPlaceImg><img src={g}/></InfoDropPlaceImg>
                <InfoDropPlaceTitle>Перетащите сюда</InfoDropPlaceTitle>
                <InfoDropPlaceText>любой элемент из левой панели</InfoDropPlaceText>
            </div>
        </WrapperInfoDropPlace>
    );
};

export default InfoDropPlace;