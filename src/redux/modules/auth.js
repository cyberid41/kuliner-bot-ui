/* eslint-disable */
// import app, { restApp, socket } from 'app';
// import { SubmissionError } from 'redux-form';
// import cookie from 'js-cookie';
import jwtDecode from 'jwt-decode';

const LOAD = 'inspirasi-kuliner/auth/LOAD';
const LOAD_SUCCESS = 'inspirasi-kuliner/auth/LOAD_SUCCESS';
const LOAD_FAIL = 'inspirasi-kuliner/auth/LOAD_FAIL';
const LOGIN = 'inspirasi-kuliner/auth/LOGIN';
const LOGIN_SUCCESS = 'inspirasi-kuliner/auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'inspirasi-kuliner/auth/LOGIN_FAIL';
const REGISTER = 'inspirasi-kuliner/auth/REGISTER';
const REGISTER_SUCCESS = 'inspirasi-kuliner/auth/REGISTER_SUCCESS';
const REGISTER_FAIL = 'inspirasi-kuliner/auth/REGISTER_FAIL';
const LOGOUT = 'inspirasi-kuliner/auth/LOGOUT';
const LOGOUT_SUCCESS = 'inspirasi-kuliner/auth/LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'inspirasi-kuliner/auth/LOGOUT_FAIL';
const UPDATE_PROFILE_PICTURE = 'inspirasi-kuliner/auth/UPDATE_PROFILE_PICTURE';

// const userService = restApp.service('users');

const initialState = {
  loaded: false
};

// const catchValidation = error => {
//   if (error.message) {
//     if (error.message === 'Validation failed' && error.data) {
//       throw new SubmissionError(error.data);
//     }
//     throw new SubmissionError({ _error: error.message });
//   }
//   return Promise.reject(error);
// };

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
        // token: action.result.token,
        user: action.result.results
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case LOGIN:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      const token = action.result.results.token;
      const user = jwtDecode(token);
      console.log(user);
      return {
        ...state,
        loggingIn: false,
        token: action.result.results.token,
        user
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        token: null,
        loginError: action.error
      };
    case REGISTER:
      return {
        ...state,
        registeringIn: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registeringIn: false
      };
    case REGISTER_FAIL:
      return {
        ...state,
        registeringIn: false,
        loginError: action.error
      };
    case LOGOUT:
      return {
        ...state,
        loggingOut: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        user: null,
        token: null
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        loggingOut: false,
        logoutError: action.error
      };
    case UPDATE_PROFILE_PICTURE:
      const newProfilePicture = state.user;
      newProfilePicture.profilePicture = action.profilePicture;
      return {
        ...state,
        user: newProfilePicture
      };
    default:
      return state;
  }
}

// function shareFeathersAuth(response) {
//   const { token, user } = response;
//   const storage = app.get('storage');
//   if (token) {
//     storage.setItem('feathers-jwt', token);
//   } else {
//     storage.removeItem('feathers-jwt');
//   }

//   app.set('token', token); // -> set manually the JWT
//   app.set('user', user); // -> set manually the user
//   restApp.set('token', token);
//   restApp.set('user', user);

//   console.log(app.get('token')); // -> the JWT
//   console.log(app.get('user')); // -> the user

//   return response;
// }

// function setCookie(result) {
//   const options = result.expires ? { expires: result.expires / (60 * 60 * 24 * 1000) } : undefined;
//   cookie.set('feathers-session', app.get('token'), options);
//   return result;
// }

export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get('/auth/info')
  };
}

// export function register(data) {
//   return {
//     types: [REGISTER, REGISTER_SUCCESS, REGISTER_FAIL],
//     promise: () => userService.create(data).catch(catchValidation)
//   };
// }

// export function login(data) {
//   const socketId = socket.io.engine.id;
//   return {
//     types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
//     promise: () => restApp.authenticate({
//       type: 'local',
//       email: data.email,
//       password: data.password,
//       socketId
//     })
//       .then(shareFeathersAuth)
//       .then(setCookie)
//       .catch(catchValidation)
//   };
// }

// export function oauthLogin(provider, data) {
//   const socketId = socket.io.engine.id;
//   return {
//     types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
//     promise: () => restApp.service(`/auth/${provider}`)
//       .create({ ...data, socketId })
//       .then(shareFeathersAuth)
//     .then(setCookie)
//     .catch(catchValidation)
// };
// }

export function logout() {
  return {
    types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
    // promise: () => (socket.connected ? app : restApp).logout().then(() => {
    //   cookie.set('feathers-session', '', { expires: -1 });
    // })
    promise: (client) => client.get('/auth/logout')
  };
}

export function loginFb(accessToken) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: (client) => client.get(`/auth/token?provider=facebook&access_token=${accessToken}`)
  };
}

export function loginGoogle(accessToken) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: (client) => client.get(`/auth/token?provider=google&access_token=${accessToken}`)
  };
}

export function loginFail(error) {
  return {
    type: LOGIN_FAIL,
    error
  };
}

export function updateProfilePicture(profilePicture) {
  return {
    type: UPDATE_PROFILE_PICTURE,
    profilePicture
  };
}
