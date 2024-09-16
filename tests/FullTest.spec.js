"use strict";

const { test, expect} = require('@playwright/test');
const {PageObjectsManager} = require('../pageobjects/PageObjectsManager');
const dataSet = JSON.parse(JSON.stringify(require('../utils/Booking.json')));

test.afterEach('Tear down each', async ({page}) => {
    if(!page.isClosed()) await page.close();
}); 

test.afterAll('Tear down all', async ({browser}) => {
    if(browser.isConnected()) await browser.close(); 
}); 

for (const data of dataSet){
    test('Ticket Booking end-to-end', async ({page}) => {
        const poManager = new PageObjectsManager(page)
        const homePage = poManager.getHomePage()
        const findyourflightPage = poManager.getFindYourFlightPage()
        const schedulePage = poManager.getSchedulePage();
        const passengersPage = poManager.getPassengersPage();
        const seatservicePage = poManager.getSeatservicePage();
        const bagsservicePage = poManager.getBagsservicePagePage();
        const servicesPage = poManager.getServicesPage();
        const paymentPage = poManager.getPaymentPage();

        // Launching the Home page
        await homePage.launchHomeGotoBooknowPage();

        // Book Your Flight Page - https://www.vueling.com/en/book-your-flight/find-your-flight
        await findyourflightPage.enterSearchData(data.originSearch, data.originResult, data.destinationSearch, data.destinationResult, data.adultPassengers);

        // Schedule Page - https://tickets.vueling.com/ScheduleSelectNew.aspx...
        const scheduleTotalAmount = parseFloat(await schedulePage.scheduleFlights());

        // Assertions - total amount before adding servces on passengers page is equql to total amount on schedule page
        const actualBaseOntopPrice = parseFloat(await schedulePage.getPassengersTotalAmount());
        expect(actualBaseOntopPrice.toFixed(2)).toEqual(scheduleTotalAmount.toFixed(2));

        // Passengers Information Page - https://tickets.vueling.com/PassengersInformation.aspx
        await passengersPage.enterPassengersInfo(data.name, data.surname, data.country, data.phone, data.email);

        // Seat Service Page - https://tickets.vueling.com/SeatService.aspx
        const seatsServiceCost = await seatservicePage.selectSeats();
    
        // Bags Service Page
        await bagsservicePage.navigateToServicesPage();
        
        //  Services Page
        await servicesPage.navigateToPaymentPage();

        //  PaymentPage
        //Assertions actual total price in Credit Card payment is equal to final price
        const finalPrice = (actualBaseOntopPrice + seatsServiceCost);
        const actualPrice = await paymentPage.getActualPrice();
        expect(actualPrice.toFixed(2)).toEqual(finalPrice.toFixed(2));
        
        await paymentPage.enterCCDataPay(data.cardNumber, data.cardHolder, data.expiry, data.cvv);
    });
}