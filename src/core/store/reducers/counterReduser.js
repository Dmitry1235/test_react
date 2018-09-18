export default (state = {counter: 0, loading: true, error: ""}, action) => {
  switch (action.type) {
    case 'ADD_COUNTER':
      return {
        ...state,
        counter: state.counter + 1
      };
    case 'DEC_COUNTER':
      return {
        ...state,
        counter: state.counter - 1
      };
    case 'DEL_COUNTER':
      return {
        ...state,
        counter: state.counter / 2
      };
    case 'SQR_COUNTER':
      return {
        ...state,
        counter: Math.pow(state.counter, 2)
      };
    case 'SUCCESS_LOADING':
      return {
        ...state,
        loading: false,
        counter: action.payload,
        error: ""
      };
    case 'ERROR':
      console.log("error");
      return {
        ...state,
        loading: false,
        counter: 0,
        error: action.payload
      };
    case 'UPDATE_LOADING':
      return {
        ...state,
        loading: true,
        error: ""
      };
    default:
      return state
  }
}
