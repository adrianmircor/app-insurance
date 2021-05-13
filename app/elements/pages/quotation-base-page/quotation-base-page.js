import { CellsPage } from '@cells/cells-page';
import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
import { html } from 'lit-element';

import '@bbva-web-components/bbva-button-default';

import { components } from '../../utils';
import '@cells-insurance-components/cells-insurance-header-rbvd/cells-insurance-header-rbvd.js';
import '@cells-insurance-components/cells-insurance-form-select-modal-rbvd';

/* eslint-disable new-cap */
export class QuotationBasePage extends BbvaCoreIntlMixin(CellsPage) {
  static get is() {
    return 'quotation-base-page';
  }

  static get properties() {
    return {
      config: { type: Object },
      ctts: { type: Object },
      customer: { type: Object },
      listProducts: { type: Object },
      formSelectItems: { type: Object },
      product: { type: Object },
      quotation: { type: Object },
      level2: { type: String },
      showTip: { type: Boolean, attribute: false },
    };
  }

  constructor() {
    super();
    this.config = window.AppConfig.config;
    this.ctts = window.AppConfig.ctts;
    this.level2 = '';
    this.customer = null;
    this.listProducts = [];
    this.product = null;
    this.quotation = null;
    this.showTip = false;
  }

  firstUpdated() {
    super.firstUpdated();
    this._handleConnections();
  }

  updated(changedProps) {
    if (changedProps.has('customer')) {
      this.level2 = this.product && this.product.title ? this.product.title : '';
    }
  }

  _handleConnections() {
    this.subscribe(this.ctts.channels.QUOTATION_PAGES, detail => {
      this.customer = detail.customer,
      this.product = detail.product,
      this.quotation = detail.quotation
    });

    if(this.nodeName.toUpperCase() === 'DASHBOARD-PAGE'){
      this.subscribe(this.ctts.channels.TSEC_REQUEST, detail => {
        this.onNewTsecRequest({detail: detail})
      });
      this.subscribe(this.ctts.channels.TSEC_RESPONSE);
    } else {
      this.subscribe(this.ctts.channels.TSEC_REQUEST);
      this.subscribe(this.ctts.channels.TSEC_RESPONSE, detail => {
        this.onNewTsecResponse({detail: detail});
      });
    }
  }

  onPageEnter() {
    this.listProducts = this.config.products;
  }

  onPageLeave() {
    //this.listProducts = [];
  }

  onShowErrorModal(event) {
    this.shadowRoot.querySelector(components.ERROR).show(event.detail);
  }

  onOpenAlertModal(event) {
    //this.shadowRoot.querySelector(components.ALERTS).open(event.detail);
  }

  onShowSpinnerGlobal(event) {
    this.shadowRoot.querySelector(components.SPINNER).setAttribute('active', event.detail);
  }

  onNewTsecRequest(event) {
    console.log('should implement in child component');
    this.publish(this.ctts.channels.TSEC_REQUEST, event.detail);
  }

  onNewTsecResponse(event) {
    console.log('should implement in child component');
  }

  openTip(){
    this.showTip = !this.showTip;
  }

  openNewQuotation() {
    let newQuotationModal = this.shadowRoot.querySelector('#newQuotationModal');
    newQuotationModal.items = this.getItemsToFormSelectModal();
    newQuotationModal.open();
  }

  openHistoryModal() {
    let newQuotationModal = this.shadowRoot.querySelector('#modalHistory');
    newQuotationModal.items = this.getItemsToFormSelectModal();
    newQuotationModal.open();
  }

  getItemsToFormSelectModal(){
    let items = [];
    this.listProducts.forEach( i => {
      items.push({value: i.id, label: i.title});
    });
    return items;
  }

  onClickedButtonNewQuotation(event) {
    let productId = event.detail.selected;
    let productSelected = this.listProducts.find(i => i.id === productId);
    this.sendDataToQuotationChannel(this.customer, productSelected, null);
    this.navigate('quotation');
  }

  onClickedButtonHistory(event) {
    let productId = event.detail.selected;
    let productSelected = this.listProducts.find(i => i.id === productId);
    this.sendDataToQuotationChannel(this.customer, productSelected), null;
    this.navigate('history');
  }

  sendDataToQuotationChannel(customer, product, quotation){
    this.publish(this.ctts.channels.QUOTATION_PAGES, {
      customer: customer,
      product: product,
      quotation: quotation
    });
  }

  onReturnPage(event){
    console.log('should implement in child component');
  }

  onContinuePage(event){
    console.log('should implement in child component');
  }

  get renderAppHeader() {
    return html`
      <cells-insurance-header-rbvd level1="Seguros" level2="${this.level2}" .customer="${this.customer}"
        @show-new-quote-insurance="${this.openNewQuotation}" @show-insurances-quotations-history="${this.openHistoryModal}">
      </cells-insurance-header-rbvd>
    `;
  }

  get renderAppMain() {
    return html`
    `;
  }

  get renderAppTransactional() {
    return html`
    `;
  }

  get renderAppOverlay() {
    return html`
      <cells-insurance-spinner-global-rbvd></cells-insurance-spinner-global-rbvd>
      <cells-insurance-error-manager-rbvd></cells-insurance-error-manager-rbvd>
      <cells-insurance-form-select-modal-rbvd id="newQuotationModal" title="Cotiza un Seguro"
        subtitle="Realiza una nueva cotización para el cliente:" buttonName="Nueva Cotización" @clicked-button="${this.onClickedButtonNewQuotation}">
      </cells-insurance-form-select-modal-rbvd>
      <cells-insurance-form-select-modal-rbvd id="modalHistory" title="Historial de Cotizaciones" 
        subtitle="Revisa el historial de cotizaciones de tu cliente:" action="history" buttonName="Ver Historial" @clicked-button="${this.onClickedButtonHistory}">
      </cells-insurance-form-select-modal-rbvd>
    `;
  }

  renderButtonToolbar(returnTitle, continueTitle){
    let title1 = returnTitle || 'Volver';
    let title2 = continueTitle || 'Continuar';
    return html`
      <hr class="line-hr margin-bottom-30 margin-top-30" />
      <div class="in-block width-100">
        <bbva-button-default @click=${this.onReturnPage}>
          ${title1}
        </bbva-button-default>
        <bbva-button-default @click="${this.onContinuePage}">
          ${title2}
        </bbva-button-default>
      </div>
    `;
  }

  get renderTipsHelper(){
    return html`
      <div class="div-tip bottomright" @click="${this.openTip}">
          <div class="in-line-flex">
            <svg viewBox="0 0 260 260" preserveAspectRatio="xMidYMid meet" focusable="false" slot="_icon"
              style="pointer-events: none; display: block; width: 16; height: 16; overflow: hidden;">
              <path class="st0"
                d="M130 10C63.7 10 10 63.7 10 130s53.7 120 120 120 120-53.7 120-120S196.3 10 130 10zm10 190l-20-20v-70h20v90zM130 90c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15z">
              </path>
            </svg>
          </div>
          <div>
            Tips de Venta
          </div>
        </div>
    
        ${this.showTip ?
            html`
              <div class="panel-tip">
                <!--add component-->
                <cells-insurance-tips-rbvd
                  .items="${this.items2}"
                  image-svg-name="info"
                  @close-popup-tips="${this.openTip}">
                </cells-insurance-tips-rbvd>
              </div>` 
            : html``}
    `;
  }

}

customElements.define(QuotationBasePage.is, QuotationBasePage);