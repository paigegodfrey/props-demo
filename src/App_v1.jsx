import ListItem from "./components/ListItem/ListItem";
import "./App.css";

// Note: component `ListItem` takes in props `food` and `quantity`

function App() {
  return (
    <div className="App">
      <h1 className="title">Shopping List</h1>
      <ListItem food="apple" quantity={6}/>
      <ListItem food="banana" quantity={1}/>
      <ListItem food="orange" quantity={10}/>
    </div>
  );
}

export default App;
