import BaseSelectors from '../base.selectors';

/**
 * Class for all selectors of Login page web elements.
 **/
export default class Selectors extends BaseSelectors {
    static get username() { return $('input[name="username"]'); }
    static get password() { return $('input[name="password"]'); }
    static get logInBtn() { return $('button[type="submit"]'); }
    static get logInErrorMsg() { return $('#loginErrorMessage'); }
}
