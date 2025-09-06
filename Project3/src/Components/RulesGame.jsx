import styled from "styled-components";

function RulesGame() {
  return (
    <>
      <RulesWrapper >
        <h3>How to play dice game</h3>
        <ul>
          <li>Select any number</li>
          <li>Click on dice image</li>
          <li>After click on  dice  if selected number is equal to dice number you will get same point as dice</li>
          <li>If you get wrong guess then  2 point will be dedcuted</li>
        </ul>
      </RulesWrapper>
    </>
  )
}

const RulesWrapper = styled.div`
background-color: #FBF1F1;
border-radius: 10px;
padding: 20px;
margin-top: 20px; 
margin-bottom: 20px; 
  ul{
    padding-left: 20px;
    margin-top: 10px;
    line-height: 2;
  }
`

export default RulesGame;