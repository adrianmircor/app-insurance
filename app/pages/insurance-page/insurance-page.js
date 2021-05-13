import '@bbva-web-components/bbva-button-default';
import { CellsPage } from '@cells/cells-page';
import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
import { html, css } from 'lit-element';
import styleMain from '../style-main.js';
import styleQuotation from './insurance-css.js';

import '@bbva-web-components/bbva-form-field';
import '@bbva-web-components/bbva-form-checkbox';
import '@bbva-web-components/bbva-form-password';
import '@bbva-web-components/bbva-form-select';
import '@bbva-web-components/bbva-form-search';
import '@bbva-web-components/bbva-form-radio-button';
import '@bbva-web-components/bbva-form-radio-group';
import '@bbva-web-components/bbva-form-date';
import '@bbva-web-components/bbva-header-main';
import '@cells-components/cells-template-paper-drawer-panel';
import '@cells-insurance-components/cells-insurance-header-rbvd';
import '../../elements/services/quotation-dm.js';


/* eslint-disable new-cap */
class InsurancePage extends BbvaCoreIntlMixin(CellsPage) {
  static get is() {
    return 'insurance-page';
  }

  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);

    this._vehicleRegistration = this.shadowRoot.querySelector('#vehicleRegistration');
    this._cellphone = this.shadowRoot.querySelector('#cellphone');
    this._email = this.shadowRoot.querySelector('#email');
  }

  render() {
    return html`
    <cells-template-paper-drawer-panel mode="seamed">
      <div slot="app__header">
    
        <cells-insurance-header-rbvd></cells-insurance-header-rbvd>
    
        <div slot="app__main" class="container bg-container">
          <div class="flex-row top-0  in-line">
            <span class="step">3 de 4</span>
            <div class="input-view insurance-title title-bottom pb-20">Completa estos datos para el seguro</div>
            <hr>
          </div>
          <div class="flex-row top-0">
            <div class="container-l padding-r">
              <div class='form-l'>
                <div class="input-view insurance-title subtitle pb-20">Datos del vehiculo</div>
                <bbva-form-field id="name" class="w-input required pb-10" label="Número de chasis"
                  @input="${this.nextStep1}">
                </bbva-form-field>
                <bbva-form-field id="name" class="w-input required pb-10" label="Número de motor"
                  @input="${this.nextStep1}">
                </bbva-form-field>
    
                <bbva-form-select label="Número de asientos" class="required pb-10" id="mail">
                  <bbva-form-option value="option1" selected="">5</bbva-form-option>
                  <bbva-form-option value="option2">4</bbva-form-option>
                </bbva-form-select>
    
                <div class="input-view insurance-title subtitle pb-20">Datos de pago</div>
    
                <bbva-form-select label-out="Número de cuotas" class="required pb-10" id="mail">
                  <bbva-form-option value="option1" selected="">
                    <div class="flex-row">
                      <div class="option-l">1 cuota</div>
                      <div class="option-r">Valor cuota US$936</div>
                    </div>
                  </bbva-form-option>
                  <bbva-form-option value="option2">
                    <div class="flex-row">
                      <div class="option-l">2 cuota</div>
                      <div class="option-r">Valor cuota US$936</div>
                    </div>
                  </bbva-form-option>
                  <bbva-form-option value="option3">
                    <div class="flex-row">
                      <div class="option-l">3 cuota</div>
                      <div class="option-r">Valor cuota US$936</div>
                    </div>
                  </bbva-form-option>
                </bbva-form-select>
    
                <bbva-form-date label="Fecha de inicio de cobertura" class="w-input required pb-10"></bbva-form-date>
    
                <bbva-form-select label="Cuenta o tarjeta de cargo"
                  info-message="El cliente puede elegir entre una cuenta o tarjeta de cargo." class="required pb-10"
                  id="mail">
                  <bbva-form-option value="option1" selected="">
                    <div class="flex-row">
                      <div class="option-l">Cuenta ganadora *4321</div>
                      <div class="option-r">
                        <div>Saldo disponible S/</div>
                        <div>6700.00</div>
                      </div>
                    </div>
                  </bbva-form-option>
                  <bbva-form-option value="option2">
                    <div class="flex-row">
                      <div class="option-l">Visa control *5673</div>
                      <div class="option-r">
                        <div>Saldo disponible S/</div>
                        <div>680.00</div>
                      </div>
                    </div>
                  </bbva-form-option>
                  <bbva-form-option value="option3" selected="">
                    <div class="flex-row">
                      <div class="option-l">Cuenta ganadora *4321</div>
                      <div class="option-r">
                        <div>Saldo disponible S/</div>
                        <div>6700.00</div>
                      </div>
                    </div>
                  </bbva-form-option>
                </bbva-form-select>
    
    
                <div class="input-view insurance-title subtitle pb-20">Contacto para la revisión técnica</div>
                <bbva-form-field id="name" class="w-input required pb-10" label="Nombres y Apellidos"
                  @input="${this.nextStep1}">
                </bbva-form-field>
                <bbva-form-field id="name" class="w-input required pb-10" label="Teléfono" @input="${this.nextStep1}">
                </bbva-form-field>
    
                <div class="flex-row div-warning">
                  <div>
                    <svg viewBox="0 0 260 260" preserveAspectRatio="xMidYMid meet" focusable="false" slot="_icon"
                      style="pointer-events: none; display: block; width: 16; height: 16; overflow: hidden;">
                      <path class="st0"
                        d="M130 10C63.7 10 10 63.7 10 130s53.7 120 120 120 120-53.7 120-120S196.3 10 130 10zm10 190l-20-20v-70h20v90zM130 90c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15z">
                      </path>
                    </svg>
                  </div>
                  <div class="pl-20">
                    <div class="pb-10">
                      <b>Importante</b>
                    </div>
                    <div class="interline">
                      Informa al cliente que después de contratar el
                      seguro, el vehículo deberá tener GPS instalado y
                      pasar revisión técnica. De haber algún cambio
                      en la información declarada, el precio a pagar
                      podría variar
                    </div>
                  </div>
                </div>
    
              </div>
            </div>
    
            <hr>
    
            <div class="container-r  padding-l">
              <div class='form-l'>
                <div class="input-view insurance-title subtitle pb-10">Envío de documentos contractuales</div>
                <div class="insurance-separator pb-10">Se enviarán los siguientes documentos al correo que el cliente
                  proporcione.</div>
    
                <bbva-form-select id="cmbFabrication" label="Correo Electrónico">
                  <bbva-form-option value="option1" selected="">jose.jona.mv@gmail.com</bbva-form-option>
                  <bbva-form-option value="option2">jose@gmail.com</bbva-form-option>
                </bbva-form-select>
    
                <div class="insurance-separator insurance-blue semibold pb-10">
                  <bbva-core-icon icon="coronita:pdf"></bbva-core-icon>
                  Imprimir documentos contractuales.
                </div>
    
                <div class="insurance-separator insurance-blue semibold pb-10">
                  <bbva-core-icon icon="coronita:pdf"></bbva-core-icon>
                  Imprimir Ley de Protección de Datos Personales.
                </div>
    
                <div class="insurance-separator pb-10">¿El cliente autoriza el tratamiento de datos personales?</div>
    
                <bbva-form-radio-group name="choice" selected="1" class="in-flex">
                  <bbva-form-radio-button value="item1" divider="full">
                    Si
                  </bbva-form-radio-button>
                  <bbva-form-radio-button value="item2" divider="full">No</bbva-form-radio-button>
                </bbva-form-radio-group>
    
                <div class="input-view insurance-title subtitle pb-10">Datos de venta</div>
                <div class="insurance-separator pb-10 pr-20">Confirma tu registro de gestor o código de vendedor. Sino,
                  ingresa datos de la persona que realizará la venta.</div>
    
                <bbva-form-search id="txtIdentification" class="w-input" label="Registro o Código">
                </bbva-form-search>
    
                <bbva-form-field id="txtReferencial" class="w-input pb-20" label="Nombres y apellidos">
                </bbva-form-field>
    
              </div>
            </div>
            <div class="w-margin">
              <span></span>
            </div>
          </div>
    
          <hr class="line-hr margin-bottom-30 margin-top-30">
          <div class="in-block width-100">
            <bbva-button-default @click=${this.cancelQuotation}>
              Volver
            </bbva-button-default>
            <bbva-button-default @click="${this.continueQuotation}">
              Continuar
            </bbva-button-default>
            <div class="div-tip bottomright">
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
          </div>
    
        </div>
    
    
        <quotation-dm></quotation-dm>
    </cells-template-paper-drawer-panel>
     `;
  }

  handleValidation() {
    let canContinue = true;

    [this._vehicleRegistration, this._cellphone].forEach((el) => (el.validate(), el.invalid && (canContinue = false)));

    if (canContinue) {
      let vehicle = this.searchByVehicleRegistration();
      let data = {
        'nombres': this._vehicleRegistration.value,
        'email': this._cellphone.value,
        'telefono': '996296400'
      };
      this.initialQuotation(data);

      this.navigate('vehicle', data);
      this.publish('ch-quotation-param', data);
    }
  }

  nextStep1() {
    if (!this.validationStep1()) {
      this.shadowRoot.querySelector('#txtIdentification').setAttribute('disabled', '');
      this.shadowRoot.querySelector('#chkIdentification').setAttribute('disabled', '');
      this.shadowRoot.querySelector('#txtSearchBranch').setAttribute('disabled', '');
      this.shadowRoot.querySelector('#txtSearchModel').setAttribute('disabled', '');
      this.shadowRoot.querySelector('#cmbFabrication').setAttribute('disabled', '');
      this.shadowRoot.querySelector('#txtReferencial').setAttribute('disabled', '');
    } else {
      this.shadowRoot.querySelector('#txtIdentification').removeAttribute('disabled');
      this.shadowRoot.querySelector('#chkIdentification').removeAttribute('disabled');
      this.shadowRoot.querySelector('#txtSearchBranch').removeAttribute('disabled');
      this.shadowRoot.querySelector('#txtSearchModel').removeAttribute('disabled');
      this.shadowRoot.querySelector('#cmbFabrication').removeAttribute('disabled');
      this.shadowRoot.querySelector('#txtReferencial').removeAttribute('disabled');
    }
  }

  validationStep1() {
    var step1 = this.shadowRoot.querySelectorAll('.step1');
    var validationStep1 = true;
    step1.forEach((element) => {
      if (element.value.trim().length === 0) {
        validationStep1 = false;
      }
    }
    );
    var check1 = this.shadowRoot.querySelectorAll('.check1');
    var validationCheck1 = 0;
    check1.forEach((element) => {
      if (element.checked) {
        validationCheck1 = validationCheck1 + 1;
      }
    }
    );

    if (validationCheck1 === 2 && validationStep1) {
      validationStep1 = true;
    } else {
      validationStep1 = false;
    }
    return validationStep1;
  }

  continueQuotation() {

    this.shadowRoot.querySelector('.required');

    this.navigate('confirm');
  }

  cancelQuotation() {
    this.navigate('plans');
  }

  searchByVehicleRegistration() {
    return this.shadowRoot.querySelector('quotation-dm').searchByVehicleRegistration();
  }

  initialQuotation(data) {
    this.shadowRoot.querySelector('quotation-dm').initialQuotation(data);
  }

  onPageEnter() {
    // Cada vez que accedamos a la pagina
    var radios = this.shadowRoot.querySelectorAll('bbva-form-radio-button');
    radios.forEach((element) => {
      element.shadowRoot.querySelector('.radio').setAttribute('style', 'width: 1.2rem; height: 1.2rem;');
    });

    var select = this.shadowRoot.querySelectorAll('bbva-form-select');
    select.forEach((element) => {
      element.shadowRoot.querySelector('.content-text').setAttribute('style', 'font-size: 12px');
    });

    var field = this.shadowRoot.querySelectorAll('bbva-form-field');
    field.forEach((element) => {
      element.shadowRoot.querySelector('.label').setAttribute('style', 'font-size: 12px');
    });

    var search = this.shadowRoot.querySelectorAll('bbva-form-search');
    search.forEach((element) => {
      element.shadowRoot.querySelector('.label').setAttribute('style', 'font-size: 12px');
    });
  }

  onPageLeave() {
    // Cada vez que salgamos de la pagina
  }

  static get styles() {
    return [styleMain, styleQuotation];
  }
}

window.customElements.define(InsurancePage.is, InsurancePage);