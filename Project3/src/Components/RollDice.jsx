import styled from "styled-components";

function RollDice({ currentDice, rollDice }) {

  return (
    <>
      <DiceWrapper>
        <div className="dice" onClick={() => rollDice(1, 7)}>
          <img src={`/images/dice_${currentDice}.png`} alt={`Dice ${currentDice}`} />
        </div>
        <p>Click on Divice to roll</p>
      </DiceWrapper>
    </>
  )
}

const DiceWrapper = styled.div`
  text-align: center;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

.dice {
  cursor: pointer;
}
`

export default RollDice;