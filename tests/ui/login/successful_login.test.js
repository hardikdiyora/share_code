import homePage from '../../../pages/home/page';
import DashBoardPage from "../../../pages/dashboard/page";
import MyDetailsPage from "../../../pages/mydetails/page";

describe('Tests related to successful login', () => {
    let loginPage, dashBoardPage;

    before('navigate to login page and login with valid credential', () => {
        homePage.open();
        loginPage = homePage.navigateToLoginPage();
        dashBoardPage = loginPage.login(user);
        assert.instanceOf(dashBoardPage, DashBoardPage, 'login failed');
    });

    it('should have welcome header message', () => {
        assert.include(dashBoardPage.getHeaderMsg(), `Hello  ${user.name}`
            , 'welcome header message is missing or mismatched');
    });

    it('should have main navigation bar', () => {
        assert.isTrue(dashBoardPage.checkNavigationBarIsPresent(), 'main navigation bar is not present');
    });

    it('should navigate to user details page', () => {
        let myDetailsPage = dashBoardPage.navigateToMyDetailsPage();
        assert.instanceOf(myDetailsPage, MyDetailsPage, 'navigate to user details page failed');
    });

    after('should logout successfully', () => {
        assert.isTrue(dashBoardPage.logOut());
    })
});
