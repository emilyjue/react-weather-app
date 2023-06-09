import Search from "./Search";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <footer>
          <p class="github-link">
            This website was coded by Emily Jue and is{" "}
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
