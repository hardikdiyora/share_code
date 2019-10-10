import homePage from '../../../pages/home/page';
import {invalid_user_cred} from '../../../test_data/user_details';
import LoginPage from '../../../pages/login/page';

describe('Tests related to failed login', () => {
    let loginPage;

    before('navigate to login page and login with invalid credential', () => {
        homePage.open();
        loginPage = homePage.navigateToLoginPage();
    });

    it('should not navigate to dashboard page', () => {
        assert.instanceOf(loginPage.login(invalid_user_cred), LoginPage, 'navigate to dashboard page passed');
    });

    it('should display login failure error message', () => {
        assert.include(loginPage.getLoginFailedErrorMsg(), 'Login failed.',
            'error message is missing or mismatched');
    });
});
