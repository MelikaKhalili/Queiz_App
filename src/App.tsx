import "./App.css";
import DarkProvider from "./components/DarkProvider/DarkProvider";
import ModalProvider from "./components/ModalProvider/ModalProvider";
import RouterApp from "./pages/router/router";
function App() {
  return (
    <div>
      <ModalProvider>
        <DarkProvider>
          <RouterApp />
        </DarkProvider>
      </ModalProvider>
    </div>
  );
}

export default App;
