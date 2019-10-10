import _elements from './selectors';
import DashBoardPage from "../dashboard/page";
import BasePage from "../base.page";

/**
 * Class for User details page of website.
 **/
export default class MyDetailsPage extends BasePage {
    checkNameAddressPanelPresent() {
        return _elements.nameAddressPanel.isDisplayed();
    }

    editNameAndAddressDetails(details) {
        this.checkNameAddressPanelPresent();
        _elements.editBtn.click();
        if (details.hasOwnProperty('salutation'))
            this.editSalutation(details.salutation);
        if (details.hasOwnProperty('birthPlace'))
            this.editBirthPlace(details.birthPlace);
        if (details.hasOwnProperty('addressStreet'))
            this.editAddressStreet(details.addressStreet);
        if (details.hasOwnProperty('addressCountryIsoCode'))
            this.editCountry(details.addressCountryIsoCode);
        _elements.saveBtn.click();
        return this.getNameAndAddressDetails(details);
    }

    editSalutation(salutation) {
        _elements.setDetailValue('salutation').selectByVisibleText(salutation);
    }

    editBirthPlace(birthplace) {
        _elements.setDetailValue('birthPlace').setValue(birthplace);
    }

    editAddressStreet(addressStreet) {
        _elements.setDetailValue('addressStreet').setValue(addressStreet);
    }

    editCountry(country) {
        _elements.setDetailValue('addressCountryIsoCode').selectByVisibleText(country);
    }

    getNameAndAddressDetails(details) {
        let result = {};
        for(let key in details) {
            result[key] = _elements.getDetailValue(`${key}`).getText();
        }
        return result;
    }
}
