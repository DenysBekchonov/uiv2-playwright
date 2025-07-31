import userDataFactory from '../dataFactory/userData';
import productsPage from '../pages/productsPage';

Feature('buy products');

Scenario('SC002 User buys products', async ({ I, mainPage, headerFragment, loginPage, }) => {
    productsPage.open().addProductToCart('kids');
}).tag('@buyProducts');