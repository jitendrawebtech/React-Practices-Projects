import styled from "styled-components";


function NumberSelector({ selectedNum, setSelectedNum, error, setError }) {

  const arrNumbers = [1, 2, 3, 4, 5, 6];

  // console.log(selectedNum);
  return (
    <div>
      <p style={{ color: "red" }}>{error}</p>
      <FlexBox>
        {
          arrNumbers.map((item, i) => (
            <StyledBtn
              $isSelected={item === selectedNum}
              key={i}
              onClick={() => { setSelectedNum(item); setError("") }}
            >
              {item}
            </StyledBtn>
          ))
        }
      </FlexBox>
      <p className="text-right">Select Number</p>
    </div>
  )
}

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

const StyledBtn = styled.button`
    border: 1px solid black;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => (props.$isSelected ? "black" : "white")};
    color: ${(props) => (!props.$isSelected ? "black" : "white")};
    font-size: 18px;
    cursor: pointer;
    transition: all 0.3s;
`

export default NumberSelector;