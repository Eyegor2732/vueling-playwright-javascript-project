"use strict";

export class SeatservicePage {
    
    constructor(page) {
        this.page = page;
        this.connectionFlights = page.locator('.tabs-segments .tabs-underlined__items li')
        this.assignableSeats = page.locator('[data_assignable="true"]'); 
        this.continueButton = page.locator('[id$="LinkButtonSubmit"]');                      
    }
    
    async getPassengersTotalAmount () {
        return parseFloat((await this.passengersinformationAmount.textContent()).split(' ')[0]);
    }

    async selectSeats() {
        await this.connectionFlights.nth(0).waitFor();
        const connectionsCount = await this.connectionFlights.count();
        const assignableSeatsCount = await this.assignableSeats.count();
        let servicesSum = 0;
        for (let i = 0; i < connectionsCount; i++){
            for (let j=0; j<assignableSeatsCount; j++) {
                // const assignableSeat = await this.assignableSeats.nth(j);
                if (await this.assignableSeats.nth(j).isVisible()) {
                    const assignableSeat = await this.assignableSeats.nth(j);
                    servicesSum = servicesSum + parseFloat((await assignableSeat.textContent()).replace('+', ''));
                    await assignableSeat.click();
                    break;
                }
            }
            if (i < connectionsCount-1){
    
                await this.connectionFlights.nth(i+1).click();
            }
        }
        await this.continueButton.click();
        return servicesSum;
    }
}
