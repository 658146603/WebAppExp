if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'web-front-final'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'web-front-final'.");
}this['web-front-final'] = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main(args) {
    var root = document.getElementById('root');
    println('hello, world');
    var menu = document.getElementById('toolbar-menu');
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('web-front-final', _);
  return _;
}(typeof this['web-front-final'] === 'undefined' ? {} : this['web-front-final'], kotlin);
