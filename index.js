const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

// Set up Chrome options in headless mode
const chromeOptions = new chrome.Options();
chromeOptions.addArguments("--headless");

async function followLinkedInCompany() {
  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();

  try {
    // Define the LinkedIn company URL you want to follow
    const companyUrl = "https://www.linkedin.com/company/nestle-s-a-";

    // Open the LinkedIn company page
    await driver.get(companyUrl);

    // Wait for the follow button to be clickable
    const followButton = await driver.wait(
      until.elementLocated(By.css(".follow-button")),
      10000 // Adjust the timeout as needed
    );

    // Click the follow button
    await followButton.click();

    console.log("Company followed successfully!");
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    // Close the browser
    await driver.quit();
  }
}

followLinkedInCompany();
