// BeforeAll(async () => {
//   const puppeteer = require("puppeteer");
//   scope.driver = puppeteer;
//   // set up launchProperties object with specified parameters
//   let launchProperties = {
//     headless: constants.headlessMode,
//     ignoreHTTPSErrors: true,
//     args: ["--no-sandbox", "--disable-setuid-sandbox"],
//     devtools: false,
//   };
//   scope.browser = await scope.driver.launch(launchProperties);
// });

// Before(async () => {
//   // create new page between scenarios
//   scope.page = await scope.browser.newPage();
//   await scope.page.setViewport({ width: 1280, height: 800 });
//   // add in accept language header - this is required when running in headless mode
//   await scope.page.setExtraHTTPHeaders({
//     "Accept-Language": "en-US,en;q=0.8,zh-TW;q=0.6",
//   });
// });

// After(async function (scenario) {
//   let name = scenario.pickle.name.replace(/ /g, "-");
//   let result = scenario.result.status;
//   if (Status.FAILED) {
//     const stream = await scope.page.screenshot({
//       path: `./screenshots/${result}-[${name}].png`,
//       fullPage: true,
//     });
//     // close the current page at end of scenario
//     await scope.page.close();
//     return this.attach(stream, "image/png");
//   } else {
//     // take screenshot of the last page
//     const stream = await scope.page.screenshot({
//       path: `./screenshots/${result}-[${name}].png`,
//       fullPage: true,
//     });
//     // close the current page at end of scenario
//     await scope.page.close();
//     return this.attach(stream, "image/png");
//   }
// });
