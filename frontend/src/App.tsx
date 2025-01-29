import ActionSelector from "./components/ActionSelector";
import ProgressDisplay from "./components/ProgressDisplay";

function App() {
  return (
    <div>
      <h1>Selenium Scraper</h1>
      <ActionSelector />
      <ProgressDisplay progress="Waiting for actions..." />
    </div>
  );
}

export default App;
