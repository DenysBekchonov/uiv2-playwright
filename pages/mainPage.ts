import LocatorOrString = CodeceptJS.LocatorOrString;
import Page from './pages';

const { I } = inject();

class mainPage extends Page {

public productsBox: LocatorOrString = locate('div.row div.features_items').as('Products List');
private recommendedProductsBox: LocatorOrString = locate('div.row div.recommended_items').as('Recommended products List');
public productsLeftSidebar: LocatorOrString = locate('div.left-sidebar').as('Products left sidebar');
public womenProductCategory: LocatorOrString = locate('div.left-sidebar div.panel:nth-child(1) h4 a').as('Women category');
public menProductCategory: LocatorOrString = locate('div.left-sidebar div.panel:nth-child(2) h4 a').as('Men category');
public kidsProductCategory: LocatorOrString = locate('div.left-sidebar div.panel:nth-child(3) h4 a').as('Kids category');
public womenDressCategory: LocatorOrString = locate('//div[@id="Women"]//a[contains(text(), "Dress")]').as('Women dress category');
public womenTopCategory: LocatorOrString = locate('//div[@id="Women"]//a[contains(text(), "Top")]').as('Women top category');
public menTshirtCategory: LocatorOrString = locate('//div[@id="Men"]//a[contains(text(), "Tshirts")]').as('Men tshirt category');
public kidsDressCategory: LocatorOrString = locate('//div[@id="Kids"]//a[contains(text(), "Dress")]').as('Kids dress category');
public addProductToCart: LocatorOrString = locate('(//div[@class="single-products"]/div//a)[1]').as('Add product to cart');
public addedProductToCartTitle: LocatorOrString = locate('//div[@class="modal-content"]/div/h4').as('Added!');
public yourProductHasBeenAdded: LocatorOrString = locate('div.modal-content div.modal-body p:nth-child(1)').as('Your product has been added!');
public modalViewCartButton: LocatorOrString = locate('div.modal-content div.modal-body p:nth-child(2) a').as('View cart button');
public modalContinueShoppingButton: LocatorOrString = locate('div.modal-content div.modal-footer button').as('Continue shopping button');

  constructor() {
    super('/');
  }

  open(): mainPage {
    super.open();
    return this;
  }
}
export = new mainPage;
