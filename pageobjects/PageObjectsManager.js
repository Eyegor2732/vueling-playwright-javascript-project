"use strict";

import {HomePage} from './HomePage';
import {FindYourFlightPage} from'./FindYourFlightPage';
import {SchedulePage} from'./SchedulePage';
import {PassengersPage} from'./PassengersPage';
import {SeatservicePage} from './SeatservicePage';
import {BagsServicePage} from'./BagsServicePage';
import {ServicesPage} from './ServicesPage';
import {PaymentPage} from './PaymentPage';

export class PageObjectsManager {

    constructor(page) {
        this.page = page;
        this.homePage = new HomePage(this.page, this.url);
        this.findyourflightPage = new FindYourFlightPage(this.page);
        this.schedulePage = new SchedulePage(this.page);
        this.passengersPage = new PassengersPage(this.page);
        this.seatservicePage = new SeatservicePage(this.page)
        this.bagsservicePage = new BagsServicePage(this.page)
        this.servicesPage = new ServicesPage(this.page)
        this.paymentPage = new PaymentPage(this.page)
    }

    getHomePage() {
        return this.homePage;
    }

    getFindYourFlightPage() {
        return this.findyourflightPage;
    }

    getSchedulePage() {
        return this.schedulePage;
    }

    getPassengersPage() {
        return this.passengersPage;
    }
    getSeatservicePage() {
        return this.seatservicePage;
    }

    getBagsservicePagePage() {
        return this.bagsservicePage;
    }

    getServicesPage() {
        return this.servicesPage;
    }

    getPaymentPage() {
        return this.paymentPage;
    }

}
