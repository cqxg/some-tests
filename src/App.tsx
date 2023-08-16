import { useState } from "react";
import styled from "styled-components";

import Letters from "./components/Letters";
import Checkboxes from "./components/Checkboxes";

const App: React.FC = () => {
  const [displayedLetters, setDisplayedLetters] = useState<number[]>([]);

  const handleClearLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handleCheckboxToggle = (index: number, checked: boolean) => {
    if (checked) {
      setDisplayedLetters((prevLetters) => [...prevLetters, index]);
    } else {
      setDisplayedLetters((prevLetters) =>
        prevLetters.filter((item) => item !== index)
      );
    }
  };

  return (
    <AppContainer>
      <ClearButton onClick={handleClearLocalStorage}>Restart !</ClearButton>
      <CheckboxesContainer>
        <Checkboxes onCheckboxToggle={handleCheckboxToggle} />
      </CheckboxesContainer>
      <LettersContainer>
        {displayedLetters.map((index, idx) => (
          <Letters key={idx} index={index} checked={true} />
        ))}
      </LettersContainer>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.main`
  width: 800px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const CheckboxesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LettersContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

const ClearButton = styled.button`
  height: 30px;
  width: 100px;
  color: #fff;
  outline: none;
  cursor: pointer;
  margin-top: 15px;
  border-radius: 5px;
  background-color: #2189ff;
  border: 1px solid #444a50;
`;
