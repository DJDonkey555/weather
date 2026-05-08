// airport-data.js
// Store only elevation and runway details for each airport.
// Name, coordinates etc. are fetched from the API and remain unchanged.

const AIRPORT_DATABASE = {
  FAWB: {
    elevation_ft: 4095,
    runways: [
      {
        designation: "11",
        tora: 1828,  toda: 1978,  asda: 1828,  lda: 1828,
        swy: null,   cwy: 150,
        slope: 0.9,  slope_sign: "U",
        thr_elev_ft: 4038,
        surface: "ASPH"
      },
      {
        designation: "29",
        tora: 1828,  toda: 1978,  asda: 1828,  lda: 1828,
        swy: null,   cwy: 150,
        slope: 0.9,  slope_sign: "D",
        thr_elev_ft: 4095,
        surface: "ASPH"
      },
      {
        designation: "06",
        tora: 1267,  toda: 1342,  asda: 1267,  lda: 1267,
        swy: null,   cwy: 75,
        slope: 0.1,  slope_sign: "U",
        thr_elev_ft: 4070,
        surface: "ASPH"
      },
      {
        designation: "24",
        tora: 1267,  toda: 1342,  asda: 1267,  lda: 1267,
        swy: null,   cwy: 75,
        slope: 0.1,  slope_sign: "D",
        thr_elev_ft: 4073,
        surface: "ASPH"
      }
    ]
  }
  // Add more airports like:
  // FAOR: { elevation_ft: ..., runways: [...] }
};
