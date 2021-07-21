const { When, Then, Given } = require("cucumber");
const expect = require("chai").expect;
const puppeteer = require("puppeteer");

var { setDefaultTimeout } = require("cucumber");
setDefaultTimeout(60 * 1000);

Given("The browser is open", async function () {
  this.browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'] });
  this.page = await this.browser.newPage();
});

When("open the login page", async function () {
  await this.page.goto("https://blueprint-stag.sponsor.staging.1clickreg.com/");
});

When("Enter the username {string} and password {string}", async function (username,password) {
  await this.page.waitForSelector("[id='username']");
  await this.page.type("input[id='username']", username);
  await this.page.type("input[id='password']", password);
  await this.page.click("input[id='kc-login']");
});

Then("Verify the home page", async function () {
  await this.page.waitForSelector("button[id='menuAnchor']");
  await this.page.screenshot({path: './screenshots/LoginSuccess.png'});
});

Then("Verify error message {string}", async function (errorMsg) {
  const msg =  await this.page.$eval("span[class='kc-feedback-text']", ele => ele.textContent);
  await this.page.screenshot({path: './screenshots/LoginFailure.png'});
  expect (msg).to.include(errorMsg)
  
});

Then("Verify the sponser drop down", async function () {
  await this.page.waitForSelector("button[id='menuAnchor']");
  await this.page.click("button[id='menuAnchor']");
  await this.page.click("ul > li:nth-child(1)");
  await this.page.waitForSelector("input[value='Sponsoreando X16']");
  await this.page.screenshot({path: './screenshots/SponserDropdown.png'});
});

Then("close the browser", async function () {
  await this.browser.close();
});


