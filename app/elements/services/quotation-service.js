import { BaseService } from '../utils/BaseService';

export class QuotationService extends BaseService {

  constructor() {
    super();
  }

  async searchByVehicleRegistration(vehicleRegistration) {
    return await fetch(`${this.host_rimac}/${this.endPoints.searchByVehicleRegistration}/${vehicleRegistration}`).then(
      response => response.json()
    );
  }

  async searchByBrand(brand) {
    return await fetch(`${this.host_rimac}/${this.endPoints.searchByBrand}?name=${brand}`).then(
      response => response.json()
    );
  }

  async searchByModel(brand, model) {
    return await fetch(`${this.host_rimac}/${this.endPoints.searchByModel}?brand=${brand}&name=${model}`).then(
      response => response.json()
    );
  }

  async initialQuotation(data) {
    var url = `${this.host}/${this.endPoints.initialQuotation}`;

    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }
}