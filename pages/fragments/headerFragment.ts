import userDataFactory from '../../dataFactory/userData';
import LocatorOrString = CodeceptJS.LocatorOrString;
import Page from '../pages';

const { I } = inject();

class headerFragment extends Page {
  public homeButton: LocatorOrString = locate ('header i.fa-home').as('Home page');
  public productsButton: LocatorOrString = locate ('//a[contains(text(),"Products")]').as('Products page');
  public cartButton: LocatorOrString = locate ('//a[contains(text(),"Cart")]').as('Cart page');
  public loginButton: LocatorOrString = locate ('//a[contains(text(),"Login")]').as('Login page');
  public loggedInAsUser: LocatorOrString = locate ('//a[contains(text(), "Logged in as")]').as('Logged in as user middle name');
  public deleteUserButton: LocatorOrString = locate ('//a[contains(text(), "Delete")]').as('Delete user button');
  public deleteUserSuccessBunner: LocatorOrString = locate ('h2[data-qa="account-deleted"]').as('Successfully deleted user banner');


  constructor() {
    super('/');
  }
  
  openHomePage(): headerFragment {
    I.waitForClickable(this.homeButton);
    I.click(this.homeButton);
    I.seeInCurrentUrl('/');
    return this;
  }
  
  openProductPage(): headerFragment {
    I.waitForClickable(this.productsButton);
    I.click(this.productsButton);
    I.seeInCurrentUrl('/products');
    return this;
  }

  openCartPage(): headerFragment {
    I.waitForClickable(this.cartButton);
    I.click(this.cartButton);
    I.seeInCurrentUrl('/view_cart');
    return this;
  }

  openSignLoginPage(): headerFragment {
    I.waitForClickable(this.loginButton);
    I.click(this.loginButton);
    I.seeInCurrentUrl('/login');
    return this;
  }

  deleteUser(): void {
    I.click(this.deleteUserButton);
    I.seeElement(this.deleteUserSuccessBunner);
    I.seeTextEquals('ACCOUNT DELETED!', this.deleteUserSuccessBunner);
    I.seeInCurrentUrl('/delete_account');
  }
}



export = new headerFragment;
