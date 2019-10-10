import BasePage from '../base.page';
import _elements from './selectors';
import MyDetailsPage from "../mydetails/page";
import InvoicesPage from "../invoices/page";

/**
 * Class for dashboard page of website.
 **/
export default class DashBoardPage extends BasePage {

    logOut() {
        _elements.logOutLink.click();
        return this.checkLoginLinkPresent();
    }

    getHeaderMsg() {
        return _elements.helloMsg.getText();
    }

    checkNavigationBarIsPresent() {
        return  browser.waitUntil(() => {
            return _elements.mainNavigationBar.isDisplayed();
        }, 10000, 'Expected navigation bar should be visible in 10s.', 500);
    }

    clickOnMyDetailsLink() {
        this.checkNavigationBarIsPresent();
        _elements.myDetailsLink.click();
        return browser.waitUntil(() => {
            return _elements.nameAddressPanel.isDisplayed();
        }, 10000, 'Expected redirect to details page should be in 10s.', 500);
    }

    navigateToMyDetailsPage() {
        return this.clickOnMyDetailsLink() ? new MyDetailsPage() : this;
    }

    clickOnInvoicesLink() {
        this.checkNavigationBarIsPresent();
        _elements.invoicesLink.click();
        return browser.waitUntil(() => {
            return _elements.invoicePageTitle.isDisplayed();
        }, 10000, 'Expected redirect to invoices page should be in 10s.', 500);
    }

    navigateToInvoicesPage() {
        return this.clickOnInvoicesLink() ? new InvoicesPage() : this;
    }
}
