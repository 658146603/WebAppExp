if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'web-front-final'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'web-front-final'.");
}this['web-front-final'] = function (_, Kotlin) {
  'use strict';
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var newsBanner;
  var picIndex;
  var newsPics;
  function main() {
  }
  Object.defineProperty(_, 'newsBanner', {
    get: function () {
      return newsBanner;
    }
  });
  Object.defineProperty(_, 'picIndex', {
    get: function () {
      return picIndex;
    },
    set: function (value) {
      picIndex = value;
    }
  });
  Object.defineProperty(_, 'newsPics', {
    get: function () {
      return newsPics;
    }
  });
  _.main = main;
  newsBanner = document.getElementById('news-banner');
  picIndex = 0;
  newsPics = arrayListOf(['image/banner/20191119025726.jpg', 'image/banner/20200206071934.jpg', 'image/banner/20200305094918.jpg', 'image/banner/20200330082141.jpg', 'image/banner/20200402082628.jpg', 'image/banner/20200408022457.jpg', 'image/banner/20200410102256.jpg', 'image/banner/20200415052132.jpg']);
  main();
  Kotlin.defineModule('web-front-final', _);
  return _;
}(typeof this['web-front-final'] === 'undefined' ? {} : this['web-front-final'], kotlin);
