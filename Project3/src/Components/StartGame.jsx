import styled from "styled-components";
import { Button } from "../styled/buttons";

function StartGame({ toggle }) {
	return (
		<>
			<div className="container">
				<FlexBox >
					<div>
						<img src="/images/dices_1.png" alt="Dice Game Pic" />
					</div>
					<div className="cont">
						<h1>Dice Game</h1>
						<Button onClick={toggle}>Start Game</Button>
					</div>
				</FlexBox>
			</div>
		</>
	)
}

const FlexBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100vh;
		.cont {
		h1 {
			font-size: 96px;
		}
	}
`;


export default StartGame;