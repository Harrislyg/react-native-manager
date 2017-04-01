import React, { Component } from 'react'
// import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import firebase from 'firebase'
// redux-thunk is a middleware
import ReduxThunk from 'redux-thunk'
// LoginForm component is replaced by the Router component as we want the user to be able to naivigate to different screens
// import LoginForm from './components/LoginForm'
import Router from './Router'

class App extends Component {
  componentWillMount () {
    const config = {
      apiKey: 'AIzaSyDDLqNaUx_kMoX1UmR6AiH5hjfcZjHXI8M',
      authDomain: 'manager-18a03.firebaseapp.com',
      databaseURL: 'https://manager-18a03.firebaseio.com',
      storageBucket: 'manager-18a03.appspot.com',
      messagingSenderId: '248317233039'
    }

    firebase.initializeApp(config)
  }

  render () {
    // Second param is to instantiate an initial state (usually used for server side rendering)
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
