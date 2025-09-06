import styled from "styled-components";

function TotalScore({ score }) {
  return (
    <>
      <ScoreContainer>
        <h2>{score}</h2>
        <p>Total Score</p>
      </ScoreContainer>
    </>
  )
}

const ScoreContainer = styled.div`
  h2 {
    font-size: 100px;
    font-weight: bold;
    line-height: 1;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;

export default TotalScore;