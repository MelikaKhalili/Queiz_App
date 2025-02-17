import "./App.css";
import ModalProvider from "./components/ModalProvider/ModalProvider";
import RouterApp from "./pages/router/router";
function App() {
  return (
    <div>
      <ModalProvider>
        <RouterApp />
      </ModalProvider>
    </div>
  );
}

export default App;
