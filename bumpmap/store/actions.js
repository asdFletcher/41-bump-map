export const saveAcc = payload => {
  return {
    type: 'SAVE_LOCAL_ACCEL',
    payload,
  };
};

export const saveLoc = payload => {

  return {
    type: 'SAVE_LOCAL_LOCATION',
    payload,
  };
};

export const wifi = payload => {
  return {
    type: 'WIFI',
    payload,
  };
};

export const charging = payload => {
  return {
    type: 'CHARGING',
    payload,
  };
};