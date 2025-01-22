import "./App.css";
import { Route, Routes } from "react-router";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />}></Route>
    </Routes>
  );
}

export default App;
