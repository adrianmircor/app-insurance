import { html, css } from 'lit-element';
import styleMain from '../main-style.js';
import styleQuotation from './quotation-page-style.js';

import '@cells-components/cells-template-paper-drawer-panel';

import { QuotationBasePage } from '../../elements/pages/quotation-base-page/quotation-base-page.js';
import { components } from '../../elements/utils';
import '@cells-insurance-components/cells-insurance-quotation-rbvd';
import '@cells-insurance-components/cells-insurance-vehicles-api-dm-rbvd';
import '@cells-insurance-components/cells-insurance-customers-api-dm-rbvd';
import '@cells-insurance-components/cells-insurance-tips-rbvd';


/* eslint-disable new-cap */
class QuotationPage extends QuotationBasePage {

  static get is() {
    return 'quotation-page';
  }

  static get styles() {
    return [styleMain, styleQuotation];
  }

  static get properties() {
    return {
      vehicleInfo: { type: Object, attribute: false },
      conditions: { type: Array, attribute: false },
      items2: { type: Array }
    };
  }

  constructor() {
    super();
    this.customer2 = {
      title: 'Verificar datos del cliente',
      name: 'Mariela Milagros Quispe Minay',
      document: '76051232',
      phone: ['978846377'],
      email: ['mariela.quispe@gmail.com'],
      operator: 'Entel',
    };
    this.conditions = {};
    this.vehicleInfo = {};
    this.items2 = [
      {
        title: 'Beneficios:',
        labels: [
          'Para planes estándar y full cobertura: Servicio de chofer de reemplazo, grúa y auxilio mecánico, en Lima y provincias.',
          'Cero intereses en pagos de cuotas para el seguro.',
          'Su auto estará cubierto incluso antes de pasar la inspección vehicular.',
          'Contar con sus productos bancarios y de seguros en la misma entidad(BBVA).'
        ]
      },
      {
        title: 'Recomendaciones:',
        labels: [
          'Informar con clairdad el costo total de los planes que le ofrecemos y las facilidades de pago(en cuotas y sin intereses).',
          "Resaltar los beneficios y ventajas de cada plan, especialmente del 'Full cobertura'.",
          'Preguntar si el cliente tiene consultas y absolverlas antes de que tome una decisión.'
        ]
      }
    ]

  }

  firstUpdated() {
    super.firstUpdated();
    this.handleConnections();
    let detail = { _config: this.config, _ctts: this.ctts };
    this.shadowRoot.querySelector(components.QUOTATION).configApp(detail);
    this.shadowRoot.querySelector(components.VEHICLES_API).configApp(detail);
    this.shadowRoot.querySelector(components.CUSTOMERS_API).configApp(detail);
  }

  updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has('product')) {
      
    }
  }

  handleConnections() {
  }

  onPageEnter() {
    super.onPageEnter();
    this.initQuotationComp();
  }
  
  async initQuotationComp(){
    this.conditions = this.product && this.product.conditions ? this.product.conditions : {};
    this.vehicleInfo = this.product && this.product.vehicleInfo ? this.product.vehicleInfo : {};
    await this.requestUpdate();
    this.shadowRoot.querySelector(components.QUOTATION).init();
  }

  onPageLeave() {
    super.onPageLeave();
  } 

  onNewTsecRequest(event) {
    this.publish(this.ctts.channels.TSEC_REQUEST, event.detail);
  }

  onNewTsecResponse(event) {
    this.shadowRoot.querySelector(components.VEHICLES_API).reloadRequest(event.detail);
    this.shadowRoot.querySelector(components.CUSTOMERS_API).reloadRequest(event.detail);
  }

  onReturnPage(event){
    this.navigate('/dashboard');
  }

  onContinuePage(event){
    let cmpQuotation = this.shadowRoot.querySelector(components.QUOTATION);
    let quotation = cmpQuotation.getDataQuotation();
    this.quotation = quotation;
    this.sendDataToQuotationChannel(this.customer, this.product, this.quotation);
    this.navigate('plans');
  }

  searchByPlate(event){
    let request = event.detail;
    this.shadowRoot.querySelector(components.VEHICLES_API).getVehicle(request);    
  }

  searchByBrand(event){
    let request = event.detail;
    this.shadowRoot.querySelector(components.VEHICLES_API).getListVehicleBrands(request);    
  }

  searchByModel(event){
    let request = event.detail;
    this.shadowRoot.querySelector(components.VEHICLES_API).getListVehicleModels(request);    
  }

  searchByPrice(event){
    let request = event.detail;
    this.shadowRoot.querySelector(components.VEHICLES_API).getVehiclePrice(request);    
  }

  searchListContactsDetail(event){
    let request = event.detail;
    this.shadowRoot.querySelector(components.CUSTOMERS_API).getListContactsDetail(request);    
  }

  render() {
    return html`
    <cells-template-paper-drawer-panel state="active" disable-swipe mode="seamed">

      <div slot="app__header" class="mainContainer">
        ${this.renderAppHeader}
      </div>
    
      <div slot="app__main" class="container bg-container">
        ${this.renderAppMain}

        <cells-insurance-quotation-rbvd 
          title="Cotiza el Seguro" .customer="${this.customer}" .conditions="${this.conditions}" .vehicleInfo="${this.vehicleInfo}"
          @search-by-brand="${this.searchByBrand}" @search-by-model="${this.searchByModel}" @search-by-price="${this.searchByPrice}" @search-by-plate="${this.searchByPlate}" 
          @search-contacts-detail="${this.searchListContactsDetail}">
        </cells-insurance-quotation-rbvd>
        
        <div class="flex-row top-0">
          <div class="w-margin">
            <span></span>
          </div>
        </div>

        ${this.renderButtonToolbar(null, 'Cotizar')}

        ${this.renderTipsHelper}

      </div>

      <div slot="app__transactional">
        ${this.renderAppTransactional}
        <cells-insurance-vehicles-api-dm-rbvd 
          @error-modal-event="${this.onShowErrorModal}" @open-alert-modal="${this.onOpenAlertModal}" @spinner-global-event="${this.onShowSpinnerGlobal}"
            @new-tsec-request="${this.onNewTsecRequest}">
        </cells-insurance-vehicles-api-dm-rbvd>
        <cells-insurance-customers-api-dm-rbvd 
            @error-modal-event="${this.onShowErrorModal}" @open-alert-modal="${this.onOpenAlertModal}" @spinner-global-event="${this.onShowSpinnerGlobal}"
            @new-tsec-request="${this.onNewTsecRequest}">>
        </cells-insurance-customers-api-dm-rbvd>
      </div>
      
      <div slot="app__overlay">
        ${this.renderAppOverlay}
      </div>

    </cells-template-paper-drawer-panel>
    `;
  }
}

window.customElements.define(QuotationPage.is, QuotationPage);