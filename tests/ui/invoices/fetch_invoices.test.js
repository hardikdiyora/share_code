import homePage from '../../../pages/home/page';
import DashBoardPage from '../../../pages/dashboard/page';
import { invoice_months } from '../../../test_data/invoice_months'
import InvoicesPage from "../../../pages/invoices/page";

describe('Tests related to fetching invoices details', () => {
    let loginPage, dashBoardPage, invoicesPage;

    before('navigate to user invoices page', () => {
        homePage.open();
        loginPage = homePage.navigateToLoginPage();
        dashBoardPage = loginPage.login(user);
        assert.instanceOf(dashBoardPage, DashBoardPage, 'login failed');
        invoicesPage = dashBoardPage.navigateToInvoicesPage();
        assert.instanceOf(invoicesPage, InvoicesPage, 'navigate to user invoices page failed');
    });

    invoice_months.forEach((month) => {
            it(`shouldn't have invoices for a month : ${month}`, () => {
                assert.isFalse(invoicesPage.checkMonthHaveInvoices(month));
            });
        }
    );

    after('should logout successfully', () => {
        assert.isTrue(invoicesPage.logOut());
    })
});