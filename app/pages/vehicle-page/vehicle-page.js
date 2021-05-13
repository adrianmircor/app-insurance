import '@bbva-web-components/bbva-button-default';
import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
import '@bbva-web-components/bbva-form-checkbox';
import '@bbva-web-components/bbva-form-field';
import '@bbva-web-components/bbva-form-password';
import '@bbva-web-components/bbva-form-radio-button';
import '@bbva-web-components/bbva-form-radio-group';
import '@bbva-web-components/bbva-form-search';
import '@bbva-web-components/bbva-header-main';
import '@cells-components/cells-template-paper-drawer-panel';
import { CellsPage } from '@cells/cells-page';
import { css, html } from 'lit-element';
import '../../elements/services/quotation-dm.js';

/* eslint-disable new-cap */
class VehiclePage extends BbvaCoreIntlMixin(CellsPage) {
  static get is() {
    return 'vehicle-page';
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
          <bbva-header-main
            text="BBVA3">
          </bbva-header-main>
        </div>

        <div slot="app__main" class="container">
        <div class="flex-row">
          <div class="w-margin">
          </div>
          <div slot="app__main" class="container-l">
          <div class='form-l'>
            <span>${this.t('vehicle-page.title.item1')}</span>
            <h1>${this.t('vehicle-page.title')}</h1>
            <bbva-form-field
              id="vehicleRegistration"
              class="input-view w-input"
              label=${this.t('vehicle-page.vehicleRegistration')}
              required="">
            </bbva-form-field>

            
            <div class="case">
              <bbva-form-search label="${this.t('vehicle-page.branch')}" required=""></bbva-form-search>
            </div>
            
            <div class="case">
              <bbva-form-search label="${this.t('vehicle-page.model')}" required=""></bbva-form-search>
            </div>

            <bbva-form-select label-out="Default" label="Label in">
              <bbva-form-option value="option1">Option 1</bbva-form-option>
              <bbva-form-option value="option2">Option 2</bbva-form-option>
              <bbva-form-option value="option3">Option 3</bbva-form-option>
            </bbva-form-select>

            <script type="module">
              const { bbvaDividerStyles } = window.DemoHelpers;
            </script>
            <style id="demoCaseStyles"></style>
            <bbva-form-radio-group name="choice" selected="1">
              <bbva-form-radio-button value="item1" divider="full" info-message="Informational message!">
                Item 1
              </bbva-form-radio-button>
              <bbva-form-radio-button value="item2" divider="full">Item 2</bbva-form-radio-button>
              <bbva-form-radio-button value="item3" divider="full">Item 3</bbva-form-radio-button>
            </bbva-form-radio-group>


            <div class="case">
              <p>
                Pay within a period of
                <span class="result"> <span id="quantity"></span> <span id="text"></span> </span>
              </p>
              <bbva-form-range id="selector" show-labels="" min="12" max="60" step="12" value="12"></bbva-form-range>
            </div>
            <script type="module">
              const selector = document.querySelector('#selector');
              const quantitySpan = document.querySelector('#quantity');
              const textSpan = document.querySelector('#text');
              const text = 'months';
              const singleText = 'month';

              function update(value, nodeValue, nodeText, text, singleText) {
                nodeValue.innerText = value;
                nodeText.innerText = Number(value) === 1 && singleText ? singleText : text;
              }

              selector.addEventListener('input', ev => {
                update(ev.target.value, quantitySpan, textSpan, text, singleText);
              });

              update(selector.value, quantitySpan, textSpan, text, singleText);

              document.addEventListener('input', ev => {
                document.dispatchEvent(
                  new CustomEvent('demo-input', {
                    bubbles: true,
                    composed: true,
                    detail: ev.target.value,
                  }),
                );
              });

              document.addEventListener('change', ev => {
                document.dispatchEvent(
                  new CustomEvent('demo-change', {
                    bubbles: true,
                    composed: true,
                    detail: ev.target.value,
                  }),
                );
              });
            </script>



            <bbva-button-default
              @click=${this.back}>
                ${this.t('vehicle-page.button')}
            </bbva-button-default>
          </div>
          </div>
          <div slot="app__main" class="container-r">
            <div class='form-r'>
              <img class="input-view" height="250px" src="resources/images/img-seguro-vehicular.png">
              <h2>${this.t('vehicle-page.why')}</h2>
              <span class="input-view">
              <img width="20px" class="pr" height="20px" src="resources/images/img-seguro-umbrella.png">
              ${this.t('vehicle-page.whyItem1')} <b>${this.t('vehicle-page.whyItem1.bold')}</b></span>
              <span class="input-view">
              <img width="20px" height="20px" class="pr" src="resources/images/img-seguro-umbrella.png">
              ${this.t('vehicle-page.whyItem2')} <b>${this.t('vehicle-page.whyItem2.bold')}</b></span>
              <span class="input-view">
              <img width="20px" height="20px" class="pr" src="resources/images/img-seguro-umbrella.png">
              <b>${this.t('vehicle-page.whyItem3.bold')} </b>${this.t('vehicle-page.whyItem3')}</span>
              <span class="input-view">
              <img width="20px" height="20px" class="pr" src="resources/images/img-seguro-umbrella.png">
              <b>${this.t('vehicle-page.whyItem4.bold')} </b>${this.t('vehicle-page.whyItem4')}</span>
              <span class="input-view">
              <img width="20px" height="20px" class="pr" src="resources/images/img-seguro-umbrella.png">
              <b>${this.t('vehicle-page.whyItem5.bold')}</b> ${this.t('vehicle-page.whyItem5')}</span>
            </div>
          </div>
          <div class="w-margin">
            <span></span>
          </div>
        </div>
        </div>
     <quotation-dm></quotation-dm>
     </cells-template-paper-drawer-panel>`;
  }

  back() {
    this.navigate('quotation');
  }

  searchByVehicleRegistration() {
    return this.shadowRoot.querySelector('quotation-dm').searchByVehicleRegistration();
  }

  initialQuotation(data) {
    this.shadowRoot.querySelector('quotation-dm').initialQuotation(data);
  }

  onPageEnter() {
    console.log('--->', this.params);
    this.subscribe('ch-quotation-param', person => console.log(person));
  }

  onPageLeave() {
    // Cada vez que salgamos de la pagina
  }

  static get styles() {
    return css`
      bbva-header-main {
        --bbva-header-main-bg-color: #002171;
      }

      cells-template-paper-drawer-panel {
        background-color: #5472d3;
      }

      .container-l {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width:30%;
      }

      .container-r {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width:30%;
      }

      .form-l {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width:100%;
      }

      .form-r {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 20px;
        width:100%;
      }

      .input-view {
        padding: 10px 0px;
      }

      .flex-row {
        width: 100%;
        margin-top: 20px;
        display: inline-flex;
      }

      .w-margin {
        width: 20%;
      }

      .pr {
        padding-right: 10px;
      }

      .w-input {
        width: 80%;
      }

      .container > * {
        margin-top: 10px;
      }
    `;
  }
}

window.customElements.define(VehiclePage.is, VehiclePage);