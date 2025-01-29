import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { scrapeHeaders, scrapeTables } from "./actions";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Define routes
app.post("/scrape", async (req, res) => {
  const { actions } = req.body;

  const results: any = {};
  if (actions.includes("scrapeHeaders")) {
    results.headers = await scrapeHeaders();
  }
  if (actions.includes("scrapeTables")) {
    results.tables = await scrapeTables();
  }

  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
