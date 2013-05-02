'use strict';

// .NET JSON Date decoder
// ---------------------
// This filter takes a .NET JSON encoded date and makes it readable...
// i.e.  /Date(-795988800000-0400)/ turns into 10/11/1944
// to use in your template just do.... {{ mydata.somedate | jsonDate }}
filters.filter('jsonDate', function() {
  return function(input) {

    var date = new Date(parseInt(input.substr(6)));
    return date.toLocaleDateString();
  }
});