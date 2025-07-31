/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type mainPage = typeof import('./pages/mainPage');
type headerFragment = typeof import('./pages/fragments/headerFragment');
type dataFactoryPage = typeof import('./dataFactory/userData');
type loginPage = typeof import('./pages/loginPage');
type apiHelper = typeof import('./helpers/apiHelper');
type productsPage = typeof import('./pages/productsPage');
type APIHelper = import('./helpers/apiHelper');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, mainPage: mainPage, headerFragment: headerFragment, dataFactoryPage: dataFactoryPage, loginPage: loginPage, apiHelper: apiHelper, productsPage: productsPage }
  interface Methods extends Playwright, REST, APIHelper {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
