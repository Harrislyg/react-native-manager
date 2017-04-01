import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from '../actions/types'

// Good practice to dfine initial state values
const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  // console.log(action)
  switch (action.type) {
    case EMAIL_CHANGED:
      // explicitly return a newly defined object to ensure that state is changed and not assigned to the same variable
      return { ...state, email: action.payload }
    case PASSWORD_CHANGED:
      return {...state, password: action.payload}
    case LOGIN_USER:
      // clear the existing error message when the application is still loading
      return {...state, loading: true, error: ''}
    case LOGIN_USER_SUCCESS:
      // save the user model on the state.auth.user piece of state
      return {
        ...state,
        user: action.payload,
        // **** REFACTORIZED CODE *****
        // This is to reset the input fields (remove the prefilled login form)
        ...INITIAL_STATE
        // error: '',
        // loading: false,
        // email: '',
        // password: ''
      }
    case LOGIN_USER_FAIL:
      return {...state, error: 'Authentication Failed.', password: '', loading: false}
    default:
      return state
  }
}
