"use strict";

export class PassengersPage {
    
    constructor(page) {
        this.page = page;
        this.firstnameInput = page.locator('[id="ContactViewControlGroupMainContact_BoxPassengerInformationView_TextBoxFirstName_0"]');
        this.surnameInput = page.locator('[id="ContactViewControlGroupMainContact_BoxPassengerInformationView_TextBoxLastName_0"]');
        this.allsetButton = page.getByText('All set');
        this.countrylistDropdown = page.locator('[id$="DropDownListCountry"]');
        this.phoneInput = page.locator('[id$="TextBoxHomePhone"]');
        this.emailInput = page.locator('[id$="TextBoxEmailAddress"]');
        this.acceptCheckbox = page.locator('#fsAcceptsPrivPol');
        this.continueButton = page .locator('[id$="LinkButtonSubmit"]');
    }

    async enterPassengersInfo(name, surname, country, phone, email) {
        await this.firstnameInput.fill(name);
        await this.surnameInput.fill(surname);
        await this.allsetButton.click();
        await this.countrylistDropdown.selectOption(country);
        await this.phoneInput.fill(phone);
        await this.emailInput.fill(email);
        await this.acceptCheckbox.click();
        await this.continueButton.click();
    }
}
