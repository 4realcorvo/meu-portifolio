import logo from "./logo.svg";
import "./App.css";
import { Menu } from "./components/Menu";
import QuemSou from "./components/QuemSou.js";
import Conhecimentos from "./components/Conhecimentos";

function App() {
  return (
    <div className="App">
      <Menu />
      <QuemSou />
      <Conhecimentos />
    </div>
  );
}

export default App;
