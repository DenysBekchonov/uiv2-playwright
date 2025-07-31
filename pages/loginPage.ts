import userDataFactory from '../dataFactory/userData';
import LocatorOrString = CodeceptJS.LocatorOrString;
import Page from './pages';
import headerFragment = require('./fragments/headerFragment');
const { I } = inject();

class loginPage extends Page  {
  protected loginForm: LocatorOrString = locate ('div.login-form').as('Login Form');
  protected loginEmailField: LocatorOrString = locate ('//form[@action="/login"]/input[@name="email"]').as('Login Email Field');
  protected loginPasswordField: LocatorOrString = locate ('//form[@action="/login"]/input[@name="password"]').as('Login Password Field');
  protected loginSubmitButton: LocatorOrString = locate ('div.login-form button[type="submit"]').as('Login Submit Button');
  
  constructor() {
    super('/login');
  }
  login(userData : userDataFactory): loginPage {
    I.waitForElement(this.loginForm);
    I.seeElement(this.loginEmailField);
    I.seeElement(this.loginPasswordField);
    I.seeElement(this.loginSubmitButton);
    I.fillField(this.loginEmailField, userData.userEmail);
    I.fillField(this.loginPasswordField, userData.userPassword);
    I.click(this.loginSubmitButton);
    I.seeTextEquals(' Logged in as ' + userData.userMiddleName, headerFragment.loggedInAsUser)
    return this;
  }
    open(): loginPage {
    super.open();
    return this;
  }

}

export = new loginPage;
