import "./App.css";
import { CategoryProvider } from "./components/CategoryProvider/CategoryProvider";
import DarkProvider from "./components/DarkProvider/DarkProvider";
import ModalProvider from "./components/ModalProvider/ModalProvider";
import { QuizProvider } from "./components/QuestionsProvider/QuestionsProvider";
import RouterApp from "./pages/router/router";
function App() {
  return (
    <div>
      <ModalProvider>
        <DarkProvider>
          <QuizProvider>
            <CategoryProvider>
              <RouterApp />
            </CategoryProvider>
          </QuizProvider>
        </DarkProvider>
      </ModalProvider>
    </div>
  );
}

export default App;
