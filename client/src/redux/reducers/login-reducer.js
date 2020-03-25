const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGOUT = 'LOGOUT';

let initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      }
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false
      }
    default:
      return state;
  }
};

export function loginSuccessActionCreator(data) {
  return {
    type: LOGIN_SUCCESS,
    payload: data
  };
}

export function logoutActionCreator() {
  return { type: LOGOUT };
}

export default LoginReducer;