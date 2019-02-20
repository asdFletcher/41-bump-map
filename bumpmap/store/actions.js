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