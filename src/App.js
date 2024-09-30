import { AppState } from "./context";
import Home from "./Home";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <AppState>
        <Home />
      </AppState>
    </div>
  );
}
