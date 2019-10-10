import BaseSelectors from '../base.selectors';

/**
 * Class for all selectors of dashboard page web elements.
 **/
export default class Selectors extends BaseSelectors {
    static get logOutLink() { return $('a[class="authenticated"]'); }
    static get mainNavigationBar() { return $('ul[class^="mainbar-navigation"]'); }

    static get myDetailsLink() { return $('a[class*="-my-details "]'); }
    static get nameAddressPanel() { return $('#name-address'); }

    static get invoicesLink() { return $('a[class*="-trips-invoices "]'); }
    static get invoicePageTitle() { return $('.title'); }
}
