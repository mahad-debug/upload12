// const { Builder, By, until } = require("selenium-webdriver");

// async function followCompany(companyUrl) {
//   let driver = await new Builder().forBrowser("chrome").build();

//   try {
//     await driver.get(companyUrl);

//     // Wait for page to load
//     await driver.sleep(5000);

//     // Wait for follow button to be clickable
//     let followButton = await driver.wait(
//       until.elementLocated(By.css(".follow"))
//     );

//     await followButton.click();

//     // Wait for button click to register
//     await driver.sleep(20000);
//   } catch (err) {
//     if (err instanceof NoSuchWindowError) {
//       // Refresh page and re-find button if page closed
//       console.log("Page closed early - retrying...");
//       await driver.navigate().refresh();
//       followButton = await driver.wait(until.elementLocated(By.css(".follow")));
//       await followButton.click();
//     } else {
//       throw err;
//     }
//   } finally {
//     await driver.quit();
//   }
// }

// // Company URL
// const companyUrl = "https://www.linkedin.com/company/nestle-s-a-/";

// followCompany(companyUrl);

////////
// const { Builder, By, Key, until } = require("selenium-webdriver");

// // Create a new WebDriver instance (make sure you have ChromeDriver installed)
// const driver = new Builder().forBrowser("chrome").build();

// // Define the URL of the HTML page (replace with the local file path)
// const htmlPageUrl = "http://127.0.0.1:5500/button.htm"; // Replace with the actual file path

// (async function () {
//   try {
//     // Open the HTML page
//     await driver.get(htmlPageUrl);

//     // Wait for the LinkedIn Follow Button to load (adjust the selector as needed)
//     const linkedinFollowButton = await driver.wait(
//       until.elementLocated(By.css(".follow"))
//     );

//     // Find the "Automate Follow" button by ID
//     const automationButton = await driver.findElement(
//       By.id("automation-button")
//     );

//     // Click the "Automate Follow" button to trigger automation
//     automationButton.click();

//     // Wait for some time (for demonstration)
//     await driver.sleep(50000);
//   } catch (error) {
//     console.error("An error occurred:", error);
//   } finally {
//     // Close the browser
//     await driver.quit();
//   }
// })();
////////////
// const { Builder, By, until } = require("selenium-webdriver");

// (async function () {
//   // Create a new WebDriver instance (make sure you have ChromeDriver installed)
//   const driver = new Builder().forBrowser("chrome").build();

//   try {
//     // Define the Company URL (replace with your desired URL)
//     const companyUrl = "http://127.0.0.1:5500/button.htm";

//     // Open the Company URL
//     await driver.get(companyUrl);

//     // Wait for page to load
//     await driver.sleep(5000);

//     // Wait for follow button to be clickable
//     let followButton = await driver.wait(
//       until.elementLocated(By.css(".follow"))
//     );

//     // Click the follow button
//     await followButton.click();

//     // Wait for button click to register
//     await driver.sleep(20000);
//   } catch (err) {
//     if (err instanceof NoSuchWindowError) {
//       // Refresh page and re-find button if page closed
//       console.log("Page closed early - retrying...");
//       await driver.navigate().refresh();
//       followButton = await driver.wait(until.elementLocated(By.css(".follow")));
//       await followButton.click();
//     } else {
//       throw err;
//     }
//   } finally {
//     // Close the browser
//     await driver.quit();
//   }
// })();
/////
const express = require("express");
var cors = require("cors");
const { Builder, By, until } = require("selenium-webdriver");

const app = express();
app.use(cors());
const port = 3000;

app.get("/api/follow-company", async (req, res) => {
  try {
    console.log("Hit api");

    const driver = await new Builder().forBrowser("chrome").build();

    // Define the Company URL (replace with the actual LinkedIn company URL)
    const companyUrl = "https://www.linkedin.com/company/nestle-s-a-";

    // Open the Company URL in the same tab
    await driver.get(companyUrl);

    // Rest of your automation code here

    // Quit the WebDriver when done
    // Wait for follow button to be clickable
    let followButton = await driver.wait(
      until.elementLocated(By.css(".follow"))
    );

    // await driver.sleep(5000);

    // Click the follow button
    await followButton.click();

    // Wait for button click to register
    await driver.sleep(20000);

    // Close the browser
    await driver.quit();

    // Send a response back to the client (HTML page)
    res.json({ message: "Company followed successfully!" });
  } catch (err) {
    // Handle errors
    console.error("An error occurred:", err);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
//////////////
