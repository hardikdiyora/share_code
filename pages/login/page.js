import BasePage from '../base.page';
import _elements from './selectors';
import DashBoardPage from "../dashboard/page";

/**
 * Class for login page of website.
 **/
export default class LoginPage extends BasePage {

    login({username, password}){
        this.fillLoginForm(username, password);
        this.clickLogInBtn();
        browser.waitUntil(() => {
            return _elements.helloMsg.isDisplayed() || _elements.logInErrorMsg.isDisplayed();
        }, 10000, 'Expected login result should be in 10s.', 500);
        return  _elements.helloMsg.isDisplayed() ? new DashBoardPage() : this;
    }

    clickLogInBtn() {
        _elements.logInBtn.isDisplayed();
        _elements.logInBtn.click();
    }

    fillLoginForm(username, password) {
        _elements.username.setValue(username);
        _elements.password.setValue(password);

        const user = _elements.username.getValue();
        const pw = _elements.password.getValue();
        // Dealing with odd bug for firefox, keep trying to set user name and password until it works
        if (user !== username || pw !== password) {
            console.log('USER NAME AND PASSWORD WAS NOT SET CORRECTLY.');
            this.fillLoginForm(username, password);
        }

        return this.checkPasswordIsMasked();
    }

    checkPasswordIsMasked() {
        return _elements.password.getAttribute('type') == 'passowrd';
    }

    getLoginFailedErrorMsg() {
        return _elements.logInErrorMsg.getText();
    }
};
