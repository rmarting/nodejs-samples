var request = require("request")

function callMeBackAfterRequest(err, res, body) {
  if (err && res.statusCode != 200) {
    console.log(new Date(), 'Opps! Error on HTTP call(' + res.statusCode + '): ' + err )
  } else {
    console.log(new Date(), 'HTTP Response: ' + JSON.stringify(body))
  }
}

var googleHttp = 'http://www.google.es'
var openWeatherHttp = 'http://api.openweathermap.org/data/2.5/weather?q=Parla,Spain&APPID=15cb6d6a5ace533e18d6f62b34126e76&mode=json&lang=es'

console.log(new Date(), 'Calling HTTP')

// request('http://www.google.es', callMeBackAfterRequest)
request(openWeatherHttp, callMeBackAfterRequest)

// console.log(new Date(), 'Google called')

