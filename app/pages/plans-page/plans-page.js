import { html } from 'lit-element';
import styleMain from '../main-style.js';
import stylePlans from './plans-page-style.js';

import '@cells-components/cells-template-paper-drawer-panel';

import { QuotationBasePage } from '../../elements/pages/quotation-base-page/quotation-base-page.js';
import { components } from '../../elements/utils';
import '@cells-insurance-components/cells-insurance-plans-rbvd/cells-insurance-plans-rbvd.js'

/* eslint-disable new-cap */
class PlansPage extends QuotationBasePage {

  static get is() {
    return 'plans-page';
  }

  static get styles() {
    return [styleMain, stylePlans];
  }

  static get properties() {
    return {
      listPlans: { type: Array, attribute: false },
    };
  }

  constructor() {
    super();
    this.listPlans = [
      {
        title: 'Plan Básico',
        id: '01',
        plan: {
          items: [
            {
              share: 'Pago anual en 1 cuota',
              amount: '660',
              currencyCode: 'USD'
            },
            {
              share: 'Pago mensual en 12 cuotas',
              amount: '55',
              currencyCode: 'USD'
            }
          ],
          coverage: [
            {
              amount: '20000',
              currencyCode: 'USD',
              reason: 'Por daños a terceros'
            }
          ],
          damage: [
            'Por robo fatal segun el valor referencial',
            'Grúa y auxilio mecánico'
          ],
          benefits: [
            'Reposición de lunas nacionales sin deducible',
            'Descuentos en revisión técnica, combustible Repsol y compra de baterias'
          ]
        }
      },
      {
        title: 'Plan Estándar',
        id: '02',
        plan: {
          items: [
            {
              share: 'Pago anual en 1 cuota',
              amount: '936',
              currencyCode: 'USD'
            },
            {
              share: 'Pago mensual en 12 cuotas',
              amount: '78',
              currencyCode: 'USD'
            }
          ],
          coverage: [
            {
              amount: '150000',
              currencyCode: 'USD',
              reason: 'Por daños a terceros'
            }
          ],
          damage: [
            'Por pérdida total hasta 120% sobre el valor comercial',
            'Grúa y auxilio mecánico',
            'Chofer de reemplazo (con costo)'
          ],
          benefits: [
            'Reposición de lunas nacionales sin deducible',
            'Descuentos en revisión técnica, combustible Repsol y compra de baterias'
          ]
        }
      },
      {
        title: 'Plan Full Cobertura',
        id: '03',
        plan: {
          items: [
            {
              share: 'Pago anual en 1 cuota',
              amount: '1020',
              currencyCode: 'USD'
            },
            {
              share: 'Pago mensual en 12 cuotas',
              amount: '85',
              currencyCode: 'USD'
            }
          ],
          coverage: [
            {
              amount: '150000',
              currencyCode: 'USD',
              reason: 'Por daños a terceros'
            },
            {
              amount: '25000',
              currencyCode: 'USD',
              reason: 'Por daños a ocupantes'
            },
          ],
          damage: [
            'Por daños al vehiculo sobre el valor contenido',
            'Grúa y auxilio mecánico',
            'Chofer de reemplazo sin costo'
          ],
          benefits: [
            'Reposición de lunas nacionales sin deducible',
            'Descuentos en revisión técnica, combustible Repsol y compra de baterias'
          ]
        }
      }
    ];
  }

  firstUpdated() {
    super.firstUpdated();
    this.handleConnections();
    //let detail = { _config: this.config, _ctts: this.ctts };
    //this.shadowRoot.querySelector(components.RISK_API).configApp(detail);
  }

  handleConnections() {
  }

  onPageEnter() {
    super.onPageEnter();
  }

  onPageLeave() {
    super.onPageLeave();
  }

  onNewTsecRequest(event) {
    this.publish(this.ctts.channels.TSEC_REQUEST, event.detail);
  }

  onNewTsecResponse(event) {
    //this.shadowRoot.querySelector(components.VEHICLE_API).reloadRequest(event.detail);
  }

  onReturnPage() {
    this.navigate('quotation');
  }

  onContinuePage() {
    this.navigate('insurance');
  }

  linkSeeMoreDetails({detail}){
    console.log('linkSeeMoreDetails id plan: ', detail.id);
  }

  buttonSelectPlan({detail}){
    console.log('buttonSelectPlan id plan: ', detail.id);
  }

  linkSaveQuote({detail}){
    console.log('linkSaveQuote id plan: ', detail.id);
  }

  render() {
    return html`
      <cells-template-paper-drawer-panel mode="seamed">

        <div slot="app__header" class="mainContainer">
          ${this.renderAppHeader}
        </div>
      
        <div slot="app__main" class="container bg-container">
          ${this.renderAppMain}

          <cells-insurance-plans-rbvd
            title="Explica al cliente sus planes recomendados"
            subtitle="Y guíalo para que elija el que más se ajuste a sus necesidades"
            .listPlans="${this.listPlans}"
            @clicked-link-see-more-details-plans="${this.linkSeeMoreDetails}"
            @clicked-button-select-plan-plans="${this.buttonSelectPlan}"
            @clicked-link-save-quote-plans="${this.linkSaveQuote}">
          </cells-insurance-plans-rbvd>

        </div>

        <div slot="app__overlay">
          ${this.renderAppOverlay}
        </div>

      </cells-template-paper-drawer-panel>
      `;
  }

}

window.customElements.define(PlansPage.is, PlansPage);