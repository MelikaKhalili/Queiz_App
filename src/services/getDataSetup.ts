// export const API_BASE_URL = `https://opentdb.com/api.php?amount=30`;
import axios from "axios";
export const fetchQuestions = async ({
  countQueiz,
  selectCategories,
  selectDifficulty,
}: any) => {
  const response = await axios.get(
    `https://opentdb.com/api.php?amount=${countQueiz}&category=${selectCategories}&difficulty=${selectDifficulty}`
  );
  console.log(response.data);
  console.log(countQueiz, selectCategories, selectDifficulty);
  return response.data;
};

export const GetCategory = async () => {
  const response = await axios.get(`https://opentdb.com/api_category.php`);
  console.log(response.data);
  return response.data.trivia_categories;
};
