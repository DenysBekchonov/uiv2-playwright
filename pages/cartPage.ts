import LocatorOrString = CodeceptJS.LocatorOrString;
import Page from './pages';
import productDataFactory from '../dataFactory/productData';
const { I } = inject();

class cartPage extends Page {

  // Cart elements
  protected productsBox: LocatorOrString = locate('div#cart_info').as('Added product to cart title');
  protected addedProductName: LocatorOrString = locate('div#cart_info tbody td:nth-child(2) a').as('Product name')
  protected addedProductPrice: LocatorOrString = locate('div#cart_info tbody td:nth-child(3) p').as('Product price')
  protected addedProductCount: LocatorOrString = locate('div#cart_info tbody td:nth-child(4) button').as('Product count')
  protected addedProductTotalPrice: LocatorOrString = locate('div#cart_info tbody td:nth-child(5) p.cart_total_price').as('Product total price');
  protected cartPproccedToCheckout: LocatorOrString = locate('a.check_out').as('Proceed to checkout button');
  protected checkoutModalWindow: LocatorOrString = locate('div.modal-content').as('Checkout modal window');
  protected checkoutModalWindowTitle: LocatorOrString = locate('div.modal-content h4.modal-title').as('Checkout modal window title');
  protected checkoutModalWindowContent: LocatorOrString = locate('div.modal-content div.modal-body p:nth-child(1)').as('Checkout modal window Content');
  protected checkoutModalWindowContinueButton: LocatorOrString = locate('div.modal-header h4').as('Checkout modal window Button');
  protected checkoutModalWindowRegisterLogin: LocatorOrString = locate('div.modal-header h4').as('Checkout modal window Login');

  constructor() {
    super('/cart');
  }

  open(): cartPage {
    super.open();
    return this;
  }
  
  checkProductsInCart(productData : productDataFactory): cartPage {
    
    I.seeElement(this.productsBox);
    I.see(productData.kidsProductName, this.addedProductName);
    I.see(productData.kidsProductPrice, this.addedProductPrice);
    I.see(productData.kidsProductCount, this.addedProductCount);
    I.see(productData.kidsProductTotalPrice, this.addedProductTotalPrice);
    I.click(this.cartPproccedToCheckout);

    return this;
  }

  procedToCheckout(): void {
    I.seeElement(this.cartPproccedToCheckout);
    I.seeElement(this.checkoutModalWindow);
    I.seeElement(this.checkoutModalWindowTitle);
    I.seeElement(this.checkoutModalWindowContent);
    I.seeElement(this.checkoutModalWindowContinueButton);
    I.seeElement(this.checkoutModalWindowRegisterLogin);
  }
}

export = new cartPage;
