const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

class CustomWorld {
    async openBrowser() {
        this.browser = await chromium.launch({ headless: false }); // Ensure browser is initialized
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }
}

setWorldConstructor(CustomWorld);
