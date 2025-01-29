import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { scrapeHeaders } from "./actions/scrapeHeaders";
import { scrapeTables } from "./actions/scrapeTables";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

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
