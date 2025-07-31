import userDataFactory from "../dataFactory/userData";

class APIHelper extends Helper {
  constructor(config) {
    super(config);
  };

  private get rest  () {
    return this.helpers['REST'];
  };

  async createUser (userData : userDataFactory) {
    const formData = new FormData();
    formData.append('name', userData.userMiddleName);
    formData.append('email', userData.userEmail);
    formData.append('password', userData.userPassword);
    formData.append('title', userData.userTitle);
    formData.append('birth_date', userData.userBirthDate.toString());
    formData.append('birth_month', userData.userBirthDateMonth.toString());
    formData.append('birth_year', userData.userBirthDateYear.toString());
    formData.append('firstname', userData.userName);
    formData.append('lastname', userData.userLastName);
    formData.append('company', userData.userCompany);
    formData.append('address1', userData.userAddress1);
    formData.append('address2', userData.userAddress2);
    formData.append('country', userData.userCountry);
    formData.append('zipcode', userData.userZipCode);
    formData.append('state', userData.userState);
    formData.append('city', userData.userCity);
    formData.append('mobile_number', userData.userMobileNumber);

    let resp = await this.rest.sendPostRequest('/createAccount', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    console.log('Response from createUser:', formData);
    return resp;
  }

  async verifyUser (userData : userDataFactory) {
    const formData = new FormData();
    formData.append('email', userData.userEmailExist);
    formData.append('password', userData.userPasswordExist);

    let resp = await this.rest.sendPostRequest('/verifyLogin', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    console.log('Response from verify user:', resp.data);
    return resp;
  }
  
  async getAllProductsList () {

    let resp = await this.rest.sendGetRequest('/productsList');

    console.log('Response from getLoginTocken:', resp.data);
    return resp;
  }

async deleteUser(userData: userDataFactory) {
    const payload = {
        email: userData.userEmailExist,
        password: userData.userPasswordExist
    };
    let resp = await this.rest.sendDeleteRequest('/deleteAccount', JSON.stringify(payload), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log('Response from deleteUser:', resp.data);
    return resp;
}

  async updateUser (userData : userDataFactory) {
    const formData = new FormData();
    // formData.append('name', userData.userMiddleName);
    // formData.append('email', userData.userEmail);
    // formData.append('password', userData.userPassword);
    // formData.append('title', userData.userTitle);
    // formData.append('birth_date', userData.userBirthDate.toString());
    // formData.append('birth_month', userData.userBirthDateMonth.toString());
    // formData.append('birth_year', userData.userBirthDateYear.toString());
    // formData.append('firstname', userData.userName);
    // formData.append('lastname', userData.userLastName);
    // formData.append('company', userData.userCompany);
    // formData.append('address1', userData.userAddress1);
    // formData.append('address2', userData.userAddress2);
    // formData.append('country', userData.userCountry);
    // formData.append('zipcode', userData.userZipCode);
    // formData.append('state', userData.userState);
    // formData.append('city', userData.userCity);
    // formData.append('mobile_number', userData.userMobileNumber);

    let resp = await this.rest.sendPostRequest('/createAccount', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    console.log('Response from createUser:', resp.data);
    return resp;
  }

  async getUserDetails (userData : userDataFactory) {

    const email = userData.userEmail;

    let resp = await this.rest.sendGetRequest(`/getUserDetailByEmail?email=${encodeURIComponent(email)}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Response from getLoginTocken:', resp.data);
    return resp;
  }

}
module.exports = APIHelper;
