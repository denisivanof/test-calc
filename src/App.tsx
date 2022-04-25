import React, {FC} from 'react';
import Display from "./components/Display";
import Keyboard from "./components/Keyboard";
import Symbols from "./components/Symbols";
import Equals from "./components/Equals";
import styled from "styled-components";
import InfoDropPlace from "./components/InfoDropPlace";

const WrapperApp = styled.div`
  display: flex;
  justify-content: space-between;
`
const DropPlace = styled.div`
  width: 243px;
  height: 480px;
  border: 2px dashed #C4C4C4;
  box-sizing: border-box;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const App:FC = () => {
    const onDragOver = (e: any) => {
        e.preventDefault()
        console.log(e)
    }
    const onDrop = (e: any) => {
        e.preventDefault()
        console.log(e)
    }
  return (
          <WrapperApp>
              <div>
                  <Display/>
                  <Symbols />
                  <Keyboard />
                  <Equals />
              </div>
              <DropPlace onDragOver={onDragOver} onDrop={onDrop}>
                  <InfoDropPlace/>
              </DropPlace>
          </WrapperApp>
  );
}

export default App;
