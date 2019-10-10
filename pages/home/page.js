import BasePage from '../base.page';
import _elements from './selectors';
import LoginPage from '../login/page';

/**
 * Class for main landing page for the website.
 **/
class HomePage extends BasePage {
    open() {
        super.open('/');
    }

    clickOnLoginLink() {
        if(this.checkLoginLinkPresent()) {
            _elements.loginLink.click();
            return _elements.loginContainer.waitForDisplayed();
        } else
            return false;
    }

    navigateToLoginPage() {
        return this.clickOnLoginLink() ? new LoginPage() : this;
    }
}

export default new HomePage();
