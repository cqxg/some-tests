import React from "react";
import { styled } from "styled-components";

import useFetchLetters from "../hooks/useFetchData";

interface LettersProps {
  index: number;
  checked: boolean;
}

const Letters: React.FC<LettersProps> = ({ index, checked }) => {
  const letters = useFetchLetters(index, checked);

  return (
    <StyledLetters>
      {letters.map((letter, idx) => (
        <Letter key={idx}>{letter}</Letter>
      ))}
    </StyledLetters>
  );
};

export default Letters;

const StyledLetters = styled.div`
  width: 800px;
  display: flex;
  overflow-y: auto;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0075ff;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #2189ff;
  }

  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }
`;

const Letter = styled.div`
  display: flex;
  margin: 14px 7px;
  font-size: 100px;
  min-width: 240px;
  min-height: 240px;
  border-radius: 5px;
  align-items: center;
  pointer-events: none;
  justify-content: center;
  border: 1px solid #444a50;
`;
