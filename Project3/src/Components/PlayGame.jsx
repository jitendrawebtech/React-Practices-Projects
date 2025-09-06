import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutlinedBtn } from "../styled/buttons";
import RulesGame from "./RulesGame";

function PlayGame() {

  // -----------------------------

  const [score, setScore] = useState(0);
  const [selectedNum, setSelectedNum] = useState(0);
  const [currentDice, setCurrentDice] = useState(0);
  const [error, setError] = useState();
  const [gameRule, setGameRule] = useState(false);

  function rollDice(min, max) {
    if (!selectedNum) { setError("Select a Value Please"); return };
    const randomNum = Math.floor(Math.random() * (max - min) + min);
    setCurrentDice(randomNum);

    (selectedNum === randomNum ? setScore(prev => prev + randomNum) : setScore(prev => prev - 2));
    setSelectedNum(null);
  }

  // -----------------------------

  return (
    <>
      <div className="container">
        <FlexBox>
          <TotalScore score={score} />
          <NumberSelector selectedNum={selectedNum} setSelectedNum={setSelectedNum} error={error} setError={setError} />
        </FlexBox>
        <div>
          <RollDice currentDice={currentDice} rollDice={rollDice} />
          <BtnsBox>
            <Button onClick={() => setScore(0)}>Reset Score</Button>
            <OutlinedBtn onClick={() => setGameRule(rule => !rule)}>{gameRule ? "Hide" : "Show"} Rules</OutlinedBtn>
          </BtnsBox>
        </div>
        {gameRule && <RulesGame />}
      </div>
    </>
  )
}

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BtnsBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 20px;
	margin-top: 20px;
`

export default PlayGame;