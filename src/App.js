import { Button } from "cra-meta-repo-ui1";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <div>
                <Button
                    backgroundColor="#f918cf"
                    label="Button"
                    onClick={() => {}}
                    primary
                />
            </div>
        </div>
    );
}

export default App;
