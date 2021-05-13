import { html } from 'lit-element';
import styleMain from '../main-style.js';
import stylePage from './history-page-style.js';

import '@cells-components/cells-template-paper-drawer-panel';

import { QuotationBasePage } from '../../elements/pages/quotation-base-page/quotation-base-page.js';
import { components } from '../../elements/utils';
import '@cells-insurance-components/cells-insurance-history-quotation-rbvd/cells-insurance-history-quotation-rbvd.js';

/* eslint-disable new-cap */
class HistoryPage extends QuotationBasePage {

    static get is() {
        return 'history-page';
    }

    static get styles() {
        return [styleMain, stylePage];
    }

    static get properties() {
        return {
            itemsHistory: { type: Array, attribute: false },
        };
    }

    constructor() {
        super();
        this.itemsHistory = [
            {
                number: '11',
                identification: 'ABC123',
                cellphone: '999999999',
                email: 'mariela.minaya@gmail.com',
                price: '1036',
                plan: 'Estandar',
                state: 'Activo',
                endDate: '2021-06-02'
            },
            {
                number: '22',
                identification: '123ABC',
                cellphone: '98888888',
                email: 'mariela.minaya@gmail.com',
                price: '1036',
                plan: 'Estandar',
                state: 'Activo',
                endDate: '2021-06-02'
            },
            {
                number: '33',
                identification: 'A1B2C3',
                cellphone: '977777777',
                email: 'mariela.minaya@gmail.com',
                price: '1036',
                plan: 'Estandar',
                state: 'Activo',
                endDate: '2021-06-02'
            }
        ];
    }

    firstUpdated(changedProps) {
        super.firstUpdated(changedProps);
        //let detail = { _config: this.config, _ctts: this.ctts };
        //this.shadowRoot.querySelector(components.RISK_API).configApp(detail);
    }

    onNewTsecResponse(event) {
        //this.shadowRoot.querySelector(components.VEHICLE_API).reloadRequest(event.detail);
    }

    render() {
        return html`
          <cells-template-paper-drawer-panel mode="seamed">
               
            <div slot="app__header" class="mainContainer">
                ${this.renderAppHeader}
            </div>

            <div slot="app__main" class="container bg-container">
                ${this.renderAppMain}

                <cells-insurance-history-quotation-rbvd title="Seguro Vehicular" .items="${this.itemsHistory}">
                </cells-insurance-history-quotation-rbvd>
            </div>

            <div slot="app__overlay">
                ${this.renderAppOverlay}
            </div>
            
          </cells-template-paper-drawer-panel>
      `;
    }

    

}

window.customElements.define(HistoryPage.is, HistoryPage);