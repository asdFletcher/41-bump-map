import util from 'util';

let initialLocation = {
  timestamp: new Date().getTime(),
  mocked: false,
  coords: 
   { heading: 0,
     longitude: -122.3521753,
     speed: 0,
     altitude: 14.300000190734863,
     latitude: 47.6182405,
     accuracy: 17.371999740600586 }
}

let initialState = {
  currentId: 1,
  data: [
    {
      id: 1,
      time: new Date().getTime(),
      accelerometerData: {x: 0, y: 0, z: 0},
      locationData: initialLocation,
    },
  ],
  lastAccel: {
    id: 1,
    time: new Date().getTime(),
    accelerometerData: {x: 0, y: 0, z: 0}
  },
  lastLocation: initialLocation,
  networkInfo: { type: 'wifi', effectiveType: 'unknown' },
  charging: false,
};

export default (state = initialState, action) => {
  let {type, payload} = action;
  switch(type){
    case "SAVE_LOCAL_ACCEL":
      let newId = state.currentId + 1;

      const newEntry = {
        id: newId,
        time: new Date().getTime(),
        accelerometerData: payload,
        locationData: state.lastLocation,
      }

      const newState = {
        ...state,
        currentId: newId,
        data: [...state.data, newEntry],
        lastAccel: newEntry,
      };
      return newState;

    case "SAVE_LOCAL_LOCATION":
      const updateLocation = {
        ...state,
        lastLocation: payload,
      };
      return updateLocation;
    
    case "WIFI":
      console.log(`in the wifi: payload ${payload}`);
      return { ...state, connectionInfo: payload}

    case "CHARGING":
      console.log(`in the charging`);
      return { ...state, charging: payload}

    default:
      return state;
  }
};