angular-json-date-filter
========================

This will convert JSON dates to javascript Dates i.e. /Date(-795988800000-0400)/ turns into 10/11/1944

Simply include this file in your project and then use in your templates like so...

    {{ mydata.somedate | jsonDate }}
