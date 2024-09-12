"use strict";

class BaseTest {

    constructor(page) {
        this.page = page;
    }

    async setViewport(w, h) {
        await this.page.setViewportSize({width:w, height: h});
    }

    async goto(url) {
        await this.page.goto(url);
    }
     
}

module.exports = {BaseTest};