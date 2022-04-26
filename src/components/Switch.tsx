import React, {FC, useEffect, useState} from 'react';
import styled from "styled-components";

const WrapperSwitch = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 34px;
  margin-top: 38px;
  margin-right: 50px;
`
const Label = styled.label`
  display: flex;
  padding: 1px;
  width: 243px;
  height: 38px;
  background: #F3F4F6;
  border-radius: 6px;
`
const WrapperCondition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  background: #FFFFFF;
  border: 1px solid #E2E3E5;
  box-sizing: border-box;
  border-radius: 5px;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  color: #4D5562;
`
const Runtime = styled(WrapperCondition)<{border: string, background: string}>`
  width: 108px;
  height: 36px;
  border: ${props => props.border};
  background: ${props => props.background};
`
const Constructor = styled(WrapperCondition)<{border: string, background: string}>`
  width: 133px;
  height: 36px;
  border: ${props => props.border};
  background: ${props => props.background};
`

interface Iswitch {
}
const Switch:FC<Iswitch> = () => {
    const [condition, setСondition] = useState<boolean>(false)

    useEffect(()=>{
        console.log(condition)
    }, [condition])

    const setC = () => {
        condition ? setСondition(false) :setСondition(true)
    }
    return (
        <WrapperSwitch>
            <input hidden id='switch' type={"checkbox"} checked={condition} onChange={setC} />
            <Label htmlFor="switch" className="switch">
                <Runtime border={condition? 'none': '1px solid #E2E3E5'} background={condition? 'none' : '#FFFFFF'}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '10px'}}>
                        <path
                            d="M11.7678 11.7678C12.2366 11.2989 12.5 10.663 12.5 10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.2989 7.76339 10.663 7.5 10 7.5C9.33696 7.5 8.70107 7.76339 8.23223 8.23223C7.76339 8.70107 7.5 9.33696 7.5 10C7.5 10.663 7.76339 11.2989 8.23223 11.7678C8.70107 12.2366 9.33696 12.5 10 12.5C10.663 12.5 11.2989 12.2366 11.7678 11.7678Z"
                            stroke={condition?'#4D5562':'#5D5FEF'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M2.04834 9.99999C3.11001 6.61916 6.26917 4.16666 10 4.16666C13.7317 4.16666 16.89 6.61916 17.9517 9.99999C16.89 13.3808 13.7317 15.8333 10 15.8333C6.26917 15.8333 3.11001 13.3808 2.04834 9.99999Z"
                            stroke={condition?'#4D5562':'#5D5FEF'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Runtime</Runtime>
                <Constructor border={condition?  '1px solid #E2E3E5': 'none'} background={condition?  '#FFFFFF':'none'}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '8px'}}>
                        <path d="M7.5 13.3333L4.16666 10L7.5 6.66668M12.5 6.66668L15.8333 10L12.5 13.3333"
                              stroke={condition?'#5D5FEF':'#4D5562'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Constructor</Constructor>
            </Label>
        </WrapperSwitch>
    );
};

export default Switch;