const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const LoginPage = require('../pages/login.page');

let page;
let loginPage;

Given('I navigate to the login page', async function () {
    page = await this.browser.newPage();
    loginPage = new LoginPage(page);
    await loginPage.goto();
});

When('I enter username {string} and password {string}', async function (username, password) {
    await loginPage.enterCredentials(username, password);
});

When('I click the login button', async function () {
    await loginPage.submit();
});

Then('I should see the homepage', async function () {
    const url = await page.url();
    expect(url).to.include('/dashboard');
    await page.close();
});
