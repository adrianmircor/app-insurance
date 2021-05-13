import { LitElement } from 'lit-element';
import { QuotationService } from './quotation-service';

class QuotationDm extends LitElement {
  constructor() {
    super();
  }
  get quotationServices() {
    return new QuotationService();
  }

  async searchByVehicleRegistration(vehicleRegistration) {
    return await this.quotationServices.searchByVehicleRegistration(vehicleRegistration);
  }

  async searchByBrand(brand) {
    return await this.quotationServices.searchByBrand(brand);
  }

  async searchByModel(brand, model) {
    return await this.quotationServices.searchByModel(brand, model);
  }

  async initialQuotation(data) {
    return await this.quotationServices.initialQuotation(data);
  }
}
customElements.define('quotation-dm', QuotationDm);