// airport-data.js
// Store elevation, runway details and threshold coordinates.
// The API provides airport name, lat/lon – only technical data is overridden.

const AIRPORT_DATABASE = {
  FAWB: {
    elevation_ft: 4095,
    runways: [
      {
        designation: "11",
        thr_coordinates: "25°39'43.82\"S 028°12'58.48\"E",
        thr_elev_ft: 4038,
        tora: 1828,  toda: 1978,  asda: 1828,  lda: 1828,
        swy: null,   cwy: 150,
        slope: 0.9,  slope_sign: "U",
        surface: "ASPH"
      },
      {
        designation: "29",
        thr_coordinates: "25°39'13.68\"S 028°13'29.44\"E",
        thr_elev_ft: 4095,
        tora: 1828,  toda: 1978,  asda: 1828,  lda: 1828,
        swy: null,   cwy: 150,
        slope: 0.9,  slope_sign: "D",
        surface: "ASPH"
      },
      {
        designation: "06",
        thr_coordinates: "25°39'11.07\"S 028°12'46.04\"E",
        thr_elev_ft: 4070,
        tora: 1267,  toda: 1342,  asda: 1267,  lda: 1267,
        swy: null,   cwy: 75,
        slope: 0.1,  slope_sign: "U",
        surface: "ASPH"
      },
      {
        designation: "24",
        thr_coordinates: "25°39'13.80\"S 028°13'51.52\"E",
        thr_elev_ft: 4073,
        tora: 1267,  toda: 1342,  asda: 1267,  lda: 1267,
        swy: null,   cwy: 75,
        slope: 0.1,  slope_sign: "D",
        surface: "ASPH"
      }
    ]
  }
  // Add more airports with the same structure:
  // ICAO: { elevation_ft: ..., runways: [ ... ] }
};
