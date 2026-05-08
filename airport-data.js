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
        tora: 1828, toda: 1978, asda: 1828, lda: 1828,
        swy: null, cwy: 150,
        slope: 0.9, slope_sign: "U",
        surface: "ASPH"
      },
      {
        designation: "29",
        thr_coordinates: "25°39'13.68\"S 028°13'29.44\"E",
        thr_elev_ft: 4095,
        tora: 1828, toda: 1978, asda: 1828, lda: 1828,
        swy: null, cwy: 150,
        slope: 0.9, slope_sign: "D",
        surface: "ASPH"
      },
      {
        designation: "06",
        thr_coordinates: "25°39'11.07\"S 028°12'46.04\"E",
        thr_elev_ft: 4070,
        tora: 1267, toda: 1342, asda: 1267, lda: 1267,
        swy: null, cwy: 75,
        slope: 0.1, slope_sign: "U",
        surface: "ASPH"
      },
      {
        designation: "24",
        thr_coordinates: "25°39'13.80\"S 028°13'51.52\"E",
        thr_elev_ft: 4073,
        tora: 1267, toda: 1342, asda: 1267, lda: 1267,
        swy: null, cwy: 75,
        slope: 0.1, slope_sign: "D",
        surface: "ASPH"
      }
    ]
  },

  FAOR: {
    elevation_ft: 5558,
    runways: [
      {
        designation: "03L",
        thr_coordinates: "26°08'47.11\"S 028°14'03.62\"E",
        thr_elev_ft: 5558,
        tora: 4421, toda: 4691, asda: 4421, lda: 4421,
        swy: 0, cwy: 270,
        slope: 0.004, slope_sign: "D",
        surface: "ASPH"
      },
      {
        designation: "21R",
        thr_coordinates: "26°06'42.86\"S 028°14'42.09\"E",
        thr_elev_ft: 5505,
        tora: 4421, toda: 4521, asda: 4421, lda: 3971,
        swy: 0, cwy: 100,
        slope: 0.004, slope_sign: "U",
        surface: "ASPH"
      },
      {
        designation: "03R",
        thr_coordinates: "26°09'53.17\"S 028°14'53.22\"E",
        thr_elev_ft: 5510,
        tora: 3405, toda: 3465, asda: 3462, lda: 3405,
        swy: 57, cwy: 60,
        slope: 0.001, slope_sign: "D",
        surface: "ASPH"
      },
      {
        designation: "21L",
        thr_coordinates: "26°08'06.64\"S 028°15'26.20\"E",
        thr_elev_ft: 5494,
        tora: 3405, toda: 3465, asda: 3462, lda: 3405,
        swy: 57, cwy: 60,
        slope: 0.001, slope_sign: "U",
        surface: "ASPH"
      }
    ]
  },

  FALA: {
    elevation_ft: 4521,
    runways: [
      {
        designation: "07",
        thr_coordinates: "25°56'53.84\"S 027°54'55.55\"E",
        thr_elev_ft: 4521,
        tora: 2996, toda: 4496, asda: 2996, lda: 2996,
        swy: null, cwy: 1500,
        slope: 0.013, slope_sign: "D",
        surface: "ASPH"
      },
      {
        designation: "25",
        thr_coordinates: "25°55'49.55\"S 027°56'12.98\"E",
        thr_elev_ft: 4394,
        tora: 2996, toda: 4547, asda: 2996, lda: 2925,
        swy: null, cwy: 1500,
        slope: 0.013, slope_sign: "U",
        surface: "ASPH"
      }
    ]
  },

  FAGG: {
    elevation_ft: 648,
    runways: [
      {
        designation: "11",
        thr_coordinates: "34°00'21.30\"S 022°21'59.01\"E",
        thr_elev_ft: 622,
        tora: 2000, toda: 2300, asda: 2500, lda: 2000,
        swy: 300, cwy: 60,
        slope: 0.004, slope_sign: "U",
        surface: "ASPH"
      },
      {
        designation: "29",
        thr_coordinates: "34°00'18.83\"S 022°23'16.90\"E",
        thr_elev_ft: 648,
        tora: 2120, toda: 2060, asda: 2120, lda: 2000,
        swy: 380, cwy: 0,
        slope: 0.004, slope_sign: "D",
        surface: "ASPH"
      }
    ]
  },

  FACT: {
    elevation_ft: 151,
    runways: [
      {
        designation: "01",
        thr_coordinates: "33°57'35.429\"S 018°36'00.181\"E",
        thr_elev_ft: 144,
        tora: 3201, toda: 4041, asda: 3201, lda: 3201,
        swy: null, cwy: 840,
        slope: 0.003, slope_sign: "U",
        surface: "ASPH"
      },
      {
        designation: "19",
        thr_coordinates: "33°59'15.864\"S 018°36'32.013\"E",
        thr_elev_ft: 147,
        tora: 3201, toda: 3441, asda: 3201, lda: 3201,
        swy: null, cwy: 240,
        slope: 0.003, slope_sign: "D",
        surface: "ASPH"
      },
      {
        designation: "16",
        thr_coordinates: "33°58'20.144\"S 018°36'37.564\"E",
        thr_elev_ft: 143,
        tora: 1701, toda: 1701, asda: 1701, lda: 1701,
        swy: null, cwy: null,
        slope: 0.0014, slope_sign: "U",
        surface: "ASPH"
      },
      {
        designation: "34",
        thr_coordinates: "33°57'40.957\"S 018°35'50.890\"E",
        thr_elev_ft: 151,
        tora: 1701, toda: 1701, asda: 1701, lda: 1701,
        swy: null, cwy: null,
        slope: 0.0014, slope_sign: "D",
        surface: "ASPH"
      }
    ]
  }

  // Add more airports with the same structure:
  // ICAO: { elevation_ft: ..., runways: [ ... ] }
};
