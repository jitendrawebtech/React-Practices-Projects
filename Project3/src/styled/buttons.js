import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 30px;
  background-color: black;
  color: white;
	border: 1px solid black;
  font-size: 16px;
	border-radius: 6px;
	cursor: pointer;
	transition: all 0.3s;
	&:hover {
		  background-color: white;
  		color: black;
	}
`;

export const OutlinedBtn = styled(Button)`
  background-color: white;
  color: black;
	border: 1px solid black;
	&:hover {
		  background-color: black;
  		color: white;
	}
`