import userDataFactory from '../dataFactory/userData';

Feature('login');

Scenario('SC001 User logins to the system', async ({ I, mainPage, headerFragment, loginPage }) => {
    const userData = new userDataFactory();

    await I.createUser(userData);
    await I.verifyUser(userData);
    await I.getUserDetails(userData);

    loginPage.open().login(userData);
    headerFragment.deleteUser();
}).tag('@login');