import { css } from 'lit-element';

export default css`

bbva-form-field {
  --_field-bg-color: #FFF;
}

bbva-form-select {
  --_select-bg-color: #FFF;
  width: 96%;
  padding-bottom: 8px;
}

bbva-form-date {
  --_field-bg-color: #FFF;
  width: 96%;
  padding-bottom: 8px;
}

bbva-form-option {
  font-size: 12px;
  border-bottom: 1px solid #ccc;
}

bbva-form-search {
  --_field-bg-color: #FFF;
}

bbva-header-main {
  --bbva-header-main-bg-color: #002171;
}

.mainContainer {
  padding-top: 120px !important;
}

cells-template-paper-drawer-panel {
  background-color: #5472d3;
}

.bg-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 20px 50px;
  background-color: #F4F4F4 !important;
}

.in-line {
  display: inline !important;
}

.in-block {
  display: block !important;
  text-align: center;
}

.in-flex {
        display: flex !important;
}

.in-line-flex {
  display: inline-flex;
}

bbva-form-radio-button {
    padding: 0px 40px;
}

bbva-form-search {
  width: 96%;
  padding-bottom: 8px;
}

.container-l {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 48%;
}

.container-r {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 48%;
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
  align-items: flex-end;
  padding-left: 20px;
  width: 100%;
}

.input-view {
  padding: 8px 0px;
  font-size: 14px;
}

.input-view-top {
  padding: 5px 0px;
}

.flex-row {
  width: 100%;
  margin-top: 0px;
  display: inline-flex;
}

.flex-col {
  width: 50%;
}
.w-margin {
  width: 50px;
}

.top-0 {
  margin-top: 0px !important;
}

.pr {
  padding-right: 10px;
}

.w-input {
  width: 96%;
}

.container > * {
  margin-top: 10px;
}

.insurance-title {
  font-size: 20px !important;
  font-weight: bold;
}

.insurance-subtitle {
  font-size: 20px !important;
}

.insurance-blue{
  color: #1973B8 !important;
  font-size: 14px !important;
}

.submenu {
  margin-top: 10px;
}

.insurance-card {
  width:27% !important;
  background: #fff !important;
  padding: 20px 30px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.insurance-separator {
  padding: 10px 0px 0px 0px;
  font-size: 12px !important;
}

.insurance-info {
  padding: 0px 0px 10px;
  font-size: 12px;
}

.insurance-separator-ul {
  padding: 5px 10px;
  margin-top: 0px;
}

.insurance-separator-footer {
  padding: 0px 0px 20px 0px;
}

.padding-20 {
  padding: 20px;
}

.padding-separator {
  padding-top: 10px;
  padding-bottom: 10px;
}

.line-hr {
  width: 100%;
}

.margin-bottom-30 {
  margin-bottom: 30px;
}

.margin-top-30 {
  margin-top: 30px;
}

.width-100 {
  width: 100%;
}

.w-hr-100 {
  width: 96%;
}

.col-select {
  margin-top: 8px;
  padding-right: 10px;
}

span[class=content]{
  background-color: white !important;
}

.padding-r {
  padding-right: 50px;
}

.padding-l {
  padding-left: 50px;
}

.semibold {
  font-weight: 500;
}

.subtitle{
  font-size: 16px !important;
}

.pb-10 {
  padding-bottom: 10px;
}

.pb-20 {
  padding-bottom: 20px;
}

.help-modal {
  left: 200px !important;
  width: 60% !important;
  top: 100px;
}

.align-left {
  text-align: left;
}

.step {
  font-style: italic;
  color: #736F86;
  font-size: 12px;
}

.font-12 {
  font-size: 12px !important;
}

bbva-form-radio-button  {
  font-size: 12px;
}

bbva-form-checkbox {
  --bbva-form-checkbox-height: 20px;
  --bbva-form-checkbox-width: 20px;
  font-size: 12px;
}

.radio {
  width: 1rem !important;
  height: 1rem !important;
}

bbva-form-radio-button {
  --gridSpacerVariant: 5;
}

.div-info {
  background-color: #D4EDFC !important;
  padding: 20px;
  width: 90%;
  font-size: 12px;
}

.div-warning {
  background-color: #FEF5DC !important;
  padding: 20px;
  width: 90%;
  font-size: 12px;
}

.pl-20 {
  padding-left: 20px;
}

.pr-20 {
  padding-right: 20px;
}

.interline {
  line-height: 1.6;
}

.hr-gray {
  border: .5px solid #ccc;
}

.bottomright {
     position: fixed;
     bottom: 20px;
     right: 30px;
}

.div-tip {
     background-color: #fff;
     color: #1973B8;
     box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
     padding: 20px;
     margin: 5px;
}

.panel-tip {
  position: fixed;
  bottom: 50px;
  right: 60px;
  background: #fff;
  height: 700px;
  width: 450px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
  z-index: 1;
  text-align: left;
}

.header-tip {
  background: #072146;
  color: #fff !important;
}

.header-tip-r {
  text-align: right;
}

.header-tip-c {
  width: 90%;
  text-align: center;
}

.header-container {
  background-color: yellow !important;
}
`;