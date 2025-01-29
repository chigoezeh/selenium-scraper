import { Builder, WebDriver } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';

export async function createDriver(): Promise<WebDriver> {
  const options = new chrome.Options();
  options.addArguments('--headless'); // Run in headless mode
  return await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();
}