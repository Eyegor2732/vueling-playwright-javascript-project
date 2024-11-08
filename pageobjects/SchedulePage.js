"use strict";

export class SchedulePage {
    
    constructor(page) {
        this.page = page;
        this.outboundflightButton = page.locator('#outboundFlightCardsContainer #selectFlightButton');
        this.inboudflightButton = page.locator('#inboundFlightCardsContainer #selectFlightButton');
        this.flightlightbundleButton = page.locator('[data-js-bundle="VYBA"] [data-js-id="priceIntegerAmount"]');
        this.continueButton = page.locator('#stvContinueButton');
        this.totalInteger = page.locator('#totalPrice .price-currency__amount');
        this.totalDecimal = page.locator('#totalPrice .price-currency__decimals');
        this.passengersinformationAmount = page.locator('#SBSidebarView_totalPriceSpan');
    }
    
    async getPassengersTotalAmount () {
        return parseFloat((await this.passengersinformationAmount.textContent()).split(' ')[0]);
    }

    async scheduleFlights() {
        await this.outboundflightButton.first().click();;
        await this.inboudflightButton.first().click();;
        await this.flightlightbundleButton.click();
        const totalAmount = parseFloat(await this.totalInteger.textContent() + '.' + await this.totalDecimal.textContent());
        await this.continueButton.click();
        return totalAmount;
    }
}
