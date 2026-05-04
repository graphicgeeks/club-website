import "./App.css";

// Components
import { ThemeToggle } from "../components/ThemeToggle";

function App() {
  return (
    <div className="min-h-screen bg-(--bg-base) text-(--text-base) transition-(--ease-smooth) duration-300">
      <h1>Hello</h1>
      <ThemeToggle />
    </div>
  );
}

export default App;
