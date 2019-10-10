import _elements from './base.selectors';

/**
 * Class for Base page which is super class for all page classes within website.
 **/
export default class BasePage {

    open(route){
        browser.url(route);
    }

    checkLoginLinkPresent() {
        return _elements.loginLink.isDisplayed();
    }
}
