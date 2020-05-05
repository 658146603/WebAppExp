if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'web-front-final'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'web-front-final'.");
}this['web-front-final'] = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function E(id) {
    this.element = document.getElementById(id);
  }
  E.prototype.onclick_o14v8n$ = function (method) {
    onclick(this.element, method);
  };
  E.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'E',
    interfaces: []
  };
  function onclick($receiver, method) {
    $receiver.addEventListener('click', method);
  }
  function redirect(url) {
    window.location.href = url;
  }
  function main() {
  }
  _.E = E;
  _.onclick_dijw22$ = onclick;
  _.redirect_61zpoe$ = redirect;
  _.main = main;
  main();
  Kotlin.defineModule('web-front-final', _);
  return _;
}(typeof this['web-front-final'] === 'undefined' ? {} : this['web-front-final'], kotlin);
