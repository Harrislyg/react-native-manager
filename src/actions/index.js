import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from './types'

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

// The function params are structured as an object, which means that I expect an object with properties of email and password on it
export const loginUser = ({email, password}) => {
  return (dispatch) => {
    dispatch({type: LOGIN_USER})

    firebase.auth().signInWithEmailAndPassword(email, password)
      // We only create the 'action' when the user has been fully loaded from firebase
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        // Use console.log to debug any errors other those than from a wrong password
        console.log(error)

        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch))
      })
  }
}

const loginUserFail = (dispatch) => {
  dispatch({type: LOGIN_USER_FAIL})
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })

  // Imported an Actions object. employeeList is the key property of the EmployeeList compoenent in Router.js
  Actions.main()
}
