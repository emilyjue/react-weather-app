import Search from "./Search";
import "./style.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Search />
        <footer>
          <p class="github-link">
            This website was coded by Emily Jue, and is{" "}
            <a
              href="https://github.com/emilyjue/react-weather-app"
              target="_blank "
            >
              open-sourced
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
