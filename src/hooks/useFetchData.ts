import axios from "axios";
import { useEffect, useState } from "react";

import { LETTERS_URL, MAX_LETTERS, POLLING_TIMEOUT } from "../utils/constants";

const useFetchLetters = (index: number, checked: boolean) => {
  const [letters, setLetters] = useState<string[]>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const fetchData = async () => {
      try {
        const response = await axios.get(`${LETTERS_URL}${index}`);
        const data: string = response.data.letter;
        const storedLetters = localStorage.getItem(`letters_${index}`);

        const newLetters = [
          ...(storedLetters ? storedLetters.split(",") : []),
          ...data.split(""),
        ];

        if (newLetters.length > MAX_LETTERS) {
          newLetters.splice(0, newLetters.length - MAX_LETTERS);
        }

        localStorage.setItem(`letters_${index}`, newLetters.join(","));
        setLetters(newLetters);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (checked) {
      fetchData();
      interval = setInterval(fetchData, POLLING_TIMEOUT);
    }

    return () => clearInterval(interval);
  }, [index, checked]);

  return letters;
};

export default useFetchLetters;
