import { Fragment, useState } from "react"
import arrayShuffle from 'array-shuffle';
import styled from "styled-components"
import Bowser from '../Images/Bowser.jpeg'
import CloudStrife from '../Images/CloudStrife.jpeg'
import Cortana from '../Images/Cortana.jpeg' 
import Doomguy from '../Images/Doomguy.jpeg'
import GordonFreeman from '../Images/GordonFreeman.jpeg'
import IsaacClarke from '../Images/IsaacClarke.jpeg'
import JillValentine from '../Images/JillValentine.jpeg'
import Kratos from '../Images/Kratos.jpeg'
import LaraCroft from '../Images/LaraCroft.jpeg'
import Luigi from '../Images/Luigi.jpeg'
import Mario from '../Images/Mario.jpeg'
import MasterChief from '../Images/MasterChief.jpeg'
import NathanDrake from '../Images/NathanDrake.jpeg'
import SamFisher from '../Images/SamFisher.jpeg'
import SamusAran from '../Images/SamusAran.jpeg'
import SolidSnake from '../Images/SolidSnake.jpeg'
import SylvanasWindrunner from '../Images/SylvanasWindrunner.jpeg'
import Yoshi from '../Images/Yoshi.jpeg'
import Card from "./Card"

const Main1 = styled.div`
    overflow: auto;
    display: grid;
    padding: 2em;
    height: 100%;
    gap: 40px;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(350px, 500px));
    ::-webkit-scrollbar {
        overflow: overlay;
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background-color: #000;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #222;
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color: #444;
    }
  `

  const Button = styled.button`
    background-color: #555555;
    border: none;
    color: white;
    width: 500px;
    min-width: fit-content;
    padding: 20px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 40px;
    &:hover {
      transform: scale(1.1);
      background-color: rgb(37, 37, 37);
    }
  `

  const Menu = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    height: 100%;
    padding-left: 20rem;
    padding-right: 20rem;
  `

  const Th = styled.th`
text-align: left;
font-size: 3em;
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
font-size: 2em;
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

const HighscoreMenu = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 1em;
  flex-direction: column;
  background: inherit;
`

let AlreadyClicked = []
let NotClicked = []

const Main = ({start, pause, reset, setCurrentScore, setBestScore, currentScore, bestScore, seconds, minutes}) => {

  const [gameRunning, setGameRunning] = useState(false)
  const [showImages, setShowImages] = useState([])
  const [showHighscores, setShowHighscores] = useState(false)
  const Images = [];
  //Load images
  (() => {
    Images.push({image: Bowser, text: "Bowser"})
    Images.push({image: CloudStrife, text: "Cloud Strife"})
    Images.push({image: Cortana, text: "Cortana"})
    Images.push({image: Doomguy, text: "Doomguy"})
    Images.push({image: GordonFreeman, text: "Gordon Freeman"})
    Images.push({image: IsaacClarke, text: "Isaac Clarke"})
    Images.push({image: JillValentine, text: "Jill Valentine"})
    Images.push({image: Kratos, text: "Kratos"})
    Images.push({image: LaraCroft, text: "Lara Croft"})
    Images.push({image: Luigi, text: "Luigi"})
    Images.push({image: Mario, text: "Mario"})
    Images.push({image: MasterChief, text: "Master Chief"})
    Images.push({image: NathanDrake, text: "Nathan Drake"})
    Images.push({image: SamFisher, text: "Sam Fisher"})
    Images.push({image: SamusAran, text: "Samus Aran"})
    Images.push({image: SolidSnake, text: "Solid Snake"})
    Images.push({image: SylvanasWindrunner, text: "Sylvanas Windrunner"})
    Images.push({image: Yoshi, text: "Yoshi"})
  })()
 
  const startFreshGame = () => {
    reset()
    AlreadyClicked = []
    NotClicked = [...Images]
    shuffleCards()
    setGameRunning(true)
    start() //clock
  }

  const shuffleCards = () => {
    let showSix = []
    while(showSix.length < 6 ) {
      let randomNotClicked = NotClicked[Math.floor(Math.random() * NotClicked.length)];
      let randomAlreadyClicked = AlreadyClicked[Math.floor(Math.random() * AlreadyClicked.length)];
      if(randomNotClicked && !showSix.find(obj => obj.text === randomNotClicked.text)) {
        showSix.push(randomNotClicked)
        if(showSix.length === 6) {
          break
        }
      
      }
      if(randomAlreadyClicked && !showSix.find(obj => obj.text === randomAlreadyClicked)) {
        showSix.push(Images.find(obj => obj.text === randomAlreadyClicked))
        if(showSix.length === 6) {
          break
        }
      }
    }
    const shuffled = arrayShuffle(showSix);
    setShowImages(shuffled)
  }

  const handleClickLogic = (event, text) => {
    //Lose game
    if(AlreadyClicked.find(obj => obj === text)) {
      setGameRunning(false)
      setCurrentScore(0)
      if (localStorage.getItem("highscores") === null) {
        localStorage.setItem("highscores", JSON.stringify([]))
      }
      const storedHighscores = JSON.parse(localStorage.getItem("highscores"))
      storedHighscores.push({score: currentScore, minutes: minutes, seconds: seconds})
      localStorage.setItem("highscores", JSON.stringify(storedHighscores))
      reset()
      pause()
    }
    else {
      setCurrentScore(currentScore + 1)
      if(bestScore <= currentScore) {
        setBestScore(currentScore + 1)
      }
      AlreadyClicked.push(text)
      NotClicked = NotClicked.filter(obj => obj.text !== text)
      shuffleCards()
    }
    if(NotClicked.length === 0) {
      setGameRunning(false)
      setCurrentScore(0)
      if (localStorage.getItem("highscores") === null) {
        localStorage.setItem("highscores", JSON.stringify([]))
      }
      const storedHighscores = JSON.parse(localStorage.getItem("highscores"))
      storedHighscores.push({score: currentScore, minutes: minutes, seconds: seconds})
      localStorage.setItem("highscores", JSON.stringify(storedHighscores))
      reset()
      pause()
    }
  }
  if(showHighscores) {
    if (localStorage.getItem("highscores") === null) {
      localStorage.setItem("highscores", JSON.stringify([]))
    }
    const array = JSON.parse(localStorage.getItem("highscores"))
    array.sort(function (a, b) {
      return b.score - a.score || a.minutes - b.minutes || a.seconds - b.seconds;
    });
    const slicedArray = array.slice(0, 10)
    return (
      <HighscoreMenu>
        <Table>
          <thead>
            <Tr>
              <Th>Rank</Th>
              <Th>Score</Th>
              <Th>Time</Th>
            </Tr>
          </thead>
          <tbody>
            {slicedArray.map((highscore, index) => {
              return <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{highscore.score}</Td>
                <Td>{highscore.minutes}:{highscore.seconds}</Td>
              </Tr>
            })}
          </tbody>
        </Table>
        <Button onClick={() => setShowHighscores(false)}>Back</Button>
      </HighscoreMenu>
    )
  }

  return (
    <>
      {gameRunning === true &&
        <Main1>
          {showImages.map((image, index) => {
            return <Card value={image.text} onClick={handleClickLogic} key={index} photo={image.image} text={image.text}/>
          })}
        </Main1>
      }
      {gameRunning === false &&
        <Menu>
          <Button onClick={startFreshGame}>Start</Button>
          <Button onClick={() => setShowHighscores(true)}>Local Highscore</Button>
        </Menu>
      }
    </>
    
  )
}

export default Main
