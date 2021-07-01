const reporter = require("cucumber-html-reporter")
const options ={
     theme:'bootstrap',
     jsonFile:'cucumber-report.json',
     output:'./Report/cucumber-html-result.html',
     screenshotsDirectory:'./Screenshots/',
     reportSuiteAsScenarios:true,
     launchReport:false,
     storeScreenshots:true
     
}
reporter.generate(options)