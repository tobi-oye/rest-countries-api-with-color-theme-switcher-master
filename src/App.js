// import logo from "./logo.svg";
import "./styles.scss";
import Search from "./Components/Search/Search";
import Filter from "./Components/Filter/filter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Where in the World</h1>
        <div>Dark Mode</div>
      </header>
      <section className="section-one">
        <Search />
        <Filter />
      </section>
    </div>
  );
}

export default App;
