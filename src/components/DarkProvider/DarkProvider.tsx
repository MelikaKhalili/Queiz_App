import { createContext, useState } from "react";
export const ThemeContext = createContext<ThemeType | null>(null);
interface ThemeType {
  isLightMode: boolean;
  setIsLightMode: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function DarkProvider({ children }: any) {
  const [isLightMode, setIsLightMode] = useState<boolean>(false);
  return (
    <div>
      <ThemeContext.Provider value={{ isLightMode, setIsLightMode }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
}
