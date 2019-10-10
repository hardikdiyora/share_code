import BasePage from "../base.page";
import _elements from './selectors';

/**
 * Class for user invoices page of website.
 **/
export default class InvoicesPage extends BasePage {
    checkMonthHaveInvoices(month) {
        _elements.invoiceDropDown.selectByVisibleText(month);
        browser.waitUntil(() => {
            return _elements.noInvoiceMessage.isDisplayed();
                // TO DO: || check invoice table is displayed.
        }, 10000, 'Expected invoices result should be in 10s.', 500);
        return ! _elements.noInvoiceMessage.isDisplayed();
    }

    /**
     * Overriding method, because of web element selector is changed for invoices page
     */
    logOut() {
        _elements.logOutLink.click();
        return this.checkLoginLinkPresent();
    }
}
