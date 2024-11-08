"use strict";

import { BaseTest } from './BaseTest';

export class HomePage  extends BaseTest{
    
    constructor(page) {
        super(page);
        this.page = page;
        this.acceptButton = page.locator('#onetrust-accept-btn-handler');
        this.booknowButton = page.getByRole('link', {name: 'BOOK NOW'});
        
    }
    
    async launchHomeGotoBooknowPage() {
        await this.goto('/');
        await this.acceptButton.click();
        await this.booknowButton.click();
    }
}
