window.OTP_config = {
  initLatLng: [38.880148, -77.105933],

  osmMapKey: 'conveyal.ikck6888', // temporary -- do not use in production, provide your own
  aerialMapKey: 'conveyal.map-a3mk3jug', // unset

  otpApi: 'http://192.168.59.103:8080/otp/routers/',
  esriApi: 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/',

  reverseGeocode: true,

  //Here should be all languages that we have translations for
  //Order doesn't matter
  availible_languages: {"de":true, "fr":true, "it":true, "sl":true, "en":true, "ca_ES":true},

  cookieName: "wanted_language",

  langQS: "setLng"
}
