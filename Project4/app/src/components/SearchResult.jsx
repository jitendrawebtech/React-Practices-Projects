import styled from "styled-components"
import { BASE_URL, Button } from "../App"

const SearchResult = ({ data }) => {
  // console.log(data);

  return (
    <FoodCardSec>
      <div className="container">
        <FoodCardBox>
          {
            data?.map(({ name, image, text, price }) => (
              <FoodCard key={name}>
                <div className="foodImage">
                  <img src={BASE_URL + image} alt={name} />
                </div>
                <div className="foodInfo">
                  <div className="info">
                    <h2>{name}</h2>
                    <p>{text}</p>
                  </div>
                  <Button>${price.toFixed(2)}</Button>
                </div>
              </FoodCard>
            ))
          }
        </FoodCardBox>
      </div>
    </FoodCardSec>
  )
}

const FoodCardSec = styled.section`
  background: url(./images/bg.png) no-repeat top center/100%;
  height: 100vh;
  padding-top: 100px;
`

const FoodCardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  
`

const FoodCard = styled.div`
  column-gap: 10px;
  border: 0.66px solid white;
/*   border-image-source:   radial-gradient(
    80.69% 208.78% at 108.28% 112.58%,
    #eabfff 0%,
    rgba(135, 38, 183, 0) 100%
  )
  radial-gradient(
    80.38% 222.5% at -13.75% -12.36%,
    #98f9ff 0%,
    rgba(255, 255, 255, 0) 100%
  ) */

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;

  .foodInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    row-gap: 20px;
  }
  h2, p {
    color: white;
  }
`


export default SearchResult