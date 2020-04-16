if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'ktjs_02'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktjs_02'.");
}var ktjs_02 = function (_, Kotlin) {
  'use strict';
  function main(args) {
    var root = document.getElementById('root');
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('ktjs_02', _);
  return _;
}(typeof ktjs_02 === 'undefined' ? {} : ktjs_02, kotlin);
