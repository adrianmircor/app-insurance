import { CellsPage } from '@cells/cells-page';
import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
import { html } from 'lit-element';
import styleMain from '../style-main.js';
import stylePage from './list-insurance-css.js';

import '@cells-components/cells-template-paper-drawer-panel';
import '@bbva-web-components/bbva-header-main';
import '@bbva-web-components/bbva-button-default';
import '@bbva-web-components/bbva-help-modal';
import '@bbva-web-components/bbva-core-icon';
import '@bbva-web-components/bbva-form-select';
import '@cells-insurance-components/cells-insurance-list-rbvd/cells-insurance-list-rbvd.js';
import '@cells-insurance-components/cells-insurance-header-rbvd/cells-insurance-header-rbvd.js';
import '@cells-insurance-components/cells-insurance-form-quotation-rbvd/cells-insurance-form-quotation-rbvd.js';


import { cleanUp } from '../../elements/movements-dm/movements-dm';

/* eslint-disable new-cap */
class ListInsurancePage extends BbvaCoreIntlMixin(CellsPage) {
  static get is() {
    return 'list-insurance-page';
  }

  constructor() {
    super();
    this.customer = {
      name: 'MARIELA MILAGROS QUISPE MINAYA',
      document: '87654321'
    };
    this.items = [
      {
        value: 'Seguro Vehicular',
        label: 'Seguro Vehicular'
      },
      {
        value: 'Seguro Millas',
        label: 'Seguro Millas'
      },
      {
        value: 'Seguro Adicional',
        label: 'Seguro Adicional'
      }
    ];
    this.listCards = [
      {
        title: 'Seguro Vehicular',
        info: 'BBVA y Rímac se unieron para brindar los siguientes beneficios a clientes del banco.',
        buttonName: 'Cotizar',
        items: ['Cubre atos de robo total.', 'Cubre daños a terceros.',
          'Cuenta con auxilio mecánico y traslado de grúa.',
          'Descuento en gasolina Repsol.',
          'Tenemos 3 planes de protección para el vehículo.'
        ]

      }
    ];
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
    this.modalFlag = true;
  }

  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    if (this.modalFlag === true) {
      this.openModalUser();
    };
  }

  actionCotizar() {
    this.navigate('quotation');
  }

  openNew() {
    console.log("--->")
    this.shadowRoot.querySelector('#modalNew').shadowRoot.querySelector('.help-modal').setAttribute('style', 'width:50%;top:100px; left:300px; overflow-y: hidden;');
    this.shadowRoot.querySelector('#modalNew').shadowRoot.querySelector('.modal-content-wrapper').setAttribute('style', 'padding-top: 0px; align-items: flex-start !important; width: 80%;');
    this.shadowRoot.querySelector('#modalNew').shadowRoot.querySelector('.modal-container').setAttribute('style', 'padding-top: 0px; align-items: flex-start !important');
    this.shadowRoot.querySelector('#modalNew').shadowRoot.querySelector('.slot-footer').setAttribute('style', 'flex-direction: initial; margin-left: 20px;');
    this.shadowRoot.querySelector('#modalNew').open();
  }

  openHistory() {
    this.shadowRoot.querySelector('#modalHistory').shadowRoot.querySelector('.help-modal').setAttribute('style', 'width:50%;top:100px; left:300px; overflow-y: hidden;');
    this.shadowRoot.querySelector('#modalHistory').shadowRoot.querySelector('.modal-content-wrapper').setAttribute('style', 'padding-top: 0px; align-items: flex-start !important; width: 80%;');
    this.shadowRoot.querySelector('#modalHistory').shadowRoot.querySelector('.modal-container').setAttribute('style', 'padding-top: 0px; align-items: flex-start !important');
    this.shadowRoot.querySelector('#modalHistory').shadowRoot.querySelector('.slot-footer').setAttribute('style', 'flex-direction: initial; margin-left: 20px;');
    this.shadowRoot.querySelector('#modalHistory').open();
  }

  openModalUser() {
    this.updateComplete
      .then( () => {
        console.log('listo para usar');
        this.shadowRoot.querySelector('#modalUser').shadowRoot.querySelector('.help-modal').setAttribute('style', 'width:50%;top:100px; left:300px; overflow-y: hidden;');
        this.shadowRoot.querySelector('#modalUser').shadowRoot.querySelector('.modal-content-wrapper').setAttribute('style', 'padding-top: 0px; align-items: flex-start !important; width: 80%;');
        this.shadowRoot.querySelector('#modalUser').shadowRoot.querySelector('.modal-container').setAttribute('style', 'padding-top: 0px; align-items: flex-start !important');
        this.shadowRoot.querySelector('#modalUser').shadowRoot.querySelector('.slot-footer').setAttribute('style', 'flex-direction: initial; margin-left: 20px;');
        this.shadowRoot.querySelector('#modalUser').open();
      })
  }

  clickedButton({ detail }) {
    if (detail.action === 'new') {
      this.navigate('quotation');
    } else if (detail.action === 'history') {
      this.navigate('history');
    }
  }

  render() {
    return html`

      <cells-template-paper-drawer-panel mode="seamed">
        <div slot="app__header">
      
          <cells-insurance-header-rbvd 
            level1="Seguros" 
            level2="Seguros vehiculares"
            customer="${JSON.stringify(this.customer)}" 
            @show-new-quote-insurance="${this.openNew}"
            @show-insurances-quotations-history="${this.openHistory}">
          </cells-insurance-header-rbvd>
      
          <bbva-help-modal id="modalNew" header-icon="bbva:info" header-text=" ">
            <div class="content" slot="slot-content">
              <cells-insurance-form-quotation-rbvd title="Cotiza un Seguro"
                subtitle="Realiza una nueva cotización para el cliente:" buttonName="Nueva Cotización" action="new"
                .items="${this.items}" @clicked-button="${this.clickedButton}">
              </cells-insurance-form-quotation-rbvd>
            </div>
          </bbva-help-modal>
      
          <bbva-help-modal id="modalHistory" header-icon="bbva:info" header-text=" ">
            <div class="content" slot="slot-content">
              <cells-insurance-form-quotation-rbvd title="Historial de Seguros"
                subtitle="Revisa el historial de cotizaciones de tu cliente:" action="history" buttonName="Ver Historial"
                .items="${this.items}" @clicked-button="${this.clickedButton}">
              </cells-insurance-form-quotation-rbvd>
            </div>
          </bbva-help-modal>
      
          <bbva-help-modal id="modalUser" header-icon="bbva:info" header-text=" ">
            <div class="content" slot="slot-content">
              <p>¡USUARIO BLOQUEADO!</p>
              </cells-insurance-form-quotation-rbvd>
            </div>
          </bbva-help-modal>
      
        </div>
        <div slot="app__main" class="container">
          <cells-insurance-list-rbvd .listCards="${this.listCards}" @selection-insurance="${this.actionCotizar}">
          </cells-insurance-list-rbvd>
        </div>
      
      </cells-template-paper-drawer-panel>
      `;
  }

  onPageEnter() {
    // Cada vez que accedamos al login, simulamos una limpieza de los datos almacenados en memoria.
    cleanUp();
  }

  onPageLeave() {
    // Cada vez que salgamos del login, limpiamos las cajas de texto.
  }

  static get styles() {
    return [styleMain, stylePage];
  }
}

window.customElements.define(ListInsurancePage.is, ListInsurancePage);