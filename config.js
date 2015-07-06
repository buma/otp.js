window.OTP_config = {

  initLatLng: [42.703632059618045, -73.7948226928711],

  osmMapKey: 'conveyal.ikck6888', // temporary -- do not use in production, provide your own
  aerialMapKey: 'conveyal.map-a3mk3jug', // unset

  otpApi: 'http://otp-test.nysdot.conveyal.com/otp/routers/',
  esriApi: 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/',

  reverseGeocode: true,

  //Here should be all languages that we have translations for
  //Order doesn't matter
  availible_languages: {"de":true, "fr":true, "it":true, "sl":true, "en":true},

  cookieName: "wanted_language",

  langQS: "setLng"
};
