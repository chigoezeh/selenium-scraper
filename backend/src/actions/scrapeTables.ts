import { By } from "selenium-webdriver";
import { createDriver } from "../core/driver";

export async function scrapeTables(): Promise<string[][]> {
  const driver = await createDriver();
  await driver.get("https://example.com");
  const tables = await driver.findElements(By.css("table"));
  const tableData: string[][] = [];
  for (const table of tables) {
    const rows = await table.findElements(By.css("tr"));
    for (const row of rows) {
      const cells = await row.findElements(By.css("td, th"));
      const rowData: string[] = [];
      for (const cell of cells) {
        rowData.push(await cell.getText());
      }
      tableData.push(rowData);
    }
  }
  await driver.quit();
  return tableData;
}
