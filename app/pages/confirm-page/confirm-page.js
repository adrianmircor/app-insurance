import '@bbva-web-components/bbva-button-default';
import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
import '@bbva-web-components/bbva-expandable-panel';
import '@bbva-web-components/bbva-form-checkbox';
import '@bbva-web-components/bbva-form-field';
import '@bbva-web-components/bbva-form-password';
import '@bbva-web-components/bbva-form-radio-button';
import '@bbva-web-components/bbva-form-radio-group';
import '@bbva-web-components/bbva-form-search';
import '@bbva-web-components/bbva-form-select';
import '@bbva-web-components/bbva-header-main';
import '@cells-components/cells-template-paper-drawer-panel';
import { CellsPage } from '@cells/cells-page';
import { html } from 'lit-element';
import '../../elements/services/quotation-dm.js';
import styleMain from '../style-main.js';
import styleQuotation from './confirm-css.js';

/* eslint-disable new-cap */
class ConfirmPage extends BbvaCoreIntlMixin(CellsPage) {

  static get is() {
    return 'confirm-page';
  }

  static get properties() {
    return {
      showPanel: { type: Boolean, attribute: false }
    };
  }

  constructor() {
    super();
    this.showPanel = true;
  }

  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);

    this._vehicleRegistration = this.shadowRoot.querySelector('#vehicleRegistration');
    this._cellphone = this.shadowRoot.querySelector('#cellphone');
    this._email = this.shadowRoot.querySelector('#email');
  }

  eventPanel({detail}) {
    this.showPanel = detail;
  }

  render() {
    return html`
    <cells-template-paper-drawer-panel mode="seamed">
        <div slot="app__header">
          
        <div class="flex-row">
            <div class="w-margin">
            </div>
            <div class="container-l">
              <div class='form-l'>
                <span class="input-view-top insurance-title insurance-blue submenu">Seguros</span>
              </div>
            </div>
            <div class="w-margin">
              <span></span>
            </div>
          </div>

          <hr>

          <div class="flex-row">
            <div class="w-margin">
            </div>
            <div class="container-l">
              <div class='form-l'>
                <span class="input-view-top insurance-title">SEGUROS</span>
                <span class="input-view-top">MARIELA MILAGROS QUISPE MINAYA</span>
                <span class="input-view-top insurance-blue">DNI: 12345678</span>
              </div>
            </div>
            <div class="container-r">
              <div class='form-r'>
                <span class="input-view-top">
                <br></span>
                <span class="input-view-top insurance-blue"  onclick="document.querySelector('bbva-help-modal').open()">
                <img width="16px" height="16px" class="pr" src="resources/images/img-seguro-umbrella.png">
                <b>Nueva Cotización</b></span>
                <span class="input-view-top insurance-blue">
                <img width="16px" height="16px" class="pr" src="resources/images/img-seguro-umbrella.png">
                <b>Historial de Cotizaciones</b></span>
              </div>
            </div>
            <div class="w-margin">
              <span></span>
            </div>
          </div>

        </div>

        <div slot="app__main" class="container bg-container">
        <div class="flex-row top-0  in-line">
        <span class="step">4 de 4</span>
        <div class="input-view insurance-title title-bottom pb-20">Confirmación de Datos</div>
        <span class="font-12">Y guíalo para que elija el que más se ajuste a sus necesidades</span>
        <hr>
        </div>
        <div class="flex-row top-0">
          <div class="container-l padding-r">
            <div class='form-l'>
            <div class="pb-20">
              <div class="flex-row div-info">
                  <div>
                    <svg viewBox="0 0 260 260" preserveAspectRatio="xMidYMid meet" focusable="false" slot="_icon" style="pointer-events: none; display: block; width: 16; height: 16; overflow: hidden;"><path class="st0" d="M130 10C63.7 10 10 63.7 10 130s53.7 120 120 120 120-53.7 120-120S196.3 10 130 10zm10 190l-20-20v-70h20v90zM130 90c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15z"></path></svg>
                  </div>
                  <div class="pl-20">
                    <div class="pb-10">
                    <b>Importante</b>
                    </div>
                    <div class="interline">
                    Antes de continuar verifica la información del
                    cliente. Considera que este es el último filtro de
                    confirmación de datos. 
                  </div>
                </div>
              </div>
            </div>

            <div class="input-view insurance-title subtitle pb-20">Validación de identidad</div>
            <span class="font-12 interline">
            El registro de la huella reemplaza a la firma del cliente. Al
            registrar su huella, el cliente manifiesta su conformidad
            con la contratación del seguro vehicular.
            </span>
            </div>
          </div>

          <div class="container-r  padding-l">
            <div class='form-l'>
              <bbva-expandable-panel ?expanded="${this.showPanel}" see-more="Resumen de contratación" see-less="Resumen de contratación" @expandable-panel-expand="${this.eventPanel}">
              </bbva-expandable-panel>
    ${this.showPanel ?
    html`
              <div class="panel-container">

                <hr>
                <div class="input-view insurance-title subtitle">DATOS DEL CLIENTE</div>
                <div class="input-view semibold">Nombre del cliente</div>
                <span class="font-12">
                Mariela Milagros Quispe Minaya
                </span> 
                <div class="input-view semibold">DNI</div>
                <span class="font-12">
                10807479
                </span> 
                <div class="input-view semibold">Código del cliente</div>
                <span class="font-12">
                20807689
                </span>
                <hr class="hr-gray">

                <div class="input-view insurance-title subtitle">DATOS DEL SEGURO</div>
                <div class="input-view semibold">Aseguradora</div>
                <span class="font-12">
                Rímac
                </span> 
                <div class="input-view semibold">Nombre del plan elegido</div>
                <span class="font-12">
                Plan Estándar
                </span> 
                <div class="input-view semibold">Precio total de la póliza</div>
                <span class="font-12">
                US$ 936
                </span>

                <hr class="hr-gray">
                <div class="input-view insurance-title subtitle">DATOS DE PAGO</div>
                <div class="input-view semibold">Cuenta de cargo</div>
                <span class="font-12">
                ***5673
                </span> 
                <div class="input-view semibold">Número de cuotas</div>
                <span class="font-12">
                12
                </span> 
                <div class="input-view semibold">Valor de la cuota</div>
                <span class="font-12">
                US$ 78
                </span> 

                <hr class="hr-gray">
                <div class="input-view insurance-title subtitle">CONTACTO PARA LA REVISIÓN TÉCNICA</div>
                <div class="input-view semibold">Nombre y Apellido</div>
                <span class="font-12">
                Mariela Milagros Quispe Minaya
                </span> 
                <div class="input-view semibold">Teléfono</div>
                <span class="font-12">
                978846377
                </span>
                <hr class="hr-gray">

                <div class="input-view insurance-title subtitle">DATOS DE TU VEHÍCULO</div>
                <div class="input-view semibold">Placa</div>
                <span class="font-12">
                ABC123
                </span> 
                <div class="input-view semibold">Marca</div>
                <span class="font-12">
                Mitsubishi
                </span> 
                <div class="input-view semibold">Modelo</div>
                <span class="font-12">
                Mirage
                </span> 
                <div class="input-view semibold">Año de fabricación</div>
                <span class="font-12">
                2018
                </span> 
                <div class="input-view semibold">Valor referencial</div>
                <span class="font-12">
                US$ 9,975
                </span> 
                <div class="input-view semibold">Conversión GLP/GNV</div>
                <span class="font-12">
                No
                </span>

              </div>

    ` : html ``}

            </div>
          </div>
          <div class="w-margin">
            <span></span>
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
    step1.forEach((element)=> {
      if (element.value.trim().length === 0) {
        validationStep1 = false;
      }
    }
    );
    var check1 = this.shadowRoot.querySelectorAll('.check1');
    var validationCheck1 = 0;
    check1.forEach((element)=> {
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

    this.navigate('plans');
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
    radios.forEach((element)=> {
      element.shadowRoot.querySelector('.radio').setAttribute('style', 'width: 1.2rem; height: 1.2rem;');
    });

    var select = this.shadowRoot.querySelectorAll('bbva-form-select');
    select.forEach((element)=> {
      element.shadowRoot.querySelector('.content-text').setAttribute('style', 'font-size: 12px');
    });

    var field = this.shadowRoot.querySelectorAll('bbva-form-field');
    field.forEach((element)=> {
      element.shadowRoot.querySelector('.label').setAttribute('style', 'font-size: 12px');
    });

    var search = this.shadowRoot.querySelectorAll('bbva-form-search');
    search.forEach((element)=> {
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

window.customElements.define(ConfirmPage.is, ConfirmPage);