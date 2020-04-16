if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'ktjs'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktjs'.");
}var ktjs = function (_, Kotlin) {
  'use strict';
  function main() {
    document.write('Hello, world!');
  }
  _.main = main;
  main();
  Kotlin.defineModule('ktjs', _);
  return _;
}(typeof ktjs === 'undefined' ? {} : ktjs, kotlin);
