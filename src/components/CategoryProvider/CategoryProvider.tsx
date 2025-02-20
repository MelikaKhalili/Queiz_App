import { createContext, useContext, useEffect, useState } from "react";
import { GetCategory } from "../../services/getDataSetup";
const CategoryContext = createContext<any>(null);
export const CategoryProvider = ({ children }: any) => {
  const [category, setCategory] = useState<{ id: number; name: string }[]>([]);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const data = await GetCategory();
        setCategory(data);
      } catch (error) {
        console.log("Falied To Fetch:", error);
      }
    };
    fetchCategory();
  }, []);
  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
export const useCategory = () => useContext(CategoryContext);
