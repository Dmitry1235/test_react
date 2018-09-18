export const addCounter = () => dispatch => {
  console.log('123123123');

  dispatch({
    type: 'ADD_COUNTER'
  })
};

export const decCounter = () => dispatch => {
  console.log('123123123');
  dispatch({
    type: 'DEC_COUNTER'
  })
};

export const delCounter = () => dispatch => {
  console.log('123123123');
  dispatch({
    type: 'DEL_COUNTER'
  })
};

export const sqrCounter = () => dispatch => {
  console.log('123123123');
  dispatch({
    type: 'SQR_COUNTER'
  })
};

export const fakeRequest = () => dispatch => {
  dispatch({
    type: 'UPDATE_LOADING'
  });

  requestForNumber()
    .then(number => {
      dispatch({
        type: 'SUCCESS_LOADING',
        payload: number
      })
    }).catch((error) =>
      dispatch({
        type: 'ERROR',
        payload: error
      })
    );
};


const funRandom = () => Math.round(Math.random() * 100);

const requestForNumber = () => {
  return new Promise((resolve, reject) => {
    if (funRandom() < 50) {
      setTimeout(() => resolve(funRandom()), 1000);
    } else {
      setTimeout(() => reject("Not Found!"), 1000);
    }
  })
};
