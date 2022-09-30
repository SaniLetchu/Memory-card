import styled from "styled-components"

const Card1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: red;
    flex-direction: column;
    height: 400px;
    padding: 10px:
    border-radius: 10px;
    gap: 10px;
    border-radius: 15px;
    background: inherit;
    backdrop-filter: blur(10px);
    &:hover {
      transform: scale(1.1);
      backdrop-filter: blur(20px);
    }
  `

  const Image = styled.img`
    margin-top: 2em;
    width: 70%;
    height: 70%;
    object-fit: contain;
    clip-path: square();
    user-drag: none;
    user-select: none;
  `

  const Text = styled.p`
    font-size: 2em;
    color: white;
    font-family: Poppins,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  `

const Card = ({photo, text, onClick, value}) => {


  return (
    <Card1 onClick={(event) => onClick(event, text)}>
      <Image src={photo}/>
      <Text>{text}</Text>     
    </Card1>
  )
}

export default Card
