// // Import Selenium WebDriver
// const { Builder, By } = require("selenium-webdriver");

// // Create new WebDriver instance
// const driver = new Builder().forBrowser("chrome").build();

// // Navigate to page with follow button
// driver.get("https://www.linkedin.com/company/nestle-s-a-/");

// // Wait for page to load
// driver.sleep(5000);

// // Find follow button and click it
// const followButton = driver.findElement(By.css(".LI-simple-link"));
// followButton.click();

// // Wait for confirmation
// driver.sleep(2000);

// // Close browser
// driver.quit();
//////////
// const { Builder, By, until } = require("selenium-webdriver");

// async function followOnLinkedIn() {
//   const driver = await new Builder().forBrowser("chrome").build();

//   try {
//     // Navigate to LinkedIn page
//     console.log("Navigating to LinkedIn page...");
//     await driver.get("https://www.linkedin.com/company/nestle-s-a/");

//     // Wait for follow button to be clickable
//     const followButton = await driver.wait(
//       until.elementLocated(By.css(".LI-simple-link")),
//       10000
//     );
//     console.log("Follow button located");

//     // Click the follow button
//     await followButton.click();
//     console.log("Clicked the follow button");
//   } catch (err) {
//     console.error("There was an error:", err);
//   } finally {
//     // Close browser
//     await driver.quit();
//     console.log("Browser closed");
//   }
// }

// followOnLinkedIn();

//////////////////
// client.js 

const axios = require('axios');

async function clickFollow() {

  try {
    // Load page with button
    await axios.get('http://localhost:3000/'); 

    // Wait for page to load
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Click follow button (using WebDriver)
    const {Builder, By} = require('selenium-webdriver');
    let driver = new Builder().forBrowser('chrome').build();

    let button = await driver.findElement(By.css('.LI-simple-link'));
    await button.click();

    await driver.quit();

  } catch (error) {
    console.log(error);
  }

}

clickFollow();
