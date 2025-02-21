import { createContext, useState } from "react";
export const ThemeContext = createContext<ThemeType | null>(null);
interface ThemeType {
  isLightMode: boolean;
  setIsLightMode: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function DarkProvider({ children }: any) {
  const [isLightMode, setIsLightMode] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  return (
    <div>
      <ThemeContext.Provider
        value={{ isLightMode, setIsLightMode, isDarkMode, setIsDarkMode }}
      >
        {children}
      </ThemeContext.Provider>
    </div>
  );
}
