import DashBoardSelectors from '../dashboard/selectors';

/**
 * Class for all selectors of invoices page web elements.
 **/
export default class Selectors extends DashBoardSelectors {
    static get invoiceDropDown() { return $('select'); }
    static get noInvoiceMessage() { return $('.message'); }

    // Overridden method as selector is changed.
    static get logOutLink() { return $('span=Logout'); }
}