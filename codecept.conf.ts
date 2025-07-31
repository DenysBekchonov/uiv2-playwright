import {
  setHeadlessWhen,
  setCommonPlugins
} from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './Scenarios/*-tests.ts',
  output: './test-reports',
  helpers: {
    Playwright: {
      browser: 'chromium', // Browser type: 'chromium', 'firefox', 'webkit'
      url: 'https://automationexercise.com', // Base URL for tests
      show: true, // Show browser window (set to false for headless)
      waitForTimeout: 5000, // Default wait timeout in ms
      waitForAction: 500, // Wait between actions in ms
      restart: false, // Restart browser between tests
      keepCookies: false, // Keep cookies between tests
      keepBrowserState: false, // Keep browser state between tests
      windowSize: '1680x900', // Browser window size
      video: false, // Record video of test (true/false)
      trace: false, // Record trace (true/false)
      timeout: 10000, // Maximum navigation timeout in ms
      fullPageScreenshots: true, // Take full page screenshots
      chromium: {
        devtools: true, // Opens DevTools automatically
        args: ['--auto-open-devtools-for-tabs'] // Ensures DevTools open for each tab
      }
    },
    REST: {
      //endpoint: 'https://automationexercise.com/api',
      endpoint: 'https://automationexercise.com/api', // Base URL for REST API
      timeout: 1200, // Timeout for REST requests,
      //defaultHeaders: {
      //   'Content-Type': 'multipart/form-data'
      //   'Content-Type': 'application/json',
      //   'Accept': 'application/json'  // Default headers for REST requests
      //}
    },
    APIHelper: {
      require: './helpers/apiHelper.ts' // Custom API helper for additional functionality
    }
  },
  include: {
    I: './steps_file',
    mainPage: "./pages/mainPage.ts",
    headerFragment: "./pages/fragments/headerFragment.ts",
    dataFactoryPage: "./dataFactory/userData.ts",
    loginPage: "./pages/loginPage.ts",
    apiHelper: './helpers/apiHelper.ts',
    productsPage: "./pages/productsPage.ts",
  },
  mocha: {
    reporterOptions: {
      "codeceptjs-cli-reporter": {
        "stdout": "-",
        "options": {
          "verbose": true,
          "steps": true,
        }
      },
      "mocha-junit-reporter": {
        "stdout": "-",
        "options": {
          "mochaFile": "./test-reports/result.xml",
          "attachments": true //add screenshot for a failed test
        }
      }
    }
  },
  plugins: {
    fakerTransform: {
      enabled: true
    },
    allure: {
      enabled: true,
      require: "allure-codeceptjs",
      outputDir: './test-reports/allure',
    },
  },
  name: 'uiv2'
}