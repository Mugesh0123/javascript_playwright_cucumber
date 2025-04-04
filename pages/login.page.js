class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameField = '#username';
        this.passwordField = '#password';
        this.loginButton = '#login';
    }

    async goto() {
        await this.page.goto('https://example.com/login');
    }

    async enterCredentials(username, password) {
        await this.page.fill(this.usernameField, username);
        await this.page.fill(this.passwordField, password);
    }

    async submit() {
        await this.page.click(this.loginButton);
    }
}

module.exports = LoginPage;
