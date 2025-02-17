import { createContext, useState } from "react";
export const ThemeContext = createContext<ThemeType | null>(null);
interface ThemeType {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function DarkProvider({ children }: any) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  return (
    <div>
      <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
}
