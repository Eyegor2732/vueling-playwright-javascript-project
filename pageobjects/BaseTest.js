class BaseTest {

    constructor(page, url) {
        this.page = page;
        this.url = url;
    }

    async setViewport(w, h) {
        await this.page.setViewportSize({width:w, height: h});
    }

    async goto() {
        await this.page.goto(this.url);
    }

}

module.exports = {BaseTest};