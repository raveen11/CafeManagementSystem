import React, { useState } from "react";
import { InputNumber, Select } from "antd";
import StyledButton from "../../components/elements/Button";

const { Option } = Select;

const FoodSelect = ({ onChange, foodItems, makeOrder }) => {
  const [selectedFood, setSelectedFood] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleFoodChange = (value) => {
    const selected = foodItems.find((food) => food.id === value);
    setSelectedFood(selected);
    onChange({ ...selected, quantity });
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
    if (selectedFood) {
      onChange({ ...selectedFood, quantity: value });
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <Select
        style={{ width: 200 }}
        placeholder="Select food"
        onChange={handleFoodChange}>
        {foodItems.map((food) => (
          <Option key={food.id} value={food.id}>
            {food.name} - Rs{food.price}
          </Option>
        ))}
      </Select>

      <InputNumber
        min={1}
        max={10}
        defaultValue={1}
        onChange={handleQuantityChange}
      />
      <StyledButton buttonName={"Add"} onClick={() => makeOrder()} />
    </div>
  );
};

export default FoodSelect;
