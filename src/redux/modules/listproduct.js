/* eslint-disable */
const LOAD = 'inspirasi-kuliner-web/listproduct/LOAD';
const LOAD_SUCCESS = 'inspirasi-kuliner-web/listproduct/LOAD_SUCCESS';
const LOAD_FAIL = 'inspirasi-kuliner-web/listproduct/LOAD_FAIL';
const LOAD_MORE_SUCCESS = 'inspirasi-kuliner-web/listproduct/LOAD_MORE_UCCESS';

const initialState = {
  loaded: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
        nomoreold: false
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        response: action.result,
        nomoreold: false
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
        nomoreold: false
      };
    case LOAD_MORE_SUCCESS:
      let nomoreold;
      const response = state.response;
      if (action.result.results.length > 0) {
        response.code = action.result.code;
        response.page = action.result.page;
        response.limit = action.result.limit;
        response.total = action.result.total;
        for (let i = 0; i < action.result.results.length; i++) {
          response.results.push(action.result.results[i]);
        }
        nomoreold = false;
      } else {
        nomoreold = true;
      }
      return {
        ...state,
        loading: false,
        loaded: true,
        response,
        nomoreold
      };
    default:
      return state;
  }
}

export function isListProductLoaded(globalState) {
  return globalState.listproduct && globalState.listproduct.loaded;
}

export function loadListProduct() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get('/newsfeed')
  };
}

export function loadMoreListProduct(page) {
  return {
    types: [LOAD, LOAD_MORE_SUCCESS, LOAD_FAIL],
    promise: client => client.get(`/newsfeed?page=${page}`)
  };
}
