(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktjs_01'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktjs_01'.");
    }root.ktjs_01 = factory(typeof ktjs_01 === 'undefined' ? {} : ktjs_01, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main(args) {
    println('Hello JavaScript!');
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('ktjs_01', _);
  return _;
}));

//# sourceMappingURL=ktjs_01.js.map
