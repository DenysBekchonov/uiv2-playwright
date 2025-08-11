import userDataFactory from '../dataFactory/userData';
import productDataFactory from '../dataFactory/productData';
import cartPage from '../pages/cartPage';

Feature('buy products');

Scenario('SC002 User buys products', async ({ productsPage, cartPage }) => {

    const productData = new productDataFactory();

    productsPage.open().addProductToCart('kids');
    cartPage.checkProductsInCart(productData).procedToCheckout();
}).tag('@buyProducts');