"use strict";

export class BagsServicePage {
    
    constructor(page) {
        this.page = page;
        this.continueButton = page .locator('[id$="LinkButtonSubmit"]');
    }

    async navigateToServicesPage() {
        await this.continueButton.click();
    }
}
