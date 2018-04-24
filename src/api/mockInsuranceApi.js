import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const insurances = [
    {
        id: 1,
        title: "Test 1",
        yearlyPremium: 1000,
        category: "Agricultural insurance"
    },
    {
        id: 2,
        title: "Test 2",
        yearlyPremium: 500,
        category: "Flood insurance"
    }
];

const getNextId = () => {
  return Math.max.apply(Math,insurances.map(function(o){return o.id;})) + 1;
};

class InsuranceApi {

  static getAllInsurances() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], insurances));
      }, delay);
    });
  }

  static saveInsurance(insurance) {
    insurance = Object.assign({}, insurance); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (insurance.id) {
          const existingInsuranceIndex = insurances.findIndex(a => a.id == insurance.id);
          insurances.splice(existingInsuranceIndex, 1, insurance);
        } else {
          insurance.id = getNextId();
          insurances.push(insurance);
        }

        resolve(insurance);
      }, delay);
    });
  }

  static deleteInsurance(insuranceId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfInsuranceToDelete = insurances.findIndex(insurance => {
            insurance.id == insuranceId;
        });
        insurances.splice(indexOfInsuranceToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default InsuranceApi;
