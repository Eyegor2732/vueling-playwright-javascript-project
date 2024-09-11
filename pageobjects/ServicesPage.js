"use strict";

class ServicesPage {
    
    constructor(page) {
        this.page = page;
        this.continueButton = page .locator('[id$="LinkButtonSubmit"]');
    }

    async navigateToPaymentPage() {
        await this.page.waitForTimeout(5000);
        await this.continueButton.click();
    }
}

module.exports = {ServicesPage};