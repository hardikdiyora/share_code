/**
 * Class for all common selectors of web elements which are available in website.
 **/
export default class BaseSelectors {
    static get loginContainer() { return $('.login-app-container'); }
    static get helloMsg() { return $('span[class$="js_authenticated"]'); }
    static get loginLink() { return $('a[class="notauthenticated"]'); }
}
