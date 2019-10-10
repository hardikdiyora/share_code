import homePage from '../../../pages/home/page';
import DashBoardPage from '../../../pages/dashboard/page';
import MyDetailsPage from '../../../pages/mydetails/page';
import {edit_user_details} from '../../../test_data/user_details'

describe('Tests related to update user details', () => {
    let loginPage, dashBoardPage, myDetailsPage;

    before('navigate to user details page', () => {
        homePage.open();
    });

    beforeEach('navigate to login page', () => {
        loginPage = homePage.navigateToLoginPage();
        dashBoardPage = loginPage.login(user);
        assert.instanceOf(dashBoardPage, DashBoardPage, 'login failed');
        myDetailsPage = dashBoardPage.navigateToMyDetailsPage();
        assert.instanceOf(myDetailsPage, MyDetailsPage, 'navigate to user details page failed');
    });

    edit_user_details.forEach((data) => {
        it(`should successfully updates details : ${Object.keys(data)}`, () => {
            assert.deepEqual(myDetailsPage.editNameAndAddressDetails(data), data);
            });
        }
    );

    afterEach('should logout successfully', () => {
        assert.isTrue(dashBoardPage.logOut());
    })
});