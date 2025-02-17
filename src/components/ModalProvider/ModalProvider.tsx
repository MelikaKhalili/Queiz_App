import { createContext, useState } from "react";
interface MyContextType {
  OpenModal: boolean | null;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean | null>>;
}
export const MyContext = createContext<MyContextType | null>(null);

export default function ModalProvider({ children }: any) {
  const [OpenModal, setOpenModal] = useState<boolean | null>(false);
  return (
    <div>
      <MyContext.Provider value={{ OpenModal, setOpenModal }}>
        {children}
      </MyContext.Provider>
    </div>
  );
}
