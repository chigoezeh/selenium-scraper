import React, { useState } from "react";
import axios from "axios";

const ActionSelector: React.FC = () => {
  const [selectedActions, setSelectedActions] = useState<string[]>([]);
  const [results, setResults] = useState<any>(null);

  const handleScrape = async () => {
    const response = await axios.post("http://localhost:5000/scrape", {
      actions: selectedActions,
    });
    setResults(response.data);
  };

  return (
    <div>
      <h2>Select Actions</h2>
      <label>
        <input
          type="checkbox"
          value="scrapeHeaders"
          onChange={(e) => {
            if (e.target.checked) {
              setSelectedActions([...selectedActions, e.target.value]);
            } else {
              setSelectedActions(
                selectedActions.filter((action) => action !== e.target.value)
              );
            }
          }}
        />
        Scrape Headers
      </label>
      <label>
        <input
          type="checkbox"
          value="scrapeTables"
          onChange={(e) => {
            if (e.target.checked) {
              setSelectedActions([...selectedActions, e.target.value]);
            } else {
              setSelectedActions(
                selectedActions.filter((action) => action !== e.target.value)
              );
            }
          }}
        />
        Scrape Tables
      </label>
      <button onClick={handleScrape}>Start Scraping</button>

      {results && (
        <div>
          <h3>Results</h3>
          <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ActionSelector;
