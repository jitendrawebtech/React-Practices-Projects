import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult";

export const BASE_URL = "http://localhost:9000";

function App() {

  const [data, setData] = useState(null);
  const [filterData, setFilterData] = useState();
  const [selectedBtn, setSelectedBtn] = useState("all");
  const [loading, setLoading] = useState(false);
  const [catchErr, setCatchErr] = useState(null);

  const btnChecked = [
    {
      name: "All",
      type: "all"
    },
    {
      name: "Breakfast",
      type: "breakfast"
    },
    {
      name: "Lunch",
      type: "lunch"
    },
    {
      name: "Dinner",
      type: "dinner"
    }
  ]

  useEffect(() => {
    async function fetchFoodData() {

      try {
        setLoading(true);
        const response = await fetch(BASE_URL);
        const jsonData = await response.json();
        setData(jsonData);
        setFilterData(jsonData);

        setLoading(false);

      } catch (error) {
        setCatchErr("Unable to Fetch Data");
      }
    };

    fetchFoodData();
  }, []);

  function searchFood(val) {
    const searchVal = val.target.value;

    if (searchVal === " ") {
      setFilterData(null);
    }
    else {
      const filterdFood = data.filter(food => food.name.toLowerCase().includes(searchVal.toLowerCase()));
      setFilterData(filterdFood);
    }
  }

  function filterBtnFood(type) {

    if (type === "all") {
      setFilterData(data);
      setSelectedBtn(type);
      return;
    }

    const filterdBtnFood = data.filter(food => food.type.toLowerCase().includes(type.toLowerCase()));
    setFilterData(filterdBtnFood);
    setSelectedBtn(type);

  }


  return (
    <>
      {loading && <h1> Loading...</h1>}
      {catchErr && <h1>{catchErr}</h1>}
      <MainWrapper>
        <div className="container">
          <LogoSearchSec >
            <div className="logo">
              <a href="/"><img src="./images/logo.png" alt="Logo" /></a>
            </div>
            <div>
              <input className="search" type="search" placeholder="Search Food..." onChange={searchFood} />
            </div>
          </LogoSearchSec>

          <FilterBtnsBox>
            {
              btnChecked?.map(foodItem => (
                <Button
                  $isBtnSelected={selectedBtn === foodItem.type}
                  key={foodItem.name}
                  onClick={
                    () => { filterBtnFood(foodItem.type) }
                  }
                >
                  {foodItem.name}
                </Button>
              ))
            }
            {/* <Button onClick={() => filterBtnFood("all")}>All</Button>
            <Button onClick={() => filterBtnFood("breakfast")}>Breakfast</Button>
            <Button>Lunch</Button>
            <Button>Dinner</Button> */}
          </FilterBtnsBox>
        </div>
      </MainWrapper>

      <SearchResult data={filterData} />
    </>
  )
}

const FilterBtnsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
`

export const Button = styled.button`
  background-color: ${({ $isBtnSelected }) => $isBtnSelected ? "green" : "#FF4343"};
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #dd4343;
  }
`

const MainWrapper = styled.div`
  background-color: #323334;
  padding-top: 60px;
  padding-bottom: 20px;
`;
const LogoSearchSec = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .search {
    background-color: transparent;
    border: 1px solid red;
    padding: 10px;
    border-radius: 6px;
    color: white;
    font-size: 16px;
  }
`;

export default App
