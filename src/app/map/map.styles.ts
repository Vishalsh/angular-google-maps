export const COLORS = {
  WHITE: '#ffffff',
  LIGHTEST_GREY: '#fefefe',
  LIGHTER_GREY: '#f5f5f5',
  LIGHT_GREY: '#f2f2f2',
  MEDIUM_GREY: '#e9e9e9',
  DARK_GREY: '#dedede',
  DARKEST_GREY: '#333333',
  BLUE_GREY: '#626f79'
};

export const mapStyles = [
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: COLORS.MEDIUM_GREY
      },
      {
        lightness: 17
      }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      {
        color: COLORS.LIGHTER_GREY
      },
      {
        lightness: 20
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: COLORS.WHITE
      },
      {
        lightness: 17
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: COLORS.WHITE
      },
      {
        lightness: 29
      },
      {
        'weight': 0.2
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: COLORS.WHITE
      },
      {
        lightness: 18
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      {
        color: COLORS.WHITE
      },
      {
        lightness: 16
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: COLORS.LIGHTER_GREY
      },
      {
        lightness: 21
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: COLORS.DARK_GREY
      },
      {
        lightness: 21
      }
    ]
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        'visibility': 'on'
      },
      {
        color: COLORS.WHITE
      },
      {
        lightness: 16
      }
    ]
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        'saturation': 36
      },
      {
        color: COLORS.DARKEST_GREY
      },
      {
        lightness: 40
      }
    ]
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: COLORS.LIGHT_GREY
      },
      {
        lightness: 19
      }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: COLORS.LIGHTEST_GREY
      },
      {
        lightness: 20
      }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: COLORS.LIGHTEST_GREY
      },
      {
        lightness: 17
      },
      {
        'weight': 1.2
      }
    ]
  }
];
