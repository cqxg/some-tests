import React, { useState } from "react";
import { styled } from "styled-components";

import { COUNTER_UNIT } from "../utils/constants";

interface CheckboxesProps {
  onCheckboxToggle: (index: number, checked: boolean) => void;
}

const Checkboxes: React.FC<CheckboxesProps> = ({ onCheckboxToggle }) => {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(7).fill(false)
  );

  const handleCheckboxChange = (index: number) => () => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];

    setCheckedItems(updatedCheckedItems);
    onCheckboxToggle(index, !checkedItems[index]);
  };

  return (
    <StyledCheckboxes>
      {checkedItems.map((item, index) => (
        <Checkbox key={index}>
          <label>Checkbox {index + COUNTER_UNIT}</label>
          <input
            type="checkbox"
            checked={item}
            onChange={handleCheckboxChange(index)}
          />
        </Checkbox>
      ))}
    </StyledCheckboxes>
  );
};
export default Checkboxes;

const StyledCheckboxes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Checkbox = styled.div`
  margin: 5px;
  padding: 10px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #444a50;

  label {
    font-size: 16px;
    white-space: nowrap;
  }

  input {
    width: 50px;
    height: 50px;
  }
`;
