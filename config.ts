import { browser } from "protractor";

exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    onPrepare: async () => {
        browser.driver.manage().window().maximize();
    },
    capabilities: {
        browserName: 'chrome'
    },
    "compilerOptions": {
        "types": []
    },
    specs: ['intersection.js'],

    jasmineNodeOpts: {
        showColors: true,
    }
};