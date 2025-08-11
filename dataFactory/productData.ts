import { faker } from '@faker-js/faker'

export default class productDataFactory {

  // Product data
  kidsProductName: string;
  kidsProductPrice: string;
  kidsProductCount: string;
  kidsProductTotalPrice: string;
  checkoutModalWindowTitle: string;
  checkoutModalWindowContent: string;

  constructor() {
    // Product data
    this.kidsProductName = 'Sleeves Top and Short - Blue & Pink';
    this.kidsProductPrice = 'Rs. 478';
    this.kidsProductCount = '1';
    this.kidsProductTotalPrice = 'Rs. 478';
    this.checkoutModalWindowTitle = 'Checkout';
    this.checkoutModalWindowContent = 'Register / Login account to proceed on checkout.';
    
  }
  // insert your methods here
}