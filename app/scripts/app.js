(function() {
  'use strict';

  window.AppConfig.appId = getURLParameter('appId'); //too used in postmessages
  window.AppConfig.iframeId = getURLParameter('iframeId'); //used in postmessages
  let hostASO = getURLParameter('hostASO'); //use temporal;
  if(hostASO) window.AppConfig.config.aso.host = hostASO;
  window.CellsPolymer.start({
    routes: {
      'dashboard': '/',
      'list-insurance': '/list-insurance',
      'vehicle': '/vehicle',
      'quotation': '/quotation',
      'plans': '/plans',
      'confirm': '/confirm',
      'insurance': '/insurance',
      'movement-detail': '/movement/:id/:label',
      'help': '/help',
      'history': '/history'
    }
  });
}());
