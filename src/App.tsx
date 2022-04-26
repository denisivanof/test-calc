import React, {FC, useState} from 'react';
import Display from "./components/Display";
import Keyboard from "./components/Keyboard";
import Symbols from "./components/Symbols";
import Equals from "./components/Equals";
import styled from "styled-components";
import InfoDropPlace from "./components/InfoDropPlace";
import Switch from "./components/Switch";

const WrapperApp = styled.div`
  width: 695px;
  height: 640px;
`
const WrapperCalc = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const DropPlace = styled.div<{background: string, display: string}>`
  width: 243px;
  height: 480px;
  border: 2px dashed #C4C4C4;
  box-sizing: border-box;
  border-radius: 6px;
  background: ${props => props.background};
  display: ${props=> props.display};
  align-items: center;
  justify-content: center;
`

const App:FC = () => {

    const [element, setElement] = useState()
    const [Over, setOver] = useState<boolean>()
    const [IsInfoDropPlace , setIsInfoDropPlace ] = useState(true)
    const [IsDisplayDrop , setIsDisplayDrop ] = useState(false)
    const [IsSymbolsDrop , setIsSymbolsDrop ] = useState(false)
    const [IsKeyboardDrop , setIsKeyboardDrop ] = useState(false)
    const [IsEqualsDrop , setIsEqualsDrop ] = useState(false)

    const onDragStart = (e: any) => {
        setElement(e.target)
        e.dataTransfer.setData('text/plain', e.target.id)
    }
    const onDragOver = (e: any) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy";
        setOver(true)
    }
    const onDrop = (e:any) => {
        e.preventDefault();
        const item = e.dataTransfer.getData("text/plain")
        e.target.appendChild(element)
        setIsInfoDropPlace(false)
        setOver(false)
        switch (item) {
            case 'D':
                setIsDisplayDrop(true)
                break
            case 'S':
                setIsSymbolsDrop(true)
                break
            case 'K':
                setIsKeyboardDrop(true)
                break
            case 'E':
                setIsEqualsDrop(true)
                break
        }
    }
    const onDragLeave = (e: any) => {
        e.preventDefault();
        setOver(false)
    }

  return (
          <WrapperApp>
              <Switch/>
              <WrapperCalc>
                  <div>
                      <Display display={IsDisplayDrop? 'flex': 'none'} opacity={IsDisplayDrop ? '0.5' : '1'}/>
                      <Symbols display={IsSymbolsDrop? 'flex': 'none'} opacity={IsSymbolsDrop ? '0.5' : '1'} />
                      <Keyboard display={IsKeyboardDrop? 'flex': 'none'} opacity={IsKeyboardDrop ? '0.5' : '1'} />
                      <Equals display={IsEqualsDrop? 'flex': 'none'} opacity={IsEqualsDrop ? '0.5' : '1'} />

                      <div draggable onDragStart={onDragStart} id='D'>
                          <Display boxShadow={IsDisplayDrop ? 'none': ''} marginBottom={IsDisplayDrop? '8px': '12px'}/>
                      </div>
                      <div draggable onDragStart={onDragStart} id='S'>
                          <Symbols boxShadow={IsSymbolsDrop ? 'none': ''} marginBottom={IsSymbolsDrop? '8px': '12px'}/>
                      </div>
                      <div draggable onDragStart={onDragStart} id='K'>
                          <Keyboard boxShadow={IsKeyboardDrop ? 'none': ''} marginBottom={IsKeyboardDrop? '8px': '12px'}/>
                      </div>
                      <div draggable onDragStart={onDragStart} id='E'>
                          <Equals boxShadow={IsEqualsDrop ? 'none': ''} marginBottom={IsEqualsDrop? '8px': '12px'}/>
                      </div>
                  </div>
                  <DropPlace display={IsInfoDropPlace? 'flex': 'block'} background={Over ?  '#F0F9FF': 'none'} onDragOver={onDragOver} onDrop={onDrop} onDragLeave={onDragLeave} >
                      <InfoDropPlace IsInfoDropPlace={IsInfoDropPlace}/>
                  </DropPlace>
              </WrapperCalc>

          </WrapperApp>
  );
}

export default App;
