import * as firebase from 'firebase'

// let database
export const init = () => {
  let config = {
    apiKey: "AIzaSyCFd4W4tFNc5JLlD_W4u9P5nDfI0TVZh3Y",
    authDomain: "counter-5ef16.firebaseapp.com",
    databaseURL: "https://counter-5ef16.firebaseio.com",
    projectId: "counter-5ef16",
    storageBucket: "counter-5ef16.appspot.com",
    messagingSenderId: "468363367085"
  }
  firebase.initializeApp(config)
  // database = firebase.database()
}
