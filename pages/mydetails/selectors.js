import DashBoardSelectors from '../dashboard/selectors';

/**
 * Class for all selectors of User details page web elements.
 **/
export default class Selectors extends DashBoardSelectors {
    static get editBtn() { return $('label[class$="-edit-personaldata"]'); }
    static get saveBtn() { return $('button[type="submit"]'); }

    static getDetailValue(name) { return $(`label[ng-hide*="${name}"]`).shadow$('p'); }
    static setDetailValue(name) { return $(`#${name}`); }
}