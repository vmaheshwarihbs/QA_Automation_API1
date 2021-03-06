config = require('config')
module.exports = {
  "verbose": true,
  "reporters": [
    "default",
    ["./node_modules/jest-html-reporter", {
      "pageTitle": "Test Report",
      "outputPath": "./reports/api-automation-execution-report"+Date.now().toString()+".html",
      "includeFailureMsg": "true",
      "includeConsoleLog": "true",
      "dateFormat": "dd-mm-yyyy HH:MM:ss"
    }],
  ],
  "testPathIgnorePatterns": [
    "fixtures"
  ],
  
  reporters: ["default", "jest-allure"],
  setupFilesAfterEnv: ["jest-allure/dist/setup"],
  

  

  "globals": {
    "ENV": config.get("app.baseurl"),
    "log": process.env.log
  },
  testResultsProcessor: "jest-allure-reporter"
}
