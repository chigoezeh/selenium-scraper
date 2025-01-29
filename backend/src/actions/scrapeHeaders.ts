import { By } from "selenium-webdriver";
import { createDriver } from "../core/driver";

export async function scrapeHeaders(): Promise<string[]> {
  const driver = await createDriver();
  await driver.get("https://example.com");
  const headers = await driver.findElements(By.css("h1, h2, h3"));
  const headerTexts: string[] = [];
  for (const header of headers) {
    headerTexts.push(await header.getText());
  }
  await driver.quit();
  return headerTexts;
}
