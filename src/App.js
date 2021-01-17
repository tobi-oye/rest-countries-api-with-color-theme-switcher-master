import logo from "./logo.svg";
import "./App.css";
import Search from "./Components/Search/Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Where in the World</h1>
      </header>
      <section>
        <Search />
      </section>
    </div>
  );
}

export default App;
