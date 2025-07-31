import { faker } from '@faker-js/faker'

export default class userDataFactory {

  // Exist user data
  userEmailExist: string;
  userPasswordExist: string;
  userEmailNotExist: string;
  userNameExist: string;
  // New user data
  userMiddleName: string;
  userName: string;
  userLastName: string;
  userTitle: string;
  userBirthDate: Date;
  userBirthDateDay: number;
  userBirthDateMonth: number;
  userBirthDateYear: number;
  userCompany: string;
  userAddress1: string;
  userAddress2: string;
  userCountry: string;
  userZipCode: string;
  userState: string;
  userCity: string;
  userMobileNumber: string;
  userEmail: string;
  userPassword: string;

  constructor() {
    // Exist user data
    this.userNameExist = 'user1';
    this.userEmailExist = 'test+testuser@email.com'
    this.userPasswordExist = 'password123@t';
    // Not exist user data
    this.userEmail = faker.internet.email();
    this.userMiddleName = faker.person.middleName();
    this.userName = faker.person.firstName();
    this.userLastName = faker.person.lastName();
    this.userTitle = faker.person.prefix();
    this.userBirthDate = faker.date.birthdate({ min: 18, max: 65, mode: 'age' });
    this.userBirthDateDay = this.userBirthDate.getDate();
    this.userBirthDateMonth = this.userBirthDate.getMonth() + 1; // Months are 0-indexed in JavaScript
    this.userBirthDateYear = this.userBirthDate.getFullYear();
    this.userEmailNotExist = faker.internet.email();
    this.userPassword = faker.internet.password({length: 10, memorable: false, pattern: /[a-zA-Z0-9]/});
    this.userCompany = faker.company.name();
    this.userAddress1 = faker.location.streetAddress();
    this.userAddress2 = faker.location.secondaryAddress();
    this.userCountry = faker.location.country();
    this.userZipCode = faker.location.zipCode();
    this.userState = faker.location.state();
    this.userCity = faker.location.city();
    this.userMobileNumber = faker.phone.number({ style: 'international' });
  }
  // insert your methods here
}

