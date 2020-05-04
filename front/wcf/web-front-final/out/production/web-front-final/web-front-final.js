if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'web-front-final'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'web-front-final'.");
}this['web-front-final'] = function (_, Kotlin) {
  'use strict';
  function onclick($receiver, method) {
    $receiver.addEventListener('click', method);
  }
  function get_element($receiver) {
    return document.getElementById($receiver);
  }
  function onclick_0($receiver, method) {
    onclick(get_element($receiver), method);
  }
  function redirect(url) {
    window.location.href = url;
  }
  function main() {
  }
  _.onclick_dijw22$ = onclick;
  _.get_element_pdl1vz$ = get_element;
  _.onclick_79xod4$ = onclick_0;
  _.redirect_61zpoe$ = redirect;
  _.main = main;
  main();
  Kotlin.defineModule('web-front-final', _);
  return _;
}(typeof this['web-front-final'] === 'undefined' ? {} : this['web-front-final'], kotlin);
