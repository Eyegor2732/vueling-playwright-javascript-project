"use strict";

class FindYourFlightPage {
    
    constructor(page) {
        this.page = page;
        this.originInput = page.locator('.origin .input-group');
        this.originSearch = page.locator('#originInput');
        this.originDropdown = page.locator('.vy-list-dropdown_label--strong');
        this.destinationSearch = page.locator('#destinationInput');
        this.destinationDropdown = page.locator('.vy-list-dropdown_item_button-right');
        this.departureMonth = page.locator('.searchbar-monthpicker_date').nth(1);
        this.returnMonth = page.locator('.searchbar-monthpicker_date').nth(17);
        this.adultTitle = page.locator('[aria-label="Adults Age 16 or over on date of travel"] .number');
        this.adultIncreaseButton = page.locator('#adultsIncrease');
        this.searchButton = page.locator('#btnSubmitHomeSearcher');
        this.departureDay= page.locator('.calendar-day.selected').nth(0);
        this.returnDay = page.locator('.calendar-day.selected').nth(1);
        this.showflightsButton = page.locator('#reserve-button-summary-flight-angular');
    }
    
    async addAdultPassengers(adultPassengers) {
        let i = 1;
        while (parseInt(await this.adultTitle.textContent()) < parseInt(adultPassengers)) {
            await this.adultIncreaseButton.click();
            i++;
        }
    }

    async enterSearchData(originSearch, originResult, destinationSearch, destinationResult, adultPassengers) {
        await this.originInput.click();
        await this.originSearch.pressSequentially(originSearch);;
        await this.originDropdown.filter({hasText: originResult}).click();
        await this.destinationSearch.pressSequentially(destinationSearch);
        await this.destinationDropdown.filter({hasText: destinationResult}).click();
        await this.departureMonth.click();
        await this.returnMonth.click();
        await this.addAdultPassengers(adultPassengers);
        await this.searchButton.click();
        await this.departureDay.click();
        await this.returnDay.click();
        this.showflightsButton.click();
    }
 
}

module.exports = {FindYourFlightPage};