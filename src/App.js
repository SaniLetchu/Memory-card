import styled from "styled-components"
import backgroundImage from './Images/Background.jpg'
import { useState } from "react"
import Main from "./Components/Main"
import { useStopwatch } from 'react-timer-hook';

const Body = styled.div`
margin: 0;
display: flex;
height: 100vh;
flex-direction: column;
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;
background-position: top;
background-image:url(${backgroundImage});
`

const Text = styled.p`
font-size: 0.8em;
font-family: Poppins,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
text-align: center;
color: white;
`

const H1 = styled.h1`
font-size: 4em;
font-family: Poppins,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
text-align: center;
color: white;
`
const Heading = styled.div`
margin: 0;
display: flex;
padding: 1em;
flex-direction: column;
background: inherit;
box-shadow: inset 0 0 0 200px rgba(255,255,255,0.05);
`
const Footer = styled.div`
margin: 0;
padding: 0.5em;
margin-top: auto;
background: inherit;
box-shadow: inset 0 0 0 200px rgba(255,255,255,0.05);
display: flex;
flex-direction: column;
`
const Th = styled.th`
text-align: left;
font-size: 1.5em;
word-wrap: break-word;
font-family: Poppins,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
text-align: center;
color: white;
`
const Td = styled.td`
overflow: hidden;
word-wrap: break-word;
padding-bottom: 5px;
padding-top: 5px;
font-size: 1.5em;
font-family: Poppins,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
text-align: center;
color: white;
`
const Tr = styled.tr`
font-family: Poppins,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
text-align: center;
color: white;
`
const Table = styled.table`
width: 100%;
table-layout: fixed;
word-wrap: break-word;
`

const App = () => {
  const {
    seconds,
    minutes,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  
  
  return (
    <Body>
      <Heading>
        <H1>Game Character Memory Game</H1>
        <Table>
          <thead>
            <Tr>
              <Th>Current Score</Th>
              <Th>Time</Th>
              <Th>Current Best Score</Th>
              </Tr>
          </thead>
          <tbody>
            <Tr>
              <Td>{currentScore}</Td>
              <Td>{minutes}:{seconds}</Td>
              <Td>{bestScore}</Td>
            </Tr>
          </tbody>
        </Table>
      </Heading>
      <Main start={start} pause={pause} reset={reset} setBestScore={setBestScore} setCurrentScore={setCurrentScore} currentScore={currentScore} bestScore={bestScore} seconds={seconds} minutes={minutes}/>
      <Footer>
        <Text>Copyright © The Odin Project 2022, Sani Letchu</Text>
      </Footer>
    </Body>
  )
}

export default App
