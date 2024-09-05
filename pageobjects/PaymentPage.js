class PaymentPage {
    
    constructor(page) {
        this.page = page;
        this.cardnumberInput = page.locator('[for*="ACCTNO"]');
        this.cardholderInput = page.locator('[id="CONTROLGROUPPAYMENTBOTTOM_ControlGroupPaymentInputViewPaymentView_ExternalAccount_VR_CC::AccountHolderName"]');
        this.expiryInput = page.locator('[id="CONTROLGROUPPAYMENTBOTTOM_ControlGroupPaymentInputViewPaymentView_ExternalAccount_VR_EXPDAT_MONTH_YEAR"]');
        this.cvvInput = page.locator('[id="CONTROLGROUPPAYMENTBOTTOM_ControlGroupPaymentInputViewPaymentView_ExternalAccount_VR_CC::VerificationCode"]');
        this.acceptRadio = page.locator('[for="ECDccAcceptedYes"]');
        this.conditionsCheckbox = page.locator('[for*="CheckboxConditionsPaymentView"]');
        this.submitpaymentButton = page.locator('[type="button"][id$="_LinkButtonSubmit"]');

        this.actualInteger = page.locator('#paymentFeeButton .price-currency__amount');
        this.actualDecimal = page.locator('#paymentFeeButton .price-currency__decimals');
        this.finalInteger = page.locator('div#SBSidebarView_totalPriceSpan > font > font');
        this.finalDecimal = page.locator('div#SBSidebarView_totalPriceSpan > sup > font > font');
    }

    async getActualPrice() {
        return parseFloat(await this.actualInteger.textContent() + await this.actualDecimal.textContent());
    }

    async getFinalPrice() {
        return (await this.finalInteger.textContent() + await this.finalDecimal.textContent());
    }

    async enterCCDataPay(cardNumber, cardHolder, expiry, cvv) {
        await this.cardnumberInput.fill('');
        await this.cardnumberInput.pressSequentially(cardNumber,{delay:500, timeout:10000});
        await this.cardholderInput.pressSequentially(cardHolder,{delay:500});
        await this.expiryInput.pressSequentially(expiry,{delay:100});
        await this.cvvInput.pressSequentially(cvv,{delay:100});
        const acceptRadio = await this.page.locator('[for="ECDccAcceptedYes"]');
        if(await acceptRadio.isVisible()) {
            await acceptRadio.click();
        };
        await this.conditionsCheckbox.click();
        await this.submitpaymentButton.click();
    }
}

module.exports = {PaymentPage};