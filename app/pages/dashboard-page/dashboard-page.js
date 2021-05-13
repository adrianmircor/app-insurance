import { html, css } from 'lit-element';
import styleMain from '../main-style.js';
import styleDashboard from './dashboard-page-style.js';

import '@cells-components/cells-template-paper-drawer-panel';
import '@cells-components/cells-skeleton-loading-page';

import '@bbva-web-components/bbva-help-modal';

import { QuotationBasePage } from '../../elements/pages/quotation-base-page/quotation-base-page.js';
import { components } from '../../elements/utils';
import '@cells-insurance-components/cells-insurance-core-rbvd';
import '@cells-insurance-components/cells-insurance-communication-dm-rbvd';
import '@cells-insurance-components/cells-insurance-list-rbvd/cells-insurance-list-rbvd.js';
import '@cells-insurance-components/cells-insurance-risks-api-dm-rbvd';


/* eslint-disable new-cap */
class DashboardPage extends QuotationBasePage {

  static get is() {
    return 'dashboard-page';
  }

  static get styles() {
    return [styleMain, styleDashboard];
  }

  constructor() {
    super();
  }

  firstUpdated() {
    super.firstUpdated();
    this.handleConnections();
    
    this.shadowRoot.querySelector(components.CORE).configApp();
    let detail = { _config: this.config, _ctts: this.ctts };
    this.shadowRoot.querySelector(components.INSURANCE_LIST).configApp(detail);
    this.shadowRoot.querySelector(components.RISKS_API).configApp(detail);
  }

  handleConnections() {
  }

  onPageEnter() {
    super.onPageEnter();
  }

  onPageLeave() {
    super.onPageLeave();
  }

  onAppDataEvent(event) {
    this.shadowRoot.querySelector(components.CORE).launchApp(event.detail);
  }

  onLaunchApp(event) {
    debugger;
    let { customer } = event.detail;
    this.customer = customer;
    this.shadowRoot.querySelector(components.HEADER).init(customer);
    this.shadowRoot.querySelector(components.INSURANCE_LIST).init(this.listProducts);
  }

  onSetUserData(event) {
    //this.shadowRoot.querySelector(components.BIOMETRIC).userData = event.detail;
  }

  onNewTsecRequest(event) {
    this.shadowRoot.querySelector(components.CORE).newTsecRequest(event.detail);
  }

  onNewTsecResponse(event) {
    this.publish(this.ctts.channels.TSEC_RESPONSE, event.detail);
    this.shadowRoot.querySelector(components.RISKS_API).reloadRequest(event.detail);
  }

  onNewTsecResponseFromCOMM(event) {
    this.shadowRoot.querySelector(components.CORE).newTsecResponse(event.detail);
  }

  onSendPostMessageDM(event) {
    this.shadowRoot.querySelector(components.COMMUNICATION)._sendMessage(event.detail);
  }

  onNewTsecBroadcast(event) {
    this.shadowRoot.querySelector(components.CORE).newTsec(event.detail);
  }

  openModalBlackList() {
      let modalBlackList = this.shadowRoot.querySelector('#modalBlackList');
      modalBlackList.shadowRoot.querySelector('.help-modal').setAttribute('style', 'width:50%;top:100px; left:300px; overflow-y: hidden;');
      modalBlackList.shadowRoot.querySelector('.modal-content-wrapper').setAttribute('style', 'padding-top: 0px; align-items: flex-start !important; width: 80%;');
      modalBlackList.shadowRoot.querySelector('.modal-container').setAttribute('style', 'padding-top: 0px; align-items: flex-start !important');
      modalBlackList.shadowRoot.querySelector('.slot-footer').setAttribute('style', 'flex-direction: initial; margin-left: 20px;');
      modalBlackList.open();
  }

  doQuotationAction(event) {
    this.sendDataToQuotationChannel(this.customer, event.detail, null);
    this.navigate('quotation');
  }

  onValidateBlackList(event){
    let detail = {
      customerId: this.customer.customerId,
      documentTypeId: this.customer.documentType.id,
      documentNumber: this.customer.documentNumber,
      productoId: 'VEHICULAR',
      onSuccess: this.getListRiskBlackListedSuccess.bind(this) 
    };
    this.shadowRoot.querySelector(components.RISKS_API).getListRiskBlackListed(detail);
  }

  getListRiskBlackListedSuccess(response){
    if(response.isBlocked === true){
      this.openModalBlackList();
    }
  }

  render() {
    return html`
      <cells-template-paper-drawer-panel mode="seamed">

        <div slot="app__header" class="mainContainer">
          ${this.renderAppHeader}
        </div>
        
        <div slot="app__main" class="container">
          ${this.renderAppMain}
          <cells-insurance-list-rbvd @action-selection-insurance="${this.doQuotationAction}" @validate-black-list="${this.onValidateBlackList}">
          </cells-insurance-list-rbvd>
        </div>

        <div slot="app__transactional" class="container">
          <cells-insurance-core-rbvd
            @error-modal-event="${this.onShowErrorModal}" @open-alert-modal="${this.onOpenAlertModal}"
            @init-launch-app="${this.onLaunchApp}"
            @validate-black-list="${this.onValidateBlackList}"
            @set-user-data="${this.onSetUserData}"
            @send-postmessage="${this.onSendPostMessageDM}"
            @new-tsec-response="${this.onNewTsecResponse}">
          </cells-insurance-core-rbvd>
          <cells-insurance-communication-dm-rbvd
            @error-modal-event="${this.onShowErrorModal}" @open-alert-modal="${this.onOpenAlertModal}"
            @app-data-event="${this.onAppDataEvent}"
            @new-tsec="${this.onNewTsecBroadcast}"
            @new-tsec-response="${this.onNewTsecResponseFromCOMM}">
          </cells-insurance-communication-dm-rbvd>
          <cells-insurance-risks-api-dm-rbvd encrypt
            @error-modal-event="${this.onShowErrorModal}" @open-alert-modal="${this.onOpenAlertModal}" @spinner-global-event="${this.onShowSpinnerGlobal}"
            @new-tsec-request="${this.onNewTsecRequest}">
          </cells-insurance-risks-api-dm-rbvd>
        </div>

        <div slot="app__overlay">
          ${this.renderAppOverlay}
          </bbva-help-modal>
          <bbva-help-modal id="modalBlackList" header-icon="bbva:info" header-text=" ">
            <div class="content" slot="slot-content">
              <p>¡CLIENTE BLOQUEADO!</p>
            </div>
          </bbva-help-modal>
        </div>

     </cells-template-paper-drawer-panel>`;
  }

}

window.customElements.define(DashboardPage.is, DashboardPage);