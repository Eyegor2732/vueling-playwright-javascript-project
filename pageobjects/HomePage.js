const { BaseTest } = require("./BaseTest");

class HomePage  extends BaseTest{
    
    constructor(page, url) {
        super(page, url);
        this.page = page;
        this.url = 'https://www.vueling.com/en';
        this.acceptButton = page.locator('#onetrust-accept-btn-handler');
        this.booknowButton = page.getByRole('link', {name: 'BOOK NOW'});
        
    }
    
    async launchHomeGotoBooknowPage() {
        await this.setViewport(1700, 1200);
        await this.goto(this.url);
        await this.acceptButton.click();
        await this.booknowButton.click();
    }
}

module.exports = {HomePage};