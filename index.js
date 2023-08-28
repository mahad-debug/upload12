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
