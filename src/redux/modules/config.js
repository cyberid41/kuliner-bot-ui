/* eslint-disable */
const LOAD = 'kuliner-bot-ui/config/LOAD';
const LOAD_SUCCESS = 'kuliner-bot-ui/config/LOAD_SUCCESS';
const LOAD_FAIL = 'kuliner-bot-ui/config/LOAD_FAIL';
const config = process.env.APP_CONFIG;

const initialState = {
  loaded: false,
  config: {
    title: config.title,
    botName: config.botName,
    description: config.description,
  }
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
        error: null
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: typeof action.error === 'string' ? action.error : 'Error'
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.config && globalState.config.loaded;
}

export function load() {
  return {
    types: [LOAD_SUCCESS]
  };
}
