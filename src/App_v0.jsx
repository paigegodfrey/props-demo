import Apple from "./components/Apple/Apple";
import Banana from "./components/Banana/Banana";
import Orange from "./components/Orange/Orange";
import "./App.css";

// Note: suboptimal approach - see improvement in App_v1.jsx

function App() {
  return (
    <div className="App">
      <h1 className="title">Shopping List</h1>
      <Apple />
      <Banana />
      <Orange />
    </div>
  );
}

export default App;
