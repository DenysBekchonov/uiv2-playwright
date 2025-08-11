import LocatorOrString = CodeceptJS.LocatorOrString;
import Page from './pages';
import productDataFactory from '../dataFactory/productData';
import cartPage from '../pages/cartPage';


const { I, mainPage } = inject();

class productsPage extends Page {

  protected rs1000Product: LocatorOrString = locate('//div[@class="single-products"]//h2[contains(text(), "Rs. 1000")]').as('Rs. 1000 product');
  protected rs400Product: LocatorOrString = locate('//div[@class="single-products"]//h2[contains(text(), "Rs. 400")]').as('Rs. 400 product');
  protected rs478Product: LocatorOrString = locate('//div[@class="single-products"]//h2[contains(text(), "Rs. 478")]').as('Rs. 478 product');

  constructor() {
    super('/products');
  }

  open(): productsPage {
    super.open();
    return this;
  }

  addProductToCart(category): productsPage {
    I.seeElement(mainPage.productsBox);
    I.seeElement(mainPage.productsLeftSidebar);
    if (category === 'men') {
      I.click(mainPage.menProductCategory);
      I.click(mainPage.menTshirtCategory);
      I.seeElement(this.rs400Product);
      I.scrollTo(this.rs400Product);
      I.click(mainPage.addProductToCart);
      I.seeElement(mainPage.addedProductToCartTitle);
      I.seeElement(mainPage.yourProductHasBeenAdded);
      I.seeElement(mainPage.modalViewCartButton);
      I.seeElement(mainPage.modalContinueShoppingButton);
      I.click(mainPage.modalViewCartButton);

    } else if (category === 'women') {
      I.click(mainPage.womenProductCategory);
      I.click(mainPage.womenDressCategory);
      I.seeElement(this.rs1000Product);
      I.scrollTo(this.rs1000Product);
      I.click(mainPage.addProductToCart);
      I.seeElement(mainPage.addedProductToCartTitle);
      I.seeElement(mainPage.yourProductHasBeenAdded);
      I.seeElement(mainPage.modalViewCartButton);
      I.seeElement(mainPage.modalContinueShoppingButton);
      I.click(mainPage.modalViewCartButton);

    } else if (category === 'kids') {
      I.click(mainPage.kidsProductCategory);
      I.click(mainPage.kidsDressCategory);
      I.seeElement(this.rs478Product);
      I.scrollTo(this.rs478Product);
      I.click(mainPage.addProductToCart);
      I.seeElement(mainPage.addedProductToCartTitle);
      I.seeElement(mainPage.yourProductHasBeenAdded);
      I.seeElement(mainPage.modalViewCartButton);
      I.seeElement(mainPage.modalContinueShoppingButton);
      I.click(mainPage.modalViewCartButton);

    } else {
    console.log('Wrong category: ' + category);
    I.seeElement(locate('div.wrong-category').as('Wrong category message'));
    }

    return this;
  
  }
  
}

export = new productsPage;
