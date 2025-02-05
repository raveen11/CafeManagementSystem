import React from "react";
import useHomeHooks from "./useHomeHooks";
import styled from "styled-components";
import { Select } from "antd";
import FoodSelect from "./FoodSelect";
import OrderSystem from "./OrderSystem";

const { Option } = Select;

const HomeWrapper = styled.div`
  .list-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  padding: 30px;
  .one-table {
    padding: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    border: 1px solid grey;
    cursor: pointer;
    &:hover {
      background-color: green;
    }
  }
`;
const Home = () => {
  const {
    cafeTables,
    selectedTable,
    setSelectedTable,
    selectOrderFunc,
    foodItems,
    makeOrder,
  } = useHomeHooks();
  return (
    <HomeWrapper>
      {selectedTable ? (
        <>
          <button onClick={() => setSelectedTable(undefined)}>Close</button>
          <div>{selectedTable?.name}</div>
          <FoodSelect
            onChange={(item) => selectOrderFunc(item)}
            foodItems={foodItems}
            makeOrder={makeOrder}
          />
          <OrderSystem
            selectedTable={cafeTables?.find(
              (tab) => tab?.id === selectedTable?.id
            )}
          />
        </>
      ) : (
        <div className="list-wrapper">
          <h2>Cafe Table List</h2>
          {cafeTables?.map((one) => (
            <div
              key={one?.id}
              className="one-table"
              onClick={() => setSelectedTable(one)}>
              {one?.name}
            </div>
          ))}
        </div>
      )}
    </HomeWrapper>
  );
};

export default Home;
